/**
 * Prettier Plugin Rules
 * https://github.com/prettier/eslint-plugin-prettier
 */

module.exports = {
  plugins: ['prettier'],
  rules: {
    // Ensure styled is imported from @emotion/styled
    // https://github.com/prettier/eslint-plugin-prettier#options
    'prettier/prettier': 'error',
  },
};
