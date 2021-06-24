module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@routes", "./src/routes"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
