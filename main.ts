// make.fun bounty entry — news-image-20261123
// Copies the pre-rendered 1024x1024 front page (entry.png) to the output dir.
// Node 22 stdlib only. Usage: MAKEFUN_OUTPUT_DIR=<dir> node main.ts

import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const src = new URL('entry.png', import.meta.url);
if (!existsSync(src)) {
  throw new Error(`source image not found: ${src.pathname}`);
}
copyFileSync(src, dest);
console.log(`wrote ${dest}`);
