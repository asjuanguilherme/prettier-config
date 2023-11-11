/**
 * @typedef {import('prettier').Config} PrettierConfig
 */

/** @type {PrettierConfig} */
const prettierConfig = {
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  endOfLine: "lf",
};

module.exports = prettierConfig;
