---
title: 高级教程
sidebar_position: 3
---

<!-- @format -->

# 高级教程

## skript-reflect

**skript-reflect** 是 **Skript** 的一个拓展插件，允许你运用 Java 的反射机制来进行更高级的操作，它旨在将 **Java** 的功能与 **Skript** 易于使用的开发环境相结合。

有了 **skript-reflect** 的 **Skript** 几乎可以完成插件能做的任何事，不过是复杂性的问题。

为什么需要 skript-reflect？

-   正确编写插件是很困难的，特别是如果你是 **Java** 的新手。 **skript-reflect** 将为你负重前行，让你专注于编写高质量的 **Skript** 脚本。

-   与通常需要编译并重启服务器才能生效的 Java 插件不同，使用 skript-reflect 编写的 Skript 脚本可以通过简单的 sk reload 快速重载并测试。

-   在 sk 脚本中实现某些功能可能需要使用反射来访问私有方法、字段和构造函数。 **skript-reflect** 的内置反射允许你无缝访问这些私有成员。

-   **Skript** 的基本特性之一是其极大的可定制性。使用 **skript-reflect** 编写的扩展使 sk 的这点更为突出，这允许你在必要时快速更改你的代码。

下面的代码块包含了一些 **skript-reflect** 基础的语法。

其作用是在有玩家使用 **EssentialsX** 的 tpa 尝试 `/tpa lilingfeng` 时阻止这件事

```skript
import:
    net.ess3.api.events.TPARequestEvent   # 导入java类

# 监听事件
on TPARequestEvent:
    set {_ess_IUser} to event.getTarget()   # 获取IUser对象
    set {_player} to {_ess_IUser}.getBase()   # 获取Player对象
    # 判断玩家
    if {_player} is player("lilingfeng"):
        send "&clilingfeng是我的不准tpa到她那里🥵"
        cancel event   # 取消事件
```

下面来逐行解析

```skript
import:
    net.ess3.api.events.TPARequestEvent
```

这两行代码意为导入 `net.ess3.api.events` 包中的 `TPARequestEvent` **类**。

`import:` 块必须放在脚本的最左端，前面不能有缩进。

对类的调用必须在导入完成后进行，因此我们建议你尽可能将此语句放在脚本中靠顶端的位置。

通过 `import:` 块导入类后， **skript-reflect** 将创建一个 **Expressions**，允许你通过其名称轻易地引用 Java 类。

```skript
on TPARequestEvent:
```

这行代码意为注册监听 `TPARequestEvent` 事件，与普通 sk 里注册事件的语法没啥区别。

```skript
    set {_ess_IUser} to event.getTarget()   # 获取IUser对象
    set {_player} to {_ess_IUser}.getBase()   # 获取Player对象
```

这行代码意为调用这个事件里的 `getTarget()` 方法，来获取 tpa 的目标，其返回一个 `IUser`。

