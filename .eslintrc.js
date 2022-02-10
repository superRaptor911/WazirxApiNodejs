module.exports = {
  env: {
    commonjs: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'prettier/prettier': 'warn',
    'no-unused-vars': [
      'warn',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: false},
    ],
  },
};
