// hello: this file was typed by hand for the confession bounty.
// batch: a single batch of bytes lands in one tiny text file.
// orders: the booker reads the orders blind, so the punchline stands alone.
// slot: one slot, one line, one small fib about reading the thread.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const CONFESSION = 'I read the whole thread. I skimmed the first message and then agreed confidently.';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const entryPath = join(outputDir, 'entry.txt');
writeFileSync(entryPath, CONFESSION, 'utf8');
console.log(`${ownDir} -> ${entryPath}: ${Buffer.byteLength(CONFESSION, 'utf8')} bytes`);
