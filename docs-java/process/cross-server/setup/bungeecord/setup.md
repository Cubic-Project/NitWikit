---
title: 搭建
sidebar_position: 1
---

# 搭建

## 下载

前往 [核心选择](/docs-java/process/cross-server/server-core-choose.md) 下载 BungeeCord / Waterfall

BungeeCord 不再支持过旧版本 Minecraft

如果你需要，使用最后支持的构建：

| 版本   | 构建                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------ |
| 1.7.10 | [#1119](https://ci.md-5.net/job/BungeeCord/1119) 或 [Travertine](../../server-core-choose.md#核心选择) |
| 1.6.4  | [#701](https://ci.md-5.net/job/BungeeCord/701)                                                         |
| 1.6.2  | [#666](https://ci.md-5.net/job/BungeeCord/666)                                                         |
| 1.5.2  | [#548](https://ci.md-5.net/job/BungeeCord/548)                                                         |
| 1.5.0  | [#386](https://ci.md-5.net/job/BungeeCord/386)                                                         |
| 1.4.7  | [#251](https://ci.md-5.net/job/BungeeCord/251)                                                         |

## 启动

创建一个新的文件夹将核心放进去

并且使用参数启动以生成初始文件

如果想进一步优化可以使用 JVM 参数 [Waterfall 官方](https://docs.papermc.io/waterfall/getting-started#running-the-proxy)有推荐的 flags

```bash
java -Xms1024M -Xmx1024M -jar 核心名字.jar
```

## 配置

### config.yml

配置 BungeeCord 端根目录中的 `config.yml`

[详细配置文件讲解](config.yml.md)

```yaml
servers:
    lobby:
        motd: "&1Just another BungeeCord - Forced Host"
        address: localhost:25565
        restricted: false
```

其实不用解释你也看得懂吧

```yaml
servers:
    子服名称:
        motd: "服务器标语"
        address: 服务器地址：服务器端口
        restricted: false
```

照着把你的子服都写上去，就像这样

```yaml
servers:
    login:
        motd: "&1Just another BungeeCord - Forced Host"
        address: localhost:25501
        restricted: false
    survival:
        motd: "&1Just another BungeeCord - Forced Host"
        address: localhost:25502
        restricted: false
    resource:
        motd: "&1Just another BungeeCord - Forced Host"
        address: localhost:25503
        restricted: false
```

### 子服 bc 模式

配置子服端根目录中的 `spigot.yml`

```yaml
bungeecord: false
```

把这个打开 它在 `settings` 节点下

## 加入

见 [加入服务器](/docs-java/process/cross-server/join-server.md)
