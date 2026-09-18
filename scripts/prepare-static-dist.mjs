import { cp, mkdir, readdir, rename, rm } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const clientDir = path.join(distDir, "client");
const serverDir = path.join(distDir, "server");

for (const entry of await readdir(clientDir, { withFileTypes: true })) {
  await cp(path.join(clientDir, entry.name), path.join(distDir, entry.name), {
    recursive: true,
    force: true,
  });
}

await rm(clientDir, { recursive: true, force: true });
await rm(serverDir, { recursive: true, force: true });
await rm(path.join(distDir, "index.html"), { force: true });
await rename(path.join(distDir, "_shell.html"), path.join(distDir, "index.html"));

await mkdir(distDir, { recursive: true });
console.log("Static deployment files prepared in dist/");