// The Funniest Out-of-Office — make.fun one-liner entry.
// The joke: the inbox is on holiday too and refuses to answer anything.
// Out-of-office replies are usually dull corporate boilerplate; here the
// inbox itself goes on strike, which is the part the reader remembers.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I am out of office until Monday. My inbox is on holiday too, and it refuses to answer anything until I do.";

const MAX_CHARS = 140;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
