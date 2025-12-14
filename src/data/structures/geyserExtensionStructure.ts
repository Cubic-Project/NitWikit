import { ExplorerNode } from "@/types/ExplorerNode";

export const geyserExtensionStructure: ExplorerNode[] = [
    {
        name: "服务器根目录/",
        type: "folder",
        children: [
            {
                name: "plugins/",
                type: "folder",
                children: [
                    {
                        name: "Geyser-Spigot/",
                        type: "folder",
                        children: [
                            {
                                name: "extensions/",
                                type: "folder",
                                description: "Geyser 扩展文件夹",
                                children: [
                                    {
                                        name: "MCXboxBroadcastExtension.jar",
                                        type: "file",
                                        description: "Xbox 直播扩展",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
