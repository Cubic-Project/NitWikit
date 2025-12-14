import { ExplorerNode } from "@/types/ExplorerNode";

export const bdsServerStructure: ExplorerNode[] = [
    {
        name: "BDS服务端文件夹",
        type: "folder",
        children: [
            {
                name: "behavior_packs",
                type: "folder",
                description: "安装新行为包的文件夹",
            },
            {
                name: "config",
                type: "folder",
                description: "没啥用",
            },
            {
                name: "definitions",
                type: "folder",
                description: "貌似是生成群系的内容",
            },
            {
                name: "development_behavior_packs",
                type: "folder",
                description: "为开发者提供安装新行为包的文件夹",
            },
            {
                name: "development_resource_packs",
                type: "folder",
                description: "为开发者提供安装新资源包的文件夹",
            },
            {
                name: "development_skin_packs",
                type: "folder",
                description: "为开发者提供安装新皮肤包的文件夹",
            },
            {
                name: "resource_packs",
                type: "folder",
                description: "安装新资源包的文件夹",
            },
            {
                name: "world-templates",
                type: "folder",
                description: "世界模板",
            },
            {
                name: "worlds",
                type: "folder",
                description: "主世界文件夹",
                children: [
                    {
                        name: "Bedrock level",
                        type: "folder",
                        description: "世界存档",
                        children: [
                            {
                                name: "db",
                                type: "folder",
                                description: "存档数据文件夹",
                            },
                            {
                                name: "level_dat",
                                type: "file",
                                description: "存档设定",
                            },
                            {
                                name: "level.dat_old",
                                type: "file",
                                description: "存档设定 (旧)",
                            },
                            {
                                name: "level_name.txt",
                                type: "file",
                                description: "存档名称",
                            },
                        ],
                    },
                ],
            },
            {
                name: "allowlist.json",
                type: "file",
                description: "白名单文件",
            },
            {
                name: "bedrock_server.exe",
                type: "file",
                description: "服务端启动程序",
            },
            {
                name: "bedrock_server.pdb",
                type: "file",
                description: "程序数据库文件",
            },
            {
                name: "bedrock_server_how_to.html",
                type: "file",
                description: "如何使用 BDS 服务器的官方指南",
            },
            {
                name: "permissions.json",
                type: "file",
                description: "管理员 (OP) 玩家相关数据",
            },
            {
                name: "release-notes.txt",
                type: "file",
                description: "服务端发行版本详情",
            },
            {
                name: "server.properties",
                type: "file",
                description: "配置文件",
            },
            {
                name: "valid_known_packs.json",
                type: "file",
                description: "已知的附加包",
            },
        ],
    },
];
