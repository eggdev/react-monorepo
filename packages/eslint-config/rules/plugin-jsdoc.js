/**
 * JSDoc Plugin Rules
 * https://github.com/gajus/eslint-plugin-jsdoc
 */

module.exports = {
  plugins: ['jsdoc'],
  rules: {
    // Checks the `@access` tags
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access
    'jsdoc/check-access': 'warn', // Recommended

    // Reports invalid alignment of JSDoc block asterisks
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
    'jsdoc/check-alignment': 'warn', // Recommended

    // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples
    'jsdoc/check-examples': 'off',

    // Reports invalid padding inside JSDoc blocks
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation
    'jsdoc/check-indentation': 'off',

    // Reports invalid alignment of JSDoc block lines.
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment
    'jsdoc/check-line-alignment': 'off',

    // Ensures that parameter names in JSDoc match those in the function declaration
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names
    'jsdoc/check-param-names': 'warn', // Recommended

    // Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names
    'jsdoc/check-property-names': 'warn', // Recommended

    // Reports against syntax not encouraged for the mode
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax
    'jsdoc/check-syntax': 'off',

    // Reports invalid block tag names
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names
    'jsdoc/check-tag-names': 'warn', // Recommended

    // Reports invalid types
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types
    'jsdoc/check-types': 'warn', // Recommended

    // This rule checks the values for a handful of tags
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values
    'jsdoc/check-values': 'warn', // Recommended

    // Expects the specific tags to be empty of any content
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags
    'jsdoc/empty-tags': 'warn', // Recommended

    // Reports an issue with any non-constructor function using `@implements`
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-implements-on-classes
    'jsdoc/implements-on-classes': 'warn', // Recommended

    // Enforces a regular expression pattern on descriptions
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description
    'jsdoc/match-description': 'off',

    // Enforces a consistent padding of the block description
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description
    'jsdoc/newline-after-description': 'warn', // Recommended

    // This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-bad-blocks
    'jsdoc/no-bad-blocks': 'off',

    // This rule reports defaults being used on the relevant portion of `@param` or `@default`
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-defaults
    'jsdoc/no-defaults': 'off',

    // This rule reports types being used on `@param` or `@returns`
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types
    'jsdoc/no-types': 'off',

    // Checks that types in jsdoc comments are defined
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types
    'jsdoc/no-undefined-types': 'warn', // Recommended

    // Requires that all functions have a description
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description
    'jsdoc/require-description': 'warn',

    // Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence
    'jsdoc/require-description-complete-sentence': 'off',

    // Requires that all functions have examples
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example
    'jsdoc/require-example': 'off',

    // Checks that all files have a `@file`, `@fileoverview`, or `@overview` tag
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview
    'jsdoc/require-file-overview': 'off',

    // Requires (or disallows) a hyphen before the `@param` description
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description
    'jsdoc/require-hyphen-before-param-description': 'off',

    // Checks for presence of jsdoc comments, on class declarations as well as functions
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc
    'jsdoc/require-jsdoc': 'warn', // Recommended

    // Requires that all function parameters are documented
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param
    'jsdoc/require-param': 'warn', // Recommended

    // Requires that each `@param` tag has a description value
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description
    'jsdoc/require-param-description': 'warn', // Recommended

    // Requires that all function parameters have names
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name
    'jsdoc/require-param-name': 'warn', // Recommended

    // Requires that each `@param` tag has a type value
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type
    'jsdoc/require-param-type': 'warn', // Recommended

    // Requires that all `@typedef` and `@namespace` tags have `@property`
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property
    'jsdoc/require-property': 'warn', // Recommended

    // Requires that each `@property` tag has a description value
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-description
    'jsdoc/require-property-description': 'warn', // Recommended

    // Requires that all function `@property` tags have names.
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name
    'jsdoc/require-property-name': 'warn', // Recommended

    // Requires that each `@param `tag has a `type` value.
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-type
    'jsdoc/require-property-type': 'warn', // Recommended

    // Requires that returns are documented
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns
    'jsdoc/require-returns': 'warn', // Recommended

    // Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check
    'jsdoc/require-returns-check': 'warn', // Recommended

    // Requires that the `@returns` tag has a description value
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description
    'jsdoc/require-returns-description': 'warn', // Recommended

    // Requires that `@returns` tag has `type` value
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type
    'jsdoc/require-returns-type': 'warn', // Recommended

    // Requires all types to be valid `JSDoc`, `Closure`, or `TypeScript` compiler types without syntax errors
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types
    'jsdoc/valid-types': 'warn', // Recommended
  },
};
