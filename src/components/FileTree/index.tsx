import React, { useState } from 'react';
import { FolderOpenOutlined, FolderOutlined, FileOutlined, FileTextOutlined } from '@ant-design/icons';
import clsx from 'clsx';

interface FileTreeProps {
  children: React.ReactNode;
  className?: string;
}

interface ItemProps {
  name: string;
  comment?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

const FileTreeContext = React.createContext<{ level: number }>({ level: 0 });

export function FileTree({ children, className }: FileTreeProps) {
  return (
    <div className={clsx("border border-border rounded-lg bg-surface-1/30 p-4 font-mono text-sm overflow-x-auto", className)}>
      <FileTreeContext.Provider value={{ level: 0 }}>
        <div className="flex flex-col gap-1">
          {children}
        </div>
      </FileTreeContext.Provider>
    </div>
  );
}

function Folder({ name, comment, children, defaultOpen = true }: ItemProps) {
  const { level } = React.useContext(FileTreeContext);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col">
      <div 
        className="flex items-center gap-2 py-1 hover:bg-surface-2/50 rounded cursor-pointer select-none"
        style={{ paddingLeft: `${level * 1.5}rem` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-text-secondary">
          {isOpen ? <FolderOpenOutlined /> : <FolderOutlined />}
        </span>
        <span className="font-medium text-text-primary">{name}</span>
        {comment && <span className="text-text-muted text-xs ml-2">// {comment}</span>}
      </div>
      {isOpen && children && (
        <FileTreeContext.Provider value={{ level: level + 1 }}>
          <div className="flex flex-col gap-1 border-l border-border/30 ml-[calc(0.5rem+3px)]">
             {/* Adjust margin to align with the folder icon center roughly, or just use padding */}
             {/* Actually, the level padding in children handles indentation. 
                 But to draw lines, we might need more complex CSS. 
                 For now, let's stick to simple indentation. */}
             {children}
          </div>
        </FileTreeContext.Provider>
      )}
    </div>
  );
}

function File({ name, comment }: ItemProps) {
  const { level } = React.useContext(FileTreeContext);
  
  return (
    <div 
      className="flex items-center gap-2 py-1 hover:bg-surface-2/50 rounded select-text"
      style={{ paddingLeft: `${level * 1.5}rem` }}
    >
      <span className="text-text-secondary">
        <FileTextOutlined />
      </span>
      <span className="text-text-primary">{name}</span>
      {comment && <span className="text-text-muted text-xs ml-2">// {comment}</span>}
    </div>
  );
}

FileTree.Folder = Folder;
FileTree.File = File;

export default FileTree;
