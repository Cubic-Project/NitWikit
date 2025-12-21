---
title: 基础教程
sidebar_position: 2
---

# 基础教程

## 入门

Skript 仍然是编程语言，所有的编程语言都必须在拥有理论基础的情况下多实践。

### 缩进

在 Skript 中如果一行代码以 `:` 结尾，那么下一行需要进行缩进操作，如果没有就不需要进行缩进。

缩进的方式可以选择两个或四个空格，或使用 Tab（虽然 Tab 在部分风格指南中不被推荐，但仍被广泛使用且便于编辑）。

### 文本编辑器

推荐在 VS Code 中安装 Skript 扩展以获得更好的开发体验，也可使用 [Skeditor](https://forums.skunity.com/resources/skeditor.1517/) 提供语法高亮。

### 语法查询

所有的 Skript 语法都是通过同样的方法在 Skript 中注册的，因此我们必须要学会理解 Skript 语法。

我们推荐在以下的网站查询 Skript 语法：

-   [Skript Hub](https://skripthub.net/docs/)
-   [skUnity Docs](https://docs.skunity.com/syntax)
-   [Skriptlang Docs](https://docs.skriptlang.org/docs.html)
-   各个 Addon 的官方文档...

首先，最重要的是 `Event`（事件），它构成了脚本逻辑的触发条件。在 [Skript Hub](https://skripthub.net/docs/) 或 [skUnity Docs](https://docs.skunity.com/syntax) 的侧边栏中选择 Skript -> Events 可以筛选出原生事件，下面以 Click 为例：

在文档中，每个语法会有以下几个重要标签：

#### 模式

这部分用于描述语法在 Skript 是如何被解析的，如下：

```text
[on] [(right|left)(| |-)][mouse(| |-)]click[ing] [on %entitydata/itemtype/blockdata%] [(with|using|holding) %itemtype%]
```

这部分的语法格式可以分为三种：

##### `[xxx]`

表示这部分可以被省略，但省略后可能会导致意义改变，如此处 `on click:` 和 `on rightclick:` 意义不同，前者为所有类型的点击，而后者为右键。

##### `(x|y|z)`

表示该部分可以从 `x`、`y`、`z` 中选择一个值，并且这些选项可以包含空格或无空格形式。

例如 `[mouse(| |-)]click` 可对应 `mouseclick`、`mouse-click`、`mouse click` 或 `click` 等写法。

而 `(right|left)(| |-)` 表示 `right` 与 `left` 是两个相互区分的选项。

##### `%entitydata/itemtype%`

表示这部分只能是固定的某种 type，如 `%itemtype%`，这部分可以勾选 [Skript Hub](https://skripthub.net/docs/) 侧边栏 `Type` 获取。

#### 属性（可选）

只会出现在 Event 中，描述一个事件是否可取消，以及该事件中可用的属性，如

我们要重点关注的是 `Event Values` 这一标签下所对应的内容：

-   event-block（事件方块-玩家点击的方块）
-   event-direction（事件方向-玩家点击的方块的方向）
-   event-entity（事件实体-通常为玩家，如果是和实体交互则为该实体）
-   event-item stack（事件物品-玩家主手工具）
-   event-player（事件玩家）
-   event-world（事件世界）
-   ...

利用这些，我们便可以获取到事件中的，"谁" 和 "某地" 之类具体的信息。

我们看一个 "on click" 相关示例：

```skript
on right click on dirt:
    send "%event-world%" to console
    send "%event-player%" to console
    send "%event-block%" to console
```

此时，任何对泥土方块的右键点击，都会在后台输出 `event-world`、`event-player`、`event-block` 三个元素的值。

相同地，你可以利用这样的方法，输出任何一个监听器下 "Event Values" 的元素值。

这种获取元素值的方法将在你需要使用任何从来没有接触过的监听器的时候，快速让你掌握监听器的基本信息。

#### 例子（可选）

文档中会给出一些例子，帮助你更好的理解该语法的用法，通常需要点击 `View Examples` 才能看到。

注意：例子在不同版本的 Skript 中可能会有所不同，请根据你所使用的 Skript 版本进行参考。

#### 版本信息

不同版本的 Skript 可能会对某些语法进行修改或添加新的语法，因此在使用某个语法时，务必确认你的 Skript 版本是否支持该语法。

同时，新版 Skript 会对某些过时的语法进行改进，因此建议查看右上角的版本信息，确保你所参考的语法与你所使用的 Skript 版本相符。

相信通过以上方法，你已经可以快速的查询到 Skript 语法，并理解其基本用法。那么接下来，我们将介绍 Skript 的八大类语法，帮助你更好的理解 Skript 的整体结构。

## 了解 "八大类"

所有的脚本都是由以下八种类型的语法构成：

Events、Conditions、Effects、Expressions、Types、Functions、Sections、Structures

其中：

只有 Events 和 Structures 可以顶层使用，其余六种类型必须嵌套在其他类型中使用。

只有 Conditions、Effects、Expressions、Functions 可以单独成为一行代码使用。

### Events - 事件

什么是事件？谁在某地做了某事，最简单的三要素构成了事件。

在 Bukkit 服务器中，事件是系统或玩家行为触发的特定情况或变化。

插件可以通过监听这些事件来扩展服务器的功能或改变其默认行为。

在 SK 中，事件往往作为触发器，**定义了何时以及如何触发脚本中的事件处理逻辑**。

举例：

```skript
on death of player:
    # 玩家死亡时
on click:
    # 玩家点击时
```

此处的 `on death of player` 和 `on click` 为 Events - 事件

### Conditions - 条件

条件语句用于判断某个表达式的结果，根据结果来执行不同的代码块。

在 SK 中常与事件一起使用，**用于判断是否应该执行特定的效果或操作**。

条件用于判断句：有没有，是不是。它的基本格式为 "if" + 条件。

举例：

```skript
on join:
    if player has permission "admin":
        # 管理员权限时执行
        send "管理你好!" to player
    else:
        # 无管理权限时执行
        send "玩家你好!" to player
```

此处的 `has permission "admin"` 为 Conditions - 条件

另外， SK 也支持省略 if 的写法，让 Conditions 单独成为一行代码：

```skript
on join:
    player has permission "admin"
    send "管理你好!" to player
```

在某些不需要 else 的情况下，这种写法更加简洁，但有时候大量条件会让代码变得不易阅读，因此建议根据实际情况选择使用。

### Effects - 效果

效果可以是修改游戏模式、发送消息、移动玩家等任何能够改变游戏世界的动作。

在 SK 中效果是脚本中实际执行的操作或指令，用于 **改变游戏结果或执行动作**

与其说它是效果，不如称作行动。Effects 注重的是 `动词` 而非后面跟着的 `名词`。

举例：

```skript
on player jump:
    # 玩家跳跃时
    teleport player to world "nether"
    # 将玩家传送到名为 "nether" 的世界
```

此处的 `teleport player to %world%` 为 Effects - 效果。

Effect 往往是脚本中最常用的语法，因为它们直接影响游戏世界和玩家体验。

因此，我们再来看一个更复杂的 Effect 示例，发送 Title 信息：

```skript
send title %text% [with subtitle %text%] [to %players%] [for %time span%] [with fade[(-| )]in %time span%] [(and|with) fade[(-| )]out %time span%]
send subtitle %text% [to %players%] [for %time span%] [with fade[(-| )]in %time span%] [(and|with) fade[(-| )]out %time span%]
```

我们可以大致上认识到 `EffSendTitle` 的基本用法，这里面面有很多可选项和类型，我们可以根据需要选择使用。

```skript
on join:
    wait 1 second
    # Effect -> wait %timespan%
    # Type -> 1 second(timespan时间类型)
    send title "Hello %player%!" with subtitle "Welcome to our server" to player for 5 seconds with fadein 1 second and fade out 1 second
    # Effect -> send title %text% ...
    # Type -> "Hello %player%!"(text类型), player(players类型), 5 seconds(timespan时间类型), 1 second(timespan时间类型)
```

此处的 `wait %timespan%` 和 `send title %text% ...` 为 Effects - 效果。

### Expressions - 表达式

表达式是计算值或引用数据的语句。它们可以返回各种类型的结果，如数字、字符串、列表等。

在 SK 中一般配合条件判断，用于 **在脚本中传递和处理数据**。

```skript
on join:
    # 玩家加入时
    set {playerIP::%player%} to ip of player
    set {playername::%player%} to name of player
    # 将玩家的名字存储到变量 {playerName}、{playerIP} 中
    broadcast "玩家名字为: %{playerName}%，IP 为：%{playerIP::%player%}%!"
    # 广播玩家的名字和 IP
```

表达式通常用于获取一个类型的属性，例如获取玩家的名字、位置，世界的时间，物品的数量等。

通常来说，用中文描述一个功能时出现 “的” 字时，往往意味着需要使用 Expression 来获取或修改该属性。

对应的，在英文中，往往会出现 `of` / `'s`，来连接主语和属性。

此处的 `name of` 和 `ip of` 为 Expressions - 表达式。

### Types - 类型

类型定义了变量、参数和返回值的数据种类。在 Skript 中，虽然不像某些编程语言那样严格区分类型，但理解不同类型的值（如字符串、数字、列表等）对于编写正确的脚本至关重要。

```skript
on bed enter:
    # 玩家进入床时
    if world of player is world "world":
        # 如果世界为 "world"
        send "玩家 %player% 已进入睡眠" to all players
        # 发送消息
```

此处的 `world "world"` 为 Types - 类型。

（注意，此处的 `"world"` 是包含引号的内容，指的是具体的世界名）

#### Expressions（表达）& Types（类型）的配合使用

假设你想在玩家所在位置生成僵尸。

通过查阅 [官方文档](https://docs.skriptlang.org/docs.html?search=#EffSecSpawn)，我们知道生成的语法为：

```skript
(spawn|summon) %entity types% [%directions% %locations%]
```

这个 Effect（效果）只提供了 "生成" 这个动作，但我们还需要：

-   **位置**：玩家所在的位置
-   **实体类型**：僵尸

查询文档后，我们找到 `location of` 表达式可以获取实体的位置。

但是 "位置" 和 "僵尸" 这两个具体的对象（主语/宾语）需要用 **Types（类型）** 来表示。

在 https://docs.skriptlang.org/classes.html 中可以找到：

-   `player` - 玩家
-   `zombie` - 僵尸

综合以上信息，我们得到完整代码：

```skript
spawn zombie at location of player
```

但事实上，Skript 会自动判断我们传入的类型，例如 #EffSecSpawn 中需要传入的是 `location` 类型

但 Skript 会自动将 `player` 类型转换为 `location of player` 因此也可直接写成：

```skript
spawn zombie at player
```

:::tip[要点]

-   **Effect**：提供动作（如 `spawn`）
-   **Expression**：提供属性（如 `location of`）
-   **Type**：提供具体对象（如 `player`、`zombie`）

缺少主语/宾语时，在 Types 文档中查找即可。

:::

### Functions - 功能

功能是封装了特定逻辑的代码块，可以在脚本中多次调用，可以带参数并返回值。

在 SK 中，作用主要是 **快捷计算、指定类型（如世界、颜色、玩家类型）等**

举例：

```skript
on player join:
    set {_location} to makePlayerFly(event-player)
    # 调用 makePlayerFly 函数，并传入 event-player 作为参数让玩家飞起来
    # 将返回的地点存储在局部变量 {_location} 中
    broadcast "玩家 %event-player% 在 %{_location}% 起飞了!"

function makePlayerFly(p: player) :: location:
    # 定义一个名为 makePlayerFly 的函数，参数为 p（类型为 player），返回值类型为 location
    set {_vector1} to vector(0, 10, 0)
    # 设置局部变量为向量（向上）
    push player {_vector1}
    # 以设定向量推动玩家向上
    return location of {_p}
```

此处的 `makePlayerFly()`、`world(xxx)` 和 `vector(0,1,0)` 为 Functions - 功能。

而 `function makePlayerFly(p: player) :: location:` 事实上是一个 Structure - 结构。

### Sections - 部分

部分是指脚本中按功能或逻辑组织的代码块。它们可以是事件处理器、条件判断、循环体等，通常用于将相关代码组织在一起，以便更好地管理和维护。

举例：

```skript
on tool break:
    # 当工具用坏时
    if player is op:
        # 如果玩家是管理员
        give player 1 of diamond
        # 给玩家一个钻石
    else:
        # 另一种情况（如果玩家不是管理）
        send "哦不你失去了你的工具" to player
        # 发消息给玩家
        spawn zombie at location of player:
        # 在玩家位置生成一个僵尸
            set name of entity to "复仇的僵尸"
```

此处的 `spawn zombie at location of player:`、`if ...:` 和 `else:` 为 Sections - 部分。

特点是，Sections 被嵌套在 Events 或 Structures 中，往往以 `:` 结尾，并且后续代码需要缩进。

### Structures - 结构

结构是控制脚本执行流程的语言元素，如循环、条件判断等。它们允许开发者根据特定的条件或逻辑来执行或跳过代码块，从而实现复杂的脚本逻辑。

举例：

```skript
options:
    servername: myserver
    # option 中定义 {@xxx} 的值

function welcome(msg: text, p: player):
    broadcast {_msg}
    # 广播消息
    message "欢迎 %{_p}% 来到 {@servername} 服务器！"
    # 定义了 welcome（参数 1:type，参数 2:type），使用 option 中的变量 {@servername}

on join:
    welcome("欢迎玩家加入游戏", player)
```

此处的 `options` 和 `function` 为 Structures - 结构。

通过合理使用这八大类语法，你可以编写出功能强大、易于维护的 Skript 脚本，为 Minecraft 服务器增添丰富的功能和玩法。

## 最初的脚本

在这个板块中，请利用 [Skript Hub](https://skripthub.net/docs/) 或 [skUnity Docs](https://docs.skunity.com/syntax) 查询 Skript 语法，满足缩进等要求，尝试写一些最基础脚本吧~

当然仅仅学这些并不够，为了做到能更快更灵活的使用各类语法，在闲暇的时候，把官方 Doc 提供的所有语法的注释都认真的看一遍是快速上手 Skript 的一种好办法。

### 事件

在这一节中，我们学习如何选用合适的事件。因为事件是一切行为的触发器，需要事件发生了什么，在哪发生的，才能够进一步进行操作。

事件发生的顺序是：

`事件准备发生` -> `监听器监听到` -> `事件正式发生`

#### 事件的取消

如果我们在监听器监听到后，加入取消事件这一环节。事件发生的顺序就变为了：

`事件准备发生` -> `监听器监听到` -> `取消事件` -> `事件未发生`

我们就成功阻止了事件的发生，我们使用 `cancel event` 来取消事件。

#### 事件优先级

要注意，事件的监听是有优先级的，其中有六个优先级，其中执行顺序为 **从上到下** 分别为：

| 优先级       | Priority |
| ------------ | -------- |
| 最低         | Lowest   |
| 低           | Low      |
| 正常（默认） | Normal   |
| 高           | High     |
| 最高         | Highest  |
| 监控         | Monitor  |

优先级的使用可以帮助我们更好地控制事件的处理顺序，避免逻辑冲突或不必要的资源消耗。

示例 1：禁止没有权限的玩家通过命令执行传送：

```skript
on teleport with priority lowest:
    teleport cause is command
    # 判断 tp 原因是否为指令 tp
    if player does not have permission "admin.tp":
        # 取消没有 tp 权限的玩家的传送
        cancel event
```

在此示例中使用 `with priority lowest` 可尽早判断并取消不符合权限的传送请求。

示例 2：记录玩家受伤情况：

```skript
on damage of player with priority monitor:
    # 监控玩家受伤事件
    log "玩家 %player% 受到了伤害"
```

在此示例中使用 `with priority monitor` 可确保在所有其他监听器处理完毕后记录最终的受伤信息。

:::warning[说明]

Skript 使用与 Bukkit 相同的事件优先级机制，触发顺序为 `Lowest -> Low -> Normal -> High -> Highest -> Monitor`。

`Lowest` 会最先接收事件；若事件未被取消，则后续优先级的监听器可能对事件结果进行进一步处理。

:::

#### 事件选用

选用不合适的事件可能导致逻辑混乱、性能问题或代码臃肿。因此在编写脚本之前，应充分评估并选取合适的事件。

##### 练习 1 - 夜间扣血脚本

例如，我们想写一个脚本，检测玩家在 00:00 ～ 06:00 没有在床上睡觉，那么就每秒扣玩家 1 生命值。

查询 [Skript Hub](https://skripthub.net/docs/) 或 [skUnity Docs](https://docs.skunity.com/syntax)，根据直觉选择，与时间和睡觉有关系的事件可能有这些：

```skript
every 10 seconds:
at 00:00:
on bed enter:
on bed leave:
```

我们分别使用这些事件写以下几个脚本：

<details>
    <summary>脚本 1 - Every %timespan% + loop</summary>

```skript
every 1 second:
    loop all players:
        if loop-player is not sleeping:
            if time in world is between 00:00 and 6:00:
                remove 1 from health of loop-player
```

该脚本利用 `every %timespan%` 作为事件触发，本身也是周期循环。

可以发现，该循环使用 `every 1 second`，触发频率比较高，即使在白天这个事件循环仍在继续，

虽然整体任务不算复杂，但是如果遇到复杂判断时，高频率（尤其是 `every tick`）的事件是很低效的。

</details>

<details>
    <summary>脚本 2 - Event + At time</summary>

```skript
on bed leave:
    set {%player%::sleep} to false
on bed enter:
    set {%player%::sleep} to true

at 00:00 in world "world":
    while time in world is between 00:00 and 6:00:
        loop all players:
            if {%loop-player%::sleep} is false:
                remove 1 from health of loop-player
        wait 1 second
```

该脚本利用 `at time` 作为事件触发，也使用 `while` + `wait` 保持时间周期循环。使用 `bed leave`、`bed enter` + 变量作为条件。

属于 **错误使用了监听事件**，因为玩家是否在睡觉不需要我们自行使用事件判断，而是有直接的条件语法。

</details>

<details>
    <summary>脚本 3 - Event + While</summary>

```skript
at 00:00 in world "world":
    while time in world is between 00:00 and 6:00: # 注意：若时间段跨越午夜（如 23:00-02:00），请不要直接使用 between，而应拆分为两个条件判断
        loop all players:
            if loop-player is not sleeping:
                remove 1 from health of loop-player
        wait 1 second
```

该脚本利用 `at time` 作为事件触发，使用 `while` + `wait` 保持时间周期循环，使用 `is not sleeping` 作为条件。

此处 `while` + `wait` 的使用也并不推荐，因为 Skript 的 `wait` 机制并不高效，因此可以考虑使用 `Skbee` 写法：

</details>

<details>
    <summary>脚本 4 - Skbee Async Task</summary>

```skript
at 00:00 in world "world":
    async run 1 tick later repeating every 1 second:
        if time in world is not between 00:00 and 06:00:
            exit
        loop all players where [input is not sleeping]:
            remove 1 from health of loop-player
```

该脚本利用 `at time` 作为事件触发，使用 Skbee 的异步定时任务保持时间周期循环，使用 `Where` 语法筛选玩家，

使用 `is not sleeping` 作为条件，`if` 反转退出循环，提升了性能和可读性。

</details>

#### 练习 2 - 大厅保护脚本

这个练习要求你运用所学的事件知识，制作一个 Skript 脚本，用于在大厅使用，

取消玩家伤害、饥饿度变化与怪物刷新，同时限制普通玩家放置与破坏方块。

具有 `lobby.admin` 权限的玩家应保留放置与破坏的权限。

<details>
    <summary>参考写法，不唯一</summary>

不刷新怪物的事件建议去掉，直接设置 **难度为和平**。

```skript
# 不推荐，即使这是有用的！
on spawn of zombie:
    cancel event

on food level change:
    cancel event
    # 禁止饱食度变化

on damage of a player with priority lowest:
    cancel event
    # 取消玩家伤害

on break with priority lowest:
    if player does not have permission "lobby.admin":
        # 判断玩家权限
        cancel event
        # 取消无权限玩家的方块破坏

on place with priority lowest:
    if player has permission "lobby.admin":
        stop
        # 停止进一步对有权限玩家的逻辑，即什么也不做
    else:
        cancel event
        # 取消没有权限玩家的方块放置行为
```

在这里，以下两种写法是等价的。

```skript
if player does not have permission "lobby.admin":
    cancel event
```

```skript
if player has permission "lobby.admin":
    # 有权限时的处理
else:
    cancel event
```

如果只需要判断是或不是，可以灵活选用更简洁的方法，简化为：

```skript
on place:
    player does not have permission "lobby.admin"
    cancel event
```

在这里省略了一个 if，因此后面也不需要跟上冒号 `:`，也无需重新换行，但注意，

这只适用于只对没有权限的人进行取消，而对有权限的人没有任何限制时才可以这么写。

</details>

### 指令注册

说到现在，我们所有的代码，似乎都是基于监听器进行编写的。我们都需要去触发监听器，才能执行我们的代码，那有没有什么办法可以主动触发我们的代码？

这时候我们就需要引入 Minecraft 插件最核心的功能，指令功能。

在 Java 里你可能需要这样注册一个指令：

```Java
@Override
public boolean onCommand(final CommandSender sender, Command cmd, String label, String[] arg) {
    if (cmd.getName().equalsIgnoreCase("自定义指令")) {
        // 代码段落
    }
    return true;
}
```

但是在 Skript 里你只需这样即可：

```skript
command /<指令名称> [<类型1>] [<类型2>] [<类型3>]:
    aliases: <别名>
    executable by: <执行者>
    usage: <使用提示>
    description: <指令描述>
    permission: <所需权限>
    permission message: <无权限消息>
    cooldown: <冷却时间>
    cooldown message: <冷却消息>
    cooldown bypass: <冷却绕过权限>
    cooldown storage: <变量>
    trigger:
        # 代码段
```

#### 指令注册详解

-   **Aliases**：子指令，指令的别名。如果需要创建多个子指令，请使用逗号分隔。示例：`/alias1, alias2, /alias3`

-   **Executable By**：指定可以使用该指令的执行者。例如：`console`（后台）、`players`（玩家）、`the console and players`（后台和玩家）

-   **Usage**：执行者用法不正确时，将发送的消息。

-   **Description**：指令描述，其他插件可以获取/显示此信息。

-   **Permission**：执行指令所需要的权限。

-   **Permission Message**：执行者没有权限时的提示信息。

-   **Cooldown**：多长冷却时间后可以再次使用该指令，需要注意的是，关服时所有指令冷却时间将被重置。

-   **Cooldown Message**：冷却期间，提示信息。

-   **Cooldown Bypass**：无视冷却时间所需要的权限。

-   **Cooldown Storage**：存储冷却时间全局变量名称。

-   **Trigger**：指令触发时执行的代码段。

这里的 `[<类型>]` 就是指令参数的类型，可以查询 [Skript Hub](https://skripthub.net/docs/) 或 [skUnity Docs](https://docs.skunity.com/syntax) 侧边栏 `Type` 获取。

常见的类型有：

-   `text`、`string` - 字符类型。什么是字符？可以按照字面意思来理解，字词符号。
-   `player` - 在线玩家。
-   `offline player` - 离线玩家。
-   `number` - 数字类型。
-   `integer` - 整数类型。
-   `boolean` - 布尔类型。

一般来说，选择合适的类型参数，可以帮助我们更好的限制输入内容，减少边界情况的发生。

另外，`command /test %arg-1% %arg-2% %arg-3%:` 指令参数在代码段内的引用方式为 `arg-1`、`arg-2`、`arg-3`，依此类推。

我们只需要记住核心规则，参数前有多少个空格，那么参数编号就是多少。

#### 指令参数详解

##### 指令名称（必填）

指令名称基本上是指令，你可以在指令名称中使用任何字符（空格字符除外）。当然如果在指令名称中使用空格字符，那么空格字符后的文本将成为参数。

指令名称前的斜杠字符（`/`）是可选的（但这并不意味着你可以在执行指令时不带斜杠）。

##### 指令参数（可选）

-   使用 `text`/`string` 类型参数时，可以输入任何字符，`object` 类型不能用作于参数；
-   使用 `player`/`offline player` 类型参数时，玩家名称会自动添加到 Tab 补全列表中；
-   使用 `boolean` 类型参数时，只接受以下几种输入：`true`、`false`、`on`、`off`；
-   使用 `<>` 引用起来时说明该参数为必要参数，如果输入时没有这个参数时会提示格式错误；
-   使用 `[<>]` 引用起来时说明该参数为可选参数。
-   可以通过使用规定的格式来限制参数的类型，例如：`<type = default value>`，其中 `default value` 是可选的，如果执行者未输入该参数，系统将自动使用默认值；
-   类型可以是多个（例如 `number` -> `numbers`，`entity` -> `entities`）。通过这样的方法，可以使参数接受多个值。

以下是一份指令示例，假设我们注册了一个杀死指定实体的指令：

`command /kill <entity types> [in [the] radius <number = 20>]:`

`/kill zombies` -> 这将会杀死半径 20 范围内的所有僵尸。

`/kill creepers and animals in radius 100` -> 这将会杀死半径 100 范围内的所有爬行者和动物。

`/kill monsters in the radius 6` -> 这将会杀死半径 6 范围内的所有怪物。

很好，我们已经了解了指令注册的基本用法，接下来我们通过几个练习来巩固所学内容。

#### 练习 3 - 跨世界传送指令（/command、局部变量、运算）

制作一个 Skript 脚本，用于简单的跨世界传送，输入 `/world xxx` 即可传送到对应世界，坐标对应为：`主世界:地狱:末地 = 8:1:8`，

即玩家在末地 `800，100，800` 传送到主世界坐标为 `800 100 800`，如果传送到地狱坐标为 `100 100 100`，

要避免玩家传送到自己所在的世界。如果玩家输入的世界不存在，则提示 "目标世界不存在"，如果只输入 `/world` 则提示玩家所在位置。

这个指令需要有 `command.world` 权限才能使用，传送 CD 为 5 秒。

<details>
    <summary>参考写法，不唯一</summary>

在这里，我们分析一下指令，应该是 `/world xxx` 中的 `xxx` 代表世界，所以我们选择 `/world <world>` 作为指令。

另外，我们可以发现，玩家输入的指令可能包括自己在的世界，这件事本身是没意义的，应该在最开始检查一次。

如果你是新手，很有可能会写出类似以下的脚本：

```skript
command /world [<world>]:
    cooldown: 5 seconds
    permission: command.world
    trigger:
        if arg-1 is world "world_the_end":
            teleport player to location(player's x-coord / 8, player's y-coord, player's z-coord / 8, world "world_the_end")
        if arg-1 is world "world_nether":
            if player's world is "world_the_end":
                teleport player to location(player's x-coord / 8, player's y-coord, player's z-coord / 8, world "world_nether")
            if player's world is "world":
                teleport player to location(player's x-coord, player's y-coord, player's z-coord, world "world_nether")
        if arg-1 is world "world":
            if player's world is world "world_nether":
                teleport player to location(player's x-coord * 8, player's y-coord, player's z-coord * 8, world "world")
            else:
                teleport player to location(player's x-coord, player's y-coord, player's z-coord, world "world")
```

:::warning[问题分析]

1. 在这里，每行代码都过长了，非常不利于阅读。
2. 此想要调整不同世界的比例时，需要一个个调整参数，这不利于代码的维护。
3. 使用的 `if` 套在 `if` 后的情况比较多，在逻辑上可能会出现问题。

:::

所以，我们选择使用局部变量暂存玩家的坐标，并基于玩家所在世界及目标世界计算变量，最后根据计算出的量直接使用 `teleport player to %location%` 传送即可。

```skript
command /world [<string>]:
    cooldown: 5 seconds
    permission: command.world
    trigger:
        if arg-1 is not set:
            send "你当前所在位置为：X:%player's x-coord% Y:%player's y-coord% Z:%player's z-coord% in world %player's world%"
            stop
            # 如果没有输入参数则提示玩家当前位置并停止执行
        if arg-1 is player's world:
            send "[传送] 禁止套娃！"
            stop
            # 取消玩家输入的世界是自己所在的世界时的原地 tp
        if world "%arg-1%" is not loaded:
            send "[传送] 目标世界不存在！"
            stop
            # 取消玩家输入的世界不存在时的 tp

        set {_y} to player's y-coord
        # 使用局部变量储存玩家的 y 坐标
        if player's world is world "world_nether":
            # 玩家在地狱时存储 x z 坐标存为 8 倍
            set {_x} to player's x-coord * 8
            set {_z} to player's z-coord * 8
        else:
            # 玩家在其他世界时 x z 坐标暂存
            set {_x} to player's x-coord
            set {_z} to player's z-coord

        if arg-1 is world "world_nether":
            # 如果玩家从其他地方到地狱，将暂存的 x z 坐标除以 8
            set {_x} to {_x} / 8
            set {_z} to {_z} / 8
        teleport player to location({_x}, {_y}, {_z}, world "%arg-1%")
        send "[传送] 成功传送到世界 %arg-1% ！"
```

:::tip[卫语句的使用]

以上脚本将 if %condition% 代码块靠前并提前 stop，检查了玩家输入的世界是否合理，这个思想广泛运用于编程中，

称为 "守卫式编程"（Guard Clause Programming），也叫卫语句，可以有效减少嵌套层级，提高代码可读性。

尤其是在指令注册中，往往需要对输入参数进行多次检查，使用守卫式编程可以让代码逻辑更加清晰。

:::

</details>

### 变量

变量是任何有用编程语言中的关键组成部分，Skript 也不例外。它们允许你存储、检索和操作数据，从而使你的脚本更加动态和灵活。

Skript 中的变量名几乎可以包含绝大多数字符，例如：

```skript
set {玩家的金币数} to 1000
set {_player::coin} to 1000
set {-cache::player::score} to 2
set metadata "permission" of player to "VIP"
set {-ids::*} to 1,2,3,4,5,6
```

其中，主要的变量类型有 4 种：

-   **局部变量**：以 `{_` 开头 `}` 结尾的变量，仅在当前事件或指令触发器中有效，适用于临时存储数据，避免与全局变量冲突。
-   **全局变量**：以 `{` 开头 `}` 结尾的变量，在整个 Skript 脚本中都有效，适用于需要跨事件或指令共享的数据。
-   **内存变量**：以 `{-` 开头`}` 结尾的变量，类似于全局变量，但是服务器关闭后会被清除，适用于需要在服务器运行期间存储的数据。
-   **元数据变量**： `metadata "key" of %entity%/%world%` 格式的变量，与实体或世界绑定，适用于需要与特定实体或世界关联的数据。

### 数组与循环

在开发过程中，很多时候会遇到需要批量处理一类变量的情况。例如玩家的游戏币、点券、经验值等。

假如我们将玩家的金币储存在变量里，我们可能会有以下选择：

`{player_%player%_coins}`
`{player.%player%.coins}`

强烈不推荐！因为这样做不仅无法使用 Skript 内置的数组和循环功能，还会导致变量管理混乱，难以维护。

`{%player%::playerCoins}`

可以进行数组形式的进行批量操作，但不推荐这种方式，因为不利于变量的分类和管理。

`{playerCoins::%player%}`

不错的选择，使用数组形式存储玩家的金币数量，可以方便地进行批量操作和管理。

#### 什么是数组

数组是一种数据结构，用于存储一组相关的数据项。在 Skript 中，数组允许你将多个值存储在一个变量中，并通过索引访问这些值。

数组的基本格式为 `{变量名::变量名::变量名......}`，其中 `::` 用于分隔不同的元素。

`{playerCoins::%player%} = %value%` 中，`{playerCoins::%player%}` 就是一个数组变量，

-   `playerCoins` 是数组的名称，表示这是一个存储玩家金币数量的数组。
-   `%player%` 是索引，表示玩家的名称（在 Config 中可以改为 UUID）。
-   `%value%` 则表示该玩家所拥有的金币数量。

这个数组也可以将这个变量视作返回了一个包含所有玩家金币数量的列表。

`set {_money} to getMoney(%player%)` => `set {_money} to {playerCoins::%player%}`

每给定一个玩家名称，就可以通过 `{playerCoins::%player%}` 访问到玩家金币数量。

#### 为什么使用数组

例如，我们使用数组 `{playerCoins::%player%}` 来存储玩家的金币数量时，如果需要给所有玩家增加金币，

我们可以遍历数组中的每个元素，而每个玩家所拥有的金币数量可以通过 `{playerCoins::*}` 进行访问和修改。

对于数组 `{playerCoins::*}` ，`*` 表示所有元素，可以用于循环遍历，也可以用于其他批量操作。

#### Loop / For（循环）

利用数组我们知道了如何快速获取一类数据。但是我们又该如何快速操作这一类数据呢？这时候就需要引入我们的 Loop 结构。

Loop / For 即循环结构，是 Skript 里非常常用的结构语句，主要用于操作数据量较大的一类变量。

Loop 可以与数组、次数、Types（类型）等配合使用。

Loop / For 循环的结构如下：

`loop %objects%`
`for each %key%, %value% in %objects%`

我们先举一个简单的例子：

```skript
on load:
    set {_list::1} to "hey"
    set {_list::2} to "how"
    set {_list::are} to "you"
    loop {_list::*}:
        broadcast "%loop-index%: %loop-value% (%loop-counter%)"
```

在 Loop section 中，有 `loop-index`、`loop-value`、`loop-counter` 三个内置变量来获取当前循环的索引、值和计数。

-   loop-index：当前循环的索引值；
-   loop-value：当前循环的值；
-   loop-counter / loop-iteration：当前循环的计数，从 `1` 开始递增。

特别的，对于 `loop %blocks%/%entities%/ %players%:`，

还可以使用 `loop-block`、`loop-entity`、`loop-player` 来获取当前循环的方块、实体或玩家对象，等价于 `loop-value`。

很好，我们已经了解了 Loop / For 循环的基本用法，我们来看一个更实际的例子。

我们需要发奖励，给 `{playerCoins::*}` 每一个人都新增随机 1~100 金币，并计数一共增加了多少：

```skript
command /addcoins:
    trigger:
        loop {playerCoins::*}:
            set {_reward} to random integer between 1 and 100
            add {_reward} to {playerCoins::%loop-index%}
            send "你获得了 %{_reward}% 金币！你现在有 %loop-value% 金币，你是第 %loop-counter% 个获得奖励的玩家" to player(loop-index)
```

在这里我们使用了 `loop {playerCoins::*}:` 来遍历数组中的每一个元素，在此处：

-   loop-index：当前循环的索引值，在数组中表示玩家名称或 UUID；
-   loop-value：当前循环的值，在当前数组中表示玩家的金币数量；
-   loop-counter：当前循环的计数，从 1 开始递增，表示已经处理了多少个元素。

##### 多层嵌套

在 Skript 中，Loop 结构是可以嵌套使用的。也就是说，你可以在一个 Loop 结构内部再使用另一个 Loop：

但需要注意的是，嵌套的 Loop 结构需要区分不同层级的内置变量，

例如 `loop-index-2`、`loop-value-2`、`loop-counter-2` 分别表示第二层循环的索引、值和计数。

一旦有多个层级的 Loop 嵌套，就需要使用 `-1`、`-2` 等后缀来区分不同层级的内置变量。

这会让代码非常混乱，不推荐使用过多层级的嵌套 Loop，举个例子：

```skript
on load:
    loop all players:
        loop all blocks in radius 5 around loop-player:
            send "玩家 %loop-player% 附近第 %loop-counter-2% 个方块是 %loop-block%" to console
```

为了解决这个问题，Skript 引入了 For 循环语法，可以让代码更加简洁和易读。

##### For 循环

For 循环与 Loop 循环类似，但 For 循环写法更简洁，用于替换 `loop` 语句，适用于简化代码结构，提高可读性。

```skript
        # for 循环中只有一个变量时，for each %value% in {array::*}:
        # 如果有多个变量时，使用 for each %key%, %value% in {array::*}:
        for each {_player}, {_coin} in {playerCoins::*}:
            set {_reward} to random integer between 1 and 100
            add {_reward} to {playerCoins::%_player%}
            send "你获得了 %{_reward}% 金币！你现在有 %{_coin}% 金币" to player({_player})
```

For 循环中，`for each {_player}, {_coin} in {playerCoins::*}:` 本质和 `loop {playerCoins::*}:` 相同，

但是使用了更简洁的语法来定义循环变量，直接使用了自定义变量名 `{_player}` 和 `{_coin}`，提高了代码的可读性。等价于：

```skript
    loop {playerCoins::*}:
        set {_player} to loop-index
        set {_coin} to loop-value
```

#### 练习 4 - 数组与循环：连锁砍树

当玩家手持斧头砍伐树木时，自动将在目标方块 **正上方** 木头一并砍伐掉，

考虑到本教程为基础教程，暂不考虑树木形状，仅砍伐正上方的木头，连锁上限为 32 块木头。

提示：`blocks above %block%` 可获取某个方块正上方的所有方块列表。

<details>
    <summary>参考写法，不唯一</summary>

```skript
item tag aliases:
    any axe = minecraft:axes
    any log = minecraft:logs
# 定义物品标签，方便后续使用

# 连锁砍树监听
on break:
    if player's tool is any axe:
    # 判断玩家手持物品是否包含 "axe" 标签
        block is any wood
        # 获取被破坏方块正上方的所有方块列表
        loop blocks above event-block:
            if loop-counter > 32:
                stop
            # 达到连锁上限则退出循环
            if loop-block is any wood:
                break loop-block using player's tool
```

</details>

### Function（函数）

当你的插件越来越复杂时，你会发现代码段落越来越多，逻辑越来越复杂，但你会发现很多代码段落其实是相似的，甚至是完全相同的。

代码是给人看的，给机器执行的只是顺便的事情。如果代码重复过多，不仅会让代码臃肿不堪，还会增加维护难度。

此时，就应该考虑使用 Function（函数）来优化代码结构和可读性 **复制粘贴不可取**。

Function 可用于解决这些问题，函数的定义与指令注册具有相似性，例如二者都支持参数，函数的基本结构如下：

```skript
function 方法名(参数名: 参数类型, 参数名: 参数类型, ...):
    # 代码段落

on load:
    方法名(参数值, 参数值, ...)
```

**使用** 方法的时候请勿画蛇添足在前面另加 "function"。

此处的 `方法名` 就是函数的名称，`参数名` 是函数的参数名称，`参数类型` 是参数的数据类型。

参数类型可以参考前面提到的指令参数类型，例如 `text`、`player`、`number`、`boolean` 等等。

参数类型也是限定参数的输入范围，防止出现不符合预期的输入，也可以使用默认值来简化调用。

函数的调用方式为 `方法名(参数值, 参数值, ...)`，其中 `参数值` 是传递给函数的实际值。

另外，函数可以有返回，也可以没有返回值，当需要返回值时，函数的结构如下：

```skript
function 方法名(参数名: 参数类型, 参数名: 参数类型, ...) :: 输出参数类型:
    # 代码段落
    return 返回值

on load:
    set {_result} to 方法名(参数值, 参数值, ...)
```

在此处，`{_result}` 将会存储函数 `方法名` 执行后的返回值。

需要注意：

-   当需要返回时候，需要用 `return` 语句用于指定函数的返回值
-   当函数执行到 `return` 语句时，函数将立即终止，后面的代码将不再执行
-   如果函数指定了输出参数类型，那么返回值必须与该类型匹配
-   如果使用 `return` 语句返回值，必须保证中途不能使用任何的 delay 语句

我们来看一个简单的例子：

```skript
function getFormattedTime(time: number,type:timespanperiod = ticks) :: string:
    set {_time} to timespan({_time},{_type})
    set {_days} to days of {_time}
    set {_hours} to mod(hours of {_time}, 24)
    set {_minutes} to mod(minutes of {_time}, 60)
    set {_seconds} to mod(seconds of {_time}, 60)
    if {_days} > 0:
        add "%{_days}% 天 " to {_fomattedTime::*}
    if {_hours} > 0:
        add "%{_hours}% 小时 " to {_fomattedTime::*}
    if {_minutes} > 0:
        add "%{_minutes}% 分钟 " to {_fomattedTime::*}
    return concat({_fomattedTime::*})
```

该例子中同样利用了 Skript 内置的 Function 来进行代码简化：

`mod(value, divisor)`：返回 `value` 除以 `divisor` 的余数

`mod(5, 2)` => 1
`mod(10, 4)` => 2

`concat(list)`：将列表中的所有元素连接成一个字符串

`concat("Hello", " ", "World")` => "Hello World"
`concat("A", "B", "C")` => "ABC"

该例子需要 `Skbee` 插件支持，函数 `getFormattedTime` 接受一个时间数值和一个时间单位类型作为参数，返回格式化后的时间字符串。

通过调用该函数，可以将时间数值转换为易读的格式，例如 "1 天 2 小时 30 分钟"。

```skript
on load:
    set {_timeString} to getFormattedTime(93784, seconds)
    broadcast "格式化后的时间为：%{_timeString}%"
```

其他函数示例可参考 [Skript Hub](https://skripthub.net/docs/) 或 [skUnity Docs](https://docs.skunity.com/syntax) 侧边栏 `Function`。

通过 Skript 内置的和我们自定义的函数，可以极大地提升代码的复用性和可维护性。

#### 练习 5 - 函数返回值：平滑视角

制作一个平滑视角函数，让玩家在一定时间内平滑地将视角从一个位置移动到另一个位置。

位置以 x,y,z 的形式传入 `arg-1`、`arg-2`、`arg-3`，默认时间为 20 ticks

指令已经写好，你需要完成平滑视角的函数：

```skript
command /smoothlook <number> <number> <number> [<integer>=20]:
    trigger:
        set {_from} to player's target block
        set {_to} to location(arg-1, arg-2, arg-3, player's world)
        set {_duration} to arg-4
        loop {_duration} times:
            set {_time} to loop-counter
            force player look smoothUtils({_duration}, {_from}, {_to}, {_time})
            wait 1 tick
```

<details>
    <summary>参考写法，不唯一</summary>

```skript
#> 平滑模块
function smoothUtils(duration:number,from:location,to:location,time:number) :: location:
    set {_tickrate} to ({_time} / {_duration})
    set {_x} to lerp({_from}'s x loc,{_to}'s x loc,{_tickrate})
    set {_y} to lerp({_from}'s y loc,{_to}'s y loc,{_tickrate})
    set {_z} to lerp({_from}'s z loc,{_to}'s z loc,{_tickrate})
    set {_yaw} to lerp({_from}'s yaw,{_to}'s yaw,{_tickrate})
    set {_pitch} to lerp({_from}'s pitch,{_to}'s pitch,{_tickrate})
    return (location({_x}, {_y}, {_z}, {_from}'s world, {_yaw}, {_pitch}))

#> 差值算法
function lerp(from:number,to:number,tickrate:number) :: number:
    return ({_from} + ({_to} - {_from}) * {_tickrate})
```

</details>

## 更高级的脚本

相信你已经掌握了 Skript 的基础语法和功能，能够编写一些简单的脚本来实现基本的功能。

我们将在接下来的章节中，介绍一些更高级的 Skript 技巧和最佳实践，帮助你成为一名更出色的 Skript 开发者。
