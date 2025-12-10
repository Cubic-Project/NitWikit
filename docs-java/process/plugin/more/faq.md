---
title: 常见问题
sidebar_position: 8
---

# 常见问题

一些常见的插件安装问题

## 缺失依赖项

特征：

<!--markdownlint-disable line-length-->

```text
[00:00:00] [Server thread/WARN] Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'
[00:00:00] [Server thread/WARN] org.bukkit.plugin.UnknownDependencyException: Unknown/missing dependency plugins: [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.
```

<!--markdownlint-disable line-length-->

这意味着你安装的插件缺少一个依赖项。在这个情况下，依赖项是指你必须安装的另一个插件，以便第一个插件能够运行

这是在告诉你，为了加载 `MyAwesomePlugin` ，你必须首先安装 `Vault`.

## 无效 `plugin.yml`

特征：

<!--markdownlint-disable line-length-->

```text
[00:00:00] [Server thread/WARN] Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'
[00:00:00] [Server thread/WARN] org.bukkit.plugin.InvalidDescriptionException: Invalid plugin.yml
```

<!--markdownlint-disable line-length-->

这意味着你下载的不是一个有效的插件。这通常是由以下原因之一引起的：

- 你下载的插件根本不是插件，而是 Forge、Fabric 或类似软件的 mod。这些在插件端上无法运行
- 插件下载不完整，重新下载即可

## Java 版本低

特征

<!--markdownlint-disable line-length-->

```text
org.bukkit.plugin.InvalidPluginException: java.lang.UnsupportedClassVersionError: me/profelements/dynatech/DynaTech has been compiled by a more recent version of the Java Runtime (class file version 65.0), this version of the Java Runtime only recognizes class file versions up to 61.0
```

<!--markdownlint-disable line-length-->

这通常是因为你安装 Java 版本过低

`has been compiled by a more recent version of the Java Runtime (class file version <Class 版本>)` 就是你需要更新到的 Java 版本

常用 Class Version 对应表

| Java 版本 | Class 文件版本 |
| --------- | -------------- |
| Java 7    | 51.0           |
| Java 8    | 52.0           |
| Java 11   | 55.0           |
| Java 16   | 60.0           |
| Java 17   | 61.0           |
| Java 21   | 65.0           |
| Java 22   | 66.0           |
| Java 23   | 67.0           |
| Java 24   | 68.0           |

## 循环依赖

指的是 A 依赖 B、B 依赖 C、C 依赖 A，导致 Paper 无法判断加载顺序

解决方案：添加参数 `-Dpaper.useLegacyPluginLoading=true` 即可

## 重复插件

特征：

<!--markdownlint-disable line-length-->

```text
[00:00:00] [Server thread/WARN] Ambiguous plugin name `Essentials' for files `plugins/EssentialsX-2.19.4.jar' and `plugins/Essentialsx-2.20.0-dev.jar' in `plugins'
```

<!--markdownlint-disable line-length-->

这意味着你有两个同名插件。确保你一次只安装每个插件的单一版本。删除重复插件的旧版本，并重新启动你的服务器。
