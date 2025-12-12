---
title: 搭建内网穿透 (frp)
sidebar_position: 6
---

<!-- @format -->

# 搭建内网穿透 (frp)

## 使用现成的内网穿透提供商

笔者无法在这里推荐运营商，因为目前在开服方面还没有受到广泛认可的内网穿透运营商。不同的运营商收费不同，限量不同，节点也不同。上网搜索"内网穿透"就能找到大量内网穿透的运营商，但是在选购的时候非常建议多家对比，找到最适合自己使用的运营商。下面是选择过程中除了价格外尤其需要注意的地方：

1. 正规性：最好能在运营商的官网最下面看到网站备案信息，并且运营商也介绍了自己的公司名称，公司名称上网也能查得到。
2. 流量：小服务器每月只能用掉几 G，但是大服务器每月能用掉几百 G 甚至几 T 的流量。你需要确定对流量的收费是否适合自己。如果不确定多少流量适合自己，你可以先找一家运营商用一个月，看看自己要花掉乐多少流量。
3. 带宽：一些内网穿透运营商只会给每个服务器几 M 的带宽，对于大型服务器完全不够用。注意，一般不限流量的内网穿透运营商带宽都很低。
4. 隧道数：内网穿透每映射一个端口出去就叫一条隧道。每个服务端都可能需要占用一条隧道，你还需要一些隧道用来管理服务器等。一般新手有一个隧道就够，但是后面你可能需要远程桌面等要用到更多隧道。
5. 节点：由于内网穿透是客户端向节点发送数据后节点再向服务器发送数据，和客户端与服务器直接通信相比，数据需要在节点上绕一下，这样一来延迟到来到了客户端到节点的延迟和服务端到节点延迟的总和。

<details>
<summary>如何选择合适的节点？</summary>

根据三角形两边之和大于第三边的定理，节点距离客户端或服务端越近，游戏延迟就越小。然而你无法确定客户端的地理位置，毕竟玩家来自大江南北。那么只有缩短节点与服务器之间的距离，才能保证所有玩家的延迟都最低。例如服务器位于河北，有两个节点分别位于山东枣庄和江苏宿迁，有两个玩家分别位于广东和辽宁，那么当选择离服务器更近的枣庄节点时，假设辽宁玩家到节点为 20 ms，广东玩家到节点为 50 ms，服务器到节点为 10 ms，那么辽宁玩家的游戏延迟就是 20+10=30 ms，广东玩家的游戏延迟就是 50ms+10ms=60 ms。当选择离服务器更远的宿迁节点时，假设辽宁玩家到节点为 40 ms，广东玩家到节点为 30 ms，服务器到节点为 30ms，那么辽宁玩家的游戏延迟就是 50+30=70 ms，广东玩家的游戏延迟就是 40+30=60 ms。选择宿迁节点时虽然广东玩家的延迟不变，但是辽宁玩家连接服务器时，数据从更远的宿迁绕了一圈再回来，延迟高了很多。因此选择运营商时，优先选择拥有离自己近的节点的运营商。

</details>
6. 实名认证：为了在意外事故中更好地规划责任，很多内网穿透运营商都要求实名认证才能开始使用，或者部分节点需要实名认证。还有一些实名认证时还要求用户必须成年 (年满 18 岁)。况且实名认证服务提供方收费，内网穿透运营商可能会让你自行承担费用，目前价格通常在 1 元。所以在选择运营商时，如果你未成年，或者没有在线支付的能力，那么在一些运营商处可能会受到限制。

## 自建 frp

首先你得确保你有一台有公网 IP 的机器作为服务端（节点），最好是 **Linux** 的。

如果你的朋友愿意把他的服务器作为节点提供给你，你还需要注意配置方法包括了需要在他的服务器上进行的操作，你可能需要他交给你服务器的控制权，或者请求他的帮助。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 安装 frp

#### 服务端（公网服务器）

服务端推荐使用 Linux 系统。这里假定你有一台符合条件的 Linux 服务器，并且你已经可以连上你服务器的 **SSH**。

<!--markdownlint-disable ol-prefix-->

1. 首先确保服务器所有软件包是最新的：

不同的 Linux 发行版更新方法大同小异

<Tabs>
<TabItem value="debian" label="Debian/Ubuntu" default>

```bash
apt-get update && apt-get upgrade -y
```

