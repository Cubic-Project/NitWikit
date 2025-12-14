import { ExplorerNode } from "@/types/ExplorerNode";

export const levilamnaPluginStructure: ExplorerNode[] = [
    {
        name: "插件文件夹",
        type: "folder",
        children: [
            {
                name: "manifest.json",
                type: "file",
                description:
                    "插件元数据文件，该文件必须存在并格式正确才能被 LeviLamina 识别",
            },
            {
                name: "(插件配置文件和数据库)...",
                type: "folder",
                description:
                    "插件生成的配置文件和数据库等，大多数插件的配置文件名叫 config.json，并以一个文件夹或一个 .db 或 .json 后缀文件作为数据库",
            },
            {
                name: "(插件代码或二进制文件)...",
                type: "folder",
                description:
                    "插件源代码，通常是 .js、.lua、.dll 后缀的文件。不要删除，修改或重命名文件，否则可能导致插件无法运行！",
            },
        ],
    },
];
