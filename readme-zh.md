# kiss-or-slap

[![npm version](https://img.shields.io/npm/v/kiss-or-slap)](https://www.npmjs.com/package/kiss-or-slap)
[![MIT license](https://img.shields.io/npm/l/kiss-or-slap)](LICENSE)

直接点选前端元素，留下评价，再把精确的修改提示词交给 coding agent。

[在线体验](https://tree-lancer.github.io/kiss-or-slap/) · [English](README.md)

## 功能

- 点击 **kiss ♥ or slap**，页面变暗后选择元素；用 ↑ / ↓ 切换父子层级。
- 点 ❤️ 或 👎，或输入评论后按 Enter。可以连续选择，直到点击底部的 ×。
- 在小本本里修改或删除评价，点击 **Copy prompt** 复制给 coding agent。反馈保存在浏览器本地存储中。

## 安装

```sh
npm install -D kiss-or-slap
```

只在开发环境加载。Vite 项目（React、Vue、Svelte 或普通 HTML）可在入口文件加入：

```js
if (import.meta.env.DEV) {
  import('kiss-or-slap').then(({ mount }) => mount());
}
```

其他框架使用对应的开发环境判断，并在客户端文档加载后调用 `mount()`。没有打包工具的 HTML 项目，可由开发服务器提供 `node_modules/kiss-or-slap/dist/kiss-or-slap.global.js`，再调用 `KissOrSlap.mount()`；发布页面不要包含该脚本。详细接入步骤见 [agent skill](skill/SKILL.md)。

## 许可证

[MIT](LICENSE)
