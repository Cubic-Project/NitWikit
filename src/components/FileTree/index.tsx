import React, { useState, useMemo, useCallback } from "react";
import { flushSync } from "react-dom";
import clsx from "clsx";
import {
  FolderOutlined,
  FolderOpenOutlined,
  FileOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  RightOutlined,
  DownOutlined,
} from "@ant-design/icons";

export type FileNode = {
  name: string;
  comment?: string;
  description?: React.ReactNode;
  children?: FileNode[];
  icon?: React.ReactNode;
  isFolder?: boolean;
};

interface FileTreeProps {
  nodes?: FileNode[];
  children?: React.ReactNode;
  descriptions?: Record<string, React.ReactNode>;
}

const MAX_INLINE_COMMENT_LENGTH = 30;
const ROOT_PATH = 'root';

const TEXT_EXTENSIONS = new Set([
  ".json", ".yml", ".yaml", ".md", ".txt", 
  ".properties", ".xml", ".html", ".css", 
  ".js", ".ts", ".jsx", ".tsx", ".ini", ".conf", ".sh", ".bat",
  ".java", ".py", ".c", ".cpp", ".h", ".hpp", ".go", ".rs", ".php",
  ".toml", ".gradle"
]);

const KNOWN_FILES = new Set([
  "license", "makefile", "dockerfile", "cname", 
  "gemfile", "pipfile", "procfile", "readme", 
  "changelog", "contributing", "security", "authors", "owners"
]);

const getIcon = (name: string) => {
  const lowerName = name.toLowerCase();
  
  if (KNOWN_FILES.has(lowerName)) {
    return <FileTextOutlined />;
  }

  if (name.startsWith('.')) {
      return <FileTextOutlined />;
  }

  const dotIndex = lowerName.lastIndexOf('.');
  if (dotIndex !== -1) {
      const ext = lowerName.substring(dotIndex);
      if (TEXT_EXTENSIONS.has(ext)) {
          return <FileTextOutlined />;
      }
      return <FileOutlined />;
  }

  return <FileOutlined />;
};

function cleanTree(nodes: FileNode[]) {
  for (const node of nodes) {
    if (node.children) {
      if (node.children.length === 0) {
        delete node.children;
      } else {
        cleanTree(node.children);
      }
    }
  }
}

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

    let isFolder = false;
    if (name.endsWith('/')) {
        isFolder = true;
        name = name.substring(0, name.length - 1);
    }

    let description: React.ReactNode | undefined = undefined;
    if (comment.length > MAX_INLINE_COMMENT_LENGTH) {
      description = comment;
    }

    const node: FileNode = { name, comment: comment || undefined, description, children: [], isFolder };

    while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];
    parent.nodes.push(node);

    stack.push({ indent, nodes: node.children! });
  }
  
  cleanTree(root);
  return root;
}

