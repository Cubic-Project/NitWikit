---
title: 高级教程
sidebar_position: 3
---

<!-- @format -->

# 高级教程

## skript-reflect

学完基本的 Skript 语法后，我们会遇到一些 Skript 本身无法实现的功能，`skript-reflect` 就是为了解决这些问题而诞生的。

在基础教程中，我们已经提到过，`skript-reflect` 允许我们以稍低一些的性能在 Skript 中反射调用 Java API，

它旨在将 **Java** 的功能与 **Skript** 易于使用的开发环境相结合，从而使 **Skript** 脚本编写者能够几乎访问任何 **Java** 类、方法和字段。

### 为什么使用 skript-reflect？

-   我们默认，使用 Skript 的用户通常并不是经验丰富的 **Java** 开发者。 `skript-reflect` 使这些用户能够轻松访问 **Java** API；
-   作为 Skript Addon，使用 `skript-reflect` 的脚本无需像 Java 插件那样进行编译、上传并重启，从而大大降低了开发门槛和调试难度；
-   在我们开发服务器时，有时需要访问其他插件的 API 来实现某些功能， `skript-reflect` 使我们能够轻松地做到这一点；

### 如何使用

接下来，我们通过几个简单的例子来学习如何使用 `skript-reflect`。

#### 调用其他插件的 API

假如我们想要阻止某个玩家被其他玩家 tpa 到，Skript 本身并没有提供监听 **EssentialsX** tpa 请求的事件，

```python
import:
    net.ess3.api.events.TPARequestEvent   # 导入java类

# 监听事件
on TPARequestEvent:
    set {_ess_IUser} to event.getTarget()   # 获取IUser对象
    set {_player} to {_ess_IUser}.getBase()   # 获取Player对象
    # 判断玩家
    if {_player} is player("lilingfeng"):
        set {_command_sender} to event.getRequester().getPlayer()   # 获取发起 tpa 请求的玩家
        send "&clilingfeng是我的不准tpa到她那里🥵" to {_command_sender}
        cancel event   # 取消事件
```

该脚本作用是在有玩家使用 **EssentialsX** 的 tpa 尝试输入指令 `/tpa lilingfeng` 时阻止这件事

我们假设你对 Java 不够了解，我们来简单介绍一些基础的 Java 知识：

-   **类 (Class)** ：类是对象的蓝图或模板。它 **定义** 了对象的属性（字段）和行为（方法）。例如，`Player` 类表示游戏中的玩家对象；
-   **对象 (Object)** ：对象是类的实例。它包含类定义的属性的具体值，并且可以调用类定义的方法。例如，一个特定的玩家就是 `Player` 类的一个对象；
-   **方法 (Method)** ：方法是类中定义的函数或操作。它们定义了对象可以执行的 **行为**。类似于 Skript 中的 `Effect` 例如，`getTarget()` 方法；
-   **字段 (Field)** ：字段是类中定义的变量。它们表示对象的 **属性**。例如，`Player` 类可能有一个 `name` 字段，表示玩家的名称。

我们来看一下详细解析一下上面的代码，首先我们需要一个事件 `TPARequestEvent`，这个事件是由 **EssentialsX** 插件提供的，

