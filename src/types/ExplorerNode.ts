export interface ExplorerNode {
    name: string;
    type: "folder" | "file";
    children?: ExplorerNode[];
    description?: string;
    url?: string;
    external?: boolean;
}
