---
title: 压缩 & 混淆
sidebar_position: 3
---

# 压缩 & 混淆

为了让玩家更快的下载资源包 (并节省你的流量),你需要对资源包进行压缩

或者为了防止他人轻易的偷走你的资源包，你也需要对资源包进行混淆

:::tip[混淆的安全性]

就算你进行了最高强度的混淆，也不意味着你的材质包不会被偷走，只是难度变大了

:::

推荐使用 [PackSquash](https://packsquash.aylas.org/) 进行压缩和混淆，注意：**本部分内容仅限于 ZIP 层面的压缩 & 混淆**

## 下载

前往 [官网](https://packsquash.aylas.org/) 下载即可

## 使用

PackSquash 需要你在目录下创建配置文件 `packsquash.toml` 才可以使用

然后向文件中写入以下内容

```toml
pack_directory = 'C:\path\to\pack(填写你的资源包所在目录)'
```

然后在当前目录运行 `packsquash packsquash.toml` 即可

## 其他选项

:::tip

这并不是所有的选项，**只列出了一些** 对于新手有用的选项

同时简化了一些选项表达，完整版请参考 [GitHub Wiki](https://github.com/ComunidadAylas/PackSquash/wiki/Options-files)

:::

### 指定输出文件位置

```toml
output_file_path = 'C:\path\to\result\pack\zip\file\my_pack.zip'
```

### 压缩标准

```toml
zip_spec_conformance_level = 'pedantic'
```

默认取值为 `pedantic`，表示完全遵循 ZIP 文件规范，所有的查看和托管都可以识别

`disregard` 为加料模式，包括提取保护和改进的内部 ZIP 文件结构压缩，会获得更好的性能，非常推荐

:::warning

并不是所有的托管和查看程序都能识别 `disregard` 模式的 zip 文件

:::

### ZIP 混淆

```toml
size_increasing_zip_obfuscation = true
```

当使用`disregard`模式时，启用此选项将增加对生成的 ZIP
文件进行查看、提取或篡改的保护，这会略微增加其大小。此选项不影响是否添加 **不增加文件大小** 的保护，并且如果 ZIP 标准不提供保护，则没有任何影响

### 压缩保密性

```toml
percentage_of_zip_structures_tuned_for_obfuscation_discretion = 100
```

当此选项设置为 0（最小值）时，每个 ZIP 记录将优先存储以提高压缩性。相反，当设置为 100（最大值）时，每个 ZIP
记录将优先存储以提高保密性。其他值将结合提高保密性和压缩性。

### OGG 混淆

```toml
ogg_obfuscation = true
two_pass_vorbis_optimization_and_validation = true
```

如果开启该选项，生成的 Ogg 文件将会被破坏，使得它们在 Minecraft 之外难以播放

## FAQ

### ItemsAdder Armor 在使用 PackSquash 后无法正常工作

在配置文件中添加如下内容

```toml
['**/*?.{fsh,vsh,glsl}']
minify_shader = false

['**/textures/models/armor/*?.png']
image_data_compression_iterations = 0
skip_alpha_optimizations = true
color_quantization_target = 'none'
```

## 推荐配置文件

### 保护性

```toml
zip_spec_conformance_level = 'disregard'
size_increasing_zip_obfuscation = true
percentage_of_zip_structures_tuned_for_obfuscation_discretion = 100
```

### 压缩性

```toml
pack_directory = 'src'
output_file_path = 'resources.min.zip'
zip_spec_conformance_level = 'disregard'
zip_compression_iterations = 255
never_store_squash_times = true

['**/*?.png']
image_data_compression_iterations = 255
```
