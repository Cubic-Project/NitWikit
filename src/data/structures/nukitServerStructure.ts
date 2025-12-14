import { ExplorerNode } from "@/types/ExplorerNode";

export const nukitServerStructure: ExplorerNode[] = [
    {
        name: "Nukkit Server/",
        type: "folder",
        children: [
            {
                name: "nukkit-1.0-SNAPSHOT.jar",
                type: "file",
                description: "服务器核心",
            },
            {
                name: "start.bat",
                type: "file",
                description: "Windows 运行脚本",
            },
            {
                name: "start.sh",
                type: "file",
                description: "Linux 运行脚本",
            },
            {
                name: "start.command",
                type: "file",
                description: "macOS 运行脚本",
            },
            {
                name: "server.properties",
                type: "file",
                description: "服务端配置文件",
            },
            {
                name: "permissions.yml",
                type: "file",
                description: "用于设置玩家权限的",
            },
            {
                name: "banned-players.txt",
                type: "file",
                description: "存储被封禁的玩家名单的",
            },
            {
                name: "banned-ips.txt",
                type: "file",
                description: "存储被封禁的 IP 地址",
            },
            {
                name: "ops.txt",
                type: "file",
                description: "用于设置管理员（OP）的",
            },
            {
                name: "worlds/",
                type: "folder",
                description: "主世界文件夹",
                children: [
                    {
                        name: "world/",
                        type: "folder",
                        description: "世界存档",
                        children: [
                            {
                                name: "level.dat",
                                type: "file",
                                description: "存档设定",
                            },
                            {
                                name: "region/",
                                type: "folder",
                                description: "存储世界区块数据",
                            },
                            {
                                name: "entities/",
                                type: "folder",
                                description: "存储世界中的实体数据",
                            },
                        ],
                    },
                ],
            },
            {
                name: "plugins/",
                type: "folder",
                description: "插件存放文件夹",
            },
            {
                name: "logs/",
                type: "folder",
                description: "服务器日志存放",
            },
            {
                name: "whitelist.txt",
                type: "file",
                description: "存储允许加入服务器的玩家名单",
            },
            {
                name: "rcon_password.txt",
                type: "file",
                description: "存储 RCON（远程控制）功能的密码",
            },
        ],
    },
];
