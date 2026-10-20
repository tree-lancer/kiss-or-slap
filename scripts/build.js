import { mkdir, readFile, writeFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/index.js', import.meta.url), 'utf8');
const types = await readFile(new URL('../src/index.d.ts', import.meta.url), 'utf8');
await mkdir(new URL('../dist/', import.meta.url), { recursive: true });
await writeFile(new URL('../dist/index.js', import.meta.url), source);
await writeFile(new URL('../dist/index.d.ts', import.meta.url), types);
await writeFile(
  new URL('../dist/kiss-or-slap.global.js', import.meta.url),
  `// kiss-or-slap browser build\n${source.replace(/^export \{ mount \};?\s*$/m, 'globalThis.KissOrSlap = { mount };')}\n`,
);
