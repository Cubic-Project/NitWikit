import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useRef } from "react";
import styles from "./index.module.scss";

interface Stat {
    label: string;
    value: string;
}

interface NavLink {
    title: string;
    description: string;
    to: string;
}

function StatsMetrics({ stats }: { stats: Stat[] }) {
    return (
        <div className={`${styles.heroMetrics} ${styles.fadeInUp} ${styles.delay4}`}>
            {stats.map((item) => (
                <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
}

function HeroHeader() {
    return (
        <>
            <h1 className={`${styles.fadeInUp} ${styles.delay1}`}>
                Cubic <span className="text-primary">Wiki</span>
            </h1>
            <p className={`${styles.fadeInUp} ${styles.delay2}`}>
                主要针对高版本 Java 版和基岩版服务器的开服指南。从零开始，手把手教你搭建和运营 Minecraft 服务器。
            </p>
        </>
    );
}

function HeroButtons() {
    return (
        <div className={`${styles.heroButtons} ${styles.fadeInUp} ${styles.delay3}`}>
            <Link className={styles.primaryButton} to="/intro">
                立即开始
            </Link>
            <Link className={styles.secondaryButton} to="/contribution">
                参与贡献
            </Link>
        </div>
    );
}

function QuickNavPanel({
    quickLinks,
    onLinkClick
}: {
    quickLinks: NavLink[];
    onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
}) {
    return (
        <aside className={`${styles.heroPanel} ${styles.fadeInUp} ${styles.delay3}`}>
            <div className={styles.panelHeader}>
                <span>快速导航</span>
            </div>
            <ul className={styles.linkList}>
                {quickLinks.map((item, index) => (
                    <li
                        key={item.title}
                        className={styles.linkItem}
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                        <a href={item.to} className={styles.linkItemAnchor} onClick={(e) => onLinkClick(e, item.to)}>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <span>→</span>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

function HeroCopy({ stats }: { stats: Stat[] }) {
    return (
        <div className={styles.heroCopy}>
            <HeroHeader />
            <HeroButtons />
            <StatsMetrics stats={stats} />
        </div>
    );
}

function HeroSection({
    stats,
    quickLinks,
    onLinkClick
}: {
    stats: Stat[];
    quickLinks: NavLink[];
    onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
}) {
    return (
        <section className={styles.hero}>
            <HeroCopy stats={stats} />
            <QuickNavPanel quickLinks={quickLinks} onLinkClick={onLinkClick} />
        </section>
    );
}

function usePageNavigation() {
    const pageRef = useRef<HTMLElement>(null);
    const history = useHistory();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
        e.preventDefault();
        const pageElement = pageRef.current;

        if (pageElement) {
            // 添加退出动画类
            pageElement.classList.add(styles.pageExit);

            // 延迟导航，让退出动画完成
            setTimeout(() => {
                history.push(to);
            }, 300);
        } else {
            // 如果找不到元素，直接导航
            history.push(to);
        }
    };

    return handleLinkClick;
}

function useHomeData() {
    // TODO: 引用真实数据
    const stats: Stat[] = [
        { label: "文档篇章", value: "1200+" },
        { label: "活跃贡献者", value: "50+" }
    ];

    const quickLinks: NavLink[] = [
        { title: "新手入门", description: "了解教程定位、阅读指引与基础要求", to: "/intro" },
        { title: "Java 版核心", description: "高版本 Java 版服务器开服指南", to: "/Java/intro" },
        { title: "基岩版核心", description: "基岩版服务器开服指南", to: "/Bedrock/intro" }
    ];

    return { stats, quickLinks };
}

/**
 * 首页主组件
 */
const Home: React.FC = () => {
    const {
        siteConfig: { customFields, tagline }
    } = useDocusaurusContext();
    const { description } = customFields as { description: string };

    const handleLinkClick = usePageNavigation();
    const { stats, quickLinks } = useHomeData();

    return (
        <Layout title={tagline} description={description}>
            <main>
                <div className={styles.page}>
                    <HeroSection stats={stats} quickLinks={quickLinks} onLinkClick={handleLinkClick} />
                </div>
            </main>
        </Layout>
    );
};

export default Home;
