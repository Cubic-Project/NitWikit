import React, { useEffect, useState } from "react";
import "./styles.css";

const CACHE_KEY = "contributors_cache";
const CACHE_DURATION = 2 * 60 * 60 * 1000; // 2小时

interface CacheData {
    data: Contributor[];
    timestamp: number;
}

interface Contributor {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
    additions?: number;
    deletions?: number;
    total?: number;
}

interface ContributorStats {
    author: {
        login: string;
    };
    weeks: Array<{
        a: number;
        d: number;
    }>;
}

interface ContributorCardItemProps {
    contributor: Contributor;
    rank?: number;
}

/**
 * 获取缓存数据
 */
function getCachedContributors(): Contributor[] | null {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return null;

        const { data, timestamp } = JSON.parse(cached) as CacheData;
        const isExpired = Date.now() - timestamp > CACHE_DURATION;

        return isExpired ? null : data;
    } catch {
        return null;
    }
}

/**
 * 保存缓存数据
 */
function setCachedContributors(data: Contributor[]): void {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
    } catch {
        console.warn("无法保存缓存数据");
    }
}

/**
 * 获取GitHub贡献者数据(带分页)
 * @param {string} repo 仓库名称，格式为 "用户名/仓库名"
 * @returns {Promise<Array>} 贡献者数据数组
 */
async function fetchContributors(repo: string): Promise<Contributor[]> {
    try {
        let allContributors: Contributor[] = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
            const response = await fetch(`https://api.github.com/repos/${repo}/contributors?per_page=100&page=${page}`);
            if (!response.ok) {
                throw new Error("获取贡献者数据失败");
            }

            const data = await response.json();
            if (!Array.isArray(data) || data.length === 0) {
                hasMore = false;
            } else {
                allContributors.push(...data);
                page++;
            }
        }

        console.log(`已获取 ${allContributors.length} 位贡献者数据`);
        return allContributors;
    } catch (error) {
        console.error("获取贡献者数据出错:", error);
        return [];
    }
}

/**
 * 判断用户是否为机器人账户
 * @param {string} username 用户名
 * @returns {boolean} 是否为机器人
 */
function isBot(username: string): boolean {
    const botPatterns = [
        /bot\b/i, // 匹配包含bot单词的用户名
        /\[bot\]/i, // 匹配[bot]
        /github-actions/i, // 匹配github-actions
        /imgbot/i // 匹配imgbot
    ];

    // 明确排除这些不应被视为机器人的用户名
    const notBots = ["robotics", "robot", "robotman", "robotboy"];
    if (notBots.some((name) => username.toLowerCase().includes(name))) {
        return false;
    }

    return botPatterns.some((pattern) => pattern.test(username));
}

/**
 * 格式化数字，对于大数使用k、M等单位
 * @param {number} num 要格式化的数字
 * @returns {string} 格式化后的字符串
 */
function formatNumber(num: number): string {
    return Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(num);
}

/**
 * 单个贡献者卡片组件
 */
export function ContributorCardItem({ contributor, rank }: ContributorCardItemProps): React.ReactElement {
    return (
        <div className="contributor-card">
            {rank && <div className="contributor-rank">{rank}</div>}
            <div className="contributor-avatar-wrapper">
                <img src={contributor.avatar_url} alt={`${contributor.login} 的头像`} className="contributor-avatar" />
            </div>
            <div className="contributor-info">
                <div className="contributor-name">
                    <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
                        {contributor.login}
                    </a>
                </div>
                <div className="contributor-total">贡献: {formatNumber(contributor.contributions)} 次</div>
            </div>
        </div>
    );
}

interface ContributorCardProps {
    repo?: string;
}

/**
 * 贡献者卡片列表组件
 */
export default function ContributorCard({ repo = "Cubic-Project/NitWikit" }: ContributorCardProps): React.ReactElement {
    const [contributors, setContributors] = useState<Contributor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // 获取所有贡献者数据并处理
    useEffect(() => {
        async function loadAllContributorData() {
            try {
                setLoading(true);

                const cachedData = getCachedContributors();
                if (cachedData) {
                    setContributors(cachedData);
                    setLoading(false);
                    return;
                }

                // 直接从GitHub API获取贡献者数据
                const contributorsData = await fetchContributors(repo);

                // 过滤掉机器人账户
                const filteredContributors = contributorsData.filter((contributor) => !isBot(contributor.login));

                // 排序
                const sorted = filteredContributors
                    .filter((c) => c.contributions > 0)
                    .sort((a, b) => b.contributions - a.contributions);

                setCachedContributors(sorted);
                setContributors(sorted);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "未知错误";
                console.error("加载贡献者数据出错:", err);
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        }

        loadAllContributorData();
    }, [repo]);

    if (loading) {
        return <div className="contributor-loading">正在加载贡献者数据，这可能需要一些时间...</div>;
    }

    if (error) {
        return <div className="contributor-error">获取贡献者数据出错: {error}</div>;
    }

    if (!contributors || contributors.length === 0) {
        return <div className="contributor-empty">在访问github时遇到问题，请稍后再试</div>;
    }

    return (
        <div className="contributor-container">
            {contributors.map((contributor, index) => (
                <ContributorCardItem key={contributor.id} contributor={contributor} rank={index + 1} />
            ))}
        </div>
    );
}
