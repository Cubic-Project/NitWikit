import { ExplorerNode } from "@/types/ExplorerNode";
import Link from "@docusaurus/Link";
import { Icon } from "@iconify/react";
import "@site/src/css/structure_explorer.css";
import clsx from "clsx";
import React, { JSX, useState } from "react";

const folderIcon = "mdi:folder";
const fileIcon = "mdi:file";
const structureIcon = "mdi:file";

interface StructureExplorerProps {
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

export default function ConfigurationStructureDiagram({ data = [] }: StructureExplorerProps = {}): JSX.Element {
    const [popupNode, setPopupNode] = useState<ExplorerNode | null>(null);
    const [showDescriptionBelow, setShowDescriptionBelow] = useState(false);

    const renderNode = (node: ExplorerNode, level: number = 0, isLast: boolean = true, ancestors: boolean[] = []) => {
        const isFolder = node.type === "folder";
        const isStructure = node.type === "structure";
        const hasChildren = node.type === "folder" || node.type === "structure";
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
                                    !isFolder && !isStructure && "config-explorer-file-node",
                                    (isFolder || isStructure) && "config-explorer-file-folder-node",
                                    "config-explorer-file-node-with-link",
                                    isExternal && "config-explorer-file-folder-node-with-link"
                                )}
                                to={node.url}
                            >
                                <Icon
                                    icon={isFolder ? folderIcon : isStructure ? structureIcon : fileIcon}
                                    className={"config-explorer-node-icon"}
                                />
                                <span className={"config-node-contents-wrapper"}>{node.name}</span>
                            </Link>
                        ) : (
                            <span
                                className={clsx(
                                    !isFolder && !isStructure && "config-explorer-file-node",
                                    (isFolder || isStructure) && "config-explorer-file-folder-node"
                                )}
                            >
                                <Icon
                                    icon={isFolder ? folderIcon : isStructure ? structureIcon : fileIcon}
                                    className={"config-explorer-node-icon"}
                                />
                                <span className={"config-node-contents-wrapper"}>{node.name}</span>
                            </span>
                        )}
                        {hasDescription &&
                            (showDescriptionBelow ? null : (
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
                            ))}
                    </div>
                </div>

                {showDescriptionBelow && hasDescription && (
                    <div className="config-explorer-description-below">
                        <PrefixLine levels={ancestors} />
                        <span className="tree-line">{isLast ? "    " : "│   "}</span>
                        <div className="config-explorer-description-text">{node.description}</div>
                    </div>
                )}

                {hasChildren &&
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
            <div style={{ marginBottom: "12px" }}>
                <button
                    onClick={() => setShowDescriptionBelow(!showDescriptionBelow)}
                    style={{
                        padding: "6px 12px",
                        fontSize: "14px",
                        borderRadius: "6px",
                        border: "1px solid",
                        borderColor: showDescriptionBelow
                            ? "var(--ifm-color-primary)"
                            : "var(--ifm-color-emphasis-300)",
                        backgroundColor: showDescriptionBelow
                            ? "var(--ifm-color-primary)"
                            : "var(--ifm-background-color)",
                        color: showDescriptionBelow ? "white" : "var(--ifm-font-color-base)",
                        cursor: "pointer",
                        fontWeight: "500",
                        transition: "all 0.2s ease"
                    }}
                >
                    {showDescriptionBelow ? "📖 隐藏说明" : "📖 显示说明"}
                </button>
            </div>
            <pre className={"config-explorer-code-outer-container"}>
                {data.map((item) => (
                    <div key={item.name}>{renderNode(item)}</div>
                ))}
            </pre>
        </div>
    );
}
