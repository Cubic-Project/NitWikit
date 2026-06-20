---
title: 记录 - CoreProtect
---

:::note

`Bukkit` https://dev.bukkit.org/projects/coreprotect

`SpigotMC` https://www.spigotmc.org/resources/coreprotect.8631/

`Modrinth` https://modrinth.com/plugin/coreprotect

`GitHub` https://github.com/PlayPro/CoreProtect

`插件百科` https://mineplugin.org/CoreProtect

:::

:::tip

CoreProtect 的开发团队（PlayPro）将预编译的开发版（Development Builds）作为 Patreon 赞助者的专属福利。这意味着，支持 Minecraft 最新版本的更新会率先提供给赞助者，普通用户无法直接下载到对应版本的.jar 文件。

:::


## 手动构建


## 安装所需软件

[安装 Java 25](/general/java/choose-and-download-and-install-java/)

[安装 Maven](https://www.cnblogs.com/ljbguanli/p/19334249)

## 克隆仓库

你需要有良好的网络。然后就可以克隆仓库：

```
git clone https://github.com/PlayPro/CoreProtect.git
```

然后定位到此文件夹：

```
cd CoreProtect
```

### 设置分支标识

:::caution

CoreProtect 社区版（CE）在启动时会检查 `branch` 属性，必须设为 `development` 才能正常启用。 

:::

在编译前需要修改 `pom.xml`，在 `<properties>` 区域内修改为以下行：
```xml
<project.branch>development</project.branch>
```

### 确认 Java 版本

该项目使用了较新的 Java 类文件格式，必须使用 JDK 25 或更高才能成功编译。

```
java -version
```

如果不是 25，请安装并配置好 `Java` 环境。

### 执行构建

在项目根目录下运行：

```
mvn clean package
```

### 获取插件

编译成功后，就可以在 `/target` 目录下找到对应的 `.jar` 文件。

:::note

插件名称的格式为：`CoreProtect-xx.x.jar`。

:::

![](../../_assets/target文件夹.png)

## 使用别人的构建

如果你不想自己构建，你可以到 [CoreProtect-AutoBuild](https://github.com/Midnight-2004/CoreProtect-AutoBuild) 仓库下载对应的构建。

:::danger

这是一个非官方的自动构建产物，安全性和功能完整性没有任何保证，可能包含后门、被篡改的代码！

:::
