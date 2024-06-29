import { defineConfig } from "vite";

export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      dynamicRequireTargets: [
        "node_modules/dynamic-require-concat/compiled/*.json",
        "node_modules/dynamic-require-template-string/compiled/*.json",
      ],
    },
  },
});
