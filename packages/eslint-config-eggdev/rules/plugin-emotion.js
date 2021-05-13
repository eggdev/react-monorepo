/**
 * Emotion Plugin Rules
 * https://github.com/emotion-js/emotion/tree/master/packages/eslint-plugin-emotion
 */

module.exports = {
  plugins: ['emotion'],
  rules: {
    // Ensure styled is imported from @emotion/styled
    // https://github.com/emotion-js/emotion/blob/master/packages/eslint-plugin-emotion/docs/rules/import-from-emotion.md
    'emotion/import-from-emotion': 'off',

    // Ensure jsx from @emotion/core is imported
    // https://github.com/emotion-js/emotion/blob/master/packages/eslint-plugin-emotion/docs/rules/jsx-import.md
    'emotion/jsx-import': 'off',

    // Ensure vanilla emotion is not using
    // https://github.com/emotion-js/emotion/blob/master/packages/eslint-plugin-emotion/docs/rules/no-vanilla.md
    'emotion/no-vanilla': 'off',

    // Ensure styled is imported from @emotion/styled
    // https://github.com/emotion-js/emotion/blob/master/packages/eslint-plugin-emotion/docs/rules/styled-import.md
    'emotion/styled-import': 'off',

    // Choose between styles written as strings or objects
    // https://github.com/emotion-js/emotion/blob/master/packages/eslint-plugin-emotion/docs/rules/syntax-preference.md
    'emotion/syntax-preference': ['error', 'string'],
  },
};
