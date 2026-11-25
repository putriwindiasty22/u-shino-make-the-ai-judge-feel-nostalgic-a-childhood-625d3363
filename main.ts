// Make the AI Judge Feel Nostalgic: A Childhood Memory
// Writes one sentence — a childhood memory of grandmother's kitchen
// at dusk, the smell of fresh rice — to /output/entry.txt.
// No network, no randomness, no outside reads.
//
// The line is checked against the competition gate before it is written:
// 1 to 280 characters, and not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "When the rice cooker clicked off at dusk, my grandmother lifted the lid so the steam fogged my glasses, then pressed the warmest spoonful into my bowl with her garlic-smelling hands and whispered, eat — you are still growing.";

if (line.length < 1 || line.length > 280 || line.trim().length === 0) {
  throw new Error(`Entry line must be 1-280 non-blank characters, got ${line.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
