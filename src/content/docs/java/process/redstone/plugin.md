---
title: 插件端
---

从原版特性方面来讲，插件端其实并不适合原版生电，Paper 文档中也说明了这一点：

`Unfortunately, it currently is not possible to get a 100% Vanilla experience in Paper.`

`遗憾的是，目前在 Paper 中无法获得 100% 的原版体验。`

但插件端广阔的插件生态以及较好的优化也是一些人在 **轻度生电** 的情况下使用插件端的原因。这篇文档会通过调整服务端配置尽可能在插件端还原原版特性和相关行为，以贴合轻度生电或原版生存体验。

:::note

本篇文档所列配置项均基于对应核心的最新 MC 版本。

文中提供的推荐值未必完全适用于您的服务器，复制粘贴并不可取，请根据实际情况和需求来酌情调整服务端配置。

:::

## Paper

### Paper 世界默认配置

```yaml
# paper-world-defaults.yml
chunks:
    # 延迟卸载区块的时间，格式为带有单个时间单位的数字，例如 10h（小时）、25m（分钟），支持 d、h、m 和 s 单位
    # 设为 0s，以允许使用末影珍珠滞留回传装置
    delay-chunk-unloads-by: 0s
    # 每 tick 自动保存的最大区块数
    max-auto-save-chunks-per-tick: 200
collisions:
    # 当玩家因实体过多而发生拥挤碰撞时是否会受到伤害
    allow-player-cramming-damage: true
    # 达到此数量后服务器将停止处理实体碰撞
    # 设为 2147483647 或极高的值，以尽可能的处理密集实体碰撞，可能会降低性能
    max-entity-collisions: 2147483647
entities:
    behavior:
        # 是否为蜜蜂离巢尝试添加失败冷却时间
        # 原版中，蜜蜂会不断检测蜂巢是否被方块阻挡和天气，以检查是否能离开蜂巢
        # 设为 false，以确保蜜蜂在符合条件时马上离巢，如阻挡蜂巢的栅栏门被打开
        cooldown-failed-beehive-releases: false
        # 是否仅合并高度相同的掉落物
        only-merge-items-horizontally: true
        # 是否禁止幻翼在创造模式玩家的周围生成
        phantoms-do-not-spawn-on-creative-players: false
        # 幻翼是否只攻击长期不睡觉的玩家
        phantoms-only-attack-insomniacs: false
        # 当实体被困住时，重新获取 POI 点操作的冷却延迟时间（单位：tick）
        # 设为 disabled，不施加额外的冷却延迟
        stuck-entity-poi-retry-delay: disabled
    spawning:
        # 箭的最大清除时间（单位：tick）
        # 设为 disabled，不断运动中的箭将不会被清除，允许使用以此机制实现的区块加载器或其他装置
        # 同时玩家可使用此机制制造卡服机
        max-arrow-despawn-invulnerability: disabled
        # 是否将由刷怪笼生成的生物和其他杂项实体计入全局生物生成上限
        count-all-mobs-for-spawning: true
        duplicate-uuid:
            # 指定处理重复 UUID 的实体的方式，支持以下方式
            # SAFE_REGEN（重新分配 UUID，如果实体相似则删除）
            # DELETE（删除实体）
            # NOTHING（不处理，不输出日志）
            # WARN（不处理，仅输出日志）
            mode: NOTHING
        # 是否从下落方块中移除特定 NBT 数据（注意：有些冒险地图可能需要关闭此项，但公共服务器不建议关闭）
        filter-bad-tile-entity-nbt-from-falling-blocks: false
        # 需要从物品的 EntityTag 中移除的 NBT 标签列表，标签格式与在原版命令中使用的相同
        # 设为空列表，以禁用移除
        filtered-entity-tag-nbt-paths: []
        # 生物生成上限是否按每位玩家计算（开启后生物分布更均匀，避免单个玩家占用全部生成上限）
        # 设为 false，以遵循原版的生成机制
        per-player-mob-spawns: false
fixes:
    # 是否修复掉落物合并穿墙
    # 仅推荐 spigot.yml 内 merge-radius.item 的值较高的时候使用
    # 设为 true, 非原版，但是可能会对生电机器有用
    fix-items-merging-through-walls: true
hopper:
    # 是否在漏斗满时应用短暂冷却，避免持续尝试吸取新物品
    cooldown-when-full: false
maps:
    # 每个地图允许的最大指针（标记）数量，过多的标记会导致客户端卡顿
    item-frame-cursor-limit: 2147483647
misc:
    # 是否禁用末影龙重生前检查末影水晶放置位置的优化
    # 设为 true，以允许远程复活末影龙，和使用屠龙炮等机制
    allow-remote-ender-dragon-respawning: true
    # 是否在方块更新的同时更新附近生物寻路
    # 设为 true，以确保强依赖方块改动更新生物寻路的生电机器能正常工作
    update-pathfinding-on-block-update: true
scoreboards:
    # 是否将非玩家实体始终视为在记分板的队伍里
    # 设为 true，以兼容一些数据包的功能
    allow-non-player-entities-on-scoreboards: true
    # 是否使用原版记分板的玩家昵称着色（对为原版客户端制作的冒险地图有用）
    # 设为 true，以兼容一些数据包的功能
    use-vanilla-world-scoreboard-name-coloring: true
unsupported-settings:
    # 当世界中无玩家或无强制加载区块时，是否暂停该世界的 tick 运算
    disable-world-ticking-when-empty: true
    # 是否修复无敌末地水晶漏洞（MC-108513）
    fix-invulnerable-end-crystal-exploit: false
```

