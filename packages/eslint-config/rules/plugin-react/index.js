/**
 * React Plugin Rules
 * https://github.com/yannickcr/eslint-plugin-react
 */

module.exports = {
  globals: {
    React: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: ['eggdev/rules/plugin-react/jsx', 'eggdev/rules/plugin-react/react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
