---
title: 用 AI 把这个网站重新搞了一遍
date: 2026-04-25
category: 技术
lang: zh
postSlug: rebuilding-with-ai
---

这几天想试试 vibe coding 是什么感觉，就用 Claude Code 从头写了这个网站。

不只是「让 AI 帮我写代码」，而是从更早的地方开始：网站要做成什么样、有哪些功能、叫什么名字，全都是跟 AI 来回商量定下来的。最后选了 Astro + 纯 CSS，三语支持（中文、英文、日文），加上 Blog、Garden、Now 这几个板块。名字叫 Lacuna——一个表示「缺失」或「空白」的拉丁词，是 AI 给的几个候选里我最喜欢的一个。

功能加得差不多之后，发现一堆东西坏了。分类筛选点了没反应，右上角的主题切换按了也没用，切换语言之后 dark mode 会被重置，Garden 的 tag 过滤同样失效。排查下来，根子上是一个判断失误：这是个纯静态网站，但有些逻辑是按 SSR 的思路写的，在 build 时就把数据固化了，跑起来当然不对。

修 bug 的过程比我预想的有意思——遇到了几个之前没注意过的细节。

## Astro 的 View Transitions 和 `<script>` 的关系

这个网站用了 Astro 的 View Transitions，页面之间跳转时 `<html>` 不会完整重建，而是局部替换。这带来一个问题：我在 `<head>` 里用 JavaScript 给 `<html>` 加了 `data-theme` 属性来控制深色模式，但每次导航之后这个属性会消失——因为 Astro 把整个 `<html>` 元素换掉了。

解决方法是监听 `astro:before-swap` 事件，在替换发生之前把旧文档的属性复制到新文档里：

```js
document.addEventListener('astro:before-swap', (e) => {
  const theme = document.documentElement.getAttribute('data-theme');
  if (theme) e.newDocument.documentElement.setAttribute('data-theme', theme);
});
```

另一个坑：Astro 的 `<script>` 标签默认是 ES module，在整个 session 里只执行一次。所以如果你在里面给按钮绑了事件，页面导航之后 DOM 被替换，绑定就断了。正确姿势是监听 `astro:page-load`，每次导航后重新绑一遍。这是框架的设计，不是 bug，但不注意的话很难发现。

还有一个更隐蔽的：`<script is:inline>` 如果写在顶层 layout 组件的外面，Astro 会把它放到 `</html>` 后面。浏览器能执行，但 View Transitions 做页面替换时不会重新跑这段代码。搜索功能折腾了好几次才找到这个原因。

## Scoped CSS 的边界

Astro 的组件 CSS 是局部作用域的，会给选择器自动加上一个 `data-astro-cid-*` 属性。问题是，如果你写：

```css
[data-theme='dark'] .icon-light { display: none; }
```

Astro 会把这条规则变成：

```css
[data-theme='dark'][data-astro-cid-xxx] .icon-light[data-astro-cid-xxx] { display: none; }
```

但 `data-theme` 是挂在 `<html>` 上的，`<html>` 不带那个 scope 属性，所以匹配不上，规则永远不生效。改成 `:global([data-theme='dark'])` 才行。这种问题第一次遇到的时候确实摸不着头脑。

## 关于用 AI 写代码这件事

有人说用 AI 写代码会让人变笨，因为不自己想了。我觉得这个说法不完全准确——至少在这几天的经验里，我从来没觉得自己在「偷懒」。debug 的时候还是要理解问题在哪，改完还是要能看懂代码为什么这样写。AI 更像一个随叫随到的搭档：我来定方向和判断，它来跑腿和查文档。

当然也有 AI 自信地给出错误方案的时候。`/* @vite-ignore */` 那次就是，注释加上去了，但 Rollup 在 build 阶段找不到文件还是报 error，而不是 warning——AI 没注意到两者的区别。这种时候还是得自己多看一眼。

总的来说，这几天把网站的几个核心功能补上了：移动端的汉堡菜单、全站全文搜索（Pagefind）、以及博文的目录。加上把之前坏掉的东西都修了一遍，现在感觉能用了。

之后想写点实质性的内容进来。网站本身不是目的。
