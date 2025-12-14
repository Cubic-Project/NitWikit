import Link from "@docusaurus/Link";
import { Icon } from "@iconify/react";
import "@site/src/css/structure_explorer.css";
import clsx from "clsx";
import React, { JSX, useState } from "react";

const folderIcon = "mdi:folder";
const fileIcon = "mdi:file";

interface ExplorerNode {
    name: string;
    type: "folder" | "file";
    children?: ExplorerNode[];
    description?: string;
    url?: string;
    external?: boolean;
}

interface ConfigurationStructureDiagramProps {
    data?: ExplorerNode[];
}

interface TreeLineProps {
    isLast: boolean;
    isRoot: boolean;
}

const TreeLine = ({ isLast, isRoot }: TreeLineProps): JSX.Element => {
    if (isRoot) {
        return <span className="tree-line"></span>;
    }
    return <span className="tree-line">{isLast ? "└── " : "├── "}</span>;
};

interface PrefixLineProps {
    levels: boolean[];
}

const PrefixLine = ({ levels }: PrefixLineProps): JSX.Element => {
    if (levels.length === 0) {
        return <span></span>;
    }

    return (
        <>
            {levels.map((isLast, index) => (
                <span key={index} className="prefix-line">
                    {isLast ? "    " : "│   "}
                </span>
            ))}
        </>
    );
};

export default function ConfigurationStructureDiagram({
    data = []
}: ConfigurationStructureDiagramProps = {}): JSX.Element {
    const [popupNode, setPopupNode] = useState<ExplorerNode | null>(null);

    const renderNode = (node: ExplorerNode, level: number = 0, isLast: boolean = true, ancestors: boolean[] = []) => {
        const isFolder = node.type === "folder";
        const hasDescription = "description" in node;
        const hasUrl = "url" in node;
        const isExternal = node.external;

        const handleNodeOpening = (event: React.MouseEvent) => {
            event.stopPropagation();
            setPopupNode(node);
        };

        const newAncestors = [...ancestors];
        if (level > 0) {
            newAncestors[level - 1] = isLast;
        }

        return (
            <div
                key={node.name}
                className={level > 0 ? "config-explorer-node" : "config-explorer-node-noflex"}
                onMouseLeave={() => {
                    setPopupNode(null);
                }}
            >
                <div className="config-explorer-node-header">
                    {level > 0 && <PrefixLine levels={ancestors} />}
                    {level > 0 && <TreeLine isLast={isLast} isRoot={false} />}

                    <div className={`config-explorer-node-content`}>
                        {hasUrl ? (
                            <Link
                                className={clsx(
                                    !isFolder && "config-explorer-file-node",
                                    isFolder && "config-explorer-file-folder-node",
                                    "config-explorer-file-node-with-link",
                                    isExternal && "config-explorer-file-folder-node-with-link"
                                )}
                                to={node.url}
                            >
                                <Icon
                                    icon={isFolder ? folderIcon : fileIcon}
                                    className={"config-explorer-icon config-explorer-node-icon"}
                                />
                                <span className={"config-node-contents-wrapper"}>{node.name}</span>
                            </Link>
                        ) : (
                            <span
                                className={clsx(
                                    !isFolder && "config-explorer-file-node",
                                    isFolder && "config-explorer-file-folder-node"
                                )}
                            >
                                <Icon
                                    icon={isFolder ? folderIcon : fileIcon}
                                    className={"config-explorer-icon config-explorer-node-icon"}
                                />
                                <span className={"config-node-contents-wrapper"}>{node.name}</span>
                            </span>
                        )}
                        {hasDescription && (
                            <div style={{ position: "relative", display: "inline-block" }}>
                                <span
                                    className={"config-explorer-popup-window-open-tag"}
                                    onMouseEnter={handleNodeOpening}
                                >
                                    ⓘ
                                </span>
                                <div className={"config-explorer-popup-window-container"}>
                                    <div
                                        className={clsx(
                                            "config-explorer-popup-window",
                                            popupNode !== node && "display--none"
                                        )}
                                    >
                                        <strong>简介:</strong>
                                        <br />
                                        {node.description}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {isFolder &&
                    node.children &&
                    node.children.map((child, index) => (
                        <div key={child.name}>
                            {renderNode(child, level + 1, index === node.children!.length - 1, newAncestors)}
                        </div>
                    ))}
            </div>
        );
    };

    return (
        <div>
            <pre className={"config-explorer-code-outer-container"}>{data.map((item) => renderNode(item))}</pre>
        </div>
    );
}
