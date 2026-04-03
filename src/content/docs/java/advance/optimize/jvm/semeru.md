---
title: Semeru
---

Semeru 是由 IBM 提供的 JDK 发行版，使用 OpenJ9 JVM 而非 HotSpot JVM。

OpenJ9 是一套遵循 Java 虚拟机规范、独立实现并重新设计的 JVM，拥有独立的内存管理机制和垃圾收集策略，和 HotSpot JVM 内的 G1GC、ZGC 不同。

:::caution

这些参数的主要目的是降低内存占用，而非优化性能

:::

:::danger[兼容性说明]

Paper 核心内置 Spark 性能分析器，这会导致和 OpenJ9 JVM 不兼容，因此默认情况下 **不推荐** 将 Semeru 用于 Paper 或其分支。

:::

## Paper 兼容性修复

如需在 Paper 及其分支上使用 Semeru，你需要禁用内置 Spark：

### 方法一：关闭内置 Spark（推荐）

在 `config/paper-global.yml` 中设置：

```yaml
spark:
    enabled: false
```

:::caution

禁用 Spark 后无法使用性能分析功能。

:::

### 方法二：使用插件版 Spark

添加 JVM 启动参数：

```txt
-Dpaper.preferSparkPlugin=true
```

使核心优先选择 Spark 插件，而非内置的版本。

## 基础参数

<!--markdownlint-disable line-length-->

```txt
-XX:+IdleTuningGcOnIdle -XX:+UseAggressiveHeapShrink -XX:-OmitStackTraceInFastThrow -XX:+UseFastAccessorMethods -XX:+OptimizeStringConcat -Xshareclasses:allowClasspaths -Xshareclasses:cacheDir=./cache -Xaot -XX:+UseCompressedOops -XX:ObjectAlignmentInBytes=256 -Xshareclasses -XX:SharedCacheHardLimit=800M -Xtune:virtualized -XX:+TieredCompilation -XX:InitialTenuringThreshold=5 -Dlog4j2.formatMsgNoLookups=true -XX:-DisableExplicitGC
```

<!--markdownlint-enable line-length-->

## 垃圾回收策略

OpenJ9 使用 `-Xgcpolicy` 参数来指定垃圾回收策略，而不是 HotSpot 的 `-XX:+UseG1GC` 或 `-XX:+UseZGC`。

### 推荐策略：gencon（默认）

适合大多数 Minecraft 服务器场景，特别是有大量短生命周期对象的事务性应用。

```txt
-Xgcpolicy:gencon
```

:::tip

对于 Minecraft 服务器，gencon 策略通常是最佳选择，因为它专门针对有大量临时对象的应用进行了优化。

:::

<details>
<summary>其他可选策略</summary>

### balanced 策略

适合大堆内存（仅 64 位），能够平衡暂停时间并减少碎片化。

```txt
-Xgcpolicy:balanced
```

### optavgpause 策略

优化平均暂停时间，适合对延迟敏感的应用。

```txt
-Xgcpolicy:optavgpause
```

### optthruput 策略

优化吞吐量，适合能容忍较长 GC 暂停的应用。

```txt
-Xgcpolicy:optthruput
```

### metronome 策略

提供确定性的短暂停时间（仅 Linux x86-64 和 AIX）。

```txt
-Xgcpolicy:metronome
```

</details>
