import type { LoadContext, Plugin } from "@docusaurus/types";
import * as fs from "fs";
import * as path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";

interface RemoteGHConfig {
    "remote-repo": string;
    file: string;
    version: Record<string, string>;
}

interface FetchedContent {
    config: RemoteGHConfig;
    configPath: string;
    versions: Record<string, string>;
}

interface PluginContent {
    configs: FetchedContent[];
}

interface RemoteGHData {
    repo: string;
    file: string;
    versions: Record<string, string>;
    versionList: string[];
}

/**
 * 将 Markdown 转换为 HTML
 */
async function markdownToHtml(markdown: string): Promise<string> {
    const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(markdown);

    return String(result);
}

/**
 * 生成配置文件的唯一标识符
 */
function getConfigKey(config: RemoteGHConfig): string {
    return `${config["remote-repo"]}:${config.file}`;
}

/**
 * 从 GitHub 拉取文件内容
 */
async function fetchGitHubContent(repo: string, commit: string, filePath: string): Promise<string> {
    const url = `https://raw.githubusercontent.com/${repo}/${commit}/${filePath}`;
    console.log(`[RemoteGHViewer] Fetching: ${url}`);

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    return await response.text();
}

/**
 * 递归扫描目录查找 .remote-gh.json 文件
 */
function scanForConfigs(dir: string, configs: string[] = []): string[] {
    if (!fs.existsSync(dir)) {
        return configs;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && !entry.name.startsWith(".") && entry.name !== "node_modules") {
            scanForConfigs(fullPath, configs);
        } else if (entry.isFile() && entry.name.endsWith(".remote-gh.json")) {
            configs.push(fullPath);
        }
    }

    return configs;
}

/**
 * RemoteGHViewer 插件
 * 在构建时从 GitHub 拉取远程内容并缓存
 */
export default function remoteGHViewerPlugin(context: LoadContext): Plugin<PluginContent> {
    const { siteDir } = context;

    return {
        name: "remote-gh-viewer-plugin",

        async loadContent(): Promise<PluginContent> {
            // 扫描所有文档目录
            const docDirs = ["docs", "docs-java", "docs-bedrock", "docs-about"];
            const allConfigPaths: string[] = [];

            for (const docDir of docDirs) {
                const fullPath = path.join(siteDir, docDir);
                scanForConfigs(fullPath, allConfigPaths);
            }

            console.log(`[RemoteGHViewer] Found ${allConfigPaths.length} config files`);

            const fetchedConfigs: FetchedContent[] = [];

            for (const configPath of allConfigPaths) {
                try {
                    const configContent = fs.readFileSync(configPath, "utf-8");
                    const config: RemoteGHConfig = JSON.parse(configContent);

                    const versions: Record<string, string> = {};

                    // 并行拉取所有版本内容并转换为 HTML
                    const versionEntries = Object.entries(config.version);
                    const fetchPromises = versionEntries.map(async ([version, commit]) => {
                        try {
                            const markdown = await fetchGitHubContent(config["remote-repo"], commit, config.file);
                            const html = await markdownToHtml(markdown);
                            return { version, content: html };
                        } catch (error) {
                            console.error(`[RemoteGHViewer] Failed to fetch ${version}:`, error);
                            return {
                                version,
                                content: `<p class="remote-gh-error">无法加载版本 ${version} 的内容</p>`
                            };
                        }
                    });

                    const results = await Promise.all(fetchPromises);
                    for (const { version, content } of results) {
                        versions[version] = content;
                    }

                    fetchedConfigs.push({
                        config,
                        configPath: path.relative(siteDir, configPath),
                        versions
                    });

                    console.log(
                        `[RemoteGHViewer] Loaded ${versionEntries.length} versions for ${config["remote-repo"]}/${config.file}`
                    );
                } catch (error) {
                    console.error(`[RemoteGHViewer] Error processing ${configPath}:`, error);
                }
            }

            return { configs: fetchedConfigs };
        },

        async contentLoaded({ content, actions }): Promise<void> {
            const { setGlobalData } = actions;

            // 创建汇总数据，以配置标识符为键
            const allData: Record<string, RemoteGHData> = {};

            for (const fetchedConfig of content.configs) {
                const configKey = getConfigKey(fetchedConfig.config);
                allData[configKey] = {
                    repo: fetchedConfig.config["remote-repo"],
                    file: fetchedConfig.config.file,
                    versions: fetchedConfig.versions,
                    versionList: Object.keys(fetchedConfig.config.version)
                };
            }

            // 使用 setGlobalData 存储数据，组件通过 useGlobalData 访问
            setGlobalData(allData);

            console.log(`[RemoteGHViewer] Set global data with ${Object.keys(allData).length} configs`);
        },

        getPathsToWatch(): string[] {
            // 监听配置文件变化
            const docDirs = ["docs", "docs-java", "docs-bedrock", "docs-about"];
            return docDirs.map((dir) => path.join(siteDir, dir, "**/*.remote-gh.json"));
        }
    };
}

module.exports = remoteGHViewerPlugin;
