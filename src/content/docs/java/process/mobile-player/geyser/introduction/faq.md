---
title: FAQ
sidebar_position: 3
---

# FAQ

## 红石是按照哪个版本工作的？

你加入的服务器是一个 **Java 版** 服务器
**红石，还有 指令、农场** 等各种机制都是按照 Java 版 工作的

## 为什么基岩版玩家无法在地狱上层放置方块？

请查阅安装教程中 Geyser 配置教程其他项中的 **`above-bedrock-nether-building`**

## 在删除前缀后为什么数据还是不互通？

Java 版和基岩版的 UUID 不一致，请查阅进阶教程

## 有时，世界跑的很远以后客户端会很卡

这是 **基岩版**
客户端的问题。具体请 [查看这里](https://zh.minecraft.wiki/w/%E8%B7%9D%E7%A6%BB%E7%8E%B0%E8%B1%A1/%E5%9F%BA%E5%B2%A9%E7%89%88)

## frp 搭建内网穿透想显示真实 IP 怎么办

在 frp 中[开启 PROXY protocol](/advance/frp#配置-proxy-protocol)
后，在配置文件里将 enable-proxy-protocol 设置为 true。后续如果不再使用内网穿透，**一定记得把这个配置改回 false**

## 皮肤不显示怎么办

这可能是因为你在安装 Floodgate 后又安装了额外的皮肤组件导致的
请查阅进阶教程

## 头颅不显示怎么办

请查阅进阶教程

## 箱子菜单变形怎么办

请查阅进阶教程

## 地狱上层雾显示不正确怎么办？

请查阅进阶教程

## 无法正常连接到服务器！(服务器在好友选项卡没有显示或者在连接服务器时出现 "无法连接到世界")

这个问题很复杂，请检查以下问题是否存在：

- **是否使用了 SRV**

基岩版客户端不支持 SRV 解析，请让基岩版的玩家正常通过 IP 和端口连接服务器

- **手贱开启 enable-proxy-protocol**

如果你不使用像 TCPShield、frp 的反向代理，请保证你的 `enable-proxy-protocol` 选项是设置为 `false` 的

- **启动时提示 java.net.BindException: Address already in use: bind**

这代表 Geyser 服务器所开设的端口已被占用，请确保你关闭了所有占用该端口的软件，然后再试。如果这没有起作用，通常重启你的电脑即可解决该问题

- **你的服务商可能没有及时打开 UDP 端口**

这通常和你的主机端的端口有关。最常见的是，跟 Java 版的常用的 TCP 协议的端口不同，你的主机很有可能没有开放基岩版所使用的 UDP
协议的端口。
一个确认此问题的方法是关闭你的服务器，然后选择其他 基岩版服务端，例如 Nukkit (你不一定非要用 Nukkit) 以检查是否是该问题导致的

- **尝试重启服务器和游戏**

特别是在移动设备上，有时只需重新启动 Minecraft 即可解决问题

- **基岩端口小于 10000**

端口小于 10000 通常会导致问题，请将其设置为高于 10000 的值

- **切换连接线路**

这有可能是你的服务器被当前网络提供商过滤

如果还不行，我们无能为力

## 加入服务器后出现区块空白

如果你的服务器使用的是 Java 18 以下并且 CPU 支持 AVX512 (通常来说是 Intel 10 代以上和 AMD)，你可以尝试添加启动参数

```text
-XX:+UnlockDiagnosticVMOptions -XX:-UseAESCTRIntrinsics
```

:::tip

这个问题已经在 Java 18 及以上修复，通常来说出现区块空白已经不是这个问题

:::

当基岩版视距小于服务器视距时会出现区块无法渲染的现象 (
仍有碰撞体积但看不见)([Geyser Issue 3809](https://github.com/GeyserMC/Geyser/issues/3809))

可以在服务器上安装 [SeeMore](https://modrinth.com/plugin/seemore) 来解决这个问题

如果还不行，你可以升级 **电脑配置**
