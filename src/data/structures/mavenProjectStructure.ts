import { ExplorerNode } from "@/types/ExplorerNode";

export const mavenProjectStructure: ExplorerNode[] = [
    {
        name: "项目根目录",
        type: "folder",
        children: [
            {
                name: "src/",
                type: "folder",
                description: "源代码目录",
                children: [
                    {
                        name: "main/",
                        type: "folder",
                        description: "主要代码目录",
                        children: [
                            {
                                name: "java/",
                                type: "folder",
                                description: "Java 源代码",
                                children: [
                                    {
                                        name: "com/",
                                        type: "folder",
                                        children: [
                                            {
                                                name: "example/",
                                                type: "folder",
                                                children: [
                                                    {
                                                        name: "plugin/",
                                                        type: "folder",
                                                        children: [
                                                            {
                                                                name: "Main.java",
                                                                type: "file",
                                                                description: "插件主类",
                                                            },
                                                            {
                                                                name: "commands/",
                                                                type: "folder",
                                                                description: "命令类",
                                                            },
                                                            {
                                                                name: "listeners/",
                                                                type: "folder",
                                                                description: "监听器类",
                                                            },
                                                            {
                                                                name: "utils/",
                                                                type: "folder",
                                                                description: "工具类",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "resources/",
                                type: "folder",
                                description: "资源文件目录",
                                children: [
                                    {
                                        name: "plugin.yml",
                                        type: "file",
                                        description: "插件配置文件",
                                    },
                                    {
                                        name: "config.yml",
                                        type: "file",
                                        description: "插件默认配置",
                                    },
                                    {
                                        name: "messages/",
                                        type: "folder",
                                        description: "语言文件",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "test/",
                        type: "folder",
                        description: "测试代码目录",
                        children: [
                            {
                                name: "java/",
                                type: "folder",
                                description: "测试源代码",
                            },
                            {
                                name: "resources/",
                                type: "folder",
                                description: "测试资源",
                            },
                        ],
                    },
                ],
            },
            {
                name: "target/",
                type: "folder",
                description: "构建输出目录",
            },
            {
                name: "pom.xml",
                type: "file",
                description: "Maven 项目配置文件",
            },
            {
                name: "README.md",
                type: "file",
                description: "项目说明文件",
            },
        ],
    },
];
