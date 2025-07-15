import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
      semi: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  tseslint.configs.recommended,
]);