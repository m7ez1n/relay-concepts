module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'plugin:react/recommended', '@typescript-eslint', 'plugin:prettier/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:relay/recommended'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off', // conflicts with prettier
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/named': 'off',
    'no-console': 'error',
    'react/prop-types': 'off',
    'import/first': 'warn',
    'import/namespace': ['error', { allowComputed: true }],
    'import/no-duplicates': 'error',
    'import/order': ['error', { 'newlines-between': 'always-and-inside-groups' }],
    'import/no-cycle': 'error',
    'import/no-self-import': 'warn',
    'import/extensions': ['off', 'never', { ts: 'never' }],
    'relay/graphql-syntax': 'error',
    'relay/compat-uses-vars': 'warn',
    'relay/graphql-naming': 'error',
    'relay/generated-flow-types': 'warn',
    'relay/no-future-added-value': 'warn',
    'relay/unused-fields': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/camelcase': ['off', { ignoreDestructuring: true }],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'eslint-import-resolver-typescript': true,
    },
  },
};
