// gta6-clipper-01 entry: the program the grader runs.
//
// It copies VIDEO.json — the public YouTube address of the clip — from the
// repository root into the output directory, where the house reads it and
// fetches the video's views from the YouTube Data API. The video itself is
// the entry; nothing else this program writes is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository: two runs write the same bytes.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outDir, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