用于处理玩家之间的传送请求，我们应该先查询 [EssentialsX 的 Javadoc](https://jd-v2.essentialsx.net/)，搜索我们目标事件，

这和我们在 Skript 中首先应该查询事件是一样的，我们在网站右上角 `search` 搜索 `event`，然后筛选一下我们目标事件 `TPARequestEvent`，

通常情况下，事件类的命名都会以 `Event` 结尾，且会继承 `org.bukkit.event.Event` 类，

这样的类我们可以在导入包后，直接在 Skript 中监听，导入包的语法如下：

```python
import:
    net.ess3.api.events.TPARequestEvent

on TPARequestEvent:
```

这两行代码意为导入 `net.ess3.api.events` 包中的 `TPARequestEvent` **类**。

`import:` 是 `Structure`，因此前面不能有缩进，对类的调用必须在导入完成后进行，因此我们建议你尽可能将此语句放在脚本中靠顶端的位置。

通过 `import:` 块导入事件后，我们就可以监听这个事件了，这与 Skript 中监听内置事件的语法相似，

但由于 `TPARequestEvent` 并非 **Skript** 内置的事件，因此 Event value 需要自行处理。

例如，`TPARequestEvent` 事件中没有 `event-player`，因此无法直接使用 `player` 关键字来获取发起 tpa 的玩家。

```python
    set {_ess_IUser} to event.getTarget()   # 获取IUser对象
    set {_player} to {_ess_IUser}.getBase()   # 获取Player对象
```

这行代码意为调用这个事件里的 `getTarget()` 方法，来获取 tpa 的目标，其返回一个 `IUser`。

这个 `IUser` 是 EssentialsX 的一个 **接口**，`User` 类 **实现** 了它，可以在 [EssentialsX 的 Javadoc](https://jd-v2.essentialsx.net/net/ess3/api/iuser) 里查看。

```python
    if {_player} is player("lilingfeng"):
        set {_command_sender} to event.getRequester().getPlayer()   # 获取发送者
        send "&clilingfeng是我的不准tpa到她那里🥵" to {_command_sender}
        cancel event   # 取消事件
```

这几行和普通的 sk 语法没什么区别，作用是判断然后取消事件。

#### 调用核心 API

在上面这个例子中，我们利用了一些方法 `getTarget()`、`getBase()`、`getRequester()` 和 `getPlayer()`，这些方法都是 Java 类或接口中定义的，

新手会觉得很难理解这些方法是从哪里来的，如何使用的，下面我们就来学习一下如何阅读 **Javadoc**。

假如我们想要使用 **Leaves** 服务端的假人功能，来修改假人在玩家列表中显示的名字，但是 Skript 本身并没有提供相关的事件和方法，我们该如何实现呢？

##### 学会阅读 Javadoc

我们先阅读 [Leaves 的 Javadoc](https://repo.leavesmc.org/javadoc/snapshots/org/leavesmc/leaves/leaves-api/1.20.6-R0.1-SNAPSHOT)，寻找相关的事件和方法。

:::info[如何阅读 Javadoc]

![搜索事件](_images/SearchEvent.png)

这里查询找到了 `org.leavesmc.leaves.event.bot.BotEvent` 事件。

看命名就知道应该会有更详细的 **子类** 来 **继承** 它，点进去看看，可以看到：

![查找子类](_images/QuerySubclasses.png)

通过看类名可以知道，`BotJoinEvent` 就是我们要的事件。

看介绍，发现这个事件会“Called when a fakeplayer joins a server”

接下来让我们看看这个类有哪些 **方法**。

![查找方法](_images/SearchMethods.png)

可以看到，最主要的是一个 `getBot()` 方法，在让我们看看这个方法会返回什么。

点击超链接，可以看到这个方法会返回一个 `Bot` 对象。

这个 `Bot` 接口是继承自 `Player` 的，也就是说，`Player` 有的方法，`Bot` 都有。

再次查询 [Bukkit API](https://bukkit.windit.net/javadoc/org/bukkit/entity/Player.html) 可以找到 `Player` 类有的方法，如 `Player#setPlayerListName()`，这正是我们需要的方法。

:::

##### 编写脚本

```python
import:
    org.leavesmc.leaves.event.bot.BotJoinEvent as BotJoin  #导入类

# 监听事件
on BotJoin:
    set {_bot} to event.getBot()   # 获取假人
    set {_bot_name} to {_bot}.getName()   # 储存假人原本的名字
    {_bot}.setPlayerListName("假的%{_bot_name}%")   # 修改假人在tab列表里的名字
```

`import` 语句导入了 `BotJoinEvent` 类，并将其设为别名 `BotJoin`，以便在 Skript 中使用。

这一过程也可适用于其他插件，比如 [zimzaza4](https://github.com/zimzaza4) 的 [Skript-Floodgate-Api](https://github.com/zimzaza4/Skript-Floodgate-Api)，

就是利用 **skript-reflect** 来调用 [Floodagate API](https://wiki.geysermc.org/floodgate/api/)。

可以查看下面的教程来详细学习 **skript-reflect** 的基础功能

### 更进一步

前文已经介绍了如何使用 `skript-reflect` 来调用其他插件的 API，接下来我们将详细介绍 `skript-reflect` 的各项功能。

在前面我们使用 `import:` 块导入了 Java 类，其实还有其他的方式。

#### 导入 Java 类

##### 在低于 1.17 的 Minecraft 版本上导入 NMS 类

由于 **Minecraft** 1.17 以下版本的 **NMS** 包会随着每个 **Minecraft** 版本而变化，因此你应该动态生成包前缀。有关详细信息，请参阅 [计算选项](https://tpgamesnl.gitbook.io/skript-reflect/advanced/computed-options#using-computed-options-for-nms-imports)。

当我们需要动态导入包名（例如有时候，我们需要导入的包名是根据插件版本和 Minecraft 版本动态变化的）

我们可以选择以下三种方式之一：

##### 从完全限定的名称导入

语法：

```python
[the] [java] class %text%
```

示例：

```python
on script load:
    set {Player} to the class "org.bukkit.entity.Player"
    message "%{Player}%" # org.bukkit.entity.Player
```

###### 从对象导入

语法：

```python
[the] [java] class[es] of %objects%
%objects%'[s] [java] class[es]
```

示例：

```python
command /example:
    executable by: players
    trigger:
        set {Player} to player's class
        message "%{Player}%" # org.bukkit.entity.Player
```

##### 在 effect 命令中导入

由于导入块在 effect 命令中不可用，因此你可以使用 import effect (仅在 effect 命令中可用)：

```python
import <fully qualified name> [as <alias>]
```

此导入只能在以上效果命令中使用，直到你停止服务器。

##### 处理枚举类

枚举类是一种特殊的类，表示一组常量值，通常用于表示有限的选项集合，

例如在 Bukkit API 中，`ClickType` 枚举类表示了玩家在点击物品栏时可能的点击类型。

在 Skript 中使用枚举值时，请使用 `$` 符号来分隔枚举类和枚举值。

查询 [Paper 的 Javadoc](https://jd.papermc.io/paper/1.21.11/org/bukkit/event/inventory/ClickType.html) 可以看到 `ClickType` 枚举类中有多个枚举值，如 `DROP`、`LEFT`、`RIGHT` 等。

举例：

```python
import:
    org.bukkit.event.inventory.ClickType$DROP

on inventory click:
    if event.getClickType() = DROP:
        cancel event
```

在 Skript 中，我们使用 `ClickType$DROP` 来表示 `ClickType` 枚举类中的 `DROP` 枚举值。

#### 运行 Java 代码

##### 调用方法

语法：

```python
%object%.<method name>(%objects%)
```

示例：

```python
event-block.breakNaturally()
# 让方块被破坏并自然掉落
(last spawned creeper).setPowered(true)
# 让最新生成的苦力怕变成带电状态
player.giveExpLevels({_levels})
# 给玩家经验等级 -> {_levels}
```

方法可以用作 **Effects** 、 **Expressions** 和 **Conditions** 。

如果用作**Conditions**，则只要方法的返回值不是 `false`、`null` 或 `0`，这个 **Conditions** 就会通过。

###### 调用非公共方法

Java 中不同方法有不同的访问修饰符（如 `public`、`private`、`protected`），这些修饰符决定了方法的可见性。

通常情况下，只有 `public` 方法可以被直接调用，但如果尝试调用的方法不是公共的，

则可能需要在方法名称前面加上括号中的声明类。由于一个对象在多个父类中可能具有同名的非公共方法，因此必须显式指定在何处查找该方法。

语法：

```python
{_arraylist}.[ArrayList]fastRemove(1)
```

###### 调用 Overload 的方法

通常， **skript-reflect** 可以从运行时传递的参数中推断出要调用的正确的 Overload 方法。

如果需要使用某个方法的某种实现，可以在方法名称的末尾附加一个逗号分隔的列表，并用括号括起来。

语法：

```python
System.out.println[Object]({_something})

Math.max[int, int](0, {_value})
```

##### 调用字段

语法：

```python
%object%.<descriptor>
```

###### 调用非公共字段

如果你尝试访问的字段不是公共的，则可能需要在字段名称前面加上括号中的声明类。由于一个对象在多个父类中可能具有同名的非公共字段，因此必须显式指定查找该字段的位置。

示例：

```python
{_hashmap}.[HashMap]modCount
```

##### 调用构造函数

语法：

```python
[a] new %javatype%(%objects%)
```

示例：

```python
new Location(player's world， 0， 0， 0)
```

#### 处理事件

##### 监听多个事件

前面我们已经介绍了如何使用 `import:` 块导入 Java 类，并监听事件。

你还可以使用同一处理程序侦听多个事件。这些事件不必相关，但如果尝试访问在一个事件中可用但在另一个事件中不可用的方法，

则应采取适当的预防措施。例如，如果要同时侦听 `org.bukkit.event.entity.ProjectileLaunchEvent` 和 `org.bukkit.event.entity.ProjectileHitEvent`：

```python
import:
    org.bukkit.event.entity.ProjectileLaunchEvent
    org.bukkit.event.entity.ProjectileHitEvent

on ProjectileLaunchEvent and ProjectileHitEvent:
    # your code
```

此时可以用相同的方法去访问共有的方法和字段，但如果要访问特定于某个事件的方法，则需要进行类型检查。

通常，我们不推荐在一个处理程序中同时监听多个不相关的事件，这会降低代码的可读性和可维护性。

##### 处理已取消的事件

默认情况下，如果事件被优先级较低的处理程序取消，则不会调用事件处理程序。可以通过指定处理程序应处理 `all` 事件来更改此行为。

示例：

```python
import:
    org.bukkit.event.block.BlockBreakEvent

on all BlockBreakEvent:
    uncancel event
```

这种技巧允许你让已经在低优先级取消的事件继续进行，例如如果你需要监听玩家破坏方块，即使其他插件已经取消了该事件。

#### 一些内置的小工具

:::warning

以下三个涉及数组的语法中的 `[]` 不代表可选的输入，而是表示数组的语法结构。

:::

##### 创建数组

```python
new %javatype%[%integer%]
```

创建给定类型和大小的数组。类型可能是原始类型，不需要导入。

##### 通过索引获取数组的值

```python
%array%[%integer%]
```

表示数组的某个索引处的值。

可以读取和写入此值。

##### Collect

```python
[%objects%]
[%objects% as %javatype%]
```

创建包含指定对象的数组。指定类型可确定生成数组的组件类型。

##### Spread

```python
...%object%
```

将 Java 类型的数组转化为 sk 数组形式。

实例：

```python
set {_list::*} to ...{_array}
```

##### Null

```python
null
```

在 **Java** 中表示 `null`。这与 **Skript** 的 `<none>` 不同。

##### Bits

```python
[the] (bit %number%|bit(s| range) [from] %number%( to |[ ]-[ ])%number%) of %numbers%
%numbers%'[s] (bit %number%|1¦bit(s| range) [from] %number%( to |[ ]-[ ])%number%)
```

表示数字中的位的子集，可以读取和写入此值。

##### Raw Expression

```python
[the] raw %objects%
```

返回表达式的基础对象。

:::info

与 [Expression](https://tpgamesnl.gitbook.io/skript-reflect/advanced/custom-syntax#expression) 一起使用时，可以将其设置为一个值，

这将更改该参数的输入值。这可用于将数据存储在调用触发器的变量中。

```python
import:
    ch.njol.skript.lang.Variable

effect put %objects% in %objects%:
    parse:
        expr-2 is an instance of Variable # to check if the second argument is a variable
        continue
    trigger:
        set raw expr-2 to expr-1
```

:::

##### 成员

```python
[the] (fields|methods|constructors) of %objects%
%objects%'[s] (fields|methods|constructors)
```

返回对象的字段、方法或构造函数的列表，包括其修饰符和参数。

如果需要不带修饰符或参数详细信息的字段或方法名称列表，请参阅 [成员名称](https://tpgamesnl.gitbook.io/skript-reflect/basics/utilities#member-names)。

##### 成员的名字

```python
[the] (field|method) names of %objects%
%objects%'[s] (field|method) names
```

返回对象的字段或方法的列表。

##### 判断对象是否是某个类的实例

```python
%objects% (is|are) [a[n]] instance[s] of %javatypes%
%objects% (is not|isn't|are not|aren't) [a[n]] instance[s] of %javatypes%
```

检查对象是否是给定 **Java** 类型的实例。

##### 类引用

```python
%javatype%.class
```

从给定的 **Java** 类型返回对类的引用。返回 `java.lang.Class` 类型的对象。此表达式还支持不需要导入的基元类型。

##### 插件实例

```python
[(an|the)] instance of [the] plugin %javatype/string%
```

返回给定插件的实例 (字符串形式的名称或插件类)。

### 结语

当你掌握了以上内容后，你就可以使用 **skript-reflect** 来调用几乎所有的 Java API 了。

更高级的用法及详细内容请自行查阅 [skript-reflect 文档](https://tpgamesnl.gitbook.io/skript-reflect)。

当你熟悉 `skript-reflect` 之后，你其实已经对 **Java** 有了一定的了解，我们推荐你进一步学习 **Java** / **Kotlin** 来编写更复杂的插件。

同时，我们也推荐你学习如何编写 **Skript Addon**，来扩展 **Skript** 的语法和功能，

这不仅能让你更好地理解 **Skript** 的工作原理，也能让你提升编程能力，并为社区做出贡献。

在下一章中，我们将介绍一些常用的 **Skript Addon** 以及如何编写自己的 **Skript Addon** [WIP]
