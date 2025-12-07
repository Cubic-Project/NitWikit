---
title: config.yml
sidebar_position: 3
---

<!--markdownlint-disable line-length-->

```yaml title="plugins\Essentials\config.yml"
############################################################
# +------------------------------------------------------+ #
# |                       注意事项                        | #
# +------------------------------------------------------+ #
############################################################

# 这是 EssentialsX 的配置文件。
# 此配置基于 2.21.2 版本。
# 查看最新的默认配置请访问 https://git.io/JG4z1

# 如果您想在此文档中使用特殊字符（如重音字母），必须将文件保存为 UTF-8 格式，而不是 ANSI。
# 如果 Essentials 加载时出现错误，请确保：
#  - 没有制表符：YAML 只允许使用空格
#  - 缩进正确：YAML 层次结构完全基于缩进
#  - 文本中的所有撇号都已"转义"：例如，如果要写"don't"，请改写为"don''t"（注意双撇号）
#  - 带有符号的文本用单引号或双引号括起来

# 编辑配置后，在游戏内运行 '/essentials reload' 来应用更改。

# 如果您需要帮助，可以加入 EssentialsX 社区：https://essentialsx.net/community.html

############################################################
# +------------------------------------------------------+ #
# |                 EssentialsX (全局设置)                | #
# +------------------------------------------------------+ #
############################################################

# 颜色代码，可选择 0-9 或 a-f。设置为 'none' 禁用。
# 在 1.16+ 版本中，您也可以在这里使用十六进制颜色代码（例如，#613e1d 是棕色）。
ops-name-color: "4"

# 用于为所有昵称添加前缀的字符，这样您就知道它们不是真实的用户名。
# 拥有 'essentials.nick.hideprefix' 权限的玩家不会被添加前缀字符。
nickname-prefix: "~"

# 昵称允许的最大长度。昵称前缀不包含在此长度内。
max-nick-length: 15

# 用于确定请求的昵称是否被允许使用的正则表达式模式。
# 如果请求的昵称不匹配此模式，昵称将被拒绝。
# 拥有 'essentials.nick.allowunsafe' 权限的玩家能够绕过此检查。
allowed-nicks-regex: "^[a-zA-Z_0-9§]+$"

# 不能在昵称中使用的词组列表。您可以在此包含正则表达式。
# 拥有 'essentials.nick.blacklist.bypass' 权限的玩家能够绕过此过滤器。
nick-blacklist:
    #- Notch
    #- '^Dinnerbone'

# 启用此选项时，昵称长度检查将排除玩家名称中的颜色代码。
# 例如，如果 "&6Notch" 有 7 个字符（其中 2 个是颜色代码的一部分），当此选项设置为 true 时，将使用长度 5。
ignore-colors-in-max-nick-length: false

# 启用此选项时，隐身玩家的显示名称将不会显示。这防止玩家在隐身时被看到在线。
hide-displayname-in-vanish: true

# 如果您有任何其他修改玩家显示名称的插件，请禁用此选项。
change-displayname: true

# 此选项将使 Essentials 在 Tab 补全 Essentials 命令时显示玩家的显示名称而不是用户名。
# 如果您的 Tab 补全包含前缀和后缀，请将此选项设置为 false。
change-tab-complete-name: false

# 当不使用 EssentialsChat.jar 时，强制 Essentials 将权限插件的前缀和后缀添加到显示名称。
# 如果使用了 EssentialsChat.jar，此设置将被忽略，默认为 true。
# 上面的 'change-displayname' 值必须为 true。
# 除非您知道自己在做什么，否则不要编辑此设置！
#add-prefix-suffix: false

# 启用此选项时，（Tab）玩家列表将使用显示名称更新。
# 上面的 'change-displayname' 值必须为 true。
#change-playerlist: true

# 启用此选项时，玩家前缀将在（Tab）玩家列表中显示。
# 此功能仅适用于 Minecraft 1.8 及更高版本。
# 上面的 'change-playerlist' 值必须为 true。
#add-prefix-in-playerlist: true

# 启用此选项时，玩家后缀将在（Tab）玩家列表中显示。
# 此功能仅适用于 Minecraft 1.8 及更高版本。
# 上面的 'change-playerlist' 值必须为 true。
#add-suffix-in-playerlist: true

# 如果传送目标不安全，是否应该将玩家传送到最近的安全位置？
# 如果设置为 true，Essentials 将尝试将玩家传送到接近预期目标的位置。
# 如果设置为 false，尝试传送到不安全位置将被取消并显示警告。
teleport-safety: true

# 如果尝试传送到不安全位置，这将强制禁用传送安全检查而不发出警告。
# 上面的 'teleport-safety' 和此选项都必须设置为 true 才能强制传送到危险位置。
force-disable-teleport-safety: false

# 如果玩家在创造、冒险或上帝模式下传送到不安全位置，他们不会被传送到安全位置。
# 如果您希望玩家始终被传送到安全位置，请将此选项设置为 true。
force-safe-teleport-location: false

# 将水方块视为"安全"，因此允许玩家使用
# /home 或 /spawn 等命令传送到被水方块占据的位置。
is-water-safe: false

# 如果玩家有任何乘客，传送将失败。是否应该在传送前让乘客下马？
# 如果设置为 true，Essentials 将在传送前让玩家的乘客下马。
# 如果设置为 false，尝试传送将被取消并显示警告。
teleport-passenger-dismount: true

# /home、/tp 等命令之间所需的延迟（以秒为单位）。
teleport-cooldown: 0

# 玩家实际传送前的延迟（以秒为单位）。
# 如果玩家在此时间内移动或被攻击，传送将被取消。
teleport-delay: 0

# 玩家通过命令传送后，其他玩家无法攻击该玩家的延迟时间（以秒为单位）。
# 这也防止该玩家攻击其他人。
teleport-invulnerability: 4

# 是否使所有传送都到达方块的中心，其中 x 和 z 坐标的小数部分变为 .5。
teleport-to-center: true

# /heal 或 /feed 尝试之间所需的延迟（以秒为单位）。
heal-cooldown: 60

# 治疗玩家时是否应移除药水效果？
remove-effects-on-heal: true

# 使用 /near 命令时的默认半径。
near-radius: 200

# 防止从 /item 和 /give 获得什么物品。
# 示例：item-spawn-blacklist: lava_bucket,tnt,end_crystal
item-spawn-blacklist:

# 如果您想要基于权限的物品重生规则，请将此设置为 true。
# 注意：如果设置为 true，上面的 'item-spawn-blacklist' 将被忽略。
# 示例权限（这些应添加到您的权限管理器中）：
#  - essentials.itemspawn.item-all
#  - essentials.itemspawn.item-[物品名称]
#  - essentials.give.item-all
#  - essentials.give.item-[物品名称]
#  - essentials.unlimited.item-all
#  - essentials.unlimited.item-[物品名称]
#  - essentials.unlimited.item-waterbucket（无限放置水）
#
# 更多信息，请访问 https://wiki.ess3.net/wiki/Command_Reference/ICheat#Item.2FGive
permission-based-item-spawn: false

# 每次使用 /spawnmob 命令可以重生的实体的最大数量。
spawnmob-limit: 10

# 使用 /lightning 时，是否应通知被击中的玩家？
warn-on-smite: true

# 如果玩家的背包已满，是否应将物品掉在玩家脚下而不是不给予物品？
drop-items-if-full: false

# 如果玩家没有新邮件，是否应通知玩家？
notify-no-new-mail: true

# 指定玩家收到邮件通知之间的冷却时间（以秒为单位）。
# 对于邮件流量高的服务器很有用。
notify-player-of-mail-cooldown: 60

# 当命令与另一个插件冲突时，Essentials 默认会尝试强制让其他插件优先。
# 将命令添加到此列表将告诉 Essentials 不要将命令"让给"其他插件。
# 在这种状态下，哪个插件"获胜"可能看起来几乎是随机的。
#
# 如果您有两个插件具有相同的命令并希望强制 Essentials 接管，您必须设置别名。
# 要强制 Essentials 处理 '/god'，请在服务器根文件夹中的 'commands.yml' 文件中将 'god' 别名为 'essentials:god $1-'。
# 更多信息请参见 https://breezewiki.com/bukkit/wiki/Commands.yml#aliases。
overridden-commands:
    #- god
    #- info

# 在此禁用命令将阻止 Essentials 处理该命令；这不会影响命令冲突。
# 您不需要禁用其他插件使用的命令，因为它们会自动获得优先权。
# 参见 https://breezewiki.com/bukkit/wiki/Commands.yml#aliases 将命令映射到其他插件。
disabled-commands:
    #- nick
    #- clear

# Essentials 是否应显示详细的命令用法。
# 如果设置为 false，Essentials 将把所有用法合并为一条用法消息。
verbose-command-usages: true

# 这些命令将显示给启用了 SocialSpy 的玩家。
# 您可以添加来自其他插件的命令进行跟踪。
# 删除您不想监视的任何命令。
# 从 '*' 中删除 # 以监听所有可能的命令。
socialspy-commands:
    #- '*'
    - action
    - describe
    - eaction
    - edescribe
    - email
    - eme
    - emsg
    - er
    - ereply
    - etell
    - ewhisper
    - m
    - mail
    - msg
    - pm
    - r
    - reply
    - t
    - tell
    - w
    - whisper

# 被禁言玩家的私人和公共消息是否应出现在 SocialSpy 中。
# 如果为 true，它们将与普通玩家发送的消息区分开来。
socialspy-listen-muted-players: true

# SocialSpy 除了上面列表中的命令外，是否还应监视私人消息。
# 如果为 false，它只会监视上面列表中的命令。
socialspy-messages: true

# SocialSpy 是否应使用格式化的显示名称（可能包含颜色）。
# 如果为 false，它只会使用实际的玩家名称。
socialspy-uses-displaynames: true

# 以下世界设置监听玩家切换世界时的情况。
# 如果您使用另一个插件来控制速度和飞行，您应该将这些设置为 false。

# 当玩家切换世界时，Essentials 是否应重置他们的飞行状态？
# 如果玩家没有 'essentials.fly' 权限，这将禁用飞行。
world-change-fly-reset: true

# 从 1.17 开始，Minecraft 不再在玩家切换世界时保留玩家的能力。
# 将此设置为 true 将使 Essentials 在玩家切换世界时保留飞行状态。
# 这只有在玩家拥有 'essentials.fly' 权限时才有效。
world-change-preserve-flying: true

# 当玩家切换世界时，Essentials 是否应根据其权限重置其速度？
# 如果玩家没有 'essentials.speed' 权限，这会将玩家的速度重置为默认值。
# 如果玩家没有 'essentials.speed.bypass' 权限，其速度将被重置为
# 下面 'max-walk-speed' 和 'max-fly-speed' 中指定的最大值。
world-change-speed-reset: true

# 当玩家被禁言时，这些命令将被禁用。
# Essentials 默认已禁用 Essentials 消息命令。
# 它只关心根命令，而不关心之后的参数（它将 '/f chat' 视为与 '/f' 相同）。
# 从 '*' 中删除 # 以在禁言时禁用所有命令。
mute-commands:
    #- '*'
    - f
    - kittycannon

# 如果您不希望使用权限系统，您可以在下面定义"玩家权限"列表。
# 如果您使用受支持的权限系统，此列表将不起作用。
# 如果您使用不受支持的权限系统，只需删除此部分。
# 将您希望默认给予玩家的命令和权限加入白名单（其他所有内容仅限 OP）。
# 这些是不带 'essentials.' 部分的权限。
#
# 要启用此功能，请确保下面的 'use-bukkit-permissions' 设置为 false。
player-commands:
    - afk
    - afk.auto
    - back
    - back.ondeath
    - balance
    - balance.others
    - balancetop
    - build
    - chat.color
    - chat.format
    - chat.shout
    - chat.question
    - clearinventory
    - compass
    - depth
    - delhome
    - getpos
    - geoip.show
    - help
    - helpop
    - home
    - home.others
    - ignore
    - info
    - itemdb
    - kit
    - kits.tools
    - list
    - mail
    - mail.send
    - me
    - motd
    - msg
    - msg.color
    - nick
    - near
    - pay
    - ping
    - protect
    - r
    - rules
    - renamehome
    - realname
    - seen
    - sell
    - sethome
    - setxmpp
    - signs.create.protection
    - signs.create.trade
    - signs.break.protection
    - signs.break.trade
    - signs.use.balance
    - signs.use.buy
    - signs.use.disposal
    - signs.use.enchant
    - signs.use.free
    - signs.use.gamemode
    - signs.use.heal
    - signs.use.info
    - signs.use.kit
    - signs.use.mail
    - signs.use.protection
    - signs.use.repair
    - signs.use.sell
    - signs.use.time
    - signs.use.trade
    - signs.use.warp
    - signs.use.weather
    - spawn
    - suicide
    - time
    - tpa
    - tpaccept
    - tpahere
    - tpdeny
    - warp
    - warp.list
    - world
    - worth
    - xmpp

# 使用此选项强制使用基于超级权限的权限处理器，无论检测到安装的权限插件如何。
# 如果您希望为自定义权限插件使用基于超级权限的权限（带通配符），这很有用。
# 如果您希望使用上面 'player-commands' 部分的 Essentials 内置权限，请将此设置为 false。
use-bukkit-permissions: true

# 启用此选项时，一次性使用工具包（即延迟 < 0）将
# 在玩家无法再使用它们时从 '/kit list' 中移除。
skip-used-one-time-kits-from-kit-list: false

# 启用时，只要玩家的盔甲槽为空，工具包中的盔甲将自动装备。
kit-auto-equip: false

# 确定 /createkit 命令的功能。
# 如果为 true，/createkit 将为用户提供包含工具包代码的链接。
# 如果为 false，/createkit 将直接将工具包添加到 'kits.yml' 配置文件中。
pastebin-createkit: false

# 确定 /createkit 是否将使用 NBT 物品序列化重生工具包。
# 如果为 true，/createkit 将以 NBT 形式存储物品。否则，它将使用 Essentials 的人类可读物品格式。
# 通过使用 NBT 序列化，/createkit 可以存储带有复杂元数据的物品，如潜影盒和带有自定义属性的武器。
# 警告：此选项仅适用于 1.15.2+ Paper 服务器，并且会绕过其他插件（如 Magic）的任何自定义序列化器。
# 警告：使用启用此选项的 /createkit 创建工具包时，您将无法使用这些工具包物品降级服务器。
# 此选项仅影响 /createkit - 您仍可以使用 Essentials 的人类可读物品格式在 'kits.yml' 中手动创建工具包。
use-nbt-serialization-in-createkit: false

# 要启用标牌，请删除 # 符号。要禁用所有标牌，请注释或删除每个标牌。
# 有关如何使用这些标牌的说明，请参见 https://wiki.ess3.net/wiki/Sign_Tutorial。
# 当启用任何标牌类型时，Essentials 的彩色标牌支持将被启用。
# 注意：'color' 不是实际的标牌类型；它使标牌在给予正确权限时能够使用颜色代码。
enabledSigns:
    #- color
    #- balance
    #- buy
    #- free
    #- sell
    #- trade
    #- enchant
    #- repair
    #- gamemode
    #- heal
    #- info
    #- kit
    #- mail
    #- randomteleport
    #- warp
    #- anvil
    #- cartography
    #- disposal
    #- grindstone
    #- loom
    #- smithing
    #- workbench
    #- spawnmob
    #- time
    #- weather

# 这定义了每个玩家每秒可以与 Essentials 标牌交互多少次。
# 值应在 1-20 之间，20 表示几乎没有延迟保护。
# 较低的数字会减少延迟的可能性，但可能会让玩家感到烦恼。
sign-use-per-second: 4

# 允许在 1.13 及以上版本的预存在标牌上使用物品 ID。
# 您不能在新标牌上使用物品 ID，但这将允许玩家与在 1.13 之前
# 放置的标牌交互。
allow-old-id-signs: false

# Essentials 不应保护的标牌名称列表。当其他插件提供 Essentials 也提供的标牌时，
# 但 Essentials 覆盖了它，此功能特别有用。
# 例如，如果插件提供 [kit] 标牌，而您希望使用它们的而不是 Essentials 的，
# 那么只需在下面添加 'kit'，Essentials 就不会保护它。
#
# 更多信息请参见 https://github.com/drtshock/Essentials/pull/699。
unprotected-sign-names:
    #- kit

# 备份在指定间隔内运行自定义批处理/bash 命令。
# 服务器将在执行备份命令前保存世界，并在备份期间
# 禁用保存以防止世界损坏或其他冲突。
# 备份也可以通过 /backup 手动触发。
backup:
    # 间隔时间（以分钟为单位）。
    interval: 30
    # 如果为 true，即使没有玩家在线，备份任务也会运行。
    always-run: false
    # 除非您在此添加有效的备份命令或脚本，否则此功能将无用。
    # 下面的示例命令使用 rdiff-backup：https://rdiff-backup.net
    #command: 'rdiff-backup World1 backups/World1'

# 将此设置为 true 以启用每个传送点的权限。
per-warp-permission: false

# 按组排序 /list 命令的输出。
# 您可以通过在此定义所需行为来隐藏和合并在 /list 中显示的组。
# 详细说明和示例可以在 wiki 上找到：https://wiki.ess3.net/wiki/List
list:
    # 要在 /list 中将多个组合并到一个名称下，请在一行中列出每个组，用空格分隔。
    #Staff: owner admin moderator
    Admins: owner admin
    # 要截断组列表，请设置最大玩家限制。
    #builder: 20
    # 要隐藏组，请将组设置为隐藏。
    #default: hidden
    # 取消注释下面的行以简单列出所有玩家而不进行分组。
    #Players: '*'

# 在 /list 中在使用昵称的玩家旁边显示真实姓名。
real-names-on-list: false

# 向控制台输出更多信息。
debug: false

# 设置所有消息的语言。
# 如果您不设置此项，将使用服务器的默认语言。
# 例如，要将语言设置为英语，请将 locale 设置为 'en'。然后将使用文件 'messages_en.properties'。
# 不要忘记删除行前面的 #。
# 更多信息，请访问 https://essentialsx.net/wiki/Locale.html
#locale: en

# 在发送消息时，Essentials 是否应使用玩家的语言而不是服务器的语言？
# 如果您想为服务器和玩家使用不同的语言，这很有用。
# 例如，如果您的服务器设置为英语而玩家说法语，您可以将此设置为 true。
# 然后 Essentials 会向玩家发送法语消息，而控制台中的消息将保持英语。
# 如果玩家的语言未知，将使用服务器的语言（或上面定义的语言）。
per-player-locale: false

# 更改 Essentials 消息中使用的默认主要和次要颜色。
# 某些消息可能使用自定义颜色，必须在相应的消息文件中进行编辑。
# 有关自定义消息的更多信息，请参见 https://essentialsx.net/wiki/Locale.html
message-colors:
    primary: "#ffaa00"
    secondary: "#ff5555"

# 当玩家离开服务器时关闭上帝模式。
remove-god-on-disconnect: false

# 在此超时（以秒为单位）后，玩家将被设置为 AFK。
# 此功能需要玩家拥有 'essentials.afk.auto' 权限。
# 设置为 -1 表示无超时。
auto-afk: 300

# 在此超时（以秒为单位）后，玩家将被踢出服务器。
# 'essentials.afk.kickexempt' 权限会覆盖此功能。
# 设置为 -1 表示无超时。
auto-afk-kick: -1

# 如果您希望在玩家 AFK 时冻结他们，请将此设置为 true。
# 其他玩家或怪物将无法将他们推出 AFK 模式。
# 这也会为 AFK 玩家启用临时上帝模式。
# 玩家必须使用 /afk 命令来离开 AFK 模式。
freeze-afk-players: false

# 当玩家 AFK 时，他们是否应该能够拾取物品？
# 如果您想防止人们在刷怪塔中挂机，请启用此功能。
disable-item-pickup-while-afk: false

# 此设置控制玩家在交互时是否被标记为活跃。
cancel-afk-on-interact: true

# 当玩家移动时，Essentials 是否应自动移除 AFK 状态？
# 无论此设置如何，玩家在聊天或使用命令时都会退出 AFK。
# 禁用此功能以减少服务器延迟。
cancel-afk-on-move: true

# 当玩家发送聊天消息时，Essentials 是否应自动移除 AFK 状态？
cancel-afk-on-chat: true

# 当其他玩家尝试睡觉时，是否应忽略 AFK 玩家？
# 当此设置为 false 时，如果有些玩家 AFK，玩家将无法跳过夜晚。
# 拥有权限 'essentials.sleepingignored' 的玩家将始终被忽略。
sleep-ignores-afk-players: true

# 当其他玩家尝试睡觉时，是否应忽略隐身玩家？
# 当此设置为 false 时，如果隐身玩家没有睡觉，玩家将无法跳过夜晚。
# 拥有权限 'essentials.sleepingignored' 的玩家将始终被忽略。
sleep-ignores-vanished-player: true

# 当玩家 AFK 时，更改其 /list 名称。默认为 none，这意味着 Essentials
# 不应干扰 AFK 玩家的 /list 名称。
# 您可以使用颜色代码，{USERNAME} 表示玩家姓名，或 {PLAYER} 表示玩家显示名称。
afk-list-name: "none"

# 当玩家进入或退出 AFK 模式时，AFK 通知是否应广播
# 到整个服务器，还是仅向玩家？
# 当此设置为 false 时，只有玩家在更改其 AFK 状态时才会收到通知。
broadcast-afk-message: true

# 您可以在此禁用 Minecraft 死亡消息。
death-messages: true

# Essentials 应如何处理拥有 'essentials.keepinv' 权限且死亡时携带
# 消失诅咒物品的玩家？
# 有效选项为：'keep'、'drop' 和 'delete'。
vanishing-items-policy: keep

# Essentials 应如何处理拥有 'essentials.keepinv' 权限且死亡时携带
# 绑定诅咒物品的玩家？
# 有效选项为：'keep'、'drop' 和 'delete'。
binding-items-policy: keep

# 玩家死亡时，是否应该收到他们死亡时的坐标？
send-info-after-death: false

# 有权限的玩家是否应该能够静默加入和退出？
# 如果启用，您可以使用 'essentials.silentjoin' 和 'essentials.silentquit' 权限来控制这一点。
# 此外，拥有 'essentials.silentjoin.vanish' 权限的人加入时将被隐身。
allow-silent-join-quit: false

# 您可以在此设置自定义加入和退出消息。设置为 "none" 以使用默认的 Minecraft 消息，
# 或设置为 "" 以完全隐藏消息。
#
# 可用占位符：
# {PLAYER} - 玩家的显示名称。
# {USERNAME} - 玩家的用户名。
# {PREFIX} - 玩家的前缀。
# {SUFFIX} - 玩家的后缀。
# {ONLINE} - 在线玩家数。
# {UNIQUE} - 加入服务器的独特玩家数。
# {UPTIME} - 服务器在线时间。
custom-join-message: "none"
custom-quit-message: "none"

# 您可以在此为使用更新用户名加入的玩家设置自定义加入消息。
# 此消息仅在玩家之前已加入过且自那时起更改了用户名时使用。
# 这将显示在上面的 'custom-join-message' 之前，如果您打算保持它们相似，请确保它们匹配。
# 设置为 "none" 以对每次加入都使用 'custom-join-message' 设置。
#
# 可用占位符：
# {PLAYER} - 玩家的显示名称。
# {USERNAME} - 玩家的用户名。
# {OLDUSERNAME} - 玩家的旧用户名。
# {PREFIX} - 玩家的前缀。
# {SUFFIX} - 玩家的后缀。
# {ONLINE} - 在线玩家数。
# {UNIQUE} - 加入服务器的独特玩家数。
# {UPTIME} - 服务器在线时间。
custom-new-username-message: "none"

# Essentials 是否应使用语言文件中的自定义"服务器已满"消息覆盖原版消息？
# 设置为 false 以保留原版消息。
use-custom-server-full-message: true

# 您可以在玩家数量达到一定限制时禁用加入和退出消息。
# 当玩家数量低于此数字时，加入/退出消息将始终显示。
# 设置为 -1 以始终显示加入和退出消息，无论玩家数量如何。
hide-join-quit-messages-above: -1

# 如果您想在某些世界中自动禁用上帝模式，请将世界添加到此列表。
no-god-in-worlds:
    #- world_nether

# 设置为 true 以启用使用 Essentials 命令在世界间传送的每世界权限。
# 这适用于 /world、/back、/tp[a|o|here|all] 但不包括传送点。
# 使用 'essentials.worlds.<世界名>' 给予某人传送到世界的权限。
# 这不影响 /home 命令；请使用下面的 'world-home-permissions'。
world-teleport-permissions: false

# 如果在 /item 或 /give 中省略数量参数，给予的物品数量。
# 如果此数字低于 1，则给予最大堆叠大小。如果下面的 'oversized-stacksize'
# 未更改，任何高于最大堆叠大小的数字都会导致多个堆叠。
default-stack-size: -1

# 超大堆叠是忽略正常最大堆叠大小的堆叠。
# 如果玩家拥有 'essentials.oversizedstacks' 权限，可以使用 /give 和 /item 获得它们。
# 超大堆叠中应该有多少物品？
oversized-stacksize: 64

# 允许修复附魔武器和盔甲。
# 如果您将此设置为 false，仍可以使用权限
# 'essentials.repair.enchanted' 为某些玩家允许它。
repair-enchanted: true

# 在工具包和物品重生中允许"不安全"的附魔。
# 警告：混合和过度升级某些附魔可能会导致客户端、服务器和插件出现问题。
unsafe-enchantments: false

# /tree 和 /bigtree 命令可以从玩家重生树的最大距离（以方块为单位）。
tree-command-range-limit: 300

# Essentials 是否应在传送监听器中跟踪玩家的前一个位置以便 /back？
# 如果您将此设置为 true，任何使用传送的插件都将注册前一个位置。
register-back-in-listener: false

# 玩家登录后能够造成攻击伤害前的延迟（以秒为单位）。
# 这防止玩家利用他们加入时获得的临时无敌状态。
login-attack-delay: 5

# 将最大步行和飞行速度设置为 0.1 到 1.0 范围内的任何值。
# 注意：这些值作为游戏内速度等级的比率，范围从 0 到 10。
# 例如，如果最大速度设置为 0.8，玩家使用 '/speed 10'，其实际速度将为 0.8。
max-walk-speed: 0.8
max-fly-speed: 0.8

# 设置每分钟内可以发送的邮件的最大数量。
mails-per-minute: 1000

# 设置 /mute 可以应用的最大持续时间（以秒为单位）。
# 设置为 -1 以禁用限制。拥有 'essentials.mute.unlimited' 权限的玩家可以绕过此限制。
max-mute-time: -1

# 设置 /tempban 可以应用的最大持续时间（以秒为单位）。
# 设置为 -1 以禁用限制。拥有 'essentials.tempban.unlimited' 权限的玩家可以绕过此限制。
max-tempban-time: -1

# 更改默认的 /reply 功能。这可以使用 /rtoggle 基于每个玩家进行更改。
# 如果为 true，/r 会回复您最后发送消息的人，否则是第一个给您发消息的人。
# 如果为 false，/r 会回复最后给您发消息的人。
last-message-reply-recipient: true

# 如果为特定玩家启用了 'last-message-reply-recipient'，
# 这指定收到消息时回复接收者更新所需经过的持续时间（以秒为单位）。
# 180 秒 = 3 分钟
last-message-reply-recipient-timeout: 180

# 更改默认的 /reply 功能。
# 如果为 true，/reply 不会检查您回复的人是否隐身。
# 如果为 false，玩家将无法 /reply 给他们看不到的隐身玩家。
last-message-reply-vanished: false

# 切换是否用牛奶桶左键单击生物会将它们变成幼体。
milk-bucket-easter-egg: true

# 切换是否应在玩家加入时向其发送飞行状态消息。
send-fly-enable-on-join: true

# 设置为 true 以启用使用 Essentials 命令设置各个世界时间的每世界权限。
# 这适用于 /time、/day 和 /night 命令。
# 使用 'essentials.time.world.<世界名>' 给予某人在世界中设置时间的权限。
world-time-permissions: false

# 为 Essentials 命令和外部命令指定冷却时间。
# 命令不以正斜杠 (/) 开头。例如，不要写 '/msg'，而是写 'msg'。
#
# 支持通配符。例如，
# - '*i*': 50
# 为所有包含字母"i"的命令添加 50 秒冷却时间。
#
# Essentials 支持以插入符号 (^) 开始命令的正则表达式。
# 例如，要针对以"ban"开头但不是"banip"的命令，使用：
#  '^ban([^ip])( .*)?': 60 # 60 秒 /ban 冷却时间
# 注意：如果您有以 ^ 开头的命令，请使用反斜杠 (\) 转义。例如，\^command: 123
command-cooldowns:
    #feed: 100 # /feed 命令的 100 秒冷却时间
    #'*': 5 # 所有命令的 5 秒冷却时间

# 命令冷却时间是否应在服务器关机后保持。
command-cooldown-persistence: true

# NPC 余额是否应包含在余额排名功能（如 /balancetop）中。
# NPC 余额可以包括来自 FactionsUUID 插件的派系等功能。
npcs-in-balance-ranking: false

# 允许玩家潜行时使用标牌批量购买和销售。
# 当标牌一次购买或销售一个物品而玩家想要一次销售多个时，这很有用。
allow-bulk-buy-sell: true

# 允许使用 /sell 命令销售具有自定义名称的物品。
# 这可以帮助防止玩家意外销售命名的物品。
allow-selling-named-items: false

# 向玩家在加入时显示 MOTD 的延迟（以毫秒为单位）。
# 如果禁用了 MOTD 命令或权限，这将无效。
# 设置为 -1 以完全禁用加入时的 MOTD。
delay-motd: 0

# 默认应启用其补充确认命令的命令列表。
# 默认为空。有关最新有效命令列表，请参考最新的源 'config.yml'。
default-enabled-confirm-commands:
    #- pay
    #- clearinventory

# Essentials 应在玩家从监狱释放时将其传送到何处？
# 设置为 'back' 以将他们传送到被监禁前的先前位置，
# 'spawn' 将他们发送到出生点，或 'off' 以在释放时禁用传送。
teleport-when-freed: back

# 监狱时间是否只应在玩家在线时计算。
# 如果为 true，被监禁玩家的时间只有在他们在线时才会减少。
jail-online-time: false

# 为玩家接受传送请求设置超时时间（以秒为单位），在此之前请求将被取消。
# 设置为 0 表示无超时。
tpa-accept-cancellation: 120

# 任何玩家可以同时挂起的传送请求的最大数量。
# 超过此阈值后，旧请求将立即超时。
tpa-max-requests: 5

# 允许玩家通过用物品点击头盔槽来设置帽子。
allow-direct-hat: true

# 允许游戏内玩家在运行 /broadcastworld 时指定世界。
# 如果为 false，在游戏内运行 /broadcastworld 将始终向玩家当前世界发送消息。
# 这不影响从控制台运行命令，控制台中始终需要世界。
allow-world-in-broadcastworld: true

# 用户映射是否应在保存用户名前尝试清理它们？
# 只有在使用 Minecraft China 时才应将此更改为 false。
safe-usermap-names: true

# 当命令方块执行命令时，Essentials 是否应输出日志？
# 示例：CommandBlock at <x>,<y>,<z> issued server command: /<命令>
log-command-block-commands: true

# 设置使用 /fireball 重生的射弹的最大速度。
max-projectile-speed: 8

# 设置用户可以使用 /itemlore 命令设置的最大传说行数。
# 拥有 'essentials.itemlore.bypass' 权限的玩家能够绕过此限制。
max-itemlore-lines: 10

# Essentials 是否应检查更新？
# 如果设置为 true，当有新版本可用时，Essentials 将显示通知。
# 这使用公共 GitHub API，不发送或存储任何识别信息。
update-check: true

############################################################
# +------------------------------------------------------+ #
# |                        家系统                         | #
# +------------------------------------------------------+ #
############################################################

# 允许人们在白天设置床的位置。
# 此设置在 Minecraft 1.15+ 中无效，因为 Minecraft 将始终允许玩家在白天设置床的位置。
update-bed-at-daytime: true

# 设置为 true 以启用使用家传送在世界间传送的每世界权限。
# 这仅适用于 /home 命令。
# 使用 'essentials.worlds.<世界名>' 给予某人传送到世界的权限。
world-home-permissions: false

# 允许玩家拥有多个家。
# 玩家需要 'essentials.sethome.multiple' 权限才能拥有超过 1 个家。
# 您可以使用下面的 'default' 等级设置多个家的默认数量。
# 要完全移除家的限制，请给予人们 'essentials.sethome.multiple.unlimited' 权限。
#
# 要为不同的人授予不同的家数量，您需要在下面定义"家等级"。
# 创建后，给予匹配的权限：'essentials.sethome.multiple.<家等级>'。
# 注意：下面定义的"家等级"不需要与您的权限插件的组名匹配。
#
# 在此示例中，拥有 'essentials.sethome.multiple' 和 'essentials.sethome.multiple.vip' 的人将有 5 个家。
# 记住，他们必须拥有两个权限节点才能设置多个家。
# 更多信息，请访问 https://wiki.ess3.net/wiki/Multihome
sethome-multiple:
    default: 3
    vip: 5
    staff: 10

# 控制玩家是否需要 'essentials.home.compass' 权限才能使
# 玩家的指南针指向其第一个家。
# 将此设置为 false 将保留 Essentials 的原始行为，即始终
# 更改指南针方向以指向玩家的第一个家。
compass-towards-home-perm: false

# 如果没有设置家，您是否想将玩家发送到出生点？
# 如果设置为 false，当玩家在未先设置家的情况下运行 /home 时，将不会被传送。
spawn-if-no-home: true

# 玩家是否应该为他们尝试覆盖的家提供确认？
confirm-home-overwrite: false

############################################################
# +------------------------------------------------------+ #
# |                       经济系统                        | #
# +------------------------------------------------------+ #
############################################################

# 更多信息，请访问 https://wiki.ess3.net/wiki/Essentials_Economy

# 您可以通过使用 /setworth 命令和 'worth.yml' 来控制出售给服务器的物品的价值。

# 定义新玩家的起始余额。
starting-balance: 0

# 定义使用给定命令每次使用的成本。
# 某些命令如 /repair 有子成本。查看 wiki 获取更多信息。
command-costs:
    # 使 /example 每次使用花费 $1000：
    #example: 1000
    # 使 '/kit tools' 每次使用花费 $1500：
    #kit-tools: 1500

# 将此设置为您想要使用的货币符号。
# 记住，如果您想在此文档中使用特殊字符（如重音字母），
# 必须将文件保存为 UTF-8 格式，而不是 ANSI。
currency-symbol: "$"

# 启用此功能以使货币符号出现在金额的末尾而不是开头。
# 例如，欧元符号通常出现在当前金额之后。
currency-symbol-suffix: false

# 设置玩家可以拥有的最大金额。
# 注意：极大的数字可能会产生意外后果。
max-money: 10000000000000

# 设置玩家可以拥有的最小金额（必须大于 max-money 的负值）。
# 将此设置为 0 将完全禁用透支/贷款。
# 玩家需要 'essentials.eco.loan' 权限才能拥有负余额。
min-money: -10000

# 启用此功能以记录与购买/销售/交易标牌和销售命令的所有交互。
economy-log-enabled: false

# 启用此功能以同时记录来自其他插件通过 Vault 的所有交易。
# 这可能导致经济日志快速填满，所以应该只在测试目的时启用！
economy-log-update-enabled: false

# /pay 中可接受的最小金额。
minimum-pay-amount: 0.001

# 启用此功能以阻止试图 /pay 给正在忽略他们的人的玩家。
pay-excludes-ignore-list: false

# 余额为 $0 或更少的玩家是否应显示在余额排行榜中。
# 将此设置为 false 将隐藏 $0 或更少的余额。
# 注意：重新加载配置后，运行 '/baltop force' 以使更改生效。
show-zero-baltop: true

# 玩家必须满足的要求才能在余额排行榜中显示其姓名。
# 游戏时间以秒为单位测量。
baltop-requirements:
    minimum-balance: 0
    minimum-playtime: 0

# 货币格式，不包括符号。有关符号配置，请参见下面的 'currency-symbol-format-locale'。
#
# "#,##0.00" 是大多数国家显示货币的方式。
#currency-format: "#,##0.00"

# 格式化货币符号。某些区域设置交替使用 , 和 .。
# 由于 Minecraft 字体渲染问题，某些格式可能无法在游戏中正确显示。
#
# 示例区域设置：
#  - de-DE for 1.234,50
#  - en-US for 1,234.50
#  - fr-CH for 1'234,50
#
# 或查看 https://www.iban.com/country-codes 获取所有 Alpha-2 国家代码。
#currency-symbol-format-locale: en-US

# 允许玩家在使用 /sell 或销售标牌销售物品时获得倍数。
# 您可以使用下面的 'default' 等级设置默认倍数。
#
# 要为不同的人授予不同的倍数，您需要在下面定义"倍数等级"。
# 创建后，给予匹配的权限：'essentials.sell.multiplier.<倍数等级>'。
# 注意：下面定义的"倍数等级"不需要与您的权限插件的组名匹配。
sell-multipliers:
    default: 1.0
    double: 2.0
    triple: 3.0

############################################################
# +------------------------------------------------------+ #
# |                       帮助系统                        | #
# +------------------------------------------------------+ #
############################################################

# 在 Essentials 帮助列表中显示其他插件的命令。
non-ess-in-help: true

# 隐藏玩家没有权限使用的插件。
# 您可以通过向玩家或组添加 'essentials.help.<插件>' 权限来覆盖此设置。
# 拥有 'essentials.*' 或 '*' 权限的玩家无论如何都会看到所有帮助。
# 如果启用此功能，您还可以使用否定权限来移除对特定插件帮助的访问权限。
hide-permissionless-help: true

############################################################
# +------------------------------------------------------+ #
# |                   EssentialsX 聊天                   | #
# +------------------------------------------------------+ #
############################################################

# 您需要安装 EssentialsX Chat 模块此部分才能工作。
# 更多信息请参见 https://essentialsx.net/wiki/Module-Breakdown.html。

chat:
    # 如果安装了 Essentials Chat，这设置玩家的聊天将传播多少个方块。设置为 0 表示全局聊天。
    # 拥有 'essentials.chat.spy' 权限的玩家将看到所有内容，无论此设置如何。
    # 拥有 'essentials.chat.shout' 权限的玩家可以通过在消息前加感叹号 (!) 来覆盖此设置。
    # 拥有 'essentials.chat.question' 权限的玩家可以通过在消息前加问号 (?) 来覆盖此设置。
    # 您可以通过将 'chat-shout' 和 'chat-question' 添加到上面的 'command-costs' 部分来为呼喊/问题添加命令成本。
    radius: 0

    # 聊天格式可以通过两种方式配置：
    #  - 所有聊天的标准格式（'format' 部分）
    #  - 特定组的聊天格式以获得额外变化（'group-formats' 部分）
    #
    # 您可以使用权限来控制玩家是否可以在其聊天消息中使用格式代码。
    # 更多信息请参见 https://essentialsx.net/wiki/Color-Permissions.html。
    #
    # 您还可以为每种聊天类型指定子格式。
    # 有关聊天格式的更多信息，请访问 wiki：https://wiki.ess3.net/wiki/Chat_Formatting#Chat_Formatting
    #
    # 可用占位符：
    # {MESSAGE} - 聊天消息的内容。
    # {USERNAME} - 发送者的用户名。
    # {DISPLAYNAME} - 发送者的显示名称。
    # {NICKNAME} - 发送者的 Essentials 昵称。如果发送者没有昵称，则显示用户名。
    # {PREFIX} - 发送者的前缀，由权限插件提供。
    # {SUFFIX} - 发送者的后缀，由权限插件提供。
    # {GROUP} - 发送者的主要组名，由权限插件提供。
    # {WORLD} - 发送者当前世界的世界别名。详细信息请参见下面的 world-aliases 部分。
    # {WORLDNAME} - 发送者当前世界的完整名称。
    # {SHORTWORLDNAME} - 发送者当前世界的第一个字符。
    # {TEAMNAME} - 发送者的计分板团队名称。
    # {TEAMPREFIX} - 发送者的计分板团队前缀。
    # {TEAMSUFFIX} - 发送者的计分板团队后缀。
    #
    # 注意：{DISPLAYNAME} 占位符默认包含 {PREFIX} 和 {SUFFIX}。
    # 同时使用这些可能会在聊天中产生双前缀/后缀。

    format: "<{DISPLAYNAME}> {MESSAGE}"
    #format: '&7[{GROUP}]&r {DISPLAYNAME}&7:&r {MESSAGE}'
    #format: '&7{PREFIX}&r {NICKNAME}&r &7{SUFFIX}&r: {MESSAGE}'

    # 您还可以为每种聊天类型指定格式。
    #format:
    #  normal: '{WORLDNAME} {DISPLAYNAME}&7:&r {MESSAGE}'
    #  question: '{WORLDNAME} &4{DISPLAYNAME}&7:&r {MESSAGE}'
    #  shout: '{WORLDNAME} &c[{GROUP}]&r &4{DISPLAYNAME}&7:&c {MESSAGE}'

    # 您还可以为每个组指定格式。
    # 如果使用组格式，请删除 # 来激活设置。
    # 注意：组名区分大小写，因此您必须与权限插件匹配。
    # 注意：如果设置了 LuckPerms 组显示名称（别名），您必须使用它而不是原始组名。
    group-formats:
        #default: '{WORLDNAME} {DISPLAYNAME}&7:&r {MESSAGE}'
        #admins: '{WORLDNAME} &c[{GROUP}]&r {DISPLAYNAME}&7:&c {MESSAGE}'

        # 您还可以为每个组的每种聊天类型指定格式。
        #admins:
        #  question: '{WORLDNAME} &4{DISPLAYNAME}&7:&r {MESSAGE}'
        #  shout: '{WORLDNAME} &c[{GROUP}]&r &4{DISPLAYNAME}&7:&c {MESSAGE}'

    # 世界别名允许您在聊天格式中用不同的内容替换世界名称。
    # 如果使用世界别名，请删除 # 来激活设置。
    world-aliases:
        #plots: "&dP&r"
        #creative: "&eC&r"

    # 玩家是否应默认被置于呼喊模式。
    shout-default: false

    # 玩家的呼喊模式是否应在重启后保持。
    persist-shout: false

    # 聊天问题是否应被启用。
    question-enabled: true

    # Essentials 是否应在 1.16.5+ 中使用 Paper 的现代聊天事件系统。
    # 这是现代聊天功能（如悬停事件和点击事件）所必需的。
    # 如果您在使用聊天事件系统的其他插件时遇到问题，可以禁用此功能。
    # 更改此设置后必须重启服务器。
    paper-chat-events: true

############################################################
# +------------------------------------------------------+ #
# |                  EssentialsX 保护                   | #
# +------------------------------------------------------+ #
############################################################

# 您需要安装 EssentialsX Protect 模块此部分才能工作。
# 更多信息请参见 https://essentialsx.net/wiki/Module-Breakdown.html。

protect:
    # 常规物理/行为修改。将这些设置为 true 以禁用行为。
    prevent:
        lava-flow: false
        water-flow: false
        water-bucket-flow: false
        fire-spread: true
        lava-fire-spread: true
        lava-itemdamage: false
        flint-fire: false
        lightning-fire-spread: true
        portal-creation: false
        tnt-explosion: false
        tnt-playerdamage: false
        tnt-itemdamage: false
        tnt-minecart-explosion: false
        tnt-minecart-playerdamage: false
        tnt-minecart-itemdamage: false
        fireball-explosion: false
        fireball-fire: false
        fireball-playerdamage: false
        fireball-itemdamage: false
        witherskull-explosion: false
        witherskull-playerdamage: false
        witherskull-itemdamage: false
        wither-spawnexplosion: false
        wither-blockreplace: false
        creeper-explosion: false
        creeper-playerdamage: false
        creeper-itemdamage: false
        creeper-blockdamage: false
        ender-crystal-explosion: false
        enderdragon-blockdamage: true
        enderman-pickup: false
        villager-death: false
        bed-explosion: false
        respawn-anchor-explosion: false
        # 防止怪物跟随玩家。
        # 权限 'essentials.protect.entitytarget.bypass' 可以禁用此功能。
        entitytarget: false
        # 防止僵尸破坏门。
        zombie-door-break: false
        # 防止劫掠兽偷取方块。
        ravager-thief: false
        # 防止羊将草地变成泥土。
        sheep-eat-grass: false
        transformation:
            # 防止苦力怕在被雷击时变为充能苦力怕。
            charged-creeper: false
            # 防止村民变为僵尸村民。
            zombie-villager: false
            # 防止僵尸村民被治愈。
            villager: false
            # 防止村民在被雷击时变为女巫。
            witch: false
            # 防止猪在被雷击时变为僵尸猪灵。
            zombie-pigman: false
            # 防止僵尸变为溺尸，尸壳变为僵尸。
            drowned: false
            # 防止哞菇在被雷击时改变颜色。
            mooshroom: false
        # 防止生物的重生。如果缺少某个生物，您可以按照下面的格式添加它。
        spawn:
            creeper: false
            skeleton: false
            spider: false
            giant: false
            zombie: false
            slime: false
            ghast: false
            pig_zombie: false
            enderman: false
            cave_spider: false
            silverfish: false
            blaze: false
            magma_cube: false
            ender_dragon: false
            pig: false
            sheep: false
            cow: false
            chicken: false
            squid: false
            wolf: false
            mushroom_cow: false
            snowman: false
            ocelot: false
            iron_golem: false
            villager: false
            wither: false
            bat: false
            witch: false
            horse: false
            phantom: false

    # 苦力怕可以爆炸的最大高度。-1 允许它们在任何地方爆炸。
    # 如果您想完全禁用苦力怕爆炸，请将上面的 'creeper-explosion' 设置为 true。
    creeper:
        max-height: -1

    # 禁用各种默认物理/行为。
    disable:
        # 是否应禁用跌落伤害？
        fall: false

        # 是否应禁用PvP？
        # 如果设置为 true，拥有 'essentials.protect.pvp' 权限的玩家仍能够互相攻击。
        # 但是，他们无法攻击没有该权限节点的玩家。
        pvp: false

        # 是否应禁用溺水伤害？
        drown: false

        # 是否应禁用在方块中窒息？
        suffocate: false

        # 是否应禁用熔岩伤害？
        # 掉入熔岩的物品仍会被烧毁。;)
        lavadmg: false

        # 是否应禁用射弹伤害（如箭矢）？
        projectiles: false

        # 是否应禁用接触伤害？
        # 这包括触碰仙人掌、钟乳石、浆果丛等。
        contactdmg: false

        # 燃烧吧！是否应禁用火焰伤害？
        firedmg: false

        # 是否应禁用雷击伤害？
        lightning: false

        # 是否应禁用凋灵伤害？
        wither: false

        # 是否应禁用这些类型的天气？
        weather:
            storm: false
            thunder: false
            lightning: false

        ############################################################
        # +------------------------------------------------------+ #
        # |                 EssentialsX 反建筑                   | #
        # +------------------------------------------------------+ #
        ############################################################

        # 您需要安装 EssentialsX AntiBuild 模块此部分才能工作。
        # 更多信息请参见 https://essentialsx.net/wiki/Module-Breakdown.html 和 https://wiki.ess3.net/wiki/AntiBuild。

        # 是否应为没有 'essentials.build' 权限的人禁用建筑？
        # 将此设置为 false 意味着 Essentials AntiBuild 永远不会阻止玩家建筑。
        build: true

        # 是否应阻止没有 'essentials.build' 权限的人使用物品？
        # 将此设置为 false 意味着 Essentials AntiBuild 永远不会阻止玩家使用物品。
        use: true

        # 当不允许建筑时，Essentials 是否应向人们发送消息？
        warn-on-build-disallow: true

    # 您希望对哪些方块类型收到警报？
    # 您可以在 https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html 找到物品列表
    alert:
        on-placement: LAVA,TNT,LAVA_BUCKET
        on-use: LAVA_BUCKET
        on-break:

    blacklist:
        # 应阻止人们放置哪些方块？
        placement: LAVA,TNT,LAVA_BUCKET

        # 应阻止人们使用哪些物品？
        usage: LAVA_BUCKET

        # 应阻止人们破坏哪些方块？
        break:

        # 哪些方块不应被活塞移动？
        piston:

        # 哪些方块不应被发射器发射？
        dispenser:

############################################################
# +------------------------------------------------------+ #
# |            EssentialsX 重生点 + 新玩家                | #
# +------------------------------------------------------+ #
############################################################

# 您需要安装 EssentialsX Spawn 模块此部分才能工作。
# 更多信息请参见 https://essentialsx.net/wiki/Module-Breakdown.html。

newbies:
    # Essentials 是否应在有人首次登录时向服务器宣布？
    # {DISPLAYNAME} 将被替换为玩家名称。
    # 设置为 '' 以禁用。
    #announce-format: ''
    announce-format: "&dWelcome {DISPLAYNAME}&d to the server!"

    # 当玩家首次重生时，应使用哪个重生点？
    # 设置为 'none' 以使用世界的重生点。
    # 可以使用 '/setspawn <组>' 设置不同的重生点名称。
    spawnpoint: newbies

    # 玩家首次加入时是否应收到物品？
    # 无论成本和权限如何，都会给予此工具包，并且不会触发任何工具包延迟（冷却时间）。
    # 设置为 '' 以禁用。
    #kit: ''
    kit: tools

# Essentials 应使用什么优先级来处理重生？
# 如果您想要原版重生行为，请将此设置为 'none'。
# 如果您想要世界插件处理重生，请将此设置为 'lowest'。
# 如果您想要 Essentials Spawn 处理重生，请将此设置为 'high'。
# 如果您想要强制 Essentials Spawn 处理重生，请将此设置为 'highest'。
# 注意：更改将在服务器重启后才会生效。
respawn-listener-priority: high

# Essentials 应使用什么优先级来处理加入服务器时的重生？
# 可能的值请参见上面的 'respawn-listener-priority'。
# 注意：更改此设置可能会影响或破坏下面的 'spawn-on-join' 功能。
# 注意：更改将在服务器重启后才会生效。
spawn-join-listener-priority: high

# 当玩家死亡时，他们是否应在其第一个家或床处重生而不是重生点？
respawn-at-home: false

# 当玩家死亡时，他们是否应在其床处重生而不是第一个家或重生点？
# 上面的 'respawn-at-home' 设置也必须为 true 才能生效。
respawn-at-home-bed: true

# 当玩家死亡时，Essentials 是否应尊重他们的重生锚？
respawn-at-anchor: false

# 如果已配置，玩家将在随机位置重生而不是其重生点。
# 这将覆盖上面设置的新玩家重生点。
#
# 必须首先使用 /settpr 命令或在 'tpr.yml' 中设置位置。
# 创建 tpr 位置后，在下面设置世界名称（或在 'tpr.yml' 中定义的名称）。
random-spawn-location: "none"

# 如果已配置，玩家死亡时将在随机重生位置重生。
# 有关其他位置信息，请参见上面的 'random-spawn-location'。
random-respawn-location: "none"

# 将所有加入的玩家传送到其重生点。
spawn-on-join: false
# 以下 'guests' 值表示 'guests' 组中的所有玩家在加入时将被传送到重生点。
#spawn-on-join: guests
# 以下列表值表示 'guests' 或 'admin' 组中的所有玩家在加入时将被传送到重生点。
#spawn-on-join:
#  - guests
#  - admin

# 文件结束 <-- 说真的，您已经完成了配置。
```
