/**
 * React Plugin Rules - JSX
 * https://github.com/yannickcr/eslint-plugin-react
 */

module.exports = {
  rules: {
    // Enforce boolean attributes notation in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': [
      'error',
      'never',
      {
        always: [],
      },
    ],

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': 'off', // disabled for prettier

    // Validate closing bracket location in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': 'off', // disabled for prettier

    // Validate closing tag location in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': 'off', // disabled for prettier

    // Enforce curly braces or disallow unnecessary curly braces in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'never',
        props: 'never',
      },
    ],

    // Enforce consistent line breaks inside jsx curly (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': 'off', // disabled for prettier

    // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': 'off', // disabled for prettier

    // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': 'off', // disabled for prettier

    // Restrict file extensions that may contain JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],

    // Enforce position of the first prop in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': 'off', // disabled for prettier

    // Enforce shorthand or standard form for React fragments (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],

    // Validate JSX indentation (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': 'off', // disabled for prettier

    // Validate props indentation in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': 'off', // disabled for prettier

    // Validate JSX has key prop when in array or iterator
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Validate JSX maximum depth
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 'off',

    // Limit maximum of props on a single line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': 'off', // disabled for prettier

    // Prevent usage of .bind() and arrow functions in JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],

    // Prevent comments from being inserted as text nodes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',

    // Prevent duplicate props in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],

    // Prevent usage of unwrapped JSX strings
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': 'off',

    // Forbid javascript: URLs
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': 'off',

    // Prevent usage of unsafe target='_blank'
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always',
      },
    ],

    // Disallow undeclared variables in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Disallow unnecessary fragments (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': 'off',

    // Limit to one expression per line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'off', // disabled for prettier

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Disallow multiple spaces between inline JSX props (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 'off', // disabled for prettier

    // Prevent JSX prop spreading
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'enforce',
        exceptions: [],
        explicitSpread: 'ignore',
        html: 'enforce',
      },
    ],

    // Enforce default props alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],

    // Enforce props alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': 'off',

    // Validate spacing before closing bracket in JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    'react/jsx-space-before-closing': 'off', // disabled for prettier

    // Validate whitespace in and around the JSX opening and closing brackets (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': 'off', // disabled for prettier

    // Prevent React to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multilines JSX (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': 'off', // disabled for prettier
  },
};
