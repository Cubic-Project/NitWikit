---
title: 内网穿透
sidebar_position: 5
---

# 内网穿透

**适用于？**

没有公网的家里云

**来几个？**

内网穿透一抓一大把，比如 [樱花内网穿透](https://www.natfrp.com/) 和 [OpenFrp](https://www.openfrp.net/)

Cloudflare 有内网穿透 Tunnel (无需注册！)，Minekube 也有内网穿透 Connect (同样无需注册)，还有 Geyser 官方推荐的 playit.gg

自建 frp 参见 [此页面](../../advance/frp.md#配置-proxy-protocol)

## Cloudflare Tunnel

~~佛祖的东西肯定得介绍~~

Cloudflare Tunnel 是 CF 下的免费内网穿透

优点：

- 免费，无需注册
- 自带 N TB 高防
- 不限流
- 支持 TCP, UDP, RDP, SSH, HTTP
- SSH 提供 WebSSH，还可以通过 Access 管理

缺点：

- 延迟较大 (不可以优选）
- 客户端需安装 mod 才能进入 (仅限 TCP, UDP)

### 安装

在 [GitHub](https://github.com/cloudflare/cloudflared/releases) 找到适合的版本并安装

### 使用

打开 cmd，运行以下命令

```bash
cloudflared tunnel --url tcp://localhost:服务器端口
```

`tcp` 可以换成其他你需要的协议，比如 `http`

很快你就能看到

<!--markdownlint-disable line-length-->

```text
INF Thank you for trying Cloudflare Tunnel. Doing so, without a Cloudflare account, is a quick way to experiment and try it out. However, be aware that these account-less Tunnels have no uptime guarantee. If you intend to use Tunnels in production you should use a pre-created named tunnel by following: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps
INF Requesting new quick Tunnel on trycloudflare.com...
INF +--------------------------------------------------------------------------------------------+
INF |  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
INF |  https://corporate-mention-tiles-coordinates.trycloudflare.com                             |
INF +--------------------------------------------------------------------------------------------+
```

`*.trycloudflare.com` 就是 CF 给你的免费域名

<!--markdownlint-disable line-length-->

### 客户端

需要安装 [Modflared](https://modrinth.com/mod/modflared)

:::tip

作为服主，你还需要绑定到你自己的域名，参考 Modflared 的教程

:::

## Minekube Connect

Minekube 的免费内网穿透，这个组织还有另一个有名作品 Gate

个人感觉比 Cloudflare Tunnel 强很多 (比 Cloudflare Spectrum 体验都好)

优点：

- 免费，无需注册
- 自带高防
- 不限流
- 会提供一个免费域名和 1 个 Anycast 独立 IPv4
- 有管理面板，可以进行网络分流，管理，黑名单等操作

缺点：

- 延迟非常大

[官网](https://connect.minekube.com/)

## playit.gg

playit 的免费内网穿透，需要登录

优点：

- 提供免费版本
- 无限流量
- 提供防火墙功能
- 提供 **亚太地区节点**（测试时候路由到了日本）
- 自带高防
- 支持 Geyser
- 支持任意 TCP、UDP 应用

缺点：

- 免费版本不能绑定自己的域名，只能使用随机域名
- 延迟略大

Premium 版本一个月 3 刀 (约合人民币 27 元)，一年 30 刀

## 可能的问题？

内网穿透后相当于玩家的连接传递到了你机器上的软件上，用这个软件访问本地的服务端 (类似代理)，服务端就会误认为是本地连接访问了服务器，就会出现以下问题：

### 登录插件

#### 玩家注册

支持 IP 限制注册账号的登录插件 (如 Authme、CMI) 会出问题

如果内网穿透的话，他们的 IP 地址都是回环地址，所以他们不能注册账号了

尝试在登录插件的配置文件中关闭 IP 限制。

#### 自动登录

此功能依靠 IP 进行识别，如果内网穿透的话，普通玩家和 OP 玩家的 IP 都是回环地址

就出现了玩家登录 OP 账号等“绕过登录漏洞”

### 显示玩家 IP 归属地

一些可以显示玩家 IP 归属地的插件会失效

因为他们的 IP 都是回环地址

### /ban-ip ban 掉所有人

因为你们的地址都是回环地址

所以你 /ban-ip 会 ban 掉所有人，包括你自己......

### 反假人插件

这会导致反假人插件几乎不能使用，因为无论是封禁 IP 还是 IP 白名单都会因为所有玩家 IP 相同而失效。

### 解决以上无法显示 IP 地址的办法：PROXY protocol

正是因为 frp 在转发玩家请求时重写了请求头部，导致了以上情况的发生。frp 虽然不能不重写这个请求头部，但是他可以通过一种方式还原请求头部，让服务器正常显示出连接 IP。
PROXY protocol 是由 HAProxy 开发者 Willy 提出的一种反向代理协议，可以参考 [HAProxy 文档](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt)
获取更多信息。frp 内置的 PROXY protocol 要求被其穿透的服务器也支持 PROXY protocol，否则会造成对应的服务无法使用，所以并不是随便拿一个服务就能用 PROXY protocol。
frp 启用 PROXY protocol 的方式参考 [自建 frp](../../advance/frp.md#配置-proxy-protocol)。

对于 MC 服务器来说，支持 PROXY protocol 的软件有：

- BungeeCord 系
- Paper 分支 (1.18.2)(仅支持 v2)
- [Geyser](/java/process/mobile-player/geyser/introduction/faq#frp-搭建内网穿透想显示真实-ip-怎么办)
- Spigot 端插件 [HAProxyDetector](https://github.com/andylizi/haproxy-detector)

等。BDS 服务器目前不支持此协议。
