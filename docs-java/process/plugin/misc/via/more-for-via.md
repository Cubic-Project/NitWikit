---
sidebar_position: 5
---

# Via 进阶

学会更多关于 via 的知识

## AxSmithing

:::info

`SpigotMC` https://www.spigotmc.org/resources/.112793

`Hangar` https://hangar.papermc.io/Artillex-Studios/AxSmithing

`Modrinth` https://modrinth.com/plugin/axsmithing

`GitHub` https://github.com/ViaVersionAddons/AxSmithing

:::

在 1.20 中，sb Mojang 在锻造台上添加了一个新的 UI (也就是添加了锻造模板)，如果你的 1.16-1.19 服务器运行 ViaBackwards，那么 1.20+ 玩家将无法打开锻造台。
同样的事情在 1.20+ 服务器和 1.16-1.19 客户端上也是如此。该插件还使 1.7-1.15 客户端能够打开锻造台。(你可以恢复到旧的 1.16-1.19 锻造台，不需要下界升级锻造模板)

## ViaChatFixer

:::info

`SpigotMC` https://www.spigotmc.org/resources/.61955

`GitHub` https://github.com/ViaVersionAddons/ViaChatFixer

:::

在 Minecraft 1.11 中，最大消息长度已从 100 个字符增加到 256 个字符。因此，如果你的服务器低于 1.11、1.11 及更高版本 玩家的聊天消息将被剪成 100 个字符。

此插件解决了这个问题，因此 1.11 及更高版本的玩家将能够发送长达 256 个字符的更长的聊天消息。

## ViaBackwards-Plus

:::info

`Modrinth` https://modrinth.com/resourcepack/vb+

`GitHub` https://github.com/ViaVersionAddons/ViaBackwards-Plus

:::

这个**材质包**通过 ViaBackwards 插件增强游戏体验，允许玩家使用较旧的客户端连接到较新的服务器时正确显示新版本物品的材质。

**支持版本：** 1.16.2+ (客户端) 连接到更高版本服务器

**主要特性：**

- 向后移植新版本物品、方块和实体的材质
- 支持与其他资源包叠加使用（会从上层资源包加载材质）
- 提供两个版本以满足不同需求

### V2 版本（推荐）

基于 Minecraft 1.21.4+ 原版物品定义系统

**使用方法：**

1. 下载 V2 版本资源包
2. 放入客户端 `.minecraft/resourcepacks` 文件夹或服务端
3. 在游戏中启用资源包
4. 连接到使用 ViaBackwards 的服务器即可

### V1 版本（传统版本）

需要 Chime 模组或 Optifine CIT

**依赖要求：**

- **Chime 模组**：提供快速高效的物品识别
- **或 Optifine CIT**：传统的自定义物品材质支持

**使用方法：**

1. 安装 [Chime 模组](https://modrinth.com/mod/chime) 或 Optifine
2. 下载 V1 版本资源包
3. 放入客户端 `.minecraft/resourcepacks` 文件夹或服务端
4. 在游戏中启用资源包

:::tip

不支持 Sodium

:::

## ViaVersion Texture Fix (VVTF)

:::info

`Modrinth` https://modrinth.com/resourcepack/viaversiontexturefix

:::

另一个材质包选择，专门为 1.8.9 和 1.12.2 版本设计，添加 1.13-1.21 的物品、生物和方块材质。

**支持版本：** 1.8.9 和 1.12.2

**依赖要求：** 需要 Optifine

为旧版本客户端添加新版本的物品、方块和实体材质

## ViaAprilFools

:::info

`Hangar` https://hangar.papermc.io/ViaVersion/ViaAprilFools

`Modrinth` https://modrinth.com/plugin/viaaprilfools

`GitHub` https://github.com/ViaVersion/ViaAprilFools

`文档` https://modwiki.miraheze.org/wiki/ViaAprilFools

:::

这个插件允许愚人节版本加入服务器

## AutoViaUpdater

:::info

`SpigotMC` https://www.spigotmc.org/resources/.109331

`GitHub` https://github.com/NewAmazingPVP/AutoViaUpdater

:::

这个插件可以自动帮你更新 Via，从而帮你摆脱了玩家骚扰

功能：

- 与 Minecraft 1.8 及更高版本兼容 Spigot/Velocity/BungeeCord，包括最新版本。
- 自动从 Jenkins 下载 ViaVersion、ViaBackwards、ViaRewind 和 ViaRewind-Legacy-Support 的成功版本及其开发版本。
- config.yml 允许你指定要更新的 Via 以及是否使用每个插件的开发版本。
- /updatevias 命令强制更新检查器对所有 Via(需要 autoviaupdater.admin 权限)

[下载地址](https://www.spigotmc.org/resources/autoviaupdater.109331/)
