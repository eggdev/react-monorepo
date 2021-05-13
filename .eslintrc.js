module.exports = {
  extends: ['eslint-config-eggdev'],
  rules: {
    // conflicts with monorepos and workspaces
    'import/no-extraneous-dependencies': 'off',
    // unnecessary for packages rely on exporting
    'import/no-unused-modules': 'off',
  },
  root: true,
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'test'],
      },
    },
  },
};
