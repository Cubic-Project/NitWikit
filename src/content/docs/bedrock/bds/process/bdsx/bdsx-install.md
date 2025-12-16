---
title: BDSX 安装教程
sidebar_position: 1
---

# BDSX 安装教程

## 前提要求

你需要在电脑上准备：

- 最新版 [Node.js](https://nodejs.org/zh-cn)
- [VS Code](https://code.visualstudio.com/) 编辑器
- 可选：[Git](https://git-scm.com/download)

当前教程假设操作环境：Windows

## 方法一：直接下载启动

前往 BDSX 开源仓库：[GitHub](https://github.com/bdsx/bdsx)

1.如果未安装 Git，请点击 `<>code` 按钮然后在显示的菜单中点击 `Download ZIP` 下载已经用 zip 打包好的源代码文件；

2.如果安装了 Git，请使用 `cmd` cd 到一个空白文件夹后使用以下指令安装。

```bash
git clone https://github.com/bdsx/bdsx.git
```

然后安装最新版 [Node.js](https://nodejs.org/zh-cn)，安装完后打开 `cmd` 使用该指令检测是否成功安装：`npm -version`

显示以下内容即代表安装成功 (本人当前安装 Node.js 版本为 10.8.1)：

```text
10.8.1
```

提醒⏰：如果选用的 `第一步` 请将下载好 zip 文件后找到一个空白文件夹后使用解压文件解压源代码

接下来右键 `bdsx.bat` 使用管理员权限运行，它将会为我们安装好需要的前置文件并开服

需要开服也是右键 `bdsx.bat` 使用管理员权限运行即可

## 方法二：使用 VS Code 调试与运行

:::danger

该方案极其不建议，可能会出现很多离谱问题！
如果你想尝试使用该方案，请联系 BDSX 的 Discord 频道相关开发者并在他们的指导下进行！

:::

下载源代码方法请详见 **方法一**

如果需要使用 VS Code 启动 BDSX，您需要

1. 使用 VS Code 打开此项目
2. 安装 Node Debug (legacy)。您可以在右下方看到建议通知框。
3. 打开终端（Ctrl + Shift + ｀）
4. 运行 `npm i` 来安装 NPM 包与 BDS
5. 按下 `F5` 以构建并运行
