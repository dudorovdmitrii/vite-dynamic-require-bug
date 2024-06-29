# vite dynamic-require bug in dev mode

[Issue](https://github.com/vitejs/vite/issues/17587)

## Steps to reproduce

```bash
npm ci
npm run move-folders-to-node_modules
npm run dev
```

## Problem

1. If a package in node_modules (dynamic-require-concat in this repository) has dynamic require with `.concat` like:

```ts
export function register() {
  var name = "en";
  return require("./compiled/".concat(name, ".json"));
}
```

then dev mode build breaks with error `Uncaught Error: Dynamic require of "./compiled/en.json" is not supported`

2. If a package in node_modules (dynamic-require-template-string in this repository) has dynamic require with template string like:

```ts
export function register() {
  var name = "en";
  return require(`./compiled/${name}.json`);
}
```

then it works

3. Plugins which didn't help:

[vite-require](https://github.com/vite-plugin/vite-require)

[@originjs/vite-plugin-commonjs](https://github.com/originjs/vite-plugins)

[@originjs/vite-plugin-require-context](https://www.npmjs.com/package/@originjs/vite-plugin-require-context)

4. For production mode it can be fixed:

```ts
{
   build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      dynamicRequireTargets: [
        "node_modules/dynamic-require-concat/compiled/*.json",
        "node_modules/dynamic-require-template-string/compiled/*.json",
      ],
    },
  },
}
```
