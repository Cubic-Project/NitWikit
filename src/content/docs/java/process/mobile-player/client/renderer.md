---
title: 渲染器
---

| 名字                                                                        | 作者              | 支持版本 |
| --------------------------------------------------------------------------- | ----------------- | -------- |
| Angle                                                                       | Google            | 1.17+    |
| GL4ES                                                                       | ptitSeb           | ?        |
| GL4ES+                                                                      | Swung 0x48        | ?        |
| Krypton Wrapper                                                             | BZLZHH            | ?        |
| [MobileGlues](https://github.com/MobileGL-Dev/MobileGlues-release/releases) | Swung0x48 BZLZHH  | ?        |
| [MobileGL](https://github.com/MobileGL-Dev/MobileGL)                        | Swung0x48 BZLZHH  | ?        |
| LTW                                                                         | PojavLauncherTeam | ?        |
| Mesa(Zink,VirGL,FreedReno,Panforst)                                         | Brian Paul        | ?        |

你可以在 [FCLRendererPlugin](https://github.com/ShirosakiMio/FCLRendererPlugin/releases/tag/Renderer) 下载插件，并且使用他们

注：MobileGL 还在开发阶段，如果需要体验请你构建它

骁龙支持 Zink 需要刷驱动

不建议当使用钠（Sodium）时使用 Angle 和 GL4ES（+）

当你使用 1.17 以下时建议使用 GL4ES（+），当你遇到渲染错误时 Mesa 是个好去处

1.17 以上建议使用 LTW 或 MobileGlues
