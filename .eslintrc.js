module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': ['warn', { allow: ['error', 'info'] }],
    'arrow-parens': 'off',
    'space-before-function-paren': 'off',
    'prefer-template': 'error',
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true,
      },
    ],
    'object-shorthand': 'warn',
    'no-unused-vars': 'off',
    camelcase: 'off',
  },
}
