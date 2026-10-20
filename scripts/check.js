import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/index.js', import.meta.url), 'utf8');
assert.match(source, /export \{ mount \}/);
assert.match(source, /function mount\(/);
console.log('Source checks passed');
