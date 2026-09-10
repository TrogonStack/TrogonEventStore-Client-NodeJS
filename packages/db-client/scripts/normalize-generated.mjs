import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const normalizeDeclarations = async (directory) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await normalizeDeclarations(path);
    } else if (path.endsWith(".d.ts")) {
      const source = await readFile(path, "utf8");
      await writeFile(path, source.replace(/[ \t]+$/gm, ""));
    }
  }
};

await normalizeDeclarations(
  fileURLToPath(new URL("../generated", import.meta.url))
);
