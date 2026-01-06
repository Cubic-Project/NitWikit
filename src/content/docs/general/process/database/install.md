---
title: 安装
sidebar:
    order: 2
---

## Windows 直接安装

你可以选择直接下载安装包来安装，如果觉得麻烦，请看下面的 **使用工具安装** 或 **Linux 命令行安装**

:::tip

[搜狐 MySQL 镜像源](http://mirrors.sohu.com/mysql/MySQL-8.0/)

[阿里 MySQL 镜像源](https://mirrors.aliyun.com/mysql/)

:::

对于 Windows 用户，请下载 `.msi` 或 `zip` 的包，其中 `.msi` 是安装包，`.zip` 是绿色版，推荐下载 `.msi` 版本来安装

对于 MySQL 安装，请看这篇文章：[2024 年 MySQL 8.0 安装 配置 教程 最简易 (保姆级)](https://blog.csdn.net/m0_52559040/article/details/121843945)

在下载的时候请务必注意自己的系统、架构等是否与安装包上标的匹配

## Linux 命令行安装

本部分讲解在命令行中安装常见数据库的方式。本教程以 Ubuntu 24.04 系统为例

### MySQL

#### 安装

在 [官方网站](https://dev.mysql.com/downloads/repo/apt/) 页面下载 `mysql-apt-config_0.8.301_all.deb`

这个包是一个配置 APT 的 MySQL 仓库。安装 `mysql-apt-config` 后，用户可以选择想要安装的 MySQL 版本。

将文件传入服务器 `/opt` 目录下，输入以下指令安装：

```bash
dpkg -i mysql-apt-config_0.8.30-1_all.deb
```

![](_assets/linux/database/1.png)

安装完成后使用以下指令更新软件包列表：

```bash
sudo apt update
```

随后进行 MySQL Server (即 MySQL 服务) 的安装，输入以下指令安装 MySQL：

```bash
apt install mysql-community-server -y
```

![](_assets/linux/database/2.png)

MySQL 默认会自带随机密码，所以等待安装完成后需输入以下指令查看初始密码：

```bash
mysqld --initialize –console
```

![](_assets/linux/database/3.png)

红框部分就是初始密码，安装已经完毕，接下来启动并将 MySQL 设为开机自启动，分别输入：

```bash
systemctl start mysql
systemctl enable mysql
```

启动 MySQL 服务后，输入以下指令进入 MySQL 指令行：

```bash
mysql -uroot -p
```

按提示输入密码登录到 MySQL

![](_assets/linux/database/4.png)

输入修改密码指令：

```sql
ALTER user 'root'@'localhost' IDENTIFIED BY 'NewPassword';
```

将 NewPassword 修改为你自己设置的密码

**至此，MySQL 安装已经完成。**

#### 创建表

:::caution

以下的操作为 SQL 语句，在结尾处的 `;` 不能省略否则会报错。

:::

```sql
CREATE DATABASE IF NOT EXISTS XXX DEFAULT CHARACTER SET utf8mb4;
```

这里的 XXX 可以选择是你要使用数据库的插件名称也可以是自定义字符

#### 创建用户

```sql
CREATE USER 'UserName'@'%' IDENTIFIED BY 'Password';
```

#### 用户授权

```sql
GRANT ALL PRIVILEGES ON 数据库名称.* TO 'UserName'@'%';
```

:::tip

UserName 填写用户名，

`%` 代表所有 IP 地址，如果 Minecraft 服务端和数据库处于同一个服务器，建议改成 localhost 以增加安全性，

Password 填写用户的密码 (由于安全性设置，密码必须有大小写长度 8 位以上，并且默认关闭远程访问)

如果需要设置密码强度为低，开启远程访问等不安全的操作请自行百度，对于修改安全设置之后的数据库安全问题，本站概不负责

:::

### Redis

依次在终端输入以下指令，分别操作为安装依赖、下载 Redis、将安装包放在安装路径、更新软件包，安装下载好的 Redis：

```bash
apt install lsb-release curl gpg
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
apt update
apt install redis -y
```

安装完成后输入 `systemctl start redis-server`

![](_assets/linux/database/5.png)

至此安装完成，输入 `redis-cli` 即可进入命令行管理

![](_assets/linux/database/6.png)

:::tip

使用 `systemctl enable redis-server` 使 Redis 开机自启

![](_assets/linux/database/7.png)

:::

## 使用工具安装

我会告诉你 **我认为** 最简单的几种安装数据库的方法

### 小皮数据库

:::note

小皮数据库仅支持 Windows 系统

:::

<details>
  <summary>从官网下载和安装</summary>

![](_assets/1.png)

![](_assets/2.png)

![](_assets/3.png)

![](_assets/4.png)

![](_assets/5.png)

![](_assets/6.png)

</details>

<details>
  <summary>卸载 MySQL5 和安装 MySQL8</summary>

MySQL5 版本太低了，很多插件需要更高版本的，装 MySQL8 就够用了

![](_assets/7.png)

![](_assets/8.png)

</details>

<details>
  <summary>初次启动</summary>

安装好后在首页启动 MySQL

![](_assets/9.png)

更改 root 账户的密码

:::danger

不要设置过于简单的密码！

尤其是你打算把数据库开到公网，**绝对不要** 设置过于简单的密码！

**这真的很严重**

:::

![](_assets/10.png)

![](_assets/11.png)

然后你就可以建数据库了，建好之后把你填这里的信息填到插件的配置文件里

</details>

### 宝塔面板

:::note

宝塔面板支持 Windows 和 Linux 系统

:::

<details>
  <summary>从官网下载和安装</summary>

![](_assets/12.png)

![](_assets/13.png)

![](_assets/14.png)

![](_assets/15.png)

![](_assets/16.png)

![](_assets/17.png)

![](_assets/18.png)

![](_assets/19.png)

宝塔面板是必须要绑定账号的

按照提示去做

![](_assets/20.png)

全 x 掉，一个都不需要装

![](_assets/21.png)

</details>

<details>
  <summary>安装 MySQL</summary>

![](_assets/22.png)

![](_assets/23.png)

![](_assets/24.png)

</details>

### 1Panel 面板

:::caution

1Panel 面板目前仅支持 Linux 系统，不支持 Windows 系统

:::

<details>
  <summary>安装，配置面板</summary>

![](_assets/46.png)

![](_assets/47.png)

![](_assets/48.png)

![](_assets/49.png)

</details>

<details>
  <summary>安装 MySQL</summary>

![](_assets/50.png)

</details>
