// @ts-check
const eslint = require("@eslint/js");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const angular = require("@angular-eslint/eslint-plugin");
 
module.exports = [
  {
    // TypeScript file linting configuration
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@angular-eslint": angular,
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],

      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
      "quotes": ["error", "single"],
 
      // Type-aware linting rules
      "@typescript-eslint/prefer-optional-chain": "error",
 
      // General code quality rules
      "no-unreachable": "error",
      "no-constant-condition": "error",
      "no-empty": "error",
      "no-self-compare": "error",
      "no-useless-return": "error",
      "no-unused-expressions": "error",
      "consistent-return": "error",
      "no-unreachable-loop": "error",
    },
  },
 
];