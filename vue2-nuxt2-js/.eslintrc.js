module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "plugin:cypress/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: "always",
    "space-before-function-paren": false,
    "comma-dangle": "always",
    "no-lonely-if": false,
  },
};