这个 `IUser` 是 EssentialsX 的一个 **接口**，`User` 类 **实现** 了它，可以在 [EssentialsX 的 Javadoc](https://jd-v2.essentialsx.net/net/ess3/api/iuser) 里查看。

```skript
    if {_player} is player("lilingfeng"):
        send "&clilingfeng是我的不准tpa到她那里🥵"
        cancel event
```

这几行和普通的 sk 语法没什么区别，作用是判断然后取消事件。

### 使用方法

如果你需要调用其他的插件或是一些 **skript** 里没有而 [Bukkit API](https://bukkit.windit.net/javadoc/) 有的 API，那么会很棘手。

**skript-reflect** 很好的解决了这一点。

比如，你正在使用 **Leaves** 服务端，想要用 sk 来改变 Leaves 中假人在玩家列表中显示的名字，那么可以遵循以下步骤：

#### 查询 Javadoc

修改假人的名字这一行为应该在假人加入服务器时进行，所以我们得监听这一事件。

我们需要找到 bot 事件到底是哪个，查询 [Leaves 的 Javadoc](https://repo.leavesmc.org/javadoc/snapshots/org/leavesmc/leaves/leaves-api/1.20.6-R0.1-SNAPSHOT)：

![搜索事件](_assets/SearchEvent.png)

这里查询找到了 `org.leavesmc.leaves.event.bot.BotEvent` 事件。

看命名就知道应该会有更详细的 **子类** 来 **继承** 它，点进去看看，可以看到：

![查找子类](_assets/QuerySubclasses.png)

通过看类名可以知道，`BotJoinEvent` 就是我们要的事件。

看介绍，发现这个事件会“Called when a fakeplayer joins a server”

接下来让我们看看这个类有哪些 **方法**。

![查找方法](_assets/SearchMethods.png)

可以看到，最主要的是一个 `getBot()` 方法，在让我们看看这个方法会返回什么。

点击超链接，可以看到这个方法会返回一个 `Bot` 对象。

这个 `Bot` 接口是继承自 `Player` 的，也就是说，`Player` 有的方法，`Bot` 都有。

再次查询 [Bukkit API](https://bukkit.windit.net/javadoc/org/bukkit/entity/Player.html) 可以找到 `Player` 类有的方法，如 `Player#setPlayerListName()`，这正是我们需要的方法。

#### 编写程序

开始编写程序

```skript
import:
    org.leavesmc.leaves.event.bot.BotJoinEvent   #导入类

# 监听事件
on BotJoinEvent:
    set {_bot} to event.getBot()   # 获取假人
    set {_bot_name} to {_bot}.getName()   # 储存假人原本的名字
    {_bot}.setPlayerListName("假的%{_bot_name}%")   # 修改假人在tab列表里的名字
```

这一过程也可适用于其他插件，比如 [zimzaza4 大蛇](https://github.com/zimzaza4) 的 [Skript-Floodgate-Api](https://github.com/zimzaza4/Skript-Floodgate-Api)，
就是利用 **skript-reflect** 来调用 [Floodagate API](https://wiki.geysermc.org/floodgate/api/) 的。

可以查看下面的教程来详细学习 **skript-reflect** 的基础功能 (对，下面这一大坨只是基础)

### skript-reflect 基础教程

:::danger

此段部分或全部抄自 **skript-reflect** [官方文档](https://tpgamesnl.gitbook.io/skript-reflect/basics)

:::

#### 导入 Java 类

##### _在解析时导入类 (推荐)_

在大多数情况下，无需运行脚本即可知道所需类的确切限定名称。如果是这种情况，你应该使用 **skript-reflect** 的 `import` 块：

:::info

为避免冲突，`import` 块创建的表达式仅对导入它们的脚本可用。你必须在使用它们的每个脚本中导入 Java 类。

:::

```skript
import:
    java.lang.System

command /example:
    trigger:
        message "%System%" # java.lang.System
        System.out.println("test")
```

```skript
import:
    java.lang.String as JavaString

command /example:
    trigger:
        message JavaString.format("Hello %%s", sender)
```

:::info

别名必须是有效的 Java 标识符！

:::

###### 在低于 1.17 的 Minecraft 版本上导入 NMS 类

由于 **Minecraft** 1.17 以下版本的 **NMS** 包会随着每个 **Minecraft** 版本而变化，因此你应该动态生成包前缀。有关详细信息，请参阅 [计算选项](https://tpgamesnl.gitbook.io/skript-reflect/advanced/computed-options#using-computed-options-for-nms-imports)。

##### _在运行时导入类_

有时，在执行脚本之前，无法确定所需的类引用。

###### 从完全限定的名称

语法：

```skript
[the] [java] class %text%
```

示例：

```skript
on script load:
    set {Player} to the class "org.bukkit.entity.Player"
    message "%{Player}%" # org.bukkit.entity.Player
```

###### _从对象_

语法：

```skript
[the] [java] class[es] of %objects%
%objects%'[s] [java] class[es]
```

示例：

```skript
command /example:
    executable by: players
    trigger:
        set {Player} to player's class
        message "%{Player}%" # org.bukkit.entity.Player
```

###### 在 effect 命令中导入

由于导入块在 effect 命令中不可用，因此你可以使用 import effect (仅在 effect 命令中可用)：

```skript
import <fully qualified name> [as <alias>]
```

此导入只能在以上效果命令中使用，直到你停止服务器。

##### _处理内部类_

有时，一个类可能嵌套在另一个类中。当引用类的完全限定名称时，内部类使用一个 `$` 而不是 `.`

例如，将 `org.bukkit.entity.EnderDragon.Phase` 变成 `org.bukkit.entity.EnderDragon$Phase`。

内部类通常比其周围的类具有更通用的名称，因此应在别名下导入这些名称：

```skript
import:
    org.bukkit.entity.EnderDragon$Phase as EnderDragonPhase
```

导入这些类的另一种方法是只导入它们的封闭类：

```skript
import:
    org.bukkit.entity.EnderDragon

on load:
    set {phase} to EnderDragon.Phase.LEAVE_PORTAL
```

#### 运行 Java 代码

##### _调用方法_

语法：

```skript
%object%.<method name>(%objects%)
```

示例：

```skript
event-block.breakNaturally()
(last spawned creeper).setPowered(true)
player.giveExpLevels({_levels})
```

方法可以用作 **Effects** 、 **Expressions** 和 **Conditions** 。如果用作**Conditions**，则只要方法的返回值不是 `false`、`null` 或 `0`，
这个 **Conditions** 就会通过。

###### 调用非公共方法

如果尝试调用的方法不是公共的，则可能需要在方法名称前面加上括号中的声明类。由于一个对象在多个父类中可能具有同名的非公共方法，因此必须显式指定在何处查找该方法。

语法：

```skript
{_arraylist}.[ArrayList]fastRemove(1)
```

###### 调用 Overload 的方法

通常， **skript-reflect** 可以从运行时传递的参数中推断出要调用的正确的 Overload 方法。如果需要使用某个方法的某种实现，可以在方法名称的末尾附加一个逗号分隔的列表，并用括号括起来。

语法：

```skript
System.out.println[Object]({_something})

Math.max[int, int](0, {_value})
```

##### _调用字段_

语法：

```skript
%object%.<descriptor>
```

###### 调用非公共字段

如果你尝试访问的字段不是公共的，则可能需要在字段名称前面加上括号中的声明类。由于一个对象在多个父类中可能具有同名的非公共字段，因此必须显式指定查找该字段的位置。

示例：

```skript
{_hashmap}.[HashMap]modCount
```

##### _调用构造函数_

语法：

```skript
[a] new %javatype%(%objects%)
```

示例：

```skript
new Location(player's world， 0， 0， 0)
```

#### 处理事件

##### 监听事件

你可以通过引用导入的类来收听任何基于 Bukkit 的事件 (包括其他插件添加的事件)。例如，如果要收听 `org.bukkit.event.entity.EnderDragonChangePhaseEvent`：

```skript
import:
  org.bukkit.event.entity.EnderDragonChangePhaseEvent

on EnderDragonChangePhaseEvent:
  # your code
```

:::warning

一些插件使用自己的事件处理系统，或者不通过 **Bukkit** 的事件执行器传递他们的事件 (**Skript** 的一些内部事件就是这种情况)。

为了侦听事件，它必须扩展 `org.bukkit.event.Event` 并由 **Bukkit** 的事件执行器执行。

:::

你还可以使用同一处理程序侦听多个事件。这些事件不必相关，但如果尝试访问在一个事件中可用但在另一个事件中不可用的方法，则应采取适当的预防措施。例如，如果要同时侦听 `org.bukkit.event.entity.ProjectileLaunchEvent` 和 `org.bukkit.event.entity.ProjectileHitEvent`：

```skript
import:
  org.bukkit.event.entity.ProjectileLaunchEvent
  org.bukkit.event.entity.ProjectileHitEvent

on ProjectileLaunchEvent and ProjectileHitEvent:
  # your code
```

##### 使用 `event` **Expressions**

**skript-reflect** 公开一个叫做 `event` 的 **Expressions**，允许你使用反射访问事件值。

语法：

```skript
[the] event
```

示例：

```skript
import:
  org.bukkit.event.entity.EnderDragonChangePhaseEvent
  org.bukkit.entity.EnderDragon$Phase as EnderDragonPhase

on EnderDragonChangePhaseEvent:
  if event.getNewPhase() is EnderDragonPhase.CIRCLING:
    event.setNewPhase(EnderDragonPhase.CHARGE_PLAYER)
```

:::info

该 event 表达式也可用于正常的 Skript 事件。

:::

##### 设置优先级

可以将事件的优先级设置为控制特定事件处理程序相对于其他事件处理程序的运行时间。

示例：

```skript
import:
  org.bukkit.event.entity.EnderDragonChangePhaseEvent

on EnderDragonChangePhaseEvent with priority highest:
  # your code
```

可以使用 `org.bukkit.event.EventPriority` 中定义的任何事件优先级。优先级较低的事件处理程序在优先级较高的事件处理程序之前运行。

事件优先级：

-   lowest
-   low
-   normal
-   high
-   highest
-   monitor

##### 处理已取消的事件

默认情况下，如果事件被优先级较低的处理程序取消，则不会调用事件处理程序。可以通过指定处理程序应处理 `all` 事件来更改此行为。

示例：

```skript
import:
  org.bukkit.event.block.BlockBreakEvent

on all BlockBreakEvent:
  uncancel event
```

#### 一些 **skript-reflect** 内置的小工具

##### Collect

```skript
[%objects%]
[%objects% as %javatype%]
```

创建包含指定对象的数组。指定类型可确定生成数组的组件类型。

:::info

此语法中的括号是文字，不表示可选组。

:::

##### Spread

```skript
...%object%
```

将 Java 类型的数组转化为 sk 可读形式。

实例：

```skript
set {_list::*} to ...{_array}
```

##### 创建数组

```skript
new %javatype%[%integer%]
```

创建给定类型和大小的数组。类型可能是原始类型，不需要导入。

:::info

此语法中的括号是文字，不表示可选组。

:::

##### 通过索引获取数组的值

```skript
%array%[%integer%]
```

表示数组的某个索引处的值。

可以读取和写入此值。

:::info

此语法中的括号是文字，不表示可选组。

:::

##### Null

```skript
null
```

在 **Java** 中表示 `null`。这与 **Skript** 的 `<none>` 不同。

##### Bits

```skript
[the] (bit %number%|bit(s| range) [from] %number%( to |[ ]-[ ])%number%) of %numbers%
%numbers%'[s] (bit %number%|1¦bit(s| range) [from] %number%( to |[ ]-[ ])%number%)
```

表示数字中的位的子集。

可以读取和写入此值。

##### Raw Expression

```skript
[the] raw %objects%
```

返回表达式的基础对象。

:::info

与 [Expression](https://tpgamesnl.gitbook.io/skript-reflect/advanced/custom-syntax#expression) 一起使用时，可以将其设置为一个值，这将更改该参数的输入值。这可用于将数据存储在调用触发器的变量中。

```skript
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

```skript
[the] (fields|methods|constructors) of %objects%
%objects%'[s] (fields|methods|constructors)
```

返回对象的字段、方法或构造函数的列表，包括其修饰符和参数。

如果需要不带修饰符或参数详细信息的字段或方法名称列表，请参阅 [成员名称](https://tpgamesnl.gitbook.io/skript-reflect/basics/utilities#member-names)。

##### 成员的名字

```skript
[the] (field|method) names of %objects%
%objects%'[s] (field|method) names
```

返回对象的字段或方法的列表。

##### 判断对象是否是某个类的实例

```skript
%objects% (is|are) [a[n]] instance[s] of %javatypes%
%objects% (is not|isn't|are not|aren't) [a[n]] instance[s] of %javatypes%
```

检查对象是否是给定 **Java** 类型的实例。

##### 类引用

```skript
%javatype%.class
```

从给定的 **Java** 类型返回对类的引用。返回 `java.lang.Class` 类型的对象。此表达式还支持不需要导入的基元类型。

##### 插件实例

```skript
[(an|the)] instance of [the] plugin %javatype/string%
```

返回给定插件的实例 (字符串形式的名称或插件类)。

更高级的用法及详细内容请自行查阅 [skript-reflect 文档](https://tpgamesnl.gitbook.io/skript-reflect)
