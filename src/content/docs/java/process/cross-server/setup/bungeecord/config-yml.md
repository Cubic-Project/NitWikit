---
title: config.yml
sidebar_position: 2
---

# config.yml

```yaml
# Forge mod 支持，如果你的服务器中有 mod 服务器，请打开这个选项
forge_support: false
# 玩家真实限制，它将限制整个服务器的玩家人数，-1 为不限
player_limit: -1
# BC 服务器权限组 不建议用这东西而是使用 BC 版 LuckPerms
permissions:
    default:
        - bungeecord.command.server
        - bungeecord.command.list
    admin:
        - bungeecord.command.alert
        - bungeecord.command.end
        - bungeecord.command.ip
        - bungeecord.command.reload
# 当玩家在 BC 中无响应多长时间，BC 才会将他踢出去，在这里是毫秒，一秒等于 1000 毫秒，30000=30 秒
timeout: 30000
# 正版验证，如果是盗版服请关闭，否则会调用 API 进行验证
log_commands: false
online_mode: true
# 这里是服务器禁止的指令，例如我填 - help 服务器就会禁用/help 指令
disabled_commands:
    - disabledcommandhere
servers:
    lobby:
        # 服务器标语 (不用设置，建议用插件而不是这玩意)
        motd: "&1Just another BungeeCord - Forced Host"
        # 服务器地址
        address: localhost:25565
        restricted: false
# 这是子服务器的列表，在下面我会讲解
listeners:
    # 监听查询端口，端口不能和 host 项的相同。
    - query_port: 25577
      # BC 的标语，支持彩色 (也不用设置)
      motd: "&1Another Bungee server"
      tab_list: GLOBAL_PING
      # 是否开启监听查询
      query_enabled: false
      proxy_protocol: false
      forced_hosts:
          pvp.md-5.net: pvp
      ping_passthrough: false
      # 优先服务器列表 玩家将优先加入靠上设置的子服，进不去会尝试下一个子服
      priorities:
          - lobby
      bind_local_address: true
      # BC 的 IP 地址，开启后访问它就能进入服务器
      host: 0.0.0.0:25577
      # 服务器显示的最大人数，如要设置真实的人数请找到 player_limit 选项填写
      max_players: 1
      tab_size: 60
      force_default_server: false
# 一定要打开，否则会被拒绝
ip_forward: false
# BC OP 设置，这也是漏洞之一，待会修改
network_compression_threshold: 256
groups:
    md_5:
        - admin
# 连接间隔，当玩家退出后多就能加入，在这里一秒等于 1000，4000=4 秒
connection_throttle: 4000
# 机器码，请不要修改，修改之后就会 duang 的没用
stats: c86020bc-ddf6-467e-84d9-90974afcf90e
prevent_proxy_connections: false
```
