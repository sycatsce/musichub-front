import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    ignores: ["dist/**/*"],
  },
    {
    settings: {
      "react": {
        "version": "detect"
      }
    }
  },
  { files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },

  {
    ...tseslint.configs.recommended,
    files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },

  {
    ...pluginReact.configs.flat.recommended,
    files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
]);
