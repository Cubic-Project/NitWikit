import { ExplorerNode } from "@/types/ExplorerNode";

export const hmclModpackStructure: ExplorerNode[] = [
    {
        name: "MyModpack/",
        type: "folder",
        children: [
            {
                name: "java/",
                type: "folder",
                children: [
                    {
                        name: "bin/",
                        type: "folder",
                    },
                ],
            },
            {
                name: "HMCL.exe",
                type: "file",
            },
            {
                name: "hmcl.json",
                type: "file",
            },
            {
                name: ".minecraft/",
                type: "folder",
            },
        ],
    },
];
