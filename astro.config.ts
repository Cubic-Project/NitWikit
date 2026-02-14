import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";
import mermaid from "astro-mermaid";
import { defineConfig } from "astro/config";
import starlightGiscus from "starlight-giscus";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import starlightScrollToTop from "starlight-scroll-to-top";
import vue from "@astrojs/vue";

const IS_CHINA_SITE = process.env.CHINA === "true";

export default defineConfig({
    site: IS_CHINA_SITE ? "https://nitwikit.8aka.cn" : "https://nitwikit.8aka.org",
    outDir: "./build",
    integrations: [
        vue(),
        starlight({
            title: "Cubic Wiki",
            description: "一群笨蛋编写的 Minecraft 开服教程",
            locales: {
                root: {
                    label: "简体中文",
                    lang: "zh-CN"
                }
            },
            favicon: "/favicon.ico",
            social: [{ icon: "github", label: "GitHub", href: "https://github.com/Cubic-Project/NitWikit" }],
            logo: { src: "./src/assets/logo.svg" },
            lastUpdated: true,
            editLink: {
                baseUrl: "https://github.com/Cubic-Project/NitWikit/edit/main/"
            },
            customCss: ["./src/styles/global.css"],
            plugins: [
                starlightGiscus({
                    repo: "Cubic-Project/NitWikit",
                    repoId: "R_kgDOQWQ-Ng",
                    category: "General",
                    categoryId: "DIC_kwDOQWQ-Ns4Cx2No",
                    mapping: "og:title",
                    lazy: true
                }),
                starlightSidebarTopics(
                    [
                        {
                            label: "基础",
                            link: "/general/intro",
                            icon: "seti:bazel",
                            id: "basics",
                            items: [
                                {
                                    label: "从零开始",
                                    collapsed: false,
                                    items: [{ label: "快速开始", slug: "general/intro" }, "general/reading-guide"]
                                },
                                {
                                    label: "通用知识库",
                                    collapsed: true,
                                    items: [
                                        {
                                            label: "安装 Java",
                                            collapsed: true,
                                            items: [
                                                "general/java/intro",
                                                "general/java/choose-and-download-and-install-java",
                                                "general/java/environment",
                                                "general/java/sdkman",
                                                "general/java/faq"
                                            ]
                                        },
                                        {
                                            label: "文本编辑器",
                                            collapsed: true,
                                            autogenerate: { directory: "general/preparation/text-editor" }
                                        },
                                        {
                                            label: "经营管理",
                                            collapsed: true,
                                            items: [
                                                "general/advance/management/intro",
                                                {
                                                    label: "玩家管理",
                                                    autogenerate: {
                                                        directory: "general/advance/management/player-management"
                                                    }
                                                },
                                                {
                                                    label: "资金管理",
                                                    autogenerate: {
                                                        directory: "general/advance/management/money-management"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Java",
                            link: "/java/intro",
                            icon: "open-book",
                            items: [
                                {
                                    label: "快速开始",
                                    collapsed: false,
                                    items: ["java/intro"]
                                },
                                {
                                    label: "准备工作",
                                    items: [
                                        "java/preparation/intro",
                                        {
                                            label: "安装 Java",
                                            collapsed: true,
                                            items: [
                                                "general/java/intro",
                                                "general/java/choose-and-download-and-install-java",
                                                "general/java/environment",
                                                "general/java/sdkman",
                                                "general/java/faq"
                                            ]
                                        },
                                        {
                                            label: "文本编辑器",
                                            collapsed: true,
                                            autogenerate: { directory: "general/preparation/text-editor" }
                                        }
                                    ]
                                },
                                {
                                    label: "开始阶段",
                                    items: [
                                        "java/start/intro",
                                        {
                                            label: "基础知识",
                                            collapsed: true,
                                            items: [
                                                "java/start/basic/intro",
                                                "java/start/basic/what-is-server",
                                                "java/start/basic/server-management-command"
                                            ]
                                        },
                                        {
                                            label: "选择服务器端",
                                            collapsed: true,
                                            items: [
                                                "java/start/server-core-choose/intro",
                                                "java/start/server-core-choose/relationship-between-servers",
                                                "java/start/server-core-choose/plugin",
                                                "java/start/server-core-choose/mod",
                                                "java/start/server-core-choose/hybrid",
                                                {
                                                    label: "Folia",
                                                    collapsed: true,
                                                    autogenerate: { directory: "java/start/server-core-choose/folia" }
                                                }
                                            ]
                                        },
                                        "java/start/install-mod-server",
                                        "java/start/launch-server",
                                        "java/start/server-dir-structure",
                                        "java/start/config-server",
                                        "java/start/connect-to-server",
                                        {
                                            label: "部署到生产环境",
                                            collapsed: true,
                                            autogenerate: { directory: "general/process/deploy" }
                                        }
                                    ]
                                },
                                {
                                    label: "建设与运营",
                                    items: [
                                        "java/process/intro",
                                        {
                                            label: "插件",
                                            collapsed: true,
                                            items: [
                                                "java/process/plugin/intro",
                                                {
                                                    label: "前言与基础",
                                                    collapsed: true,
                                                    items: [
                                                        "java/process/plugin/more/intro",
                                                        "java/process/plugin/more/plugin-download",
                                                        {
                                                            label: "YAML",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/more/yaml/intro",
                                                                "java/process/plugin/more/yaml/general",
                                                                "java/process/plugin/more/yaml/extention"
                                                            ]
                                                        },
                                                        "java/process/plugin/more/color-message",
                                                        "java/process/plugin/more/plugin-abbreviation",
                                                        "java/process/plugin/more/plugin-backdoor",
                                                        {
                                                            label: "插件构建",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/more/plugin-build/intro",
                                                                "java/process/plugin/more/plugin-build/idea-build",
                                                                "java/process/plugin/more/plugin-build/terminal-build",
                                                                "java/process/plugin/more/plugin-build/github-actions-build",
                                                                "java/process/plugin/more/plugin-build/mirror-config"
                                                            ]
                                                        },
                                                        "java/process/plugin/more/plugin-config",
                                                        "java/process/plugin/more/plugin-troubleshooting",
                                                        "java/process/plugin/more/faq",
                                                        "java/process/plugin/more/plugin-signature-file",
                                                        "java/process/plugin/more/tittle-tattle"
                                                    ]
                                                },
                                                {
                                                    label: "前置",
                                                    collapsed: true,
                                                    items: [
                                                        "java/process/plugin/plugin-dependencies/intro",
                                                        {
                                                            label: "PlaceholderAPI",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/intro",
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/common-usage",
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/parse-other",
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/math",
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/string",
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/progress",
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/javascript",
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/check-item",
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/change-output",
                                                                "java/process/plugin/plugin-dependencies/placeholderapi/faq"
                                                            ]
                                                        },
                                                        "java/process/plugin/plugin-dependencies/playerpoints",
                                                        "java/process/plugin/plugin-dependencies/protocollib",
                                                        {
                                                            label: "Vault",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/plugin-dependencies/vault/intro",
                                                                "java/process/plugin/plugin-dependencies/vault/serviceio",
                                                                "java/process/plugin/plugin-dependencies/vault/vaultunlocked"
                                                            ]
                                                        },
                                                        "java/process/plugin/plugin-dependencies/xconomy"
                                                    ]
                                                },
                                                {
                                                    label: "管理",
                                                    collapsed: true,
                                                    items: [
                                                        {
                                                            label: "防破坏",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/management-tool/anti-grief/intro",
                                                                "java/process/plugin/management-tool/anti-grief/coreprotect",
                                                                "java/process/plugin/management-tool/anti-grief/invseeplusplus",
                                                                "java/process/plugin/management-tool/anti-grief/prismrefracted"
                                                            ]
                                                        },
                                                        {
                                                            label: "基础插件",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/management-tool/basic-plugins/intro",
                                                                "java/process/plugin/management-tool/basic-plugins/delete",
                                                                {
                                                                    label: "CMI",
                                                                    collapsed: true,
                                                                    items: [
                                                                        "java/process/plugin/management-tool/basic-plugins/cmi/intro",
                                                                        "java/process/plugin/management-tool/basic-plugins/cmi/eco",
                                                                        "java/process/plugin/management-tool/basic-plugins/cmi/question"
                                                                    ]
                                                                },
                                                                {
                                                                    label: "EssentialsX",
                                                                    collapsed: true,
                                                                    items: [
                                                                        "java/process/plugin/management-tool/basic-plugins/essentialsx/intro",
                                                                        "java/process/plugin/management-tool/basic-plugins/essentialsx/config-yml",
                                                                        "java/process/plugin/management-tool/basic-plugins/essentialsx/config-tips",
                                                                        "java/process/plugin/management-tool/basic-plugins/essentialsx/warp",
                                                                        "java/process/plugin/management-tool/basic-plugins/essentialsx/kit",
                                                                        "java/process/plugin/management-tool/basic-plugins/essentialsx/papi-support",
                                                                        "java/process/plugin/management-tool/basic-plugins/essentialsx/faq"
                                                                    ]
                                                                },
                                                                "java/process/plugin/management-tool/basic-plugins/sunlight"
                                                            ]
                                                        },
                                                        {
                                                            label: "聊天",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/management-tool/chat/intro",
                                                                "java/process/plugin/management-tool/chat/carbon",
                                                                "java/process/plugin/management-tool/chat/huskchat",
                                                                "java/process/plugin/management-tool/chat/trchat"
                                                            ]
                                                        },
                                                        {
                                                            label: "物品库",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/management-tool/items/intro",
                                                                "java/process/plugin/management-tool/items/crucible",
                                                                "java/process/plugin/management-tool/items/ecoitems",
                                                                "java/process/plugin/management-tool/items/mmoitems",
                                                                "java/process/plugin/management-tool/items/neigeitems",
                                                                "java/process/plugin/management-tool/items/ratziel",
                                                                "java/process/plugin/management-tool/items/sx-item",
                                                                "java/process/plugin/management-tool/items/zaphkiel",
                                                                "java/process/plugin/management-tool/items/misc"
                                                            ]
                                                        },
                                                        {
                                                            label: "权限",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/management-tool/permission/intro",
                                                                "java/process/plugin/management-tool/permission/what-is-permission",
                                                                "java/process/plugin/management-tool/permission/group",
                                                                "java/process/plugin/management-tool/permission/command",
                                                                "java/process/plugin/management-tool/permission/tips",
                                                                "java/process/plugin/management-tool/permission/meta"
                                                            ]
                                                        },
                                                        {
                                                            label: "插件管理",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/management-tool/plugin-management/intro",
                                                                "java/process/plugin/management-tool/plugin-management/plugin-portal",
                                                                "java/process/plugin/management-tool/plugin-management/plugmanx",
                                                                "java/process/plugin/management-tool/plugin-management/serverutils",
                                                                "java/process/plugin/management-tool/plugin-management/yum"
                                                            ]
                                                        },
                                                        {
                                                            label: "任务",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/management-tool/task/intro",
                                                                "java/process/plugin/management-tool/task/beautyquests",
                                                                "java/process/plugin/management-tool/task/betonquest",
                                                                "java/process/plugin/management-tool/task/chemdah",
                                                                "java/process/plugin/management-tool/task/mangoquest",
                                                                "java/process/plugin/management-tool/task/playertask",
                                                                "java/process/plugin/management-tool/task/questcreator",
                                                                "java/process/plugin/management-tool/task/questengine",
                                                                "java/process/plugin/management-tool/task/quests",
                                                                "java/process/plugin/management-tool/task/typewriter"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: "保护",
                                                    collapsed: true,
                                                    items: [
                                                        "java/process/plugin/protection/intro",
                                                        "java/process/plugin/protection/residence",
                                                        "java/process/plugin/protection/dominion",
                                                        "java/process/plugin/protection/griefdefender",
                                                        "java/process/plugin/protection/plotsquared",
                                                        "java/process/plugin/protection/askyblock",
                                                        "java/process/plugin/protection/bentobox",
                                                        "java/process/plugin/protection/towny"
                                                    ]
                                                },
                                                {
                                                    label: "世界管理",
                                                    collapsed: true,
                                                    items: [
                                                        "java/process/plugin/world-management/worldedit",
                                                        "java/process/plugin/world-management/worldguard",
                                                        "java/process/plugin/world-management/fastasyncworldedit",
                                                        "java/process/plugin/world-management/law",
                                                        "java/process/plugin/world-management/myworld",
                                                        "java/process/plugin/world-management/nobuildplus",
                                                        {
                                                            label: "大厅",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/world-management/lobby/intro",
                                                                "java/process/plugin/world-management/lobby/deluxehub",
                                                                "java/process/plugin/world-management/lobby/deluxehubreloaded",
                                                                "java/process/plugin/world-management/lobby/superlobbydeluxe"
                                                            ]
                                                        },
                                                        {
                                                            label: "多世界 - Multiverse",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/world-management/multiverse/intro",
                                                                "java/process/plugin/world-management/multiverse/faq1",
                                                                "java/process/plugin/world-management/multiverse/faq2"
                                                            ]
                                                        },
                                                        {
                                                            label: "世界生成",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/world-management/worldgen/intro",
                                                                "java/process/plugin/world-management/worldgen/terra",
                                                                "java/process/plugin/world-management/worldgen/irisworldgen",
                                                                "java/process/plugin/world-management/worldgen/terraformgenerator"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: "游戏性",
                                                    collapsed: true,
                                                    items: [
                                                        "java/process/plugin/game/dragoncore",
                                                        "java/process/plugin/game/germengine",
                                                        "java/process/plugin/game/nova",
                                                        {
                                                            label: "Slimefun",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/game/slimefun/intro",
                                                                "java/process/plugin/game/slimefun/auto-update",
                                                                "java/process/plugin/game/slimefun/find-lag",
                                                                "java/process/plugin/game/slimefun/resourcepack-for-slimefun"
                                                            ]
                                                        },
                                                        {
                                                            label: "称号",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/game/title/deluxetags",
                                                                "java/process/plugin/game/title/miniplayertitle",
                                                                "java/process/plugin/game/title/mythicprefixes",
                                                                "java/process/plugin/game/title/playertitle",
                                                                "java/process/plugin/game/title/userprefix"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: "其他",
                                                    collapsed: true,
                                                    items: [
                                                        "java/process/plugin/misc/intro",
                                                        {
                                                            label: "全息图",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/misc/holograms/intro",
                                                                "java/process/plugin/misc/holograms/decentholograms",
                                                                "java/process/plugin/misc/holograms/holographicdisplays"
                                                            ]
                                                        },
                                                        {
                                                            label: "登录",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/misc/login/intro",
                                                                "java/process/plugin/misc/login/authme",
                                                                "java/process/plugin/misc/login/catseedlogin",
                                                                "java/process/plugin/misc/login/librelogin",
                                                                "java/process/plugin/misc/login/limboauth"
                                                            ]
                                                        },
                                                        {
                                                            label: "菜单",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/misc/menu/intro",
                                                                "java/process/plugin/misc/menu/chestcommands",
                                                                "java/process/plugin/misc/menu/deluxemenus",
                                                                "java/process/plugin/misc/menu/invero",
                                                                "java/process/plugin/misc/menu/trmenu"
                                                            ]
                                                        },
                                                        "java/process/plugin/misc/money",
                                                        {
                                                            label: "MOTD",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/misc/motd/intro",
                                                                "java/process/plugin/misc/motd/minimotd"
                                                            ]
                                                        },
                                                        "java/process/plugin/misc/mythicmobs",
                                                        {
                                                            label: "NPC",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/misc/npc/intro",
                                                                "java/process/plugin/misc/npc/adyeshach",
                                                                "java/process/plugin/misc/npc/citizens",
                                                                "java/process/plugin/misc/npc/znpcsplus"
                                                            ]
                                                        },
                                                        "java/process/plugin/misc/quickshop",
                                                        "java/process/plugin/misc/skinsrestorer",
                                                        {
                                                            label: "Tab/记分板",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/misc/tab-scoreboard/intro",
                                                                "java/process/plugin/misc/tab-scoreboard/simplescore",
                                                                "java/process/plugin/misc/tab-scoreboard/tab",
                                                                "java/process/plugin/misc/tab-scoreboard/titlemanager"
                                                            ]
                                                        },
                                                        {
                                                            label: "版本兼容",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/plugin/misc/via/intro",
                                                                "java/process/plugin/misc/via/viaversion",
                                                                "java/process/plugin/misc/via/viabackwards",
                                                                "java/process/plugin/misc/via/viarewind",
                                                                "java/process/plugin/misc/via/more-for-via"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            label: "跨服端",
                                            collapsed: true,
                                            items: [
                                                "java/process/cross-server/intro",
                                                "java/process/cross-server/server-core-choose",
                                                {
                                                    label: "搭建",
                                                    collapsed: true,
                                                    items: [
                                                        {
                                                            label: "BungeeCord",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/cross-server/setup/bungeecord/intro",
                                                                "java/process/cross-server/setup/bungeecord/setup",
                                                                "java/process/cross-server/setup/bungeecord/config-yml",
                                                                "java/process/cross-server/setup/bungeecord/lobby"
                                                            ]
                                                        },
                                                        {
                                                            label: "Velocity",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/cross-server/setup/velocity/intro",
                                                                "java/process/cross-server/setup/velocity/setup",
                                                                "java/process/cross-server/setup/velocity/velocity-toml",
                                                                "java/process/cross-server/setup/velocity/lobby"
                                                            ]
                                                        },
                                                        {
                                                            label: "Velocity CTD",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/cross-server/setup/velocity-ctd/intro",
                                                                "java/process/cross-server/setup/velocity-ctd/setup",
                                                                "java/process/cross-server/setup/velocity-ctd/velocity-toml",
                                                                "java/process/cross-server/setup/velocity-ctd/features",
                                                                "java/process/cross-server/setup/velocity-ctd/lobby"
                                                            ]
                                                        },
                                                        {
                                                            label: "Transfer",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/cross-server/setup/transfer/intro",
                                                                "java/process/cross-server/setup/transfer/setup"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                "java/process/cross-server/join-server",
                                                "java/process/cross-server/command",
                                                {
                                                    label: "跨服插件",
                                                    collapsed: true,
                                                    items: [
                                                        "java/process/cross-server/plugin/intro",
                                                        "java/process/cross-server/plugin/backend-only",
                                                        "java/process/cross-server/plugin/proxy-only",
                                                        "java/process/cross-server/plugin/proxy-backend-optional",
                                                        "java/process/cross-server/plugin/proxy-backend-mandatory"
                                                    ]
                                                },
                                                "java/process/cross-server/hide-the-real-ip",
                                                "java/process/cross-server/precautions"
                                            ]
                                        },
                                        {
                                            label: "手机玩家支持",
                                            collapsed: true,
                                            items: [
                                                "java/process/mobile-player/intro",
                                                {
                                                    label: "Geyser",
                                                    collapsed: true,
                                                    items: [
                                                        "java/process/mobile-player/geyser/intro",
                                                        "java/process/mobile-player/geyser/install",
                                                        "java/process/mobile-player/geyser/faq",
                                                        {
                                                            label: "进阶",
                                                            collapsed: true,
                                                            items: [
                                                                "java/process/mobile-player/geyser/upgrade/link",
                                                                "java/process/mobile-player/geyser/upgrade/menu",
                                                                "java/process/mobile-player/geyser/upgrade/slimefun",
                                                                "java/process/mobile-player/geyser/upgrade/geyser-skull",
                                                                "java/process/mobile-player/geyser/upgrade/custom-item-model-map",
                                                                "java/process/mobile-player/geyser/upgrade/geysermeg4-supports",
                                                                {
                                                                    label: "扩展",
                                                                    collapsed: true,
                                                                    items: [
                                                                        "java/process/mobile-player/geyser/upgrade/extended/intro",
                                                                        "java/process/mobile-player/geyser/upgrade/extended/compatible",
                                                                        "java/process/mobile-player/geyser/upgrade/extended/fix",
                                                                        "java/process/mobile-player/geyser/upgrade/extended/more"
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: "手机 Java 版",
                                                    collapsed: true,
                                                    items: [
                                                        "java/process/mobile-player/client/intro",
                                                        "java/process/mobile-player/client/amethyst-ios",
                                                        "java/process/mobile-player/client/android-all",
                                                        "java/process/mobile-player/client/renderer",
                                                        "java/process/mobile-player/client/pcl"
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            label: "生电",
                                            collapsed: true,
                                            items: [
                                                "java/process/redstone/intro",
                                                "java/process/redstone/plugin",
                                                "java/process/redstone/mchprs",
                                                "java/process/redstone/mod"
                                            ]
                                        },
                                        {
                                            label: "地图建设",
                                            collapsed: true,
                                            autogenerate: { directory: "general/process/map" }
                                        },
                                        "general/process/create-art-assets",
                                        "general/process/panel"
                                    ]
                                },
                                {
                                    label: "进阶知识",
                                    collapsed: false,
                                    items: [
                                        "java/advance/intro",
                                        {
                                            label: "Linux 开服",
                                            collapsed: true,
                                            autogenerate: {
                                                directory: "general/advance/linux"
                                            }
                                        },
                                        {
                                            label: "数据库相关",
                                            collapsed: true,
                                            autogenerate: {
                                                directory: "general/process/database"
                                            }
                                        },
                                        "java/advance/backup",
                                        {
                                            label: "优化",
                                            collapsed: true,
                                            items: [
                                                "java/advance/optimize/intro",
                                                {
                                                    label: "JVM",
                                                    collapsed: true,
                                                    items: [
                                                        "java/advance/optimize/jvm/intro",
                                                        "java/advance/optimize/jvm/common",
                                                        "java/advance/optimize/jvm/dragonwell8",
                                                        "java/advance/optimize/jvm/dragonwell11",
                                                        "java/advance/optimize/jvm/openj9",
                                                        "java/advance/optimize/jvm/graal",
                                                        "java/advance/optimize/jvm/zing"
                                                    ]
                                                },
                                                "java/advance/optimize/go",
                                                "java/advance/optimize/storage-space-optimization",
                                                "java/advance/optimize/performance-analysis",
                                                "java/advance/optimize/kernel",
                                                "java/advance/optimize/optimized-plugin",
                                                "java/advance/optimize/ask-for-profiling-help"
                                            ]
                                        },
                                        {
                                            label: "反作弊",
                                            collapsed: true,
                                            items: [
                                                "java/advance/anticheat/intro",
                                                "java/advance/anticheat/anticheatplugins",
                                                "java/advance/anticheat/antixray",
                                                "java/advance/anticheat/rng",
                                                "java/advance/anticheat/anti-crash",
                                                "java/advance/anticheat/honeypot"
                                            ]
                                        },
                                        {
                                            label: "资源包",
                                            collapsed: true,
                                            items: [
                                                "java/advance/resourcepack/intro",
                                                "java/advance/resourcepack/software",
                                                "java/advance/resourcepack/send",
                                                "java/advance/resourcepack/compress",
                                                {
                                                    label: "插件",
                                                    collapsed: true,
                                                    items: [
                                                        "java/advance/resourcepack/plugins/intro",
                                                        "java/advance/resourcepack/plugins/hud",
                                                        "java/advance/resourcepack/plugins/entity",
                                                        "java/advance/resourcepack/plugins/vehicles",
                                                        "java/advance/resourcepack/plugins/framework",
                                                        "java/advance/resourcepack/plugins/tooltip",
                                                        "java/advance/resourcepack/plugins/misc"
                                                    ]
                                                },
                                                "java/advance/resourcepack/protect",
                                                "java/advance/resourcepack/addon"
                                            ]
                                        },
                                        "general/advance/maintenance/how-to-defend-against-cyber-attacks",
                                        {
                                            label: "脚本语言",
                                            collapsed: true,
                                            items: [
                                                "java/advance/lang/intro",
                                                {
                                                    label: "Skript",
                                                    collapsed: true,
                                                    items: [
                                                        "java/advance/lang/skript/intro",
                                                        "java/advance/lang/skript/basic-tutorials",
                                                        "java/advance/lang/skript/advanced-tutorials"
                                                    ]
                                                },
                                                {
                                                    label: "Kether",
                                                    collapsed: true,
                                                    items: [
                                                        "java/advance/lang/kether/intro",
                                                        "java/advance/lang/kether/preparation",
                                                        "java/advance/lang/kether/basic",
                                                        "java/advance/lang/kether/if",
                                                        "java/advance/lang/kether/variable",
                                                        "java/advance/lang/kether/math",
                                                        "java/advance/lang/kether/misc",
                                                        "java/advance/lang/kether/vulpecula"
                                                    ]
                                                },
                                                {
                                                    label: "JavaScript",
                                                    collapsed: true,
                                                    items: [
                                                        "java/advance/lang/javascript/intro",
                                                        {
                                                            label: "扩展",
                                                            collapsed: true,
                                                            items: [
                                                                "java/advance/lang/javascript/extend/intro",
                                                                "java/advance/lang/javascript/extend/nashorn",
                                                                "java/advance/lang/javascript/extend/graaljs"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "general/advance/domain-and-dns",
                                        "java/advance/command-yml",
                                        "java/advance/login-choices",
                                        "java/advance/arthas",
                                        "java/advance/chinese-username",
                                        "java/advance/slime-world",
                                        {
                                            label: "机器人框架",
                                            collapsed: true,
                                            autogenerate: {
                                                directory: "general/advance/bot"
                                            }
                                        }
                                    ]
                                },
                                {
                                    label: "附录",
                                    collapsed: false,
                                    items: ["general/more/ask-for-help"]
                                }
                            ]
                        },
                        {
                            label: "Bedrock",
                            link: "/bedrock/intro",
                            icon: "open-book",
                            items: [
                                {
                                    label: "快速开始",
                                    items: ["bedrock/intro"]
                                },
                                {
                                    label: "超级基础知识",
                                    items: [
                                        "bedrock/super-basic/intro",
                                        "bedrock/super-basic/server-core-choose",
                                        "bedrock/super-basic/server-type",
                                        "bedrock/super-basic/protocol-version-number",
                                        "bedrock/super-basic/version"
                                    ]
                                },
                                {
                                    label: "BDS 核心",
                                    items: [
                                        {
                                            label: "准备工作",
                                            collapsed: true,
                                            items: [
                                                "bedrock/bds/preparation/intro",
                                                {
                                                    label: "文本编辑器",
                                                    collapsed: true,
                                                    autogenerate: { directory: "general/preparation/text-editor" }
                                                },
                                                "bedrock/bds/preparation/vcruntime",
                                                "bedrock/bds/preparation/websites"
                                            ]
                                        },
                                        {
                                            label: "开始阶段",
                                            collapsed: true,
                                            items: [
                                                "bedrock/bds/start/intro",
                                                {
                                                    label: "基础知识",
                                                    items: [
                                                        "bedrock/bds/start/basic/intro",
                                                        "bedrock/bds/start/basic/server-dir-structure"
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            label: "建设阶段",
                                            collapsed: true,
                                            items: [
                                                "bedrock/bds/process/intro",
                                                {
                                                    label: "插件",
                                                    collapsed: true,
                                                    items: [
                                                        "bedrock/bds/process/plugins/intro",
                                                        "bedrock/bds/process/plugins/how-to-load-plugins",
                                                        "bedrock/bds/process/plugins/plugins-loader-choose"
                                                    ]
                                                },
                                                {
                                                    label: "BDSX",
                                                    collapsed: true,
                                                    items: [
                                                        "bedrock/bds/process/bdsx/intro",
                                                        "bedrock/bds/process/bdsx/install"
                                                    ]
                                                },
                                                {
                                                    label: "EndStone",
                                                    collapsed: true,
                                                    items: [
                                                        "bedrock/bds/process/endstone/intro",
                                                        "bedrock/bds/process/endstone/install",
                                                        "bedrock/bds/process/endstone/plugins"
                                                    ]
                                                },
                                                {
                                                    label: "LeviLamina",
                                                    collapsed: true,
                                                    items: [
                                                        "bedrock/bds/process/levilamina/intro",
                                                        "bedrock/bds/process/levilamina/install",
                                                        "bedrock/bds/process/levilamina/plugins",
                                                        "bedrock/bds/process/levilamina/legacy-script-engine"
                                                    ]
                                                },
                                                {
                                                    label: "LiteLoaderBDS",
                                                    collapsed: true,
                                                    items: [
                                                        "bedrock/bds/process/liteloader-bds/intro",
                                                        "bedrock/bds/process/liteloader-bds/install",
                                                        "bedrock/bds/process/liteloader-bds/plugins"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: "Nukkit 核心",
                                    items: [
                                        "bedrock/nukkit/intro",
                                        {
                                            label: "准备工作",
                                            collapsed: true,
                                            items: [
                                                "bedrock/nukkit/preparation/intro",
                                                {
                                                    label: "安装 Java",
                                                    collapsed: true,
                                                    items: [
                                                        "general/java/intro",
                                                        "general/java/choose-and-download-and-install-java",
                                                        "general/java/environment",
                                                        "general/java/sdkman",
                                                        "general/java/faq"
                                                    ]
                                                },
                                                "bedrock/nukkit/preparation/websites",
                                                {
                                                    label: "文本编辑器",
                                                    collapsed: true,
                                                    autogenerate: { directory: "general/preparation/text-editor" }
                                                }
                                            ]
                                        },
                                        {
                                            label: "开始阶段",
                                            collapsed: true,
                                            items: [
                                                "bedrock/nukkit/start/intro",
                                                {
                                                    label: "基础知识",
                                                    collapsed: true,
                                                    items: [
                                                        "bedrock/nukkit/start/basic/intro",
                                                        "bedrock/nukkit/start/basic/server-file-structure"
                                                    ]
                                                },
                                                "bedrock/nukkit/start/nukkitmot",
                                                "bedrock/nukkit/start/nukkitx",
                                                {
                                                    label: "PM1E 核心",
                                                    collapsed: true,
                                                    items: [
                                                        "bedrock/nukkit/start/pm1e/intro",
                                                        "bedrock/nukkit/start/pm1e/controversy"
                                                    ]
                                                },
                                                "bedrock/nukkit/start/pnx"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: "PocketMine 核心",
                                    items: [
                                        "bedrock/pocketmine/intro",
                                        {
                                            label: "准备工作",
                                            collapsed: true,
                                            items: [
                                                "bedrock/pocketmine/preparation/intro",
                                                "bedrock/pocketmine/preparation/choose-and-download-and-install-php",
                                                "bedrock/pocketmine/preparation/websites",
                                                {
                                                    label: "文本编辑器",
                                                    collapsed: true,
                                                    autogenerate: { directory: "general/preparation/text-editor" }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: "其他基岩版服务器核心",
                                    items: [
                                        {
                                            label: "准备工作",
                                            collapsed: true,
                                            items: [
                                                "bedrock/misc/preparation/intro",
                                                "bedrock/misc/preparation/websites",
                                                {
                                                    label: "文本编辑器",
                                                    collapsed: true,
                                                    autogenerate: { directory: "general/preparation/text-editor" }
                                                }
                                            ]
                                        },
                                        "bedrock/misc/allay",
                                        "bedrock/misc/dragonfly",
                                        "bedrock/misc/mcpeserver"
                                    ]
                                },
                                {
                                    label: "WaterdogePE 跨服",
                                    items: [
                                        "bedrock/waterdogepe/intro",
                                        {
                                            label: "安装 Java",
                                            collapsed: true,
                                            items: [
                                                "general/java/intro",
                                                "general/java/choose-and-download-and-install-java",
                                                "general/java/environment",
                                                "general/java/sdkman",
                                                "general/java/faq"
                                            ]
                                        },
                                        {
                                            label: "文本编辑器",
                                            collapsed: true,
                                            autogenerate: { directory: "general/preparation/text-editor" }
                                        },
                                        "bedrock/waterdogepe/install",
                                        "bedrock/waterdogepe/config"
                                    ]
                                }
                            ]
                        },
                        {
                            label: "关于",
                            link: "/about/intro",
                            icon: "list-format",
                            items: ["about/intro", "about/sponsor", "about/timeline", "about/ad"]
                        }
                    ],
                    {
                        topics: {
                            basics: ["/basics", "/basics/**/*"]
                        }
                    }
                ),
                starlightLinksValidator(),
                starlightImageZoom(),
                starlightDocSearch({
                    appId: "D1KV1BYF3B",
                    apiKey: "4bb3573e59f2c49f30f057ce54edab3f",
                    indexName: "yizhan",
                    insights: true
                }),
                starlightScrollToTop()
            ],
            components: {
                LastUpdated: "./src/components/LastUpdated.astro",
                Head: "./src/components/Head.astro",
                Pagination: "./src/components/CustomPagination.astro"
            }
        }),
        AstroPWA({
            registerType: "autoUpdate",

            manifest: {
                name: "Cubic Wiki",
                short_name: "Cubic Wiki",
                theme_color: "#2196f3",
                background_color: "#424242",
                display: "standalone",
                start_url: "/",
                icons: [
                    {
                        src: "/icons/book-192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/icons/book-512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        }),
        mermaid({
            autoTheme: true
        })
    ],
    vite: {
        plugins: [tailwindcss()],
        ssr: {
            noExternal: ["naive-ui", "vueuc", "date-fns"]
        }
    }
});
