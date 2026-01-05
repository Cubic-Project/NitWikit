# 脚本语言

在 Minecraft 中，一些服主在实现一些功能的时候 (通常是一些简单的功能)，不会使用 Java、Kotlin、Scala 等编程语言实现，而是通过一些脚本插件实现

脚本插件可以让你通过编写简单的脚本代码来实现极高自定义的功能（就像是自己写插件一样？）

不过通常脚本插件实现某些功能的性能开销要大于使用真正的代码编写。

:::tip

你要明白，这虽然不是真正的代码，但也有一定的学习难度。

:::

脚本语言可以分为两大类：**特定语言和通用语言**

## 通用语言

通用语言是一些功能非常完备的语言，在 Minecraft 中常用的有以下语言：

- Skript
- Kether (语言自身功能并不完备，但可以运行 JavaScript，并且有许多扩展，归为通用语言)
- JavaScript
- Jexl
- OGNL (少见，已知实现是 Arthas)

这些编程语言还可以与 Java 进行交互，实现非常复杂的功能

## 特定语言

特定语言一般是一些插件内部使用的语言，功能通常仅限于 Minecraft 游戏机制，常见的有以下语言：

- ConditionalEvents
- LiteCommandEditor
- Actions
- ScriptBlockPlus
- Mechanics
- PlaceholderAPI
- Denizen
- ...

在这部分文档中不会介绍特定语言，学习请查看官方 Wiki

import DocCardList from '@theme/DocCardList';

<DocCardList />
