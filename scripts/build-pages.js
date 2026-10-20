import { mkdir, readFile, copyFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const html = await readFile(new URL('playground/index.html', root), 'utf8');
const source = "import { mount } from '../src/index.js';";
if (!html.includes(source)) throw new Error('Playground entry import changed');

const output = new URL('site/', root);
await mkdir(output, { recursive: true });
await writeFile(new URL('index.html', output), html.replace(source, "import { mount } from './kiss-or-slap.js';"));
await copyFile(new URL('dist/index.js', root), new URL('kiss-or-slap.js', output));
await writeFile(new URL('.nojekyll', output), '');
