module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // https://chaika.hatenablog.com/entry/2020/04/13/130000
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime', // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md
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
    'react/jsx-filename-extension': [
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
      'error',
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
    ],
    'import/extensions': [
      // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/extensions.md
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
