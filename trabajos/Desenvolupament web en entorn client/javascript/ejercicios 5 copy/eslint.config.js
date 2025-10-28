// eslint.config.js
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "module", ecmaVersion: "latest" },
    rules: {
      "no-var": "error",
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  }
];
