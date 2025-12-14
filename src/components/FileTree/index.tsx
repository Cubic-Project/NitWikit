import React, { useState, useMemo } from "react";
import styles from "./styles.module.css";
import {
  FolderOpenOutlined,
  FolderOutlined,
  FileOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

export type FileNode = {
  name: string;
  comment?: string;
  description?: React.ReactNode;
  children?: FileNode[];
  icon?: React.ReactNode;
};

interface FileTreeProps {
  nodes?: FileNode[];
  children?: React.ReactNode;
  descriptions?: Record<string, React.ReactNode>;
}

const getIcon = (name: string, isFolder: boolean) => {
  if (isFolder) return <FolderOutlined />;
  if (name.endsWith(".json") || name.endsWith(".yml") || name.endsWith(".yaml") || name.endsWith(".md") || name.endsWith(".txt")) {
    return <FileTextOutlined />;
  }
  return <FileOutlined />;
};

function parseTreeString(content: string): FileNode[] {
  const lines = content.split('\n');
  const root: FileNode[] = [];
  const stack: { indent: number; nodes: FileNode[] }[] = [{ indent: -1, nodes: root }];

  for (const line of lines) {
    if (!line.trim()) continue;

    const indentMatch = line.match(/^\s*/);
    const indent = indentMatch ? indentMatch[0].length : 0;
    const trimmed = line.trim();
    
    const commentIndex = trimmed.indexOf('//');
    let name = trimmed;
    let comment = '';
    
    if (commentIndex !== -1) {
      name = trimmed.substring(0, commentIndex).trim();
      comment = trimmed.substring(commentIndex + 2).trim();
    }

    let description: React.ReactNode | undefined = undefined;
    // Automatically move long comments to description
    if (comment.length > 30) {
      description = comment;
    }

    const node: FileNode = { name, comment: comment || undefined, description, children: [] };

    while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];
    parent.nodes.push(node);

    stack.push({ indent, nodes: node.children! });
  }
  
  const clean = (nodes: FileNode[]) => {
    for (const node of nodes) {
      if (node.children && node.children.length === 0) {
        delete node.children;
      } else if (node.children) {
        clean(node.children);
      }
    }
  };
  clean(root);
  
  return root;
}

function injectDescriptions(nodes: FileNode[], descriptions: Record<string, React.ReactNode>, parentPath: string = ''): FileNode[] {
  return nodes.map(node => {
      const currentPath = parentPath ? `${parentPath}/${node.name}` : node.name;
      // Try path match first, then name match
      const desc = descriptions[currentPath] || descriptions[node.name];
      
      const newNode = { ...node };
      if (desc) {
          newNode.description = desc;
      }
      
      if (newNode.children) {
          newNode.children = injectDescriptions(newNode.children, descriptions, currentPath);
      }
      
      return newNode;
  });
}

function NodeItem({
  node,
  path,
  onSelect,
  selectedPath,
}: {
  node: FileNode;
  path: string;
  onSelect: (node: FileNode, path: string) => void;
  selectedPath: string | null;
}): React.ReactElement {
  const currentPath = `${path}/${node.name}`;
  const hasChildren = Boolean(node.children && node.children.length);
  const hasDescription = Boolean(node.description);
  // Expand if selected or if it's a folder that is open (we can track folder state separately if needed)
  // For now, let's just toggle children on click for folders.
  // For files with description, toggle description on click.
  
  const [expanded, setExpanded] = useState(true);
  const [showDesc, setShowDesc] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(node, currentPath);
    if (hasChildren) {
      setExpanded(!expanded);
    }
    if (hasDescription) {
      setShowDesc(!showDesc);
    }
  };

  const Icon = node.icon || getIcon(node.name, hasChildren);

  return (
    <li className={styles.nodeItem}>
      <div
        className={`${styles.nodeRow} ${selectedPath === currentPath ? styles.selected : ""} ${hasDescription ? styles.hasDescription : ""}`}
        onClick={handleClick}
      >
        <span className={styles.icon}>{Icon}</span>
        <span className={styles.name}>{node.name}</span>
        {node.comment && <span className={styles.commentInline}>// {node.comment}</span>}
        {hasDescription && <InfoCircleOutlined className={styles.infoIcon} />}
      </div>
      
      {hasDescription && showDesc && (
        <div className={styles.inlineDescription}>
          {node.description}
        </div>
      )}

      {hasChildren && expanded && (
        <ul className={styles.childrenList}>
          {node.children!.map((child) => (
            <NodeItem
              key={`${currentPath}/${child.name}`}
              node={child}
              path={currentPath}
              onSelect={onSelect}
              selectedPath={selectedPath}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function FileTree({ nodes, children, descriptions }: FileTreeProps): React.ReactElement {
  const [selectedNode, setSelectedNode] = useState<FileNode | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const treeData = useMemo(() => {
    if (nodes) return nodes;
    if (typeof children === 'string') {
      const parsed = parseTreeString(children);
      if (descriptions) {
        return injectDescriptions(parsed, descriptions);
      }
      return parsed;
    }
    return [];
  }, [nodes, children, descriptions]);

  const handleSelect = (node: FileNode, path: string) => {
    setSelectedNode(node);
    setSelectedPath(path);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.rootList}>
        {treeData.map((node) => (
          <NodeItem
            key={node.name}
            node={node}
            path="root"
            onSelect={handleSelect}
            selectedPath={selectedPath}
          />
        ))}
      </ul>
    </div>
  );
}
