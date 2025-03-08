// eslint.config.cjs
const prettierConfig = require('./.prettierrc.cjs');

module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      html: require('eslint-plugin-html'),
    },
    rules: {
      'no-shadow': 'error',
      'prettier/prettier': ['error', prettierConfig],
    },
    ignores: ['node_modules/', 'dist/'],
  },
  {
    files: ['*.html', '*.hbs'],
    processor: 'html',
  },
];
