---
title: Allay 核心介绍
sidebar_position: 1
---

![AllayMClogo](https://www.minebbs.com/data/attachments/75/75565-950caff3b64670c4eee997d282381218.jpg)

<div align="center">Allay：下一代的 MCBE 服务端软件</div>

<div align="center">

[Allay 官网](https://docs.allaymc.org/) | [GitHub 仓库](https://github.com/AllayMC/Allay)

</div>

## 介绍

Allay 是使用 Java 编写的 Minecraft: Bedrock Edition 第三方服务端软件，目标通过精心设计的架构来在保持高性能的同时保持高扩展性。

:::danger

请注意，此项目仍处于非常早期的阶段且还未释放正式版，大量接口可能会在没有预先通知的情况下增加或删除。请不要在生产环境使用 Allay。

你可以查看我们的 Roadmap 来获取开发进度。

:::

## 特性

- 跨平台：Allay 基于 JVM，故可以在大多数能运行 JVM 的平台上运行。
- 高性能：
  - 我们充分了解 Nukkit 系服务端在高负载环境下存在的问题，Allay 在同样的负载环境下于特定方面（e.g. 实体物理）的性能比 Nukkit 高近百倍。
  - 除此之外，得益于重新设计的线程模型，Allay 能充分利用多核 CPU。这意味着你不需要刻意使用高频率的 CPU。
  - Allay 基于最新的 Java21，理论上能获得更好的性能
- 易于上手：
  - 你可以使用 Java/JVM 语言编写适用于 Allay 的插件
  - 我们引入了 GraalVM 和 JavaScript 支持，这意味着你可以使用 JavaScript/TypeScript 编写插件并
  - 获得与 Java 同等的性能以及无缝互操作的能力。
- 高自定义性：Allay 提供大量 BDS 不具备的接口。除此之外，你甚至可以直接控制发包来获得最大的自定义性。
- 安全：
  - Allay 相较于 BDS 对客户端发包有更多的校验，理论上不存在 BDS 存在的许多恶性漏洞。
  - Allay 默认开启网络加密。另外，Allay 内置资源包加密功能，可自动加密发送给客户端的资源包，一定程度上防止你的数据泄漏。
- 大量新功能：不同于 Nukkit 系服务端，Allay 使用了大量 BDS 已经引入的新的协议功能，包括但不限于服务端权威物品栏，子区块发包...
- 代码质量：我们非常注重代码质量，并借助大量的单元测试和重构保持项目稳定。

## 开始使用

Allay 基于 Java21，故在运行 & 构建 Allay 前你需要安装 Java21。

若你有开发脚本插件的需求，我们建议你使用 GraalVM 以获得最好性能。

### 直接运行

前往 [GitHub Releases](https://github.com/AllayMC/Allay/releases) 下载

使用以下启动脚本启动服务端（jar 文件名为示例，请改为你设置的 jar 核心名）

```bash
java -jar allay.jar
```

### 源码运行

```bash
gradlew Allay-Server:runShadow
```

### 构建

```bash
gradlew Allay-Server:build
```
