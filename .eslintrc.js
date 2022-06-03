module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // https://chaika.hatenablog.com/entry/2020/04/13/130000
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier', // https://prettier.io/docs/en/install.html#eslint-and-other-linters
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // https://ja.reactjs.org/docs/hooks-rules.html#eslint-plugin
    'react-hooks/exhaustive-deps': 'warn',
  },
};
