---
title: FAQ
sidebar_position: 7
---

# FAQ

## 无法登录，我的验证码设置已损坏

将 `core/config.php` 中的 `captcha` 设置为 `false`。

## 我不记得我的管理员密码了，如何更改？

在你的数据库中，找到 `nl2_users` 表，并将你的用户密码更改为 `$2y$13$Q1NRQCPQNhs4EihdJSidQ.31bw2CTPSH03QrXd9EOH3sYuni1fbSu`，然后将 `pass_method` 更改为 `default`。

之后，你就可以使用密码“123456”登录了。
