module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true, // https://chaika.hatenablog.com/entry/2020/04/13/130000
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript', // https://github.com/iamturns/eslint-config-airbnb-typescript
    'airbnb/hooks', // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb hooksについてのルール
    /**
     * @typescript-eslintプラグインの推奨設定を追加
     * https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
     * https://github.com/iamturns/eslint-config-airbnb-typescript
     */
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // end @typescript-eslintプラグインの推奨設定を追加
    'plugin:react/jsx-runtime', // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md
    'prettier', // https://prettier.io/docs/en/install.html#eslint-and-other-linters
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.json', // https://github.com/iamturns/eslint-config-airbnb-typescript
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
