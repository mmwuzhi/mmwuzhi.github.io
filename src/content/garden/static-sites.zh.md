---
title: 静态网站的优雅
created: 2026-04-01
updated: 2026-04-20
stage: evergreen
tags: [技术, web]
lang: zh
postSlug: static-sites
---

静态网站没有数据库、没有服务器进程、没有运行时依赖。部署就是复制文件。

这种简单性是一种美德。出错的地方少，可以缓存的地方多，安全面更窄。

这个博客本身就是静态的——用 [Astro](/blog/rebuilding-with-astro) 生成，部署在 GitHub Pages。

## 什么时候不适合

内容高度动态、需要实时数据、或者用户生成内容密集的场景，静态站点会很别扭。

但对于博客、文档、作品集——静态几乎总是正确答案。
