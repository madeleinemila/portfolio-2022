module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/strict",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: ["./tsconfig.json"] },
  plugins: ["jsx-a11y", "@typescript-eslint"],
  root: true,
  rules: {
    "no-console": "error",
    "no-duplicate-imports": "error",
    "no-unused-expressions": "error",
    "default-case": "error",
    eqeqeq: "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "@typescript-eslint/no-floating-promises": "error",
  },
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["./**/*.js"],
    },
  ],
};
