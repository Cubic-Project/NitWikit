import type { Options as PresetClassicOptions } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import * as path from "path";
import { themes as prismThemes } from "prism-react-renderer";

const IS_CHINA_SITE = process.env.CHINA === "true";
const ICP_LICENSE = process.env.ICP_LICENSE;

const config: Config = {
    future: {
        v4: true,
        experimental_faster: {
            rspackBundler: true, // required flag
            rspackPersistentCache: true // new flag
        }
    },

    customFields: {
        // 标题前缀
        titlePrefix: "主页",
        // 开始按钮文字
        start: "快速开始 🥵",
        // 标题颜色
        titleColor: "white",
        // 自定义swizzle配置
        swizzleConfig: {
            enabled: true,
            components: {
                "theme/DocItem/Footer/LastUpdated": {
                    override: "src/plugins/theme/LastUpdate"
                }
            }
        },
        // ICP 备案号
        ICP_LICENSE: ICP_LICENSE,
        // 是否为中国站点
        IS_CHINA_SITE: IS_CHINA_SITE
    },

    markdown: {
        mermaid: true,
        hooks: {
            onBrokenMarkdownLinks: "warn"
        }
    },

    title: "笨蛋 MC 开服教程",
    tagline: "一群笨蛋编写的 Minecraft 开服教程",
    favicon: "img/favicon.ico",

    url: IS_CHINA_SITE ? "https://nitwikit.8aka.cn" : "https://nitwikit.8aka.org",

    baseUrl: "/",

    organizationName: "Cubic-Project",
    projectName: "笨蛋式指南",

    onBrokenLinks: "warn",
    onBrokenAnchors: "warn",

    i18n: {
        defaultLocale: "zh-Hans",
        locales: ["zh-Hans"]
    },
    clientModules: [
        require.resolve("./src/clientModules/routeModules.js"),
        require.resolve("./src/clientModules/adsModules.js"),
        require.resolve("./src/clientModules/themeModules.ts")
    ],

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    routeBasePath: "/",
                    editUrl: "https://github.com/Cubic-Project/NitWikit/tree/main",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true
                },

                googleTagManager: {
                    containerId: "GTM-MB4XZBWJ"
                },

                blog: false,
                theme: {
                    customCss: [
                        require.resolve("./src/css/custom.css"),
                        require.resolve("./src/css/github.css"),
                        require.resolve("./src/css/ad.css"),
                        require.resolve("./src/css/announcement.css")
                    ]
                }
            } as PresetClassicOptions
        ]
    ],
    plugins: [
        "docusaurus-plugin-image-zoom",
        "docusaurus-plugin-sass",
        path.resolve(__dirname, "src/plugins/remote-gh-viewer-plugin.ts"),
        ["@gracefullight/docusaurus-plugin-microsoft-clarity", { projectId: "oyfswsvfpc" }],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-java",
                path: "docs-java",
                routeBasePath: "Java",
                editUrl: "https://github.com/Cubic-Project/NitWikit/tree/main",
                sidebarPath: require.resolve("./sidebars.js"),
                editCurrentVersion: true,
                showLastUpdateAuthor: true,
                showLastUpdateTime: true
            }
        ],
        [
            "@docusaurus/plugin-pwa",
            {
                pwaHead: [
                    {
                        tagName: "link",
                        rel: "icon",
                        href: "/img/book.png"
                    },
                    {
                        tagName: "link",
                        rel: "manifest",
                        href: "/manifest.json"
                    },
                    {
                        tagName: "meta",
                        name: "theme-color",
                        content: "rgb(37, 194, 160)"
                    }
                ]
            }
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-bedrock",
                path: "docs-bedrock",
                routeBasePath: "Bedrock",
                editUrl: "https://github.com/Cubic-Project/NitWikit/tree/main",
                sidebarPath: require.resolve("./sidebars.js"),
                editCurrentVersion: true,
                showLastUpdateAuthor: true,
                showLastUpdateTime: true
            }
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-about",
                path: "docs-about",
                routeBasePath: "about",
                editUrl: "https://github.com/Cubic-Project/NitWikit/tree/main",
                sidebarPath: require.resolve("./sidebars.js"),
                editCurrentVersion: true,
                showLastUpdateAuthor: true,
                showLastUpdateTime: true
            }
        ],
        path.resolve(__dirname, "src/plugins/tailwind-plugin.ts")
    ],
    headTags: [
        {
            tagName: "link",
            attributes: {
                rel: "shortcut icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            }
        },
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://fontsapi.zeoseven.com",
                crossOrigin: "anonymous"
            }
        },
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://D1KV1BYF3B-dsn.algolia.net",
                crossOrigin: "anonymous"
            }
        },
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://giscus.app",
                crossOrigin: "anonymous"
            }
        }
    ],

    themeConfig: {
        // Giscus 评论功能在 CHINA 环境变量设置时禁用
        giscus: {
            repo: "Cubic-Project/NitWikit",
            repoId: "R_kgDOQWQ-Ng",
            category: "General",
            categoryId: "DIC_kwDOQWQ-Ns4Cx2No"
        },
        zoom: {
            selector: ".markdown :not(em) > img",
            background: {
                light: "rgb(255, 255, 255)",
                dark: "rgb(36 36 36 / 80%)"
            }
        },
        // 标题渲染范围
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5
        },
        docs: {
            sidebar: {
                autoCollapseCategories: true
            }
        },
        image: "img/docusaurus-social-card.jpg",
        metadata: [{ name: "keywords", content: "Minecraft, 开服教程, MC, 开服, 插件, 联机, 我的世界" }],
        navbar: {
            title: "Cubic Wiki",
            logo: {
                alt: "Logo",
                src: "img/book.png"
            },
            hideOnScroll: true,
            items: [
                {
                    type: "doc",
                    docId: "intro",
                    position: "left",
                    label: "通用"
                },
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Java",
                    docsPluginId: "docs-java"
                },
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Bedrock",
                    docsPluginId: "docs-bedrock"
                },
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "关于我们",
                    docsPluginId: "docs-about"
                },
                // 搜索框
                {
                    type: "search",
                    position: "right"
                },
                // GitHub
                {
                    href: "https://github.com/Cubic-Project/NitWikit",
                    className: "header-github-link",
                    position: "right"
                }
                // 顶部导航栏显示切换语言按钮
                // {
                //   type: 'localeDropdown',
                //   position: 'right',
                // },
            ]
        },

        // 底部链接
        footer: {
            style: "dark",
            links: [
                {
                    title: "文档",
                    items: [
                        {
                            label: "Docusaurus 主题",
                            to: "https://nitwikit.8aka.org"
                        },
                        {
                            label: "VitePress 主题",
                            to: "https://nitwikit2.8aka.org"
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/Cubic-Project/NitWikit"
                        }
                    ]
                },
                {
                    title: "交流",
                    items: [
                        {
                            label: "QQ 群",
                            href: "https://qm.qq.com/q/UyurWW3zyI"
                        }
                    ]
                },
                {
                    title: "友链",
                    items: [
                        {
                            label: "服主资源导航页",
                            href: "http://mcnav.cn"
                        },
                        {
                            label: "CSKB 日冕知识库",
                            href: "https://kb.corona.studio"
                        },
                        {
                            label: "McRes 灵依资源站",
                            href: "https://mcres.cn/"
                        },
                        {
                            label: "Tinksp 资源站",
                            href: "https://www.tinksp.com"
                        },
                        {
                            label: "MCNav",
                            href: "https://www.mcnav.net"
                        }
                    ]
                }
            ],
            // 底部版权信息
            copyright: `Copyright © ${new Date().getFullYear()} <b>Cubic-Project</b>, All Rights Reserved. | Web Design By Lythrilla`
        },
        // 深浅主题
        prism: {
            theme: prismThemes.vsLight,
            darkTheme: prismThemes.vsDark,
            additionalLanguages: [
                "java",
                "kotlin",
                "groovy",
                "scala",
                "bash",
                "powershell",
                "python",
                "ruby",
                "php",
                "go",
                "rust",
                "c",
                "cpp",
                "csharp",
                "sql",
                "json",
                "yaml",
                "toml",
                "css",
                "scss",
                "less",
                "javascript",
                "typescript",
                "jsx",
                "tsx",
                "markup",
                "markdown",
                "nginx",
                "docker",
                "diff"
            ],
            defaultLanguage: "plaintext",
            magicComments: [
                {
                    className: "theme-code-block-highlighted-line",
                    line: "highlight-next-line",
                    block: { start: "highlight-start", end: "highlight-end" }
                },
                {
                    className: "code-block-error-line",
                    line: "error-next-line",
                    block: { start: "error-start", end: "error-end" }
                }
            ]
        },
        announcementBar: {
            id: "qq-group-notice",
            content:
                'Cubic Wiki 新的 QQ 交流群 <a target="_blank" rel="noopener noreferrer" href="https://qm.qq.com/q/UyurWW3zyI"><strong>1074062482</strong></a>',
            backgroundColor: "#25a06e",
            textColor: "white",
            isCloseable: false
        },

        // 颜色随系统切换
        colorMode: {
            defaultMode: "light",
            disableSwitch: false,
            respectPrefersColorScheme: true
        },

        // 搜索
        algolia: {
            appId: "D1KV1BYF3B",
            apiKey: "4bb3573e59f2c49f30f057ce54edab3f",
            indexName: "yizhan",
            askAi: {
                assistantId: "8JdNEmIpzb5T",
                indexName: "NITWIKIT BOT",
                apiKey: "8730c526c66126ee3424fe3e8647d825",
                appId: "D1KV1BYF3B"
            },
            insights: true
        },
        mermaid: {
            theme: { light: "neutral", dark: "dark" }
        }
    },

    themes: ["@docusaurus/theme-mermaid"]
};
export default config;
