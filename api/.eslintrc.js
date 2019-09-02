module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    // Special ESLint rules or overrides go here.
  },
  root: true
};
