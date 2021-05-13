/**
 * Import Plugin Rules
 * https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
  extends: [
    'eggdev/rules/plugin-import/helpful-warnings',
    'eggdev/rules/plugin-import/module-systems',
    'eggdev/rules/plugin-import/static-analysis',
    'eggdev/rules/plugin-import/style',
  ],
  overrides: [
    {
      files: [
        'setupTests.js', // common filename for configuring testing frameworks
        '.*rc.js', // common config files: .eslintrc.js, .prettierrc.js, etc
        '*.config.js', // common config files: babel.config.js, webpack.config.js, etc
        '*.stories.js', // storybook files
        '*.spec.js',
        '*.test.js',
      ],
      rules: {
        'import/no-unused-modules': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
