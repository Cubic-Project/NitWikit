import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useHistory } from "@docusaurus/router";
import { usePluginData } from "@docusaurus/useGlobalData";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./styles.module.css";

interface RemoteGHConfig {
    "remote-repo": string;
    file: string;
    version: Record<string, string>;
}

interface RemoteGHData {
    repo: string;
    file: string;
    versions: Record<string, string>;
    versionList: string[];
}

interface RemoteGHViewerProps {
    config: RemoteGHConfig;
}

/**
 * 生成简单的配置标识符
 */
function getConfigKey(config: RemoteGHConfig): string {
    return `${config["remote-repo"]}:${config.file}`;
}

/**
 * 从 URL 获取版本参数
 */
function getVersionFromURL(search: string, paramKey: string): string | null {
    const params = new URLSearchParams(search);
    return params.get(paramKey);
}

/**
 * 更新 URL 中的版本参数
 */
function updateVersionInURL(search: string, paramKey: string, version: string): string {
    const params = new URLSearchParams(search);
    params.set(paramKey, version);
    return params.toString();
}

/**
 * 生成 URL 参数名
 */
function getUrlParamName(config: RemoteGHConfig): string {
    const key = getConfigKey(config);
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        const char = key.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return `v_${Math.abs(hash).toString(16).slice(0, 6)}`;
}

/**
 * RemoteGHViewer 内部组件
 */
function RemoteGHViewerInner({ config, data }: { config: RemoteGHConfig; data: RemoteGHData }): React.ReactElement {
    const location = useLocation();
    const history = useHistory();

    const urlParamName = useMemo(() => getUrlParamName(config), [config]);

    // 获取版本列表，默认选择最后一个（最高版本）
    const versionList = useMemo(() => data.versionList, [data.versionList]);
    const defaultVersion = versionList[versionList.length - 1];

    // 从 URL 获取初始版本
    const urlVersion = getVersionFromURL(location.search, urlParamName);
    const initialVersion = urlVersion && versionList.includes(urlVersion) ? urlVersion : defaultVersion;

    const [selectedVersion, setSelectedVersion] = useState<string>(initialVersion);

    // 处理版本切换
    const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newVersion = event.target.value;
        setSelectedVersion(newVersion);

        // 更新 URL 参数
        const newSearch = updateVersionInURL(location.search, urlParamName, newVersion);
        history.replace({
            ...location,
            search: `?${newSearch}`
        });
    };

    // 同步 URL 参数变化
    useEffect(() => {
        const urlVersion = getVersionFromURL(location.search, urlParamName);
        if (urlVersion && versionList.includes(urlVersion) && urlVersion !== selectedVersion) {
            setSelectedVersion(urlVersion);
        }
    }, [location.search, urlParamName, versionList, selectedVersion]);

    const content = data.versions[selectedVersion] || "<p>未找到该版本的内容</p>";

    // 根据选中的版本获取对应的 commit hash
    const currentCommit = config.version[selectedVersion];
    const fileUrl = `https://github.com/${data.repo}/blob/${currentCommit}/${data.file}`;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoLink}
                    title="在 GitHub 上查看"
                >
                    <span className={styles.repoName}>{data.repo}</span>
                    <span className={styles.filePath}>/{data.file}</span>
                </a>
                <div className={styles.versionSelector}>
                    <label htmlFor={`version-select-${urlParamName}`} className={styles.versionLabel}>
                        版本:
                    </label>
                    <select
                        id={`version-select-${urlParamName}`}
                        value={selectedVersion}
                        onChange={handleVersionChange}
                        className={styles.versionSelect}
                    >
                        {versionList.map((version) => (
                            <option key={version} value={version}>
                                {version}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div
                className={`${styles.content} theme-doc-markdown markdown`}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}

/**
 * RemoteGHViewer 组件
 * 显示从 GitHub 拉取的多版本 Markdown 内容
 */
export default function RemoteGHViewer({ config }: RemoteGHViewerProps): React.ReactElement {
    // 从插件全局数据获取内容
    const allData = usePluginData("remote-gh-viewer-plugin") as Record<string, RemoteGHData> | undefined;

    const configKey = useMemo(() => getConfigKey(config), [config]);
    const data = allData?.[configKey];

    if (!allData) {
        return (
            <div className={styles.container}>
                <div className={styles.error}>插件数据未加载。请确保 remote-gh-viewer-plugin 已正确配置。</div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className={styles.container}>
                <div className={styles.error}>
                    未找到配置 "{configKey}" 的数据。
                    <br />
                    请确保对应的 .remote-gh.json 配置文件存在。
                </div>
            </div>
        );
    }

    return (
        <BrowserOnly fallback={<div className={styles.loading}>加载中...</div>}>
            {() => <RemoteGHViewerInner config={config} data={data} />}
        </BrowserOnly>
    );
}
