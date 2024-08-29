module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",

    // Vue
    "vue/multi-word-component-names": "off"
  }
};