### Paper 全局配置

:::caution

以下 `paper-global.yml` 的某些推荐值可能会导致严重问题，开启时请认真考虑，如：

`item-validation` 下的配置值若过高，将允许玩家制作并使用禁人物品，可用来恶意踢出其他玩家或者复制物品。

`packet-limiter.interval` 的值若为 `-1` 或其他极高的值，可能存在被发包攻击，卡服的风险。

:::

```yaml
# paper-global.yml
commands:
    # 当按 Tab 键补全且没有其他选项时，是否返回在线玩家名称列表
    suggest-player-names-when-null-tab-completions: false
    # /time 命令是否作用于所有世界，否则只作用于执行者所在的世界
    time-command-affects-all-worlds: true
item-validation:
    book:
        # 书作者名的最大长度（单位：字符）
        author: 214748364
        # 书的最大页数（单位：字符）
        page: 2147483647
        # 书名的最大长度（单位：字符）
        title: 2147483647
    book-size:
        # 书单页允许的最大字节数
        # 设为 disabled，以禁用此限制
        page-max: disabled
    # 物品显示名称的最大长度（单位：字符）
    display-name: 2147483647
    # 物品自定义描述信息每行的最大长度（单位：字符）
    lore-line: 2147483647
    # 是否解析书中命令选择器（开启后给予创造模式物品时可能导致服务器崩溃）
    resolve-selectors-in-books: true
misc:
    # 是否修复末地超远距离的地形生成问题（MC-159283）
    # 设为 false，以允许生成末地环
    fix-far-end-terrain-generation: false
    # 每个 tick 允许的最大加入玩家数，超出则延迟加入（与 bukkit.yml 中的连接节流无关）
    max-joins-per-tick: 2147483647
packet-limiter:
    # 将以下 all-packets 和 overrides 内数据包的 interval 设为 -1
    # 以允许使用一些生电辅助 mod 的功能，如打印机，快速合成等
    all-packets:
        # 最大数据包速率生效的时间间隔（单位：秒）
        interval: -1
    # 设置特定数据包的速率生效的时间间隔
    #（可视具体情况来禁用特定数据包的速率限制）
    overrides:
        minecraft:place_recipe:
            interval: -1
spam-limiter:
    # 收到的数据包超过此阈值时视为垃圾流量并忽略
    # 设为 disabled，以禁用此阈值限制
    incoming-packet-threshold: disabled
unsupported-settings:
    # 是否允许生成无头活塞（通常用于破坏不可破坏的方块）
    allow-headless-pistons: true
    # 是否允许使用原版漏洞破坏基岩、末地门框架、末地传送门方块等原版中不可破坏的方块
    allow-permanent-block-break-exploits: true
    # 是否允许复制 TNT、地毯和铁轨（不包括沙子）
    allow-piston-duplication: true
    # 是否允许利用末地传送门漏洞进行传送
    # 设为 true，以允许使用沙子复制
    allow-unsafe-end-portal-teleportation: true
    # Paper 物品混淆的过大物品序列化器是否跳过以下物品组件
    # 设为以下配置，以确保一些数据包中物品模型的视觉效果和在原版的效果一致
    oversized-item-component-sanitizer:
        dont-sanitize:
            - minecraft:container
            - minecraft:charged_projectiles
            - minecraft:bundle_contents
    # 是否验证用户名
    # 设为 false，以允许用户名包含特殊字符，但可能导致命令或插件问题
    perform-username-validation: false
    # 是否跳过绊线钩放置校验
    # 设为 true，以允许使用拌线钩复制
    skip-tripwire-hook-placement-validation: true
    # 在使用盾牌格挡时，是否跳过原版的伤害 tick 计算
    #
    # 之前，很多 PVP 玩家利用了在 Spigot 及其下游的一个长久以来的问题：
    # 当玩家使用盾牌格挡时不会获得免疫伤害的无敌帧效果，这与原版行为不一致
    # 玩家能够利用这种机制暂时“禁用”对方的格挡，并将其击退到空中，这成为 1.9+ PVP 的一种独特玩法
    #
    # 设为 true，以允许使用此盾牌眩晕机制（Shield Stunning）
    skip-vanilla-damage-tick-when-shield-blocked: true
    # 是否在玩家执行动作时更新装备
    # 设为 false，以允许使用属性切换漏洞
    update-equipment-on-player-actions: false
```

