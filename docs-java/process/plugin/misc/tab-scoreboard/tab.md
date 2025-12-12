---
title: TAB
sidebar_position: 2
---

# TAB

[![Releases](https://img.shields.io/github/v/release/NEZNAMY/TAB)](https://github.com/NEZNAMY/TAB/releases)
[![Downloads](https://img.shields.io/spiget/downloads/57806?label=Downloads)](https://www.spigotmc.org/resources/.57806)
[![Code Size](https://img.shields.io/github/languages/code-size/NEZNAMY/TAB)](https://github.com/NEZNAMY/TAB)
[![License](https://img.shields.io/github/license/NEZNAMY/TAB)](https://github.com/NEZNAMY/TAB/blob/main/LICENSE)

```text
TAB 是一个用于在不同位置显示信息的多功能插件，旨在在功能、兼容性和性能方面超越所有类似的插件。
```

此插件拥有自由的配置文件，无论你是只需要最简单的功能，或者制作一些复杂的功能，此插件都能满足你的需求！

默认配置已经包含足够的示例让你理解此插件的配置，另外，此插件拥有全面的 Wiki。

## 照片

### TAB (HEADER FOOTER)

![](_images/TAB/TAB-1.png)

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/tab-de-ding-bu-he-di-bu)

### 名称标签（NAMETAGS）

没有图

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/ming-cheng-biao-qian)

### 排列（SORTING）

![](_images/TAB/TAB-2.png)

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/pai-lie)

### TAB 列表名称样式（TABLIST FORMATTING）​

完全可定制的 TAB 列表格式，支持自定义前缀、名称和后缀

![](_images/TAB/TAB-3.png)

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/tab-lie-biao-ming-cheng-yang-shi)

### 黄色数字或血量（PLAYERLIST OBJECTIVE）

此功能允许您在列表中显示某变量数字或血量

![](_images/TAB/TAB-4.png)

![](_images/TAB/TAB-5.png)

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/huang-se-shu-zi)

### 名称标签下方（BELOWNAME）​

此功能可以在玩家姓名标签下方显示数字和静态文本

![](_images/TAB/TAB-6.png)

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/ming-cheng-biao-qian-xia-fang)

### BOSS 条（BOSSBAR）

![](_images/TAB/TAB-7.png)

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/boss-tiao)

### 共用玩家列表（GLOBAL PLAYERLIST）​

将全服（BungeeCore 或 Velocity 群组）的玩家展示在同个 TAB 中！

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/gong-yong-wan-jia-lie-biao)

### 布局（LAYOUT）

这个功能允许你配置所有 80 个 TAB 列表槽位。目前不支持显示小于 4 列

![](_images/TAB/TAB-8.png)

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/bu-ju)

### 计分板（SCOREBOARD）

![](_images/TAB/TAB-9.png)

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/ji-fen-ban)

### 各世界玩家列表（PRE WORLD PLAYERLIST）​

仅在 TAB 显示玩家所在世界的玩家

