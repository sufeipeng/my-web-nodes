module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es2021: true
  },
  extends: [
    /* "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended" */
    'plugin:vue/vue3-strongly-recommended', // vue3
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'eol-last': 0,
    semi: [1, 'always', { omitLastInOneLineBlock: true }],
    'vue/multi-word-component-names': ['error', {
      ignores: ['index', 'Index']// 需要忽略的组件名
    }]
  }
};