import { cp, mkdir, readdir, rename, rm } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const clientDir = path.join(distDir, "client");
const serverDir = path.join(distDir, "server");

await rm(path.join(distDir, "assets"), { recursive: true, force: true });

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

const staticRoutes = [
  "about",
  "childrens-books",
  "contact",
  "editing",
  "ghostwriting",
  "illustration",
  "marketing",
  "privacy",
  "privacy-choices",
  "publishing",
  "signup",
  "terms",
];

for (const route of staticRoutes) {
  const routeDir = path.join(distDir, route);
  await mkdir(routeDir, { recursive: true });
  await cp(path.join(distDir, "index.html"), path.join(routeDir, "index.html"), {
    force: true,
  });
}

await cp(path.join(distDir, "index.html"), path.join(distDir, "404.html"), {
  force: true,
});

console.log("Static deployment files prepared in dist/");