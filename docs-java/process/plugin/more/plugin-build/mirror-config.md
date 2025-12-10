---
title: 配置镜像源
sidebar_position: 3
---

# 配置镜像源

如果遇到依赖下载慢或无法下载的情况，可以通过配置镜像源来解决。

## Maven 镜像配置

### 1. 找到配置文件

Maven 的镜像配置在 `settings.xml` 文件中：

- Windows：`C:\Users\用户名\.m2\settings.xml`
- Linux/macOS：`~/.m2/settings.xml`

如果文件不存在，需要创建它。

### 2. 编辑配置文件

将以下内容添加到 `settings.xml` 中：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                             http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <mirrors>
        <!-- 阿里云公共仓库 -->
        <mirror>
            <id>aliyun</id>
            <mirrorOf>central</mirrorOf>
            <name>Aliyun Maven Central</name>
            <url>https://maven.aliyun.com/repository/public</url>
        </mirror>

        <!-- 阿里云 Spring 仓库 -->
        <mirror>
            <id>aliyun-spring</id>
            <mirrorOf>spring</mirrorOf>
            <name>Aliyun Spring</name>
            <url>https://maven.aliyun.com/repository/spring</url>
        </mirror>

        <!-- 阿里云 Google 仓库 -->
        <mirror>
            <id>aliyun-google</id>
            <mirrorOf>google</mirrorOf>
            <name>Aliyun Google</name>
            <url>https://maven.aliyun.com/repository/google</url>
        </mirror>
    </mirrors>
</settings>
```

### 3. 验证配置

1. 打开终端
2. 运行 `mvn help:effective-settings`
3. 检查输出中是否包含了配置的镜像

## Gradle 镜像配置

### 1. 项目级配置

在项目的 `build.gradle` 文件中添加：

```groovy
repositories {
    // 阿里云公共仓库
    maven {
        name = "Aliyun"
        url = 'https://maven.aliyun.com/repository/public'
    }

    // 阿里云 Spring 仓库
    maven {
        name = "Aliyun-Spring"
        url = 'https://maven.aliyun.com/repository/spring'
    }

    // 阿里云 Google 仓库
    maven {
        name = "Aliyun-Google"
        url = 'https://maven.aliyun.com/repository/google'
    }

    // 保留原有的 Maven 中央仓库（作为备用）
    mavenCentral()
}
```

### 2. 全局配置

1. 找到或创建 Gradle 的初始化脚本：
    - Windows：`%USERPROFILE%\.gradle\init.gradle`
    - Linux/macOS：`~/.gradle/init.gradle`

2. 添加以下内容：

```groovy
allprojects {
    repositories {
        def ALIYUN_REPOSITORY_URL = 'https://maven.aliyun.com/repository'
        def ALIYUN_JCENTER_URL = "${ALIYUN_REPOSITORY_URL}/public"
        def ALIYUN_GOOGLE_URL = "${ALIYUN_REPOSITORY_URL}/google"
        def ALIYUN_SPRING_URL = "${ALIYUN_REPOSITORY_URL}/spring"

        all { ArtifactRepository repo ->
            if (repo instanceof MavenArtifactRepository) {
                def url = repo.url.toString()
                if (url.startsWith('https://repo1.maven.org/maven2')) {
                    project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_JCENTER_URL."
                    remove repo
                }
                if (url.startsWith('https://jcenter.bintray.com')) {
                    project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_JCENTER_URL."
                    remove repo
                }
            }
        }

        maven { url ALIYUN_JCENTER_URL }
        maven { url ALIYUN_GOOGLE_URL }
        maven { url ALIYUN_SPRING_URL }
    }
}
```

### 3. Gradle Wrapper 配置

如果使用 Gradle Wrapper，可以创建 `gradle.properties` 文件配置镜像：

```properties
# 配置 Gradle Wrapper 使用阿里云镜像下载
systemProp.gradle.wrapperUrl=https://maven.aliyun.com/repository/gradle-dist/
```

## 常见问题

### 1. 镜像无法访问

- 检查网络连接
- 确认镜像地址是否正确
- 尝试使用其他镜像源

### 2. 依赖仍然下载缓慢

1. 清理本地缓存：
    - Maven：删除 `.m2/repository` 目录
    - Gradle：删除 `.gradle/caches` 目录
2. 重新构建项目

### 3. 特定依赖找不到

某些依赖可能不在镜像源中，需要：

1. 添加原始仓库
2. 或使用其他镜像源
3. 或直接从原始仓库下载
