---
title: 菜单插件
sidebar_position: 4
---

# 菜单插件

目前主流的菜单插件主要是 MagicMenu 和 CrossplatForms，推荐使用 MagicMenu，相较于 CrossplatForms 更轻量，支持所有服务端核心，并且有跟更多功能

## 安装

<!--markdownlint-disable line-length-->

可以在[GitHub](https://github.com/onebeastchris/MagicMenu/releases/tag/1.0.3) 下载，或者使用[下载镜像](https://dl.8aka.org/plugins/MagicMenu-1.0.3.jar) 下载

<!--markdownlint-disable line-length-->

## 配置

如果你是一个聪明人，看默认的`config.yml`就能看懂

````yaml
# 查看所有占位符请访问 https://github.com/onebeastchris/MagicMenu/blob/master/setup.md

# 配置版本 - 不要更改此项。
config-version: 1.0

# 当使用表情打开菜单时，是否显示表情？
show-emotes: true

# 如果设置为 true，关闭表单将返回上一个表单。
go-back: true

# 调试模式：这将向控制台发送大量信息。
debug: false

# 在此处定义你的菜单。你可以有任意多个，但实际操作中，不要超过 4 个 - 每个表情一个。
menus:
  # 在此处输入表情 UUID。或者，输入 "all" 表示所有表情（不推荐）。从这里获取 UUID：
  # https://github.com/JustTalDevelops/bedrock-emotes
  # 或者，你也可以不设置表情 UUID，而是设置一个命令来打开菜单。
  # 同时设置表情和命令将导致两者都被注册 - 见底部最后一个示例。
  # 你也可以设置为 "all"，这意味着菜单将针对所有表情打开。你不能有多个 "all" 菜单。
  - emote-uuid: all
    # 在此处输入允许的用户。如果你想允许所有用户，请完全删除 "allowed-users"
    # 如果某人无权使用此菜单，他们将正常使用表情。
    allowed-users:
      - onebeastofchris
      - someotheraccount
    # 在此处输入菜单的标题/描述；描述是可选的。
    forms:
      - form-title: "示例表单"
        form-description: "你可以在这里设置描述！"

        # 在此处配置按钮。
        buttons:
          # 按钮的名称。这里，我们定义了一个命令，因此点击按钮将运行该命令。
          - name: "说点什么 o.o"
            commands:
              - command-name: "说点什么"
                run: "say !%input:输入一条消息，测试消息% 由 %username% 发送"
          # 与上面类似 - 但有
          # 1. 名称中的占位符，和
          # 2. 按钮的允许用户！（Xbox 用户名，无前缀）
          # 这里："%username%" 被替换为玩家的 Java 用户名
          - name: "给 %username% 一个苹果！"
            allowed-users:
              - onebeastofchris
              - totallyavalidxboxusername
            commands:
              - command-name: "给 %username% 一个苹果！"
                run: "give %username% apple 1"

          # 你也可以通过更多命令打开一个菜单
          # 按钮旁边可以有图片
          - name: "§2 嘿 %username%，看看这个！"
            image-url:
            forms:
              - form-title: "占位符演示部分"
                form-description: "这是你可以使用的一些占位符的演示！"
                buttons:
                  - name: "位置：%position%"
                    commands:
                      - command-name: "位置"
                        run: "say 这是我的位置：%position%"
                  - name: "用户名：%username%"
                    commands:
                      - command-name: "用户名"
                        run: "say 由 %username% 发送"
                  - name: "下拉菜单 & 滑块演示"
                    commands:
                      - command-name: "下拉菜单 & 滑块演示"
                        run: "say 下拉菜单：!%dropdown:选择一个下拉菜单，默认，默认，只是，一些，更多，选项%, 滑块：!%slider:选择一个滑块，0, 10, 1, 5%"
                  - name: "步进滑块和输入演示"
                    commands:
                      - command-name: "步进滑块和输入演示"
                        run: "say 这是一个步进滑块值，!%step-slider:选择一个步进滑块，0, 0, 10, 1, 2, 3, 4, 5% 和一个输入 !%input:输入一个 xuid, %xuid%%"
                  - name: "切换演示"
                    commands:
                      - command-name: "切换演示"
                        run: "say 这是一个布尔值：!%toggle:选择一个切换，true%"

          - name: "Geyser 命令"
            image-url: "https://avatars.githubusercontent.com/u/52673035?s=200&v=4"
            forms:
              - form-title: "Geyser 命令"
                form-description: "这是你可以使用的一些 Geyser 命令的演示！"
                buttons:
                  - name: "统计数据"
                    commands:
                      - command-name: "geyser 统计数据"
                        run: "geyser statistics"
                  - name: "副手"
                    commands:
                      - command-name: "geyser 副手"
                        run: "geyser offhand"
                  - name: "工具提示"
                    commands:
                      - command-name: "geyser 工具提示"
                        run: "geyser tooltips"
                  - name: "进度"
                    commands:
                      - command-name: "geyser 进度"
                        run: "geyser advancements"
                  - name: "转储"
                    commands:
                      - command-name: "geyser 转储"
                        run: "geyser dump"
                        allowed-users:
                          - onebeastchris
                          - onebeastofchris
                          - someotheraccount

  # 你也可以直接运行一个命令，而不打开菜单。
  # 注意：我们在这里设置了一个特定的表情 UUID（来自 https://github.com/JustTalDevelops/bedrock-emotes），它将覆盖 "all" 菜单。
  - emote-uuid: 6d9f24c0-6246-4c92-8169-4648d1981cbb
    commands:
      - command-name: "游戏模式"
        run: "gamemode !%dropdown:选择一个游戏模式，创造，创造，生存，冒险，旁观者%"
        allowed-users:
            - onebeastofchris
            - someotheraccount

      # 由于上面的命令仅对 onebeastofchris 和 someotheraccount 可访问，因此该命令仅对他们运行。
      # 下面的命令没有设置允许的用户，因此，它将对其他人运行。
      # 一个按钮不能运行多个命令。
      - command-name: "说"
        run: "say !%input:输入一条消息，测试消息% %position% %username%"

  # 你也可以通过命令 (/magicmenu [menu-command]) 打开一个菜单
  # 这里的示例通过命令 /magicmenu weather 打开天气菜单
  # 然而，我们也为该命令添加了一个权限，因此只有拥有 "magicmenu.weather" 权限的人可以使用它。
  # 你可以通过 Bedrock 用户名定义允许的用户，而不是权限。
  - menu-command:
      command-name: "天气"
      description: "打开天气菜单"
      permission: "magicmenu.weather"
      aliases:
        - "w"
    commands:
      - command-name: "天气"
        run: "weather !%dropdown:天气会是什么？, 雨，雨，晴朗，雷暴%"```
````

## 注意事项

基岩版菜单中的图片**必须**是 URL，而不是资源包，你可以使用[笨蛋图床](https://image.8aka.org)上传你的图片

## NPC Form

一种基岩版独有的菜单，长这样

![](https://learn.microsoft.com/en-us/minecraft/creator/documents/media/npcs/npcdialogueintro.png?view=minecraft-bedrock-stable)

很炫酷，很适合做任务吧，但很可惜，目前只有 zim 的 Skript-Floodgate-API 支持创建 (后面会讲)

目前没有菜单插件支持 NPC Form，但 zim 为我们提供了简单的接口去创建 NPC Form

你需要安装 GeyserUtils，以下是关键代码，你需要一点 Java or Kotlin 编程能力才能使用

[Button 按钮源代码](https://github.com/GeyserExtensionists/GeyserUtils/blob/main/geyser/src/main/java/me/zimzaza4/geyserutils/geyser/form/element/Button.java)

[NPC Form 源代码](https://github.com/GeyserExtensionists/GeyserUtils/blob/main/geyser/src/main/java/me/zimzaza4/geyserutils/geyser/form/NpcDialogueForm.java)

[菜单组源代码](https://github.com/GeyserExtensionists/GeyserUtils/blob/main/geyser/src/main/java/me/zimzaza4/geyserutils/geyser/form/NpcDialogueForms.java)

## 专用菜单插件

这些菜单插件是专门针对某些用途或插件开发的，自定义性较低，但更加方便

### BedrockFormShop

专门用于制作商店菜单的插件，[项目地址](https://github.com/kejonaMC/BedrockFormShop)

[下载地址](https://ci.kejonamc.dev/job/BedrockFormShop/job/master/),这是官方[Wiki](https://github.com/kejonaMC/BedrockFormShop/wiki)

### Residence 领地

[下载地址](https://github.com/RenYuan-MC/ResidenceForm/releases/tag/dev)

[项目地址](https://github.com/RenYuan-MC/ResidenceForm)

### QuickShop 商店

[下载地址](https://github.com/RenYuan-MC/QuickShopForm/releases/tag/dev)

[项目地址](https://github.com/RenYuan-MC/QuickShopForm)

支持 QuickShop 和 QuickShop-Hikari

### Tpa 菜单

[下载地址](https://github.com/RenYuan-MC/TpaForm/releases/tag/dev)

[项目地址](https://github.com/RenYuan-MC/TpaForm)

支持的插件：

- EssentialX
- CMI
- Sunlight
- HuskHomes (仅单端)
- TPAPro (需要从 [此处](https://raw.githubusercontent.com/RenYuan-MC/TpaForm/master/extensions/TpaForm-TpaProSupport.jar) 下载扩展以兼容其黑名单功能)

### Skript 脚本

zim 太强啦

zimzaza4 开发的 Skript Geyser 菜单扩展，可以使用 Skript 创建菜单

同时也是目前唯一一个支持 NPC Form 的插件！

[项目地址](https://github.com/zimzaza4/Skript-Floodgate-Api),安装和使用请查看 readme，建议在使用前读一遍源代码，有些功能没写上去
