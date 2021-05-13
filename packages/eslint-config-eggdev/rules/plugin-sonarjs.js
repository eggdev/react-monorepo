/**
 * SonarJS Plugin Rules
 * https://github.com/SonarSource/eslint-plugin-sonarjs
 */

module.exports = {
  plugins: ['sonarjs'],
  rules: {
    // Cognitive Complexity of functions should not be too high
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/cognitive-complexity.md
    'sonarjs/cognitive-complexity': 'error',

    // "switch" statements should not have too many "case" clauses
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/max-switch-cases.md
    'sonarjs/max-switch-cases': 'error',

    // All branches in a conditional structure should not have exactly the same implementation
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-all-duplicated-branches.md
    'sonarjs/no-all-duplicated-branches': 'error',

    // Collapsible "if" statements should be merged
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-collapsible-if.md
    'sonarjs/no-collapsible-if': 'error',

    // Collection sizes and array length comparisons should make sense
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-collection-size-mischeck.md
    'sonarjs/no-collection-size-mischeck': 'error',

    // String literals should not be duplicated
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-duplicate-string.md
    'sonarjs/no-duplicate-string': 'off',

    // Two branches in a conditional structure should not have exactly the same implementation
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-duplicated-branches.md
    'sonarjs/no-duplicated-branches': 'error',

    // Collection elements should not be replaced unconditionally
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-element-overwrite.md
    'sonarjs/no-element-overwrite': 'error',

    // Function calls should not pass extra arguments
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-extra-arguments.md
    'sonarjs/no-extra-arguments': 'error',

    // Related "if/else if" statements should not have the same condition
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-identical-conditions.md
    'sonarjs/no-identical-conditions': 'error',

    // Identical expressions should not be used on both sides of a binary operator
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-identical-expressions.md
    'sonarjs/no-identical-expressions': 'error',

    // Functions should not have identical implementations
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-identical-functions.md
    'sonarjs/no-identical-functions': 'error',

    // Boolean checks should not be inverted
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-inverted-boolean-check.md
    'sonarjs/no-inverted-boolean-check': 'error',

    // Loops with at most one iteration should be refactored
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-one-iteration-loop.md
    'sonarjs/no-one-iteration-loop': 'error',

    // Boolean literals should not be redundant
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-redundant-boolean.md
    'sonarjs/no-redundant-boolean': 'error',

    // Jump statements should not be redundant
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-redundant-jump.md
    'sonarjs/no-redundant-jump': 'error',

    // Conditionals should start on new lines
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-same-line-conditional.md
    'sonarjs/no-same-line-conditional': 'error',

    // "switch" statements should have at least 3 "case" clauses
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-small-switch.md
    'sonarjs/no-small-switch': 'error',

    // Collection and array contents should be used
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-unused-collection.md
    'sonarjs/no-unused-collection': 'error',

    // The output of functions that don't return anything should not be used
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-use-of-empty-return-value.md
    'sonarjs/no-use-of-empty-return-value': 'error',

    // "catch" clauses should do more than rethrow
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/no-useless-catch.md
    'sonarjs/no-useless-catch': 'error',

    // Local variables should not be declared and then immediately returned or thrown
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/prefer-immediate-return.md
    'sonarjs/prefer-immediate-return': 'error',

    // Object literal syntax should be used
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/prefer-object-literal.md
    'sonarjs/prefer-object-literal': 'error',

    // Return of boolean expressions should not be wrapped into an "if-then-else" statement
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/prefer-single-boolean-return.md
    'sonarjs/prefer-single-boolean-return': 'error',

    // A "while" loop should be used instead of a "for" loop
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/HEAD/docs/rules/prefer-while.md
    'sonarjs/prefer-while': 'error',
  },
};
