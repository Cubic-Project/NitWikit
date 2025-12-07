---
title: ViaProxy
sidebar_position: 10
---

# ViaProxy

:::info

`GitHub` https://github.com/ViaVersion/ViaProxy

`下载` https://github.com/ViaVersion/ViaProxy/releases

`Jenkins` https://ci.viaversion.com/view/All/job/ViaProxy/

`Docker` https://github.com/ViaVersion/ViaProxy/pkgs/container/viaproxy

`插件 Wiki` https://github.com/ViaVersion/ViaProxy/wiki/Plugins

:::

ViaProxy 是一个独立的代理程序，允许玩家使用任意客户端版本连接到任意服务器版本，包括 Classic、Alpha、Beta、正式版和基岩版。

:::tip

ViaProxy 是独立程序，不是服务器插件。它运行在客户端和服务器之间，充当协议转换代理。

:::

## 支持版本

### 服务器版本

- Release (1.0.0 - 1.21.8)
- Beta (b1.0 - b1.8.1)
- Alpha (a1.0.15 - a1.2.6)
- Classic (c0.0.15 - c0.30 包含 [CPE](https://wiki.vg/Classic_Protocol_Extension))
- 愚人节快照 (3D Shareware，20w14infinite，25w14craftmine)
- 战斗测试快照 (Combat Test 8c)
- 基岩版 1.21.93 ([某些功能缺失](https://github.com/RaphiMC/ViaBedrock#features))
- Snapshots 15w31a/15w31b (需要 [ViaSnapshot](https://github.com/ViaVersionAddons/ViaSnapshot) 插件)

### 客户端版本

- Release (1.7.2 - 1.21.8)
- Beta 1.7.3 (需要 [ViaProxyBeta2Release](https://github.com/ViaVersionAddons/ViaProxyBeta2Release))
- 基岩版 (需要 [Geyser](/Java/Geyser) 插件)
- Classic/Alpha/Beta/1.0-1.6.4 (仅透传模式)
- EaglerCraft (需要 [ViaProxyEaglerCraft](https://github.com/Oryxel/ViaProxyEaglerCraft) 插件)

## 下载

官方发布页面：[GitHub Release](https://github.com/ViaVersion/ViaProxy/releases)

Jenkins 构建：[ViaVersion Jenkins](https://ci.viaversion.com/view/All/job/ViaProxy/)

Docker 镜像：[GitHub Packages](https://github.com/ViaVersion/ViaProxy/pkgs/container/viaproxy)

## 使用方法

### GUI 模式 (推荐)

1. 下载 JAR 文件并放入文件夹
2. 双击运行 JAR 文件
3. 填写服务器地址和版本信息
4. 如需加入正版服务器，在 Accounts 标签页添加账户
5. 点击 "Start" 启动代理
6. 使用显示的地址连接服务器

### CLI 模式

```bash
java -jar ViaProxy-版本.jar cli --help
```

### 配置文件模式

```bash
java -jar ViaProxy-版本.jar config viaproxy.yml
```

## ViaProxy 插件

ViaProxy 支持插件扩展功能。将插件 JAR 文件放入 `plugins` 文件夹即可。

## FAQ

### 能否使用高版本物品功能？

高版本物品会被替换为相似的低版本物品显示，但无法享受高版本物品的完整功能。

### ViaProxy 与服务器端 Via 插件有什么区别？

ViaProxy 是独立程序，运行在客户端侧，支持全版本和基岩版；服务器端 Via 插件安装在服务器上，受服务器版本限制但适合生产环境。

### 如何安装插件？

将插件 JAR 文件放入 ViaProxy 的 `plugins` 文件夹，重启 ViaProxy 即可。

:::warning

ViaProxy 主要用于版本兼容性测试和特殊需求场景。对于生产环境，建议使用服务器端的 Via 插件套件。

:::