### spigot.yml 配置

```yaml
# spigot.yml
world-settings:
    default:
        # 实体激活范围
        # 将全部或部分生物设为 -1，以忽略对应生物的激活范围限制
        entity-activation-range:
            animals: -1
            monsters: -1
            raiders: -1
            misc: -1
            water: -1
            villagers: -1
            flying-monsters: -1
        # 实体追踪范围
        # 由于 Spigot 的可配置生物追踪范围的侵入性更改，无法直接恢复到原版行为
        # 将全部或部分生物设为以下推荐值，以尽可能贴合原版的追踪范围
        entity-tracking-range:
            players: 512
            animals: 160
            monsters: 256
            misc: 160
            display: 160
            other: 512
```

### bukkit.yml 配置

```yaml
# bukkit.yml
settings:
    # 生物生成限制
    # bukkit.yml 内默认值即遵从原版的单区块生成上限数值
    # 如觉得生成过少导致农场效率过低，可以适当调高相应生物类别的生成限制值
    spawn-limits:
        monsters: 70
        animals: 10
        water-animals: 5
        water-ambient: 20
        water-underground-creature: 5
        axolotls: 5
        ambient: 15
```

### 红石优化

Mojang 在 1.21.2 的第一个快照 [24w33a](https://zh.minecraft.wiki/w/Java%E7%89%8824w33a) 中更新了红石线的信号更新机制（虽然是实验性内容）。

从代码来看，Mojang 的优化方式与 Alternate Current 非常像，可以考虑在服务器中开启，请查看 [红石优化](/java/advance/optimize/go#redstone-implementation)。

## Purpur

Purpur 提供更多自定义配置项，你可以调整以下配置项来恢复部分原版特性。

```yaml
# purpur.yml
settings:
    # 是否开启 TPS 追赶
    # 设为 false，以防止 TPS 卡顿造成的生物突然加速影响游戏体验
    tps-catchup: false
world-settings:
    default:
        settings:
            entity:
                # 是否使用共享随机数生成源
                # 设为 false，以允许使用 RNG 预测
                shared-random: false
        gameplay-mechanics:
            player:
                # 是否带回 1.21.4 快照版 24w44a 之前的村民虚空交易（MC-50614）
                # 设为 true，当村民离开交互范围时，村民交易界面不关闭
                allow-void-trading: true
```

## Leaves（推荐）

:::note

Leaves 的实现方式决定了 Leaves 不可能完全符合原版特性，如果对生电需求很高仍然建议使用 Fabric！

如某些生电机器在 Leaves 上出现非预期行为请优先在 Leaves 的 QQ/Discord/GitHub 中反馈，而不是反馈给机器作者。

:::

Leaves 是一个专注于生电玩家的 Minecraft 服务端，皆在还原被上游破坏的原版特性，也是目前插件端核心中对于生电适配性最高的核心。

其配置文件 `leaves.yml` 提供了涵盖性能优化、问题修复、原版机制恢复以及玩法增强等各种生电友好的自定义配置项。

请阅读 [Leaves 文档](https://docs.leavesmc.org/zh_Hans/leaves/reference/configuration) 以了解各项配置的用法，根据服务器的需求调整相关的配置项。

## Leaf

Leaf 是一个 Paper 的分支，拥有非常高的性能（基本是 Paper 系里面性能最强的，Folia 除外），同时对原版特性破坏不大。

如果你想承载更多的玩家，可以考虑使用 Leaf。

请阅读 [Leaf 文档](https://www.leafmc.one/zh/docs/config/leaf-global) 以了解如何调整相关配置项以贴合原版行为。其他配置文件的修改可参考前文。

## Luminol

Luminol 是 Folia 的一个分支，相比于 Folia 有着更好的性能，同时可以还原更多的特性。

:::tip[Folia 生电]

Folia 是 Paper 的分支，也就是说 Paper 玩不了的机器 Folia 照样玩不了。

唯一使用 Folia 的理由是 Folia 可以调用多个核心以实现更好的性能，因此在选择 Folia 开服前应该认真的思考。

如果机器配置低于 16 物理核心（不是线程数），建议优先考虑 Leaves 或者 Leaf，而不是 Folia。

一些碎碎念：

尽管在 Folia 上，许多游戏行为和常规的服务器核心看起来相差不大，但其底层机制相较于原版 MC 已经发生了重大改变。

部分原版机制的缺失，跨维度时序与原版的差异，仍然是 Folia 目前迈不过去的门槛。

因此，目前 Folia 系核心仍旧不能作为原版生电服平替 Fabric 的选择，也不建议各位服主贸然选择 Folia。

:::

```toml
# luminol_global_config.toml
[fixes.poi_range_fixes]
  # 当区块未加载时，是否不进行村民竞争同一兴趣点的计算
  # 设为 true，以解决大型刷铁机等包含村民的大型机器的一部分卡服问题
  # 详细请看 https://github.com/PaperMC/Folia/issues/292
  do_not_compete_poi_if_unloaded = true

[fixes.allow_unsafe_teleportation]
  # 是否允许利用末地传送门漏洞进行传送
  # 设为 true，以允许使用沙子复制
  # 可能会导致一些问题，详细请看 https://github.com/PaperMC/Folia/issues/297
  enabled = true

[fixes.collision_behavior]
  # 指定服务器使用何种实体碰撞计算方式
  # 可用选项：
  # VANILLA - 完全使用原版计算方式，可能会降低性能，但完全符合原版行为
  # BLOCK_SHAPE_VANILLA - 对于方块使用 Paper 的计算方式，其它使用原版的计算方式，兼顾性能优化和遵循原版
  # PAPER - 完全使用 Paper 计算方式，拥有较好的优化，但会破坏部分原版行为
  mode = "BLOCK_SHAPE_VANILLA"

[fixes.fix_high_velocity_issue]
  # 是否修复高速实体跨越多个 tick 区域移动导致崩服的问题
  # 设为 true，以允许使用珍珠炮或者类似需要实体高速远距离移动的机器
  enabled = true

[fixes.use_vanilla_random_source]
  # 是否为实体使用原版的随机数生成源
  # 设为 true，以允许使用 RNG 预测
  enable_for_player_entity = true

[function.tripwire_dupe]
  # 是否恢复已在 1.21.2 快照 24w33a 与 24w36a 中修复的绊线复制漏洞（MC-59471）
  enabled = true
  # 可用选项：
  # VANILLA20
  # VANILLA21
  # MIXED
  behavior_mode = "VANILLA21"

[misc.disable_moved_wrongly_threshold]
  # 是否禁用生物移动速度限制
  enabled = true

[misc.force_disable_packet_limiter_of_paper]
  # 是否禁用 Paper 自带的数据包速率限制
  # 设为 true，以允许使用一些生电辅助 mod 的功能，如打印机，快速合成等
  # 禁用数据包速率限制可能存在被发包攻击，卡服的风险，开启时请认真考虑！
  force_disable = true

[optimizations.lithium_sleeping_block_entity]
  # 是否使用锂的方块实体优化
  # 设为 true，以在保持原版特性的情况下提高漏斗等方块实体的性能
  enabled = true
```

同时需要调整分配线程数。因为众所周知 Folia 默认的分配线程数非常保守，会出现一核有难，八核围观的场景。

打开 Paper 的全局配置，找到 `threaded-regions.threads`，通常情况下，分配给区块 Tick 线程数应该是 80% 乘上你的物理 CPU 核数。

## Lophine

Lophine 是一个基于 Luminol 的分支，相比于 Luminol 添加了更多适用于生电的实用功能和可配置的原版特性。其目标是在 Folia 上实现更多生电相关机制。

```toml
# lophine_global_config.toml
[experiment.redstone]
  # 是否重新引入 1.19 版本前的瞬时方块更新机制
  instant-block-updater = true
  # 是否允许利用 ClassCastException 进行更新抑制
  cce-update-suppression = true
  # 是否重新引入以下机制：
  # 1.20 版本前的机制：红石粉不会连接四周开启的活板门上的红石粉
  # 1.20.2 版本前的机制：红石粉、红石中继器和红石比较器收到来自下侧的状态更新时不检查附着
  redstone-ignore-upwards-update = true

[function.old-feature]
  # 是否重新引入 1.21.4 版本前的机制：允许玩家在进入游戏后的几秒内免疫伤害
  spawn_invulnerable_time = true
  # 是否重新引入 1.21 版本前的袭击机制
  # 设为 true，以允许大部分袭击塔设计恢复运作
  old_raid_behavior = true
  # 是否重新引入 1.21.2 版本前的机制：当僵尸村民、尸壳、溺尸或僵尸猪灵被伤害时，它们生成普通僵尸增援
  old_zombie_reinforcement = true
  # 是否恢复 1.21.2-1.21.5 中 TNT 接触到水但爆炸中心不处于水中时，可以破坏方块但不会炸毁掉落物实体的特性
  old_explosion_damage_calculator = true
  # 是否带回 1.21.4 快照版 24w44a 之前的村民虚空交易（MC-50614）
  # 设为 true，当村民离开交互范围时，村民交易界面不关闭
  villager-void-trade = true

[misc.item-entity]
  # 是否基于物品的 tick 顺序来合并掉落物，这是 Spigot 长期以来的默认行为
  #
  # 在 Spigot 中，后 tick 的物品实体会合并到先 tick 的实体上
  # 如果合并半径相对较大，可以避免掉落物卡在一些非预期的奇怪位置
  # 因此，这对于会产生大量掉落物的刷怪塔或红石装置非常有用
  # 而在原版中，掉落物合并是基于物品堆叠数量进行的，数量较少的物品堆会合并到数量较多的堆中
  #
  # 设为 true，非原版，但是可以让掉落物合并更适用于一些生电机器
  follow-tick-sequence-merge = true
```
