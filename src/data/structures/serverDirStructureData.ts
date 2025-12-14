import { ExplorerNode } from "@/types/ExplorerNode";

export const serverDirStructureData: ExplorerNode[] = [
    {
        name: "assets",
        type: "folder",
        description: "储存 Minecraft 音效贴图等重要文件，不要乱动"
    },
    {
        name: "cache",
        type: "folder",
        description: "缓存文件夹，一般放置 Minecraft 原版服务器"
    },
    {
        name: "config",
        type: "folder",
        description: "Paper fork 服务器特有的配置文件，用于放置 Paper 的配置文件"
    },
    {
        name: "crash-reports",
        type: "folder",
        description: "存放服务器崩溃的完整报告"
    },
    {
        name: "libraries",
        type: "folder",
        description: "存放服务器及部分插件的依赖库"
    },
    {
        name: "logs",
        type: "folder",
        description: "存放服务端日志的文件夹"
    },
    {
        name: "plugins",
        type: "folder",
        description: "存放插件的文件夹"
    },
    {
        name: "versions",
        type: "folder",
        description: "存放对应版本需要的依赖 jar"
    },
    {
        name: "world",
        type: "folder",
        description: "主世界文件夹",
        children: [
            {
                name: "advancements",
                type: "folder",
                description: "成就文件夹"
            },
            {
                name: "data",
                type: "folder",
                description: "世界数据文件夹"
            },
            {
                name: "datapacks",
                type: "folder",
                description: "数据包",
                children: [
                    {
                        name: "bukkit",
                        type: "folder"
                    }
                ]
            },
            {
                name: "entities",
                type: "folder",
                description: "实体数据"
            },
            {
                name: "playerdata",
                type: "folder",
                description: "玩家数据"
            },
            {
                name: "poi",
                type: "folder",
                description: "兴趣点数据"
            },
            {
                name: "region",
                type: "folder",
                description: "区块数据"
            },
            {
                name: "stats",
                type: "folder",
                description: "统计信息"
            }
        ]
    },
    {
        name: "world_nether",
        type: "folder",
        description: "地狱世界文件夹",
        children: [
            {
                name: "DIM-1",
                type: "folder",
                children: [
                    { name: "data", type: "folder" },
                    { name: "entities", type: "folder" },
                    { name: "poi", type: "folder" },
                    { name: "region", type: "folder" }
                ]
            }
        ]
    },
    {
        name: "world_the_end",
        type: "folder",
        description: "末地世界文件夹",
        children: [
            {
                name: "DIM1",
                type: "folder",
                children: [
                    { name: "data", type: "folder" },
                    { name: "entities", type: "folder" },
                    { name: "poi", type: "folder" },
                    {
                        name: "region",
                        type: "folder"
                    }
                ]
            }
        ]
    },
    {
        name: ".console_history",
        type: "file",
        description:
            "存放了控制台 (又叫后台) 曾经使用过的指令，方便你使用键盘中的 ↑ 键快捷查找曾使用的指令，也可用于查看后台异常。"
    },
    {
        name: "banned-ips.json",
        type: "file",
        description:
            "以 JSON 格式存放的被 ban IP 玩家的 UUID 及游戏名称等相关信息，一旦玩家被 banip，此 IP 将无法再进入服务器。"
    },
    {
        name: "banned-players.json",
        type: "file",
        description:
            "以 JSON 格式存放了被 ban 玩家的 UUID 及游戏名称等相关信息，离线服 ban 玩家后换 ID 即可进入服务器，而正版服无法通过改名重新进入服务器。"
    },
    {
        name: "bukkit.yml",
        type: "file",
        description: "由 Bukkit 派生得到的服务端都有的文件。保存着 Bukkit 所提供的最基本的设置选项。"
    },
    {
        name: "commands.yml",
        type: "file",
        description:
            "它提供了一种快速而简单的方法来强制服务器使用 Mojang 提供的命令 (而不是 Bukkit 中内置的命令) 而不产生冲突。"
    },
    {
        name: "eula.txt",
        type: "file",
        description: "在首次开服的时候，我们需要同意 EULA 协议。"
    },
    {
        name: "help.yml",
        type: "file",
        description: "一些插件的帮助信息会出现在这里面，一般不需要进行什么修改。"
    },
    {
        name: "ops.json",
        type: "file",
        description: "以 JSON 格式存放了 OP 玩家的 UUID 及游戏名称等相关信息。"
    },
    {
        name: "purpur.jar",
        type: "file",
        description: "你可以改名叫任何名字 (只要以 `.jar` 结尾，且在启动脚本中对应修改)"
    },
    {
        name: "purpur.yml",
        type: "file",
        description: "Purpur 服务器特有的配置文件，极其详细的配置项，功能非常丰富，几乎可以替代数款插件。"
    },
    {
        name: "permissions.yml",
        type: "file",
        description:
            "是默认的权限定义 YAML 文件，在启动时自动生成。它的主要功能是将权限节点组合到一个文件中，以便权限插件 (以及使用权限的插件) 可以在整个系统中使用它。"
    },
    {
        name: "server.properties",
        type: "file",
        description: "服务端的一些基本设置就在里面，如设置端口，设置游戏难度，设置游戏模式 (生存、创造等) 等。",
        url: "https://minecraft-zh.gamepedia.com/Server.properties",
        external: true
    },
    {
        name: "spigot.yml",
        type: "file",
        description: "Spigot 服务器都有的配置文件。"
    },
    {
        name: "usercache.json",
        type: "file",
        description: "储存着用名字及 UUID 信息的缓存文件。"
    },
    {
        name: "version_history",
        type: "file",
        description: "一些 Minecraft 和服务端核心的版本信息，一般记录着曾经使用过的版本。"
    },
    {
        name: "whitelist.json",
        type: "file",
        description:
            "白名单列表。(如果你在 server.properties 中开启了白名单，你就可以在该文件中添加和管理谁被允许或不被允许进入服务器。)"
    }
];
