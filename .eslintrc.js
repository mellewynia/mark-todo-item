
module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    eqeqeq: ['error', 'smart'],
    curly: 'error',
    indent: ['error', 2],
    'no-multi-spaces': 'warn',
    'no-bitwise': 'warn'
  }
};
