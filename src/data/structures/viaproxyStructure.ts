import { ExplorerNode } from "@/types/ExplorerNode";

export const viaproxyStructure: ExplorerNode[] = [
    {
        name: "viaproxy/",
        type: "folder",
        children: [
            {
                name: "viaproxy.yml",
                type: "file",
                description: "主配置文件",
            },
            {
                name: "ViaLoader/",
                type: "folder",
                description: "协议转换配置",
                children: [
                    {
                        name: "viaversion.yml",
                        type: "file",
                    },
                    {
                        name: "viabackwards.yml",
                        type: "file",
                    },
                    {
                        name: "viarewind.yml",
                        type: "file",
                    },
                    {
                        name: "vialegacy.yml",
                        type: "file",
                    },
                    {
                        name: "viabedrock.yml",
                        type: "file",
                    },
                    {
                        name: "viaaprilfools.yml",
                        type: "file",
                    },
                ],
            },
            {
                name: "plugins/",
                type: "folder",
                description: "插件目录",
            },
            {
                name: "logs/",
                type: "folder",
                description: "日志目录",
            },
            {
                name: "saves.json",
                type: "file",
                description: "服务器保存数据",
            },
        ],
    },
];