[点我查看文档](https://docs.superiormc.cn/v/tab-wiki/core-features/ge-shi-jie-wan-jia-lie-biao)

## 支持

该插件正被大量服务器使用，这也意味着对我的关注度很高。不幸的是，我再也无法满足需求（搬运者猜测是维护插件和回答用户提问占用时间太多），因为我不想把我的大部分时间都奉献给一个免费的插件。为了提供所有提供服务的最佳质量，提供的服务数量可能会发生改变。以下是潜在服务及其状态的完整列表：

| 服务类型         | 状态 |
| ---------------- | ---- |
| 跟进版本         | ✔   |
| Bug 修复         | ✔   |
| 文档             | ✔   |
| 新功能请求       | ❌   |
| Customer support | ✔   |
| 免费用户支持     | ❌\* |
| 优化             | ✔   |

1. 添加新的示例、指南和其他人们询问的有用信息。
2. 为付费用户提供无限制的插件帮助。
3. 世界上每个人都可以无限制地使用我的空闲时间。（？）
4. 在不损失任何功能的情况下提高插件的性能。

- 你可以加入这个大好人的 [Community Discord](https://discord.gg/YPqXt63YQj) 来得到其他好心人的支持
  注：Discord 在国内不能访问，需要挂梯

## API

https://github.com/NEZNAMY/TAB/wiki/Developer-API

## 链接

:::info

`SpigotMC` https://www.spigotmc.org/resources/.57806

`Modrinth` https://modrinth.com/plugin/tab-was-taken

`MineBBS` https://www.minebbs.com/resources/.9057

`GitHub` https://github.com/NEZNAMY/TAB

`文档 (英文)` https://github.com/NEZNAMY/TAB/wiki

`文档 (中文)` https://docs.superiormc.cn/v/tab-wiki

`插件百科` https://mineplugin.org/Tab

:::

## 汉化

替换插件文件夹中的 `message.yml` 接着 `/tab reload`

<details>
    <summary>mmessage.yml</summary>

<!-- autocorrect-disable -->

```yaml
announce-command-usage: |-
  用法: /tab announce <种类> <名称> <长度>
  当前支持种类: &lbar, scoreboard
bossbar-feature-not-enabled: '&c想使用此指令，必须先开启bossbar功能'
bossbar-announce-command-usage: '用法: /tab announce bar <bar name> <length>'
bossbar-not-found: '&c拥有此名称的bossbar未找到 "%name%"'
bossbar-already-announced: '&c这条bossbar已被广播'
group-data-removed: '&3[TAB] 组 &e%group% &3中的全部数据已清除'
group-value-assigned: '&3[TAB] %property% ''&r%value%&r&3'' 已被添加至组 &e%group%'
group-value-removed: '&3[TAB] %property% 已被从组 &e%group% &3中移除'
user-data-removed: '&3[TAB] 玩家 &e%player% &3的全部数据已清除'
user-value-assigned: '&3[TAB] %property% ''&r%value%&r&3'' 已被添加至玩家 &e%player%'
user-value-removed: '&3[TAB] %property% 已被从玩家 &e%player% &3中移除'
parse-command-usage: '用法: /tab parse <玩家> <placeholder>'
send-command-usage: |-
  用法: /tab send <种类> <玩家> <bar name> <length>
  当前支持种类: &lbar
send-bar-command-usage: '用法: /tab send bar <玩家> <bar name> <length>'
team-feature-required: '&4想使用此指令，必须先开启计分板功能'
collision-command-usage: '用法: /tab setcollision <玩家> <true/false>'
no-permission: '&c抱歉，你没有权限执行此指令。如果你认为这是错误的，请联系服务器管理员。'
command-only-from-game: '&c此指令只能在游戏中执行'
player-not-online: '&c未找到名为 "%player%" 的在线玩家'
invalid-number: '"%input%" 不是一个有效数字！'
scoreboard-feature-not-enabled: '&4想使用此指令，必须先开启计分板功能'
scoreboard-announce-command-usage: '用法: /tab scoreboard announce <计分板名称> <长度>'
scoreboard-not-found: '&c拥有此名称的计分板未找到 "%name%"'
reload-success: '&3[TAB] 重载成功'
reload-fail-file: '&3[TAB] &4重载失败，配置文件 %file% 语法错误。请查看控制台获得更多信息。'
scoreboard-toggle-on: '&2计分板已开启'
scoreboard-toggle-off: '&7计分板已关闭'
bossbar-toggle-on: '&2Boss血条现在可见'
bossbar-toggle-off: '&7Boss血条不再可见。神奇！'
scoreboard-show-usage: '用法: /tab scoreboard show <计分板> [玩家]'
bossbar-not-marked-as-announcement: '&c此Boss血条未标记为公告栏，因此已永久显示（如果满足显示条件）'
bossbar-announcement-success: '&a正在向全服广播Boss血条 &6%bossbar% &a，持续 %length% 秒。'
bossbar-send-success: '&a正在向玩家 &6%player% &a发送Boss血条 &6%bossbar% &a，持续 %length% 秒。'
help-menu:
- '&m                                                                                '
- ' &8>> &3&l/tab reload'
- '      - &7重载插件和配置'
- ' &8>> &3&l/tab &9group&3/&9player &3<name> &9<property> &3<value...>'
- '      - &7输入 &8/tab group/player &7查看属性'
- ' &8>> &3&l/tab parse <玩家> <placeholder> '
- '      - &7测试占位符是否有效'
- ' &8>> &3&l/tab debug [玩家]'
- '      - &7显示关于玩家的调试信息'
- ' &8>> &3&l/tab cpu'
- '      - &7显示插件的CPU使用率'
- ' &8>> &3&l/tab group/player <name> remove'
- '      - &7清除关于玩家/组的全部数据'
- '&m                                                                                '
mysql-help-menu:
- '&6/tab mysql upload - 从文件上传数据至MySQL'
- '&6/tab mysql download - 从MySQL下载数据至文件'
mysql-fail-not-enabled: '&c无法从MySQL下载/上传数据，因为MySQL已禁用。'
mysql-fail-error: 'MySQL下载失败，发生错误。请查看控制台获得更多信息。'
mysql-download-success: '&aMySQL数据下载成功。'
mysql-upload-success: '&aMySQL数据上传成功。'
scoreboard-help-menu:
- '/tab scoreboard [on/off/toggle] [玩家] [选项]'
- '/tab scoreboard show <名称> [玩家]'
- '/tab scoreboard announce <名称> <长度>'
bossbar-help-menu:
- '/tab bossbar [on/off/toggle] [玩家] [选项]'
- '/tab bossbar send <名称> [玩家]'
- '/tab bossbar announce <名称> <长度>'
nametag:
  help-menu:
  - '/tab nametag <show/hide/toggle> [玩家] [-s] - 切换指定玩家的名称标签'
  - '/tab nametag <showview/hideview/toggleview> [玩家] [观察者] [-s] - 切换指定玩家在其他玩家视角中的名称标签显示'
  feature-not-enabled: '&c此指令需要先开启名称标签功能。'
  view-hidden: '&a所有玩家的名称标签对你隐藏'
  view-shown: '&a所有玩家的名称标签对你显示'
  player-hidden: '&a你的名称标签已隐藏'
  player-shown: '&a你的名称标签已显示'
  no-arg-from-console: '&c从控制台运行此指令时需要指定玩家'
```

<!-- autocorrect-enable -->

</details>

## 配置文件汉化

替换插件文件夹中的 `config.yml` 接着 `/tab reload`

<details>
    <summary>config.yml</summary>

<!-- autocorrect-disable -->

```yaml
# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Header-&-Footer
# 头部和底部显示
header-footer:
  enabled: true # 启用头部底部功能
  header: # 头部内容
    - "<#FFFFFF>&m                                                </#FFFF00>"
    - "&3&l服务器名称"
    - "&r&7&l>> %animation:Welcome%&3 &l%player%&7&l! &7&l<<"
    - "&r&7在线玩家: &f%online%"
    - "&6在线管理员: &e%staffonline%"
    - ""
  footer: # 底部内容
    - "%animation:time%"
    - "&2延迟: %ping%"
    - "&7&l 已用内存: %memory-used% MB / %memory-max% MB"
    - ""
    - "&r&7访问我们的网站 %animation:web%"
    - "<#FFFFFF>&m                                                </#FFFF00>"
  disable-condition: '%world%=disabledworld' # 禁用条件
  per-world: # 按世界设置
    world1:
      header:
        - "世界1的自定义头部示例"
      footer:
        - "自定义头部/底部和前缀/后缀"
    world2;world3:
      header:
        - "这是world2和world3的"
        - "共享头部"
  per-server: # 按服务器设置
    server1:
      header:
        - "服务器1的自定义头部示例"

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Tablist-name-formatting
# Tab列表名称格式化
tablist-name-formatting:
  enabled: true # 启用Tab列表名称格式化
  disable-condition: '%world%=disabledworld' # 禁用条件

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Nametags
# 名称标签和计分板团队
scoreboard-teams:
  enabled: true # 启用计分板团队功能
  enable-collision: true # 启用碰撞
  invisible-nametags: false # 隐形名称标签
  # https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Sorting-players-in-tablist
  # Tab列表中玩家排序
  sorting-types:
    - "GROUPS:owner,admin,mod,helper,builder,vip,default" # 按组排序
    - "PLACEHOLDER_A_TO_Z:%player%" # 按玩家名A-Z排序
  case-sensitive-sorting: true # 区分大小写排序
  can-see-friendly-invisibles: false # 能否看到友方隐身玩家
  disable-condition: '%world%=disabledworld' # 禁用条件

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Playerlist-Objective
# 玩家列表目标（黄色数字）
playerlist-objective:
  enabled: true # 启用玩家列表目标
  value: "%ping%" # 显示值
  fancy-value: "&7延迟: %ping%" # 美化显示值
  title: "TAB" # 标题（仅基岩版可见）
  render-type: INTEGER # 渲染类型：整数
  disable-condition: '%world%=disabledworld' # 禁用条件

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Belowname
# 名称下方显示
belowname-objective:
  enabled: false # 启用名称下方显示
  value: "%health%" # 显示值
  title: "&c生命值" # 标题
  fancy-value: "&c%health%" # 美化显示值
  fancy-value-default: "NPC" # 默认美化值
  disable-condition: '%world%=disabledworld' # 禁用条件

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Spectator-fix
# 观察者模式修复
prevent-spectator-effect:
  enabled: false # 启用观察者效果防护

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Bossbar
# Boss血条
bossbar:
  enabled: false # 启用Boss血条
  toggle-command: /bossbar # 切换命令
  remember-toggle-choice: false # 记住切换选择
  hidden-by-default: false # 默认隐藏
  bars: # 血条配置
    ServerInfo:
      style: "PROGRESS" # 1.9+样式: PROGRESS, NOTCHED_6, NOTCHED_10, NOTCHED_12, NOTCHED_20
      color: "%animation:barcolors%" # 1.9+颜色: BLUE, GREEN, PINK, PURPLE, RED, WHITE, YELLOW
      progress: "100" # 进度百分比
      text: "&f网站: &bwww.domain.com" # 显示文本

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Scoreboard
# 计分板
scoreboard:
  enabled: false # 启用计分板
  toggle-command: /sb # 切换命令
  remember-toggle-choice: false # 记住切换选择
  hidden-by-default: false # 默认隐藏
  use-numbers: true # 使用数字
  static-number: 0 # 静态数字
  delay-on-join-milliseconds: 0 # 加入延迟（毫秒）
  scoreboards: # 计分板配置
    scoreboard-1.20.3+:
      title: "<#E0B11E>我的服务器</#FF0000>" # 标题
      display-condition: "%player-version-id%>=765;%bedrock%=false" # 显示条件：仅1.20.3+且非基岩版
      lines: # 显示行
        - "&7%date%"
        - "%animation:MyAnimation1%"
        - "&6在线信息:"
        - "* &e在线&7:||%online%"
        - "* &e当前世界&7:||%worldonline%"
        - "* &e管理员&7:||%staffonline%"
        - ""
        - "&6个人信息:"
        - "* &b等级&7:||%group%"
        - "* &b延迟&7:||%ping%&8ms"
        - "* &b世界&7:||%world%"
        - "%animation:MyAnimation1%"
    scoreboard:
      title: "<#E0B11E>我的服务器</#FF0000>"
      lines:
        - "&7%date%"
        - "%animation:MyAnimation1%"
        - "&6在线信息:"
        - "* &e在线&7: &f%online%"
        - "* &e当前世界&7: &f%worldonline%"
        - "* &e管理员&7: &f%staffonline%"
        - ""
        - "&6个人信息:"
        - "* &b等级&7: &f%group%"
        - "* &b延迟&7: &f%ping%&8ms"
        - "* &b世界&7: &f%world%"
        - "%animation:MyAnimation1%"

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Layout
# 布局系统
layout:
  enabled: false # 启用布局
  direction: COLUMNS # 方向：列
  default-skin: mineskin:383747683 # 默认皮肤
  enable-remaining-players-text: true # 启用剩余玩家文本
  remaining-players-text: '... 还有 %s 个玩家' # 剩余玩家文本
  empty-slot-ping-value: 1000 # 空槽位延迟值
  layouts: # 布局配置
    default:
      fixed-slots: # 固定槽位
        - '1|&3网站&f:'
        - '2|&bmyserver.net'
        - '3|&8&m                       '
        - '4|&3名称&f:'
        - '5|&b%player%'
        - '7|&3等级&f:'
        - '8|等级: %group%'
        - '10|&3世界&f:'
        - '11|&b%world%'
        - '13|&3时间&f:'
        - '14|&b%time%'
        - '21|&3语音&f:'
        - '22|&bts.myserver.net'
        - '23|&8&m                       '
        - '41|&3商店&f:'
        - '42|&bshop.myserver.net'
        - '43|&8&m                       '
      groups: # 组配置
        staff:
          condition: permission:tab.staff # 条件：权限
          slots:
            - 24-40 # 槽位范围
        players:
          slots:
            - 44-80

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Ping-Spoof
# 延迟伪装
ping-spoof:
  enabled: false # 启用延迟伪装
  value: 0 # 伪装值

# 占位符设置
placeholders:
  date-format: "dd.MM.yyyy" # 日期格式
  time-format: "[HH:mm:ss / h:mm a]" # 时间格式
  time-offset: 0 # 时间偏移
  register-tab-expansion: false # 注册TAB扩展

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Placeholder-output-replacements
# 占位符输出替换
placeholder-output-replacements:
  "%essentials_vanished%":
    "yes": "&7| 已隐身"
    "no": ""

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Conditional-placeholders
# 条件占位符
conditions:
  nick: # 使用方式: %condition:nick%
    conditions:
      - "%player%=%essentials_nickname%"
    yes: "%player%"
    no: "~%essentials_nickname%"

# 占位符刷新间隔（毫秒）
placeholder-refresh-intervals:
  default-refresh-interval: 500 # 默认刷新间隔
  "%server_uptime%": 1000 # 服务器运行时间
  "%server_tps_1_colored%": 1000 # 服务器TPS
  "%server_unique_joins%": 5000 # 独立加入次数
  "%player_health%": 200 # 玩家生命值
  "%player_ping%": 1000 # 玩家延迟
  "%vault_prefix%": 1000 # Vault前缀
  "%rel_factionsuuid_relation_color%": 1000 # 派系关系颜色

# 通过权限节点分配组而不是从权限插件获取
assign-groups-by-permissions: false

# 如果上述选项为true，所有组都基于权限获取，列表中较高的组用作主要组
# 警告！这不是排序列表，与Tab列表中的玩家排序无关！
primary-group-finding-list:
  - Owner    # 服主
  - Admin    # 管理员
  - Mod      # 版主
  - Helper   # 助手
  - default  # 默认

# 刷新间隔（毫秒）：
# - 条件/排序中的权限检查
# - 从权限插件获取组用于排序/按组属性
# - 从权限插件获取前缀/后缀占位符数据
permission-refresh-interval: 1000

# 解锁额外的控制台消息
debug: false

# https://github.com/NEZNAMY/TAB/wiki/MySQL
# MySQL数据库
mysql:
  enabled: false # 启用MySQL
  host: 127.0.0.1 # 主机地址
  port: 3306 # 端口
  database: tab # 数据库名
  username: user # 用户名
  password: password # 密码
  useSSL: true # 使用SSL

# 代理支持
proxy-support:
  enabled: true # 启用代理支持
  # 支持的类型: PLUGIN, REDIS, RABBITMQ
  type: PLUGIN
  plugin:
    # 兼容插件: RedisBungee
    # 如果启用且找到兼容插件，将启用钩子以处理代理玩家
    name: RedisBungee
  redis:
    url: 'redis://:password@localhost:6379/0'
  rabbitmq:
    exchange: 'plugin'
    url: 'amqp://guest:guest@localhost:5672/%2F'

########################################################################
# 仅限BUKKIT - 以下部分仅适用于后端安装 #
########################################################################

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Per-world-playerlist
# 分世界玩家列表
per-world-playerlist:
  enabled: false # 启用分世界玩家列表
  # 拥有tab.staff权限的玩家将始终看到所有玩家
  allow-bypass-permission: false
  # 这些世界中的玩家将始终看到所有玩家
  ignore-effect-in-worlds:
    - ignoredworld # 忽略的世界
    - build # 建筑世界
  # 共享玩家列表的世界组
  shared-playerlist-world-groups:
    lobby: # 大厅组
      - lobby1
      - lobby2
    minigames: # 小游戏组
      - paintball # 彩弹
      - bedwars # 起床战争

# 补偿PacketEvents错误
compensate-for-packetevents-bug: false

#####################################################################
# 仅限代理 - 以下部分仅适用于代理安装 #
#####################################################################

# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Global-playerlist
# 全局玩家列表
global-playerlist:
  enabled: false # 启用全局玩家列表
  display-others-as-spectators: false # 将其他玩家显示为观察者
  display-vanished-players-as-spectators: true # 将隐身玩家显示为观察者
  isolate-unlisted-servers: false # 隔离未列出的服务器
  update-latency: false # 更新延迟
  spy-servers: # 监视服务器
    - spyserver1
    - spyserver2
  server-groups: # 服务器组
    lobbies: # 大厅组
      - lobby1
      - lobby2
    group2: # 组2
      - server1
      - server2

# 从后端服务器而不是代理获取权限和组
use-bukkit-permissions-manager: false

# 有时服务器可能在Tab列表中使用离线UUID而不是在线UUID，例如禁用Waterfall的Tab列表重写选项
# 如果遇到Tab列表格式化不工作的问题，请切换此选项（设置为相反值）
# 仅影响启用在线模式的代理
use-online-uuid-in-tablist: true
```

<!-- autocorrect-enable -->

</details>

## Bstats

[![](https://bstats.org/signatures/bukkit/TAB%20Reborn.svg)](https://bstats.org/signatures/bukkit/TAB%20Reborn.svg)
