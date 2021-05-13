module.exports = {
  env: {
    es2020: true,
    jest: true,
  },
  extends: [
    'eggdev/rules/eslint/best-practices',
    'eggdev/rules/eslint/es2015',
    'eggdev/rules/eslint/errors',
    'eggdev/rules/eslint/strict',
    'eggdev/rules/eslint/style',
    'eggdev/rules/eslint/variables',
    'eggdev/rules/plugin-sonarjs',
    'eggdev/rules/plugin-prettier',
  ],
};
