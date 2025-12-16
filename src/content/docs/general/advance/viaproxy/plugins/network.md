---
title: 网络插件
sidebar_position: 2
---

# 网络插件详解

网络插件主要负责优化网络连接、处理协议兼容性和提供连接管理功能。这些插件对于改善连接质量和解决网络问题至关重要。

## ViaProxyRakNetProviders {#raknetproviders}

:::info

`GitHub` https://github.com/ViaVersionAddons/ViaProxyRakNetProviders

`下载` https://github.com/ViaVersionAddons/ViaProxyRakNetProviders/actions

:::

[ViaProxy](https://github.com/RaphiMC/ViaProxy) 插件，为 ViaBedrock 提供更多可选的 RakNet 实现。
允许用户根据连接的服务器选择更兼容或性能更好的 RakNet 实现。

主要用途是调试和测试不同的 RakNet 实现，因为 ViaProxy 中的默认实现 (https://github.com/CloudburstMC/Network) 在某些服务器上存在许多问题。

包装器原生代码可在此处找到：https://github.com/Lenni0451/RakNetWrapper

### 安装和使用

1. 从 [GitHub Actions](https://github.com/ViaVersionAddons/ViaProxyRakNetProviders/actions/workflows/build.yml) 下载最新版本
2. 将 jar 文件放入 ViaProxy 的 plugins 文件夹
3. 运行 ViaProxy。现在您应该能够在高级选项卡中选择 RakNet 后端