function injectDescriptions(nodes: FileNode[], descriptions: Record<string, React.ReactNode>, parentPath: string = ''): FileNode[] {
  return nodes.map(node => {
      const currentPath = parentPath ? `${parentPath}/${node.name}` : node.name;
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

const startViewTransition = (callback: () => void) => {
  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
    (document as any).startViewTransition(() => {
      flushSync(callback);
    });
  } else {
    callback();
  }
};

const getIconColorClass = (hasChildren: boolean, isExplicitFolder: boolean | undefined, iconType: any) => {
  if (hasChildren || isExplicitFolder || iconType === FolderOutlined || iconType === FolderOpenOutlined) {
    return "text-[var(--ifm-color-primary)]";
  }
  return "text-[var(--ifm-color-emphasis-700)]";
};

const NodeItem = React.memo(({
  node,
  path,
  onSelect,
  selectedPath,
}: {
  node: FileNode;
  path: string;
  onSelect: (path: string) => void;
  selectedPath: string | null;
}): React.ReactElement => {
  const currentPath = `${path}/${node.name}`;
  const hasChildren = Boolean(node.children && node.children.length);
  const hasDescription = Boolean(node.description);
  const isExplicitFolder = node.isFolder;
  
  const [expanded, setExpanded] = useState(true);
  const [showDesc, setShowDesc] = useState(false);

  const handleMainClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(currentPath);
    
    startViewTransition(() => {
      if (hasChildren) {
        setExpanded(prev => !prev);
      }
      if (hasDescription) {
        setShowDesc(prev => !prev);
      }
    });
  };

  const handleChevronClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    startViewTransition(() => {
      setExpanded(prev => !prev);
    });
  };

  let Icon = node.icon;
  if (!Icon) {
    if (hasChildren) {
      Icon = expanded ? <FolderOpenOutlined /> : <FolderOutlined />;
    } else if (isExplicitFolder) {
      Icon = <FolderOutlined />;
    } else {
      Icon = getIcon(node.name);
    }
  }

  const isSelected = selectedPath === currentPath;
  const iconColorClass = getIconColorClass(hasChildren, isExplicitFolder, (Icon as React.ReactElement)?.type);

  return (
    <li className="my-[2px] !list-none">
      <div
        className={clsx(
          "flex items-center py-1 px-2 cursor-pointer rounded transition-colors duration-200 font-mono text-sm w-full group select-none",
          isSelected 
            ? "bg-[var(--ifm-color-emphasis-200)] text-[var(--ifm-color-emphasis-900)] dark:bg-[var(--ifm-color-emphasis-100)] dark:text-[var(--ifm-color-emphasis-900)]" 
            : "hover:bg-[var(--ifm-color-emphasis-100)]"
        )}
        onClick={handleMainClick}
      >
        <span 
            className="mr-1 flex items-center justify-center w-4 h-4 shrink-0 text-[var(--ifm-color-emphasis-400)] hover:text-[var(--ifm-color-primary)] transition-colors"
            onClick={hasChildren ? handleChevronClick : undefined}
        >
            {hasChildren && (
                expanded ? <DownOutlined className="text-[10px]" /> : <RightOutlined className="text-[10px]" />
            )}
        </span>

        <span className={clsx(
            "mr-2 flex items-center shrink-0",
            iconColorClass
        )}>
          {Icon}
        </span>

        <span className="font-medium whitespace-nowrap shrink-0">
          {node.name}
        </span>
        {node.comment && (
          <span className="ml-2 text-[var(--ifm-color-emphasis-600)] text-xs whitespace-nowrap overflow-hidden text-ellipsis flex-1 min-w-0">
            // {node.comment}
          </span>
        )}
        {hasDescription && (
          <InfoCircleOutlined 
            className={clsx(
              "ml-2 text-[var(--ifm-color-primary)] p-1 shrink-0 transition-opacity",
              "opacity-70 group-hover:opacity-100"
            )} 
          />
        )}
      </div>
      
      {hasDescription && showDesc && (
        <div className="ml-[2.2rem] my-2 p-3 bg-[var(--ifm-color-emphasis-100)] rounded text-sm leading-relaxed border-l-4 border-[var(--ifm-color-primary)]">
          {node.description}
        </div>
      )}

      {hasChildren && expanded && (
        <ul className="list-none p-0 m-0 pl-[1.2rem] border-l border-[var(--ifm-color-emphasis-200)] ml-[0.6rem]">
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
});

NodeItem.displayName = 'NodeItem';

export function FileTree({ nodes, children, descriptions }: FileTreeProps): React.ReactElement {
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

  const handleSelect = useCallback((path: string) => {
    setSelectedPath(path);
  }, []);

  return (
    <div className="border border-[var(--ifm-color-emphasis-200)] rounded-[var(--ifm-global-radius)] bg-[var(--ifm-background-surface-color)] my-6 p-4 overflow-hidden">
      <ul className="list-none p-0 m-0 !pl-0">
        {treeData.map((node) => (
          <NodeItem
            key={node.name}
            node={node}
            path={ROOT_PATH}
            onSelect={handleSelect}
            selectedPath={selectedPath}
          />
        ))}
      </ul>
    </div>
  );
}
