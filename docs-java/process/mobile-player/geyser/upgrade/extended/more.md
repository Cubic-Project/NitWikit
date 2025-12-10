---
title: 更多功能
sidebar_position: 4
---

# 更多功能

让基岩版玩家体验到更多功能

## GeyserUpdater

[下载地址](https://www.spigotmc.org/resources/geyserupdater.88555/)

自动下载并应用 Spigot/CraftBukkit、BungeeCord 和 Velocity 上的新版本 Geyser。

## GeyserBlockJavaPlayers

让你的 Java 服务器仅基岩版玩家才能加入

[下载](https://ci.kejonamc.dev/job/GeyserBlockJavaPlayers/job/master/)

## GeyserVoice

GeyserVoice 是一个 Java 服务端插件，旨在通过集成 VoiceCraft Proximity Chat 应用程序来增强 Minecraft 服务器上的多人游戏体验。该插件允许 Java 和 Bedrock 版本的玩家无缝地参与基于邻近的语音对话。

[下载](https://github.com/SineVector241/VoiceCraft-MCBE_Proximity_Chat/releases/)，[Wiki](https://github.com/mineserv-top/GeyserVoice/wiki/)

## GeyserPreventServerSwitch

可以阻止基岩版玩家通过代理进入服务器，可用于反机器人

[下载](https://github.com/kejonaMC/GeyserPreventServerSwitch)

## Boar 反作弊系统

专为基岩版玩家设计的反作弊系统，采用服务器权威与回溯（server-auth-with-rewind）方法。

### 技术原理

Boar 使用基岩版客户端的 server-auth-with-rewind 方法，即服务器端移动预测和验证，来检测作弊行为。

相比于其他反作弊，拥有更好的性能和准确度

### 安装配置

[下载地址](https://github.com/oryxel1/Boar/releases)

#### 主要配置项

- `player-rewind-history-size-ticks`：回溯历史大小（默认 20 tick）
- `player-position-acceptance-threshold`：位置接受阈值（默认 1.0E-4）
- `max-tolerance-compensated-reach`：最大允许触及距离（默认 3.005）
- `disabled-checks`：禁用特定检查类型
