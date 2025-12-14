export type ExplorerNode = FolderNode | FileNode | StructureNode;

/**
 * 文件夹节点
 */
export interface FolderNode {
    name: string;
    type: "folder";
    children?: ExplorerNode[];
    description?: string;
    url?: string;
    external?: boolean;
}

/**
 * 文件节点
 */
export interface FileNode {
    name: string;
    type: "file";
    description?: string;
    url?: string;
    external?: boolean;
}

/**
 * 结构节点
 */
export interface StructureNode {
    name: string;
    type: "structure";
    children?: ExplorerNode[];
    external?: boolean;
    description?: string;
}