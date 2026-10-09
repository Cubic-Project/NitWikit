---
title: Luminol
---

![](../_assets/Luminol.png)

Luminol 是一个非常棒的 Folia 分支！

:::warning[仓库已删除]

[LuminolMC/Luminol](https://github.com/LuminolMC/Luminol) 主仓库已于 2026 年 7 月 11 日被所有者删除，官方账号已经被注销。Luminol、LightingLuminol 均不再更新，最新版本为 26.2。

:::

## 安装

我们不推荐直接使用 Folia，因为这需要自己去构建，[Luminol](https://luminolsuki.moe/) 是一个非常棒的选择，如果你需要 1.20.1/2，你可以使用 [Molia](https://github.com/Era4FunMC/Molia)。

请选择 Luminol，我们后面会讲 LightLuminol，下载到本地后，替换原来的核心就可以了。

## LightLuminol

![](../_assets/LightingLuminol.png)

LightingLuminol 是 Luminol 的分支，旨在修复对 BukkitAPI 的破坏，最大程度保证 Bukkit 插件的兼容性。但是，虽然 LightLuminol 对于 Bukkit 插件兼容性较好，但是会有许多问题，包括不定时的 NullPointerError，Thread 不安全，内存泄露，数据丢失（一天崩个几十次，挺正常的）。

所以在开始使用 LightingLuminol，请想想 Leaf 是不是更好？

如果你需要 1.20.1/2，你可以使用 [DirtyMolia](https://github.com/Era4FunMC/DirtyMolia)。

（Molia 和 Luminol 其实是同一个作者~~）

## 下载

如果官网进不去或者下载慢可以使用这里的镜像！

- [Luminol-MCSL](https://sync.mcsl.com.cn/core/Luminol)
- [Luminol-McRes](https://mcres.cn/downloads/luminol.html)
- [LightingLuminol-MCSL](https://sync.mcsl.com.cn/core/LightingLuminol)
- [LightingLuminol-McRes](https://mcres.cn/downloads/lightingluminol.html)
- [Molia](https://mcres.cn/downloads/molia.html)
- [DirtyMolia](https://mcres.cn/downloads/dirtymolia.html)

## 调配置

安装完 Luminol 后你还需要一点小小的配置让你的 Luminol 更好~

### 分配线程数

众所周知 Folia 默认的分配线程数非常脑瘫，会出现一核有难，八核围观的场景，

打开 Paper 的全局配置，找到 `threaded-regions.threads`，通常情况下，分配给区块 Tick 线程数应该是 80% 乘上你物理 CPU 核数。

### 生电配置

Luminol 另一个好处就是可以开启生电配置。

打开 Luminol 的配置文件：

- fixes.allow_void_trading 虚空交易
- fixes.allow_unsafe_teleportation 刷沙
- fixes.use_vanilla_random_source RNG 操作

其它特性请阅读 Paper 文档
