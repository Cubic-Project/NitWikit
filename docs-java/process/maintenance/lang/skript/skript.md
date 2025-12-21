---
title: Skript
slug: /lang/skript
sidebar_position: 1
---

# Skript

:::tip[前言]

本文档大量参考了其他作者的教程，特此致谢。

引用的内容主要来源于

TUCAOEVER 在 MCBBS 的教程

法棍 在 CSKB 发布的 [sk 教程](https://kb.corona.studio/zhCN/skript/startup.html)

:::

Skript 是一个脚本插件，取名来自 "script"。是一个面向 Bukkit 的编程语言，缩写为 SK。

因为其语法简单而受到很多中小型服主的青睐，很多人多多少少对这块有一些了解，

但是毕竟受众人群小，很多时候也会出现想学却无从下手，有问题却无处可问的尴尬境地。

## 特点

### 简单易上手

举一个简单的例子，为了实现玩家每次进入服务器就给有 "xxx" 权限的玩家 64 钻石的功能。

使用 Java 时的代码：

```java
@EventHandler
public void onPlayerJoin(PlayerJoinEvent evt) {
    Player player = evt.getPlayer(); // 玩家加入
    ItemStack itemstack = new ItemStack(Material.DIAMOND, 64); // 定义钻石
    if (player.hasPermission("xxx")) { // 权限判断
        inventory.addItem(itemstack); // 给予钻石
        player.sendMessage("欢迎你加入服务器！你获得了 64 枚钻石！");
    }
}
```

使用 Skript 时的代码：

```skript
on join:
    if player has permission "xxx": // 权限判断
        message "欢迎你加入服务器!你获得了64枚钻石!" // 发送消息
        give 64 diamond to player // 给予钻石
```

在大多数情况下，Skript 不会在意大小写、定冠词 "the"，只需要符合英语语法和基本的缩进。

缩进表示代码块的层级关系，类似于 Yaml，当前一行以 `:` 结尾时，下一行需要缩进表示代码块。

另外，即使使用了错误的语法，在脚本重载时，报错也基本会提示具体错误类型。

### 拓展插件多

使用 Skript 时如果遇到 Skript 不包含的语法，可以使用其他拓展插件如
[Skbee](https://github.com/ShaneBeee/SkBee)、[Skript-reflect](https://github.com/SkriptLang/skript-reflect) 等插件拓展。

### 性能略差

作为一种脚本语言，Skript 的性能相较于 Java 原生会有所下降，但很多用户会认为性能下降会非常严重，实际上并非如此。

根据测试，我们发现：

1. 在事件监听、条件判断、Function 跳转、计算等基础功能几乎和 Java 原生持平；
2. 在 skript 中，Loop 循环、wait 等操作由于需要进行上下文变量复制开销会更大一些；
3. 正常使用 skript-reflect 反射等操作时，开销大概是 Java 原生调用的 1.5 ~ 5 倍。

另外，Skript 的反射使用的是 MethedHandle，性能已经远远优于传统的 Java 反射，

因此，Skript 的性能瓶颈主要在编写者的脚本逻辑上，而不是 Skript 本身。

## 下载及安装

### 本体

下载链接：

最新版：
`https://github.com/SkriptLang/Skript/releases`

1.8.8-1.12.2 2.2dev37c:
`https://github.com/SkriptLang/Skript/releases/download/dev37c/Skript.jar`

1.7.10 2.1.2
`https://dev.bukkit.org/projects/skript/files/779542/download`

### 拓展插件

Skript 拓展插件常见的有：

-   SkBee
-   skript-reflect
-   skNMS
-   ...

主要用于扩展 Skript 的语法和功能，提供更多的 API 支持，方便脚本编写者实现更多功能。

另外，由于拓展性能一般会优于 Skript-reflect，因此推荐优先使用拓展插件实现功能。

下载链接：

[skunity](https://docs.skunity.com/addons)

### Skript 脚本

Skript 脚本文件后缀为 `.sk`，将脚本文件放入 `/plugins/Skript/scripts/` 文件夹中即可。

下载链接：

[SpigotMC](https://www.spigotmc.org/resources/categories/skript.25/)

[skunity](https://forums.skunity.com/resources/)

### 片段

片段只是一些现成的 Skript 代码块，主要是为了提供一些常用功能的实现思路，方便用户参考学习，

部分片段可能需要特定的拓展插件支持，具体请参考片段说明。

下载链接：

[Skunity 片段合集](https://docs.skunity.com/snippets)

[ShaneBeee 片段合集](https://github.com/ShaneBeee/SkriptSnippets/tree/master/snippets)

## 基础教程

见[“基础教程”](basic-tutorials.md)。

## 进阶教程

见[“高级教程”](advanced-tutorials.md)。
