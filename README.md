# kiss-or-slap

[![npm version](https://img.shields.io/npm/v/kiss-or-slap)](https://www.npmjs.com/package/kiss-or-slap)
[![MIT license](https://img.shields.io/npm/l/kiss-or-slap)](LICENSE)

Point at a frontend element, react to it, and give your coding agent a precise prompt.

[Try the live playground](https://tree-lancer.github.io/kiss-or-slap/) · [中文文档](readme-zh.md)

## What it does

- Click **kiss ♥ or slap** to dim the page and pick an element. Use ↑ / ↓ to move between nested elements.
- React with ❤️ or 👎, or type a comment and press Enter. Keep picking until you click the × at the bottom.
- Review, edit, or delete feedback in the notebook, then **Copy prompt** for your coding agent. Feedback stays in your browser's local storage.

## Install

```sh
npm install -D kiss-or-slap
```

Load it only in development. For Vite based React, Vue, Svelte, or plain HTML projects:

```js
if (import.meta.env.DEV) {
  import('kiss-or-slap').then(({ mount }) => mount());
}
```

Put this near your app entry point. In other frameworks, use their development check and call `mount()` on the client after the document exists. For an HTML site without a bundler, serve `node_modules/kiss-or-slap/dist/kiss-or-slap.global.js` from your development server and call `KissOrSlap.mount()`; keep that script out of the published site. The included [agent skill](skill/SKILL.md) gives integration instructions.

## License

[MIT](LICENSE)