</TabItem>
<TabItem value="redhat" label="CentOS/Redhat Linux">

```bash
yum -y update
```

</TabItem>
<TabItem value="arch" label="Arch Linux">

```bash
pacman -Syu
```

</TabItem>
</Tabs>

2. 将 `frp` 软件安装到系统中：

<Tabs>
<TabItem value="others" label="deb和rht系的 Linux" default>
手动下载 frp 软件包：

```bash
cd ~
wget https://github.com/fatedier/frp/releases/download/v0.58.1/frp_0.58.1_linux_amd64.tar.gz
```

解压：

```bash
tar -xzvf frp_0.58.1_linux_amd64.tar.gz
```

安装服务端：

```bash
cd ~/frp_0.58.1_linux_amd64/
cp frps /usr/bin/
mkdir -p /etc/frp
cp frps.toml /etc/frp/
```

</TabItem>
<TabItem value="arch" label="Arch Linux">

在 Arch Linux 下可以直接用 aur 助手通过包管理器安装 frp：

```bash
# 使用你的 aur 助手，这里列举了 paru 的
paru -Sy frps # 服务器端
```

</TabItem>

</Tabs>

<!--markdownlint-enable ol-prefix-->

#### 客户端（本地服务器）

客户端可以是 Linux 或 Windows 系统。

<Tabs>
<TabItem value="linux" label="Linux 客户端" default>

##### 手动安装

下载 frp 软件包：

```bash
cd ~
wget https://github.com/fatedier/frp/releases/download/v0.58.1/frp_0.58.1_linux_amd64.tar.gz
```

解压：

```bash
tar -xzvf frp_0.58.1_linux_amd64.tar.gz
```

安装客户端：

```bash
cd ~/frp_0.58.1_linux_amd64/
cp frpc /usr/bin/
mkdir -p /etc/frp
cp frpc.toml /etc/frp/
```

##### Arch Linux

在 Arch Linux 下可以直接用 aur 助手通过包管理器安装：

```bash
# 使用你的 aur 助手，这里列举了 paru 的
paru -Sy frpc # 客户端
```

</TabItem>
<TabItem value="windows" label="Windows 客户端">

##### 下载 frp

