---
title: Lophine
---

![](../_assets/lophine.png)

Lophine 是一个基于Folia的分支，具有许多有用的优化和可配置的原版特性，目标是在Folia上实现更多生电的内容

### 特性

- 可配置的原版特性 - 灵活调整游戏机制以适应不同服务器需求
- Tpsbar 支持 - 实时显示服务器 TPS 状态
- Folia Bug 修复 - 针对 Folia 已知问题的专项修复
- 多存档格式支持 - 支持 b_linear（linear 重新实现）存档格式
- 生电功能增强 - 在 Folia 上实现更多生电内容（完整生电请使用 Fabric）
- 更多实用功能 - 持续添加有用的服务器功能

### Lophine 下载

- [Lophine GitHub](https://github.com/LophineLabs/Lophine/releases)

### 配置

Lophine 的配置提供了更多生电相关的配置选项。

#### 实验性功能

Lophine 提供了许多实验性功能，可以在配置文件中开启：

```toml
[experiment.command]
    # 允许使用命令方块
    command_block_enabled = false
    # 允许使用 tick 命令
    tick_command_enabled = false
    # 允许使用数据包命令
    datapack_command_enabled = false
```

#### 生电相关配置

```toml
[misc.revert_raid_changes]
    # 启用无限时间的不祥之兆效果
    bad_omen_infinite = false
    # 击杀袭击队长时获得不祥之兆效果
    give_bad_omen_when_kill_raid_captain = false
    # 允许跳过 30 秒冷却直接触发袭击
    allow_skip_cooldown = false

[misc.container_expansion]
    # 末影箱行数 (1-6)
    enderchest_rows = 3
    # 潜影盒堆叠数量 (1-64)
    shulker_stackable_count = 1
    # 木桶行数 (1-6)
    barrel_rows = 3

[misc.end_crystal]
    # 禁用 Paper 的末影水晶位置检查，恢复原版重生龙逻辑
    disable_end_crystal_check = false

[misc.old-feature]
    # 生成无敌时间
    spawn_invulnerable_time = false
    # 旧版蘑菇可替换逻辑
    old_replaceable_by_mushrooms = false
    # 旧版僵尸增援
    old_zombie_reinforcement = false
```

#### 性能优化配置

```toml
[misc.performance]
    # 禁用实体碰撞检测优化
    disable_entity_collision_check = false
    # 优化漏斗性能
    optimize_hopper = true
    # 优化红石性能
    optimize_redstone = true

[misc.fixes]
    # 允许虚空交易
    allow_void_trading = false
    # 允许不安全传送（刷沙等）
    allow_unsafe_teleportation = false
    # 使用原版随机数生成器
    use_vanilla_random_source = false
    # 修复 MC-4 漏洞（物品复制）
    fix_mc4 = true
```

#### 世界生成配置

```toml
[misc.world]
    # 启用旧版世界生成
    old_world_generation = false
    # 自定义海平面高度
    sea_level = 63
    # 启用自定义生物群系
    custom_biomes = false
```

这些配置让你可以精确控制服务器的生电特性，满足不同生电需求。

:::tip[配置建议]

对于生电服务器，建议开启以下配置：

- `allow_void_trading = true` - 启用虚空交易
- `allow_unsafe_teleportation = true` - 启用刷沙等特性
- `use_vanilla_random_source = true` - 使用原版随机数
- `disable_end_crystal_check = true` - 恢复原版重生龙逻辑

:::

### 社区

如果你在使用 Lophine 时遇到问题，可以加入 LophineMC 的社区：

- QQ 群：[1020403749](https://qm.qq.com/cgi-bin/qm/qr?k=y_MA9UaN7PM9e9J1LIs9Eea3LK8C0h6J&jump_from=webapi&authKey=ap5f8MlbeezXYtnmpnT5ZOFljDuOyV6OAb2PIcViQ+Ilr60Ycq63FDDTsJOZDYtj)
- Discord: [点击加入](https://discord.gg/UXSgPZczcy)
