import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

export const projectRoot = fileURLToPath(new URL("../../", import.meta.url));
const require = createRequire(import.meta.url);

// Read the same typed records used by the app, without a second data inventory.
export function createDataLoader() {
  const cache = new Map();
  const load = (file) => {
    const path = resolve(projectRoot, file);
    if (cache.has(path)) return cache.get(path);
    const source = readFileSync(path, "utf8");
    if (extname(path) === ".json") return JSON.parse(source);
    const loadedModule = { exports: {} };
    cache.set(path, loadedModule.exports);
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
      fileName: path,
    }).outputText;
    const localRequire = (specifier) => {
      if (!specifier.startsWith("@/")) return require(specifier);
      const relative = specifier.slice(2);
      return load(extname(relative) ? relative : `${relative}.ts`);
    };
    new Function("require", "module", "exports", compiled)(localRequire, loadedModule, loadedModule.exports);
    cache.set(path, loadedModule.exports);
    return loadedModule.exports;
  };
  return load;
}
