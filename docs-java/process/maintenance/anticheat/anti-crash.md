---
title: 预防崩服
sidebar_position: 5
---

# 预防崩服

会有部分不怀好意的人去测试服务器的崩溃漏洞。

别担心，长期保持维护的插件一般不会有崩溃的漏洞，但是我们也要有预防的准备。

## 分类

下面将列出几种常见的 Minecraft 服务器容易遭受的崩溃类型。

### 插件类

在服务器上安装了老版本/未发现漏洞的插件可能导致插件因 bug 自行崩溃，甚至甚至有漏洞被攻击者利用。这类通常需要服主做好相应的措施预防。首先在选用插件时就应注意：

1. 初次安装时就尽可能解决 WARN 和 ERROR，实在不行就立刻换插件
2. 少用，最好不用停更插件
3. 少用，最好不用黑插件
4. 尽可能使用用户数多的插件

就算你已经保证选用了可依赖的插件，仍然要对这类问题进行预防。具体预防方面有：

1. 对玩家使用的指令进行限制，最好是通过白名单，仅开放玩家会用到的指令。

2. 将服务器的插件做好隐藏和伪装，尽可能防止攻击者获得服务器所使用的插件。

#### 推荐添加黑名单的指令

<details>
  <summary>黑名单指令</summary>

```yaml
# WorldEdit exploit
- "//calc"
- "//calculate"
- "//eval"
- "//evaluate"
- "//solve"
- "//asc"
- "//ascend"
- "//desc"
- "//descend"
# HolographicDisplays exploit
- "/hd readtext"
- "/holo readtext"
- "/hologram readtext"
- "/holograms readtext"
- "/holographicdisplays readtext"
# PermissionsEx exploit
- "/pex promote"
- "/pex demote"
- "/promote"
- "/demote"
- "/execute"
# Multiverse exploit
- "/mv ^"
- "/mv help <"
- "/mvhelp <"
- "/$"
# FAWE exploit
- "//to"
- "/to"
```

</details>

### 运行环境类

这类漏洞基本上很难避免，如 Log4j，在未发现之前谁也不知道。

服主还是尽可能的多关注网络信息，保证自己能尽快了解到一些漏洞的产生，防止被攻击者钻空子。

### 发包类/物品类 (也称原版漏洞)

:::tip

防御原版漏洞最好的方法永远是将你的服务端核心 **更新到最新版**

以下解决方案大部分都是为非最新版本提供的，有些特殊的在最新版本也能生效

:::

简单来说，就是向服务器发送一些无法处理/处理缓慢的包。

如经典的 Book 崩服/告示牌崩服 (高版本已修复)

这类如果你是低版本服务器，就需要安装相应的插件进行防御，以下是一些推荐的插件，**推荐以下四个插件一起安装**

#### AnarchyExploitFixes (免费)

[下载地址](https://github.com/xGinko/AnarchyExploitFixes/releases)，一个 Minecraft 原版漏洞的修复插件
例如非法物品，无效游戏名

:::tip

该插件会破坏原版的一些特性，比如不可以破坏末地传送门，当然可以关闭

:::

#### LPX (付费)

[购买地址](https://builtbybit.com/resources/lpx-antipacketexploit.15709/)，准确来说，LPX 防御的不是原版漏洞，而是防止攻击者使用特殊的包让
Netty 处理超时 (NettyCrashers)，虽然不会崩服，但会严重影响玩家游戏体验

这个插件在最新版本依旧有用

#### Panilla (付费开源)

[购买地址](https://www.spigotmc.org/resources/panilla-prevent-hacked-items.65694/) (被标为 inactive 是因为换维护者了，还没通知 Spigot), [GitHub](https://github.com/ds58/Panilla)

Panilla 主要是用于防止服务器上滥用 NBT 和数据包的插件，禁用了一些生存模式下无法获得的东西，修复了一些漏洞，该插件不仅可以预防服务器崩溃，还可预防非法 NBT 导致客户端崩溃

:::warning

有服主反映说 Panilla 会影响潜影盒中的物品 (物品消失)，所以在安装到生产服务器前请 **测试**

:::

#### Surf (免费)

[下载地址](https://github.com/Winds-Studio/Surf/releases)，Surf 修复了很多 Minecraft 漏洞，同时支持 Folia