1. 访问 [frp Releases 页面](https://github.com/fatedier/frp/releases)
2. 下载适合 Windows 的版本，例如 `frp_0.58.1_windows_amd64.zip`
3. 解压到合适的位置，例如 `C:\frp\`

##### 配置文件

解压后，你会看到 `frpc.exe`（客户端程序）和 `frpc.toml`（配置文件）。

</TabItem>
</Tabs>

### 配置 frp

#### 配置服务端（公网服务器）

编辑服务端配置文件：

```bash
vim /etc/frp/frps.toml
```

写入如下内容：

```toml
bindPort = 7000 # frps 监听的端口

log.to = "/var/log/frps.log" # 日志存放路径，一般不用改
log.level = "info" # 日志等级，不用改
log.maxDays = 3

auth.token = "example" # 身份验证令牌，frpc 要与 frps 一致
```

#### 配置客户端（本地服务器）

<Tabs>
<TabItem value="linux" label="Linux 客户端" default>

编辑客户端配置文件：

```bash
vim /etc/frp/frpc.toml
```

输入以下内容：

```toml
serverAddr = "x.x.x.x" # 你 frps 服务器的 IP 地址
serverPort = 7000 # 你 frps 服务开在的端口

log.to = "/var/log/frpc.log" # 日志存放路径，一般不用改
log.level = "info" # 日志等级，不用改
log.maxDays = 3

auth.token = "example" # 令牌，与公网服务端保持一致

[[proxies]]
name = "mc je"
type = "tcp" # Java 版使用 TCP 协议通信，不可更改
localIP = "127.0.0.1" # 默认不用改
localPort = 25565 # MC 服务端开在哪个端口？
remotePort = 25565 # 暴露服务的公网入口

# 如果你开了互通，要基岩支持
[[proxies]]
name = "mc be"
type = "udp" # 基岩版使用 UDP 协议通信，不可更改
localIP = "127.0.0.1"
localPort = 19132
remotePort = 19132
```

</TabItem>
<TabItem value="windows" label="Windows 客户端">

在 frp 解压目录下，编辑 `frpc.toml` 文件（使用记事本或其他文本编辑器）：

```toml
serverAddr = "x.x.x.x" # 你 frps 服务器的 IP 地址
serverPort = 7000 # 你 frps 服务开在的端口

log.to = "./frpc.log" # 日志存放路径
log.level = "info" # 日志等级，不用改
log.maxDays = 3

auth.token = "example" # 令牌，与公网服务端保持一致

[[proxies]]
name = "mc je"
type = "tcp" # Java 版使用 TCP 协议通信，不可更改
localIP = "127.0.0.1" # 默认不用改
localPort = 25565 # MC 服务端开在哪个端口？
remotePort = 25565 # 暴露服务的公网入口

# 如果你开了互通，要基岩支持
[[proxies]]
name = "mc be"
type = "udp" # 基岩版使用 UDP 协议通信，不可更改
localIP = "127.0.0.1"
localPort = 19132
remotePort = 19132
```

</TabItem>
</Tabs>

### 开启 frp

#### 启动服务端（公网服务器）

在 Linux 服务端上，为了保证 frp 在后台运行，这里有两种方法：

1. screen 方便快捷

2. systemd 省心，有点复杂

<Tabs>
<TabItem value="screen" label="screen" default>

确保你的系统上有 `screen` 包，没有的话安装它们：

<Tabs>
<TabItem value="debian" label="Debian/Ubuntu" default>

```bash
apt-get install screen
```

</TabItem>
<TabItem value="redhat" label="CentOS/Redhat Linux">

```bash
yum install screen
```

</TabItem>
<TabItem value="arch" label="Arch Linux">

```bash
pacman -Sy screen
```

</TabItem>
</Tabs>

启动：

```bash
screen -dR frps frps
# 键盘上按 Ctrl + A + D 退出
```

</TabItem>
<TabItem value="systemd" label="systemd">

在 Linux 系统下，使用 systemd 可以方便地控制 frps 服务端的启动、停止、配置后台运行以及开机自启动。

<!--markdownlint-disable ol-prefix-->

1. 创建 systemd 单元文件：

```bash
vim /etc/systemd/system/frps.service
```

```ini
[Unit]
# 服务名称，可自定义
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
ExecStart = /usr/bin/frps -c /etc/frp/frps.toml

[Install]
WantedBy = multi-user.target
```

2. 使用 systemd 命令管理 frps 服务

```bash
# 启动 frp
sudo systemctl start frps
# 停止 frp
sudo systemctl stop frps
# 重启 frp
sudo systemctl restart frps
# 查看 frp 状态
sudo systemctl status frps
```

3. 设置 frps 开机自启动

```bash
sudo systemctl enable frps
```

<!--markdownlint-enable ol-prefix-->

</TabItem>
</Tabs>

#### 启动客户端（本地服务器）

<Tabs>
<TabItem value="linux" label="Linux 客户端" default>

##### 使用 screen

确保你的系统上有 `screen` 包：

<Tabs>
<TabItem value="debian" label="Debian/Ubuntu" default>

```bash
apt-get install screen
```

</TabItem>
<TabItem value="redhat" label="CentOS/Redhat Linux">

```bash
yum install screen
```

</TabItem>
<TabItem value="arch" label="Arch Linux">

```bash
pacman -Sy screen
```

</TabItem>
</Tabs>

启动：

```bash
screen -dR frpc frpc
# 键盘上按 Ctrl + A + D 退出
```

##### 使用 systemd

<!--markdownlint-disable ol-prefix-->

1. 创建 systemd 单元文件：

```bash
vim /etc/systemd/system/frpc.service
```

```ini
[Unit]
# 服务名称，可自定义
Description = frp client
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
ExecStart = /usr/bin/frpc -c /etc/frp/frpc.toml

[Install]
WantedBy = multi-user.target
```

2. 使用 systemd 命令管理 frpc 服务

```bash
# 启动 frp
sudo systemctl start frpc
# 停止 frp
sudo systemctl stop frpc
# 重启 frp
sudo systemctl restart frpc
# 查看 frp 状态
sudo systemctl status frpc
```

3. 设置 frpc 开机自启动

```bash
sudo systemctl enable frpc
```

<!--markdownlint-enable ol-prefix-->

</TabItem>
<TabItem value="windows" label="Windows 客户端">

##### 方法一：命令行直接运行

1. 打开命令提示符（CMD）或 PowerShell
2. 切换到 frp 解压目录：

    ```bash
    cd C:\frp
    ```

3. 运行 frpc：

    ```bash
    frpc.exe -c frpc.toml
    ```

:::tip

此方法会占用一个命令行窗口，关闭窗口后 frpc 会停止运行。

:::

##### 方法二：使用 NSSM 设置为 Windows 服务（推荐）

使用 NSSM 可以让 frpc 在后台运行，并且开机自启。

1. 下载 [NSSM](https://nssm.cc/download)
2. 解压 NSSM，将 `nssm.exe` 放到 frp 目录或系统 PATH 中
3. 以管理员身份运行命令提示符
4. 安装服务：

    ```bash
    nssm install frpc "C:\frp\frpc.exe" "-c C:\frp\frpc.toml"
    ```

5. 启动服务：

    ```bash
    nssm start frpc
    ```

6. 其他常用命令：

    ```bash
    # 停止服务
    nssm stop frpc

    # 重启服务
    nssm restart frpc

    # 查看服务状态
    nssm status frpc

    # 卸载服务
    nssm remove frpc confirm
    ```

##### 方法三：使用 WinSW 设置为 Windows 服务

1. 下载 [WinSW](https://github.com/winsw/winsw/releases)
2. 将下载的 `WinSW.exe` 重命名为 `frpc-service.exe` 并放到 frp 目录
3. 在同一目录创建配置文件 `frpc-service.xml`：

    ```xml
    <service>
      <id>frpc</id>
      <name>frp Client</name>
      <description>frp 内网穿透客户端</description>
      <executable>C:\frp\frpc.exe</executable>
      <arguments>-c C:\frp\frpc.toml</arguments>
      <logmode>rotate</logmode>
    </service>
    ```

4. 以管理员身份运行命令提示符，安装服务：

    ```bash
    cd C:\frp
    frpc-service.exe install
    ```

5. 启动服务：

    ```bash
    frpc-service.exe start
    ```

6. 设置开机自启（在服务管理中设置为自动启动）

</TabItem>
</Tabs>

### 配置 PROXY protocol

如果你使用的是现成的内网穿透运营商提供的内网穿透，**一定要根据运营商提供的教程操作**。以下是两个最有名的内网穿透运营商的 PROXY protocol 开启方法。
[SakuraFrp](https://doc.natfrp.com/bestpractice/realip.html#proxy-protocol)
[OpenFrp](https://openfrp.wiki/use/proxy-protocol.html#%E8%8E%B7%E5%8F%96%E8%AE%BF%E9%97%AE%E8%80%85%E7%9A%84%E7%9C%9F%E5%AE%9E-ip)

如果是自建内网穿透，那么如果是 ini 配置文件，就在 frpc 隧道对应的配置 (位于 frpc.ini 中) 中加入一行 `proxy_protocol_version =`，如果是协议 v1 就写等于 v1，v2 就写等于 v2。例如：

```ini
[mc]
type = tcp
local_port = 25565
# 目前支持 v1 和 v2 两个版本的 PROXY protocol 协议。
proxy_protocol_version = v2
```

如果是 toml 配置文件，就在 frpc 隧道对应的配置 (位于 frpc.toml 中) 中加入一行 `transport.proxyProtocolVersion =`，如果是协议 v1 就写等于 v1，v2 就写等于 v2。例如：

```toml
[[proxies]]
name = "mc"
type = "tcp"
localPort = 25565
transport.proxyProtocolVersion = "v2"
```

**frps 的 frps.ini 或 frps.toml 不用动。**

至于如何选择 v1 和 v2，你需要根据对应服务器对 PROXY protocol 的支持情况进行选择。例如 Paper 服务端目前只支持 v2。

在配置完 frp 后，记得将 Paper 配置文件中的协议支持打开：

```yaml
# config/paper-global.yaml
proxies:
    proxy-protocol: true # 从 false 改为 true
```

这样配置会使你的服务器仅接受来自 frp 的连接。

如果你有特殊需求，需要同时支持直连和 PROXY protocol 的话，请安装 [HAProxyDetector](https://github.com/andylizi/haproxy-detector) 插件来解决。

对于较高的版本，请使用 [HaHaWTH 的 fork 版本](https://github.com/HaHaWTH/HAProxy-Detector)。
