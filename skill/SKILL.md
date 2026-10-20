---
name: kiss-or-slap
description: Add the kiss-or-slap visual feedback tool to a frontend project's development environment, including framework apps and plain HTML sites.
---

# Integrate kiss-or-slap

Install `kiss-or-slap` as a development dependency. Load it only in development, near the app entry point, then verify the production output does not include the tool. Do not modify individual components or add element annotations just for this tool.

## Bundled apps (Vite, Vue, React, Svelte, etc.)

```js
if (import.meta.env.DEV) {
  import('kiss-or-slap').then(({ mount }) => mount());
}
```

Use the framework's equivalent development check if `import.meta.env.DEV` is unavailable. In a server-rendered app, run `mount()` only on the client after the document exists.

## Plain HTML without a bundler

Build this package with `npm run build`, then serve `dist/kiss-or-slap.global.js` from the project's *development server only*. Add this to the development HTML:

```html
<script src="/kiss-or-slap.global.js" defer></script>
<script defer>window.addEventListener('DOMContentLoaded', () => KissOrSlap.mount())</script>
```

If development and production use the same HTML source, configure the development server to inject those tags. A static HTML file has no built-in environment switch. Do not publish the tags or the global script with the production site.

## Result

Open the page, click the bottom-right `kiss ♥ or slap` button, pick an element, and save Like, Dislike, or Comment. Use Copy prompt to hand the feedback to the coding agent.
