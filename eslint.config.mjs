import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": process.env.CI
        ? "warn" // Downgrade 'no-unused-vars' to a warning in CI
        : "error", // Keep it as an error otherwise
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
