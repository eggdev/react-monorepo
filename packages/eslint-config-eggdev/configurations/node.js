module.exports = {
  env: {
    node: true,
  },
  extends: ['eggdev/configurations/base'],
  plugins: ['import'],
  rules: {
    // Ensure imports point to a file/module that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: true,
        commonjs: true,
      },
    ],
  },
};
