---
title: 连接服务器
sidebar_position: 6
---

# 连接服务器

## 端口

打开你服务器根目录的 `server.properties`

找到

```yaml
server-port=25565
```

`25565` 即 Minecraft 服务器的默认端口，如果不更改默认端口通常可省略不写

## 本地连接

:::warning

此方法仅适用于服务端和客户端在同一机器上的情况

:::

本机 IP，通常有这样几种形式：

- localhost
- 127.0.0.1
- 0.0.0.0

如果你没有修改你的服务器端口，那么在你的 Minecraft 客户端中：

1. 点击多人游戏
2. 点击添加服务器
3. 输入上面提到的本地 IP 中的任意一个
4. 点击完成
5. 进入服务器

如果你修改了你的服务器端口，在回环地址后面加个冒号加上你改的端口即可

假设你的服务器端口是 12345，你应该将上方所说的 本机 IP 替换为：

- localhost:12345
- 127.0.0.1:12345
- 0.0.0.0:12345

:::warning

这里要使用英文的 `:` **不能使用中文**的 `：` ！

:::

## 远程连接

在开始让你的玩家远程连接至服务器的时候，请先确认有没有公网

### 我有公网

假设我现在的公网 IP 是 `114.51.14.191`，那么我的连接应该是输入 `114.51.14.191:25565`，

注意冒号后面的**端口号**应该和你设置的 **`server-port`** 一模一样，不然玩家无法连接

比如我现在把 **`server-port`** 改成了 **`9180`**，应该这么进入服务器 `114.51.14.191:9180`

如果我为 `114.51.14.191` 绑定了域名 `8aka.org` ，那么你可以使用 `8aka.org:9180` 进入服务器

如果很不幸，你的玩家没有正常连接，请先按以下步骤检查

- 请尝试本地连接，如果不行，那么就是服务器有问题
- 如果本地连接正常，你可以尝试在防火墙中放行端口
- 检查你在路由器中是否把这个端口公开到公网
- 根据 [常见错误](#常见错误) 章节进行排查

### 我没公网

查看 [内网穿透](/process/deploy/intranet-penetration) 部分，按照上面的教程把你的端口映射出去

## 常见错误

这些都是连接 Minecraft 服务器时常见的问题

### `Unknown host / 未知的主机 / Can't resolve hostname / 无法解析主机名`

1.检查你有没有打错域名

2.如果你刚刚更改 DNS 解析：

- 等一会儿再试
- 在 Windows 下，CMD 执行`ipconfig /flushdns`
- 在 Linux 下，终端执行 `sudo systemd-resolve --flush-caches`

    3.你的域名可能被 DNS 污染，你可以检查实际解析出来的 IP 和设置的是否一致，不一致就是被污染了，临时解决方案是更改 DNS
    服务器，长远来看最好打开 DNSSEC

### `数据流终止`

这个报错已经不多见，通常来说是运营商干的，比如早期网通和电信，海外流量过境有时会被 GFW 阻断也可能产生此错误

### `Connection timed out / 连接超时`

1.检查你有没有打错域名

2.检查网络状况 (可以试试 ping 服务器，超时就是网的问题)

3.如果使用 FRP ,检查 frp 的配置文件是否正确

### `Invalid characters in username/ 用户名包含无效字符`

用户使用了非 Minecraft 原版允许的用户名进入服务器，可以安装 CnUsername 来解决

### `Flying is not enabled on this server/ 此服务器未启用飞行`

打开 server.properties 文件，把 `allow-flight` 设置为 `true` 然后重启服务器

### `You are sending too many packets!/ 由于超出数据包速率限制而被踢出游戏`

一般是开连点器导致的，你可以将在`paper-global.yml`中`packet-limiter`中的`max-packet-rate`调大

如果使用了 ViaVersion ,也需要调大配置文件中的`max-pps`和`tracking-warning-pps`值

### `忽略状态请求`

没遇到过这个问题

### `java.io.IOException: Connection reset by peer`

网络太差

### `无效会话`

没有使用正版登录进入正版服务器，也可以通过将 `online-mode` 改为` false` 解决

### `身份验证服务器目前处于宕机状态。请稍后再试，抱歉`

确认 Mojang 或微软账户服务器状态（可通过 [Mojang Status](https://status.mojang.com/) 查询）

如果不是 Mojang 的验证服务器维护了，也可能是你的网络太差，连接不到验证服务器，可以安装 [AlwaysOnline](https://modrinth.com/plugin/alwaysonlineplugin) 插件来解决

### `Outdated server! / 服务器版本过时`

客户端与服务器版本不一致时会出现此提示。

1. 检查客户端启动器选择的游戏版本是否与服务器一致
2. 若服务器支持跨版本（如安装了 ViaVersion），确保客户端版本在插件支持的范围内
3. 若为原版服务器，客户端需降级或升级至匹配版本

### `io.netty.channel.AbstractChannel$AnnotatedConnectException: Connection refused`

1. 服务器未启动或已崩溃，检查服务器控制台是否正常运行
2. 确认服务器 IP 和端口填写正确（默认端口为 `25565`）
3. 若使用内网穿透（如 FRP/Ngrok），检查穿透服务是否配置正确

### `Internal Exception: java.io.IOException: 远程主机强迫关闭了一个现有的连接`

1. 服务器或客户端网络不稳
2. 服务器插件冲突（如反作弊插件误判，尝试移除插件排查）
3. 被服务器防火墙强行关闭了
4. 连接到海外服务器时被 GFW 阻断了

### `Server is full! / 服务器已满`

调整 `server.properties` 中的 `max-players` 值并重启

### `java.net.SocketException: Connection reset`

1. 被本地/服务器防火墙强行关闭了
2. 连接到海外服务器时被 GFW 阻断了

### `You are already connected to this server!`

1. 有同名的人在服务器上
2. 网络太差，服务器认为你还在服务器上
