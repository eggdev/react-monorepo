const prettierConfig = require('@eggdev/prettier-config');

/**
 * Storybook uses an older version of prettier for its source-loader
 * which does not have the following rule implemented.
 *
 * TODO: Remove this rule from the prettier-config
 */
delete prettierConfig.embeddedLanguageFormatting;

module.exports = prettierConfig;
