---
title: Slime 世界格式
sidebar_position: 9
---

# Slime 世界格式

Slime 世界格式是 Hypixel 开发的一种世界存储格式

优势

- 使用 zstd 替换 zlib，大大优化体积和加载速度
- 支持数据库作为加载后端，多服小游戏非常有用
- 支持 readonly，玩完就没
- 预加载到内存当中，玩家不会因为加载卡顿

适合的服务器：

- 不适用于大型生存世界，而是适用于小型世界，如 **迷你游戏地图或服务器大厅**

## 下载

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="mcver">
<TabItem value="new" label="1.20.4+">

前往 [GitHub Release](https://github.com/InfernalSuite/AdvancedSlimePaper/releases)，找到适合的版本下载即可

- `plugin-***-R0.1-SNAPSHOT.1.jar` ASM 的插件版本 (推荐)
- `asp-server.jar` ASM 的独立服务器核心版本 (基于 Paper)
- `importer-***-R0.1-SNAPSHOT.jar` ASM 独立的导入工具，可以将原版世界格式转为 SRF 格式

</TabItem>
<TabItem value="old" label="1.8">

前往 [GitHub Release](https://github.com/Swofty-Developments/Continued-Slime-World-Manager/releases)，下载最新版

- 下载`swoftyworldmanager-plugin-<version>.jar` 到插件目录
- 下载`swoftyworldmanager-classmodifier-<version>.jar` 到服务器根目录

添加启动参数

```text
-javaagent:swoftyworldmanager-classmodifier-<version>.jar
```

- 你可以使用 `swoftyworldmanager-importer-<version>.jar` 来导入原版世界格式到 SRF 格式

</TabItem>
</Tabs>

## 配置

这部分会教你如何配置 Slime 世界

### 世界配置选项

例子：

```yaml
worlds:
    my_great_world:
        source: mongodb
        loadOnStartup: false
        readOnly: true
        spawn: 940, 2, -370
        allowMonsters: false
        allowAnimals: false
        difficulty: peaceful
        pvp: false
        environment: NORMAL
        worldType: default
```

**`source`** 存储世界的数据源名称

可用选项：`file`,`mysql`,`mongodb`，也可以使用第三方插件提供的其他数据源。

`loadOnStartup` 服务器启动时是否应加载世界

可用选项：`true` 和 `false`

**`readOnly`** 只读选项

描述：如果为`true`，对世界的更改将永远不会被存储。如果为`false`，世界将被锁定，因此其他服务器无法在 **没有处于只读模式** 的情况下 **访问它**

:::tip

简单的来说，如果你需要使用一些黑魔法，比如通过数据库跨服同步世界，你需要将`readOnly` 设置为`true`

这亦是 Slime 格式适合小游戏服的一个重要原因

:::

**`spawn`** 世界的生成坐标

默认为：`0, 255, 0`

**`environment`** 世界环境

可用选项：`normal`,`nether`,`the_end`

**`worldType`** 世界类型

可用选项：`default`,`flat`,`large_biomes`,`amplified`,`customized`,`debug_all_block_states`,`default_1_1`

其他选项看名字就知道啥意思了，就不介绍了

### 数据源配置

在使用数据库存储你的世界之前，你必须对其进行配置，配置在`sources.yml` 中，例子：

```yaml
file:
    # 存储世界的路径
    path: slime_worlds
mysql:
    enabled: true
    host: 127.0.0.1
    port: 3306
    username: my_mysql_username
    password: my_mysql_password
    database: slimeworldmanager
mongodb:
    enabled: true
    host: 127.0.0.1
    port: 27017
    username: my_mongo_username
    password: my_mongo_password
    auth: admin
    database: slimeworldmanager
    collection: worlds
```

:::note

如果你要使用 MySQL 或 MongoDB，请将对应选项的 `enabled` 设为 `true`

:::

## 命令

请查阅官方 [Wiki](https://infernalsuite.com/docs/asp/swp/commands)

[1.8 版本 Wiki](https://github.com/Swofty-Developments/Continued-Slime-World-Manager/blob/develop/.docs/usage/commands-and-permissions.md)

## 转换世界

请查阅官方 [Wiki](https://infernalsuite.com/docs/asp/swp/converting_worlds)

[1.8 版本 Wiki](https://github.com/Swofty-Developments/Continued-Slime-World-Manager/blob/develop/.docs/config/convert-world-to-srf.md)

## 异步世界生成

:::warning

该功能仅限 1.8 版本

:::

在配置文件中打开 `enable_async_world_gen` 选项即可

## FAQ

### 可以覆盖默认世界吗？

完全可以

### Slime 与 Multiverse-Core 兼容吗？

Multiverse-Core 会检测到 Slime 世界为未加载状态，因为它找不到世界目录，然后直接忽略它们。不应该有任何问题；然而，Multiverse-Core 无法与 Slime 世界一起使用。

### Slime 有世界大小限制吗？

有，Slime 可以处理高达 46340x4630 块区域。这是 Slime 理论上可以处理的最大的尺寸，前提是有足够的内存。然而，拥有如此大的世界根本不推荐。
