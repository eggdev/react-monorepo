/**
 * JSX A11Y Plugin Rules
 * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
 */

module.exports = {
  plugins: ['jsx-a11y'],
  rules: {
    // Enforce all elements that require alternative text have meaningful information to relay back to end user
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/alt-text
    'jsx-a11y/alt-text': [
      'error',
      {
        'elements': ['img', 'object', 'area', 'input[type="image"]'],
        'img': [],
        'object': [],
        'area': [],
        'input[type="image"]': [],
      },
    ],

    // Enforce all anchors to contain accessible content
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-has-content
    'jsx-a11y/anchor-has-content': [
      'error',
      {
        components: [],
      },
    ],

    // Enforce all anchors are valid, navigable elements
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['to'],
      },
    ],

    // Enforce elements with aria-activedescendant are tabbable
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-activedescendant-has-tabindex
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

    // Enforce all aria-* props are valid
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props
    'jsx-a11y/aria-props': 'error',

    // Enforce ARIA state and property values are valid
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes
    'jsx-a11y/aria-proptypes': 'error',

    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-role
    'jsx-a11y/aria-role': [
      'error',
      {
        ignoreNonDom: false,
        ignoreNonDOM: false,
      },
    ],

    // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements
    'jsx-a11y/aria-unsupported-elements': 'error',

    // Enforce that autocomplete attributes are used correctly
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/autocomplete-valid
    'jsx-a11y/autocomplete-valid': 'off',

    // Enforce a clickable non-interactive element has at least one keyboard event listener
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/click-events-have-key-events
    'jsx-a11y/click-events-have-key-events': 'error',

    // Enforce heading (h1, h2, etc) elements contain accessible content
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/heading-has-content
    'jsx-a11y/heading-has-content': [
      'error',
      {
        components: [''],
      },
    ],

    // Enforce <html> element has lang prop
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/html-has-lang
    'jsx-a11y/html-has-lang': 'error',

    // Enforce iframe elements have a title attribute
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/iframe-has-title
    'jsx-a11y/iframe-has-title': 'error',

    // Enforce <img> alt prop does not contain the word 'image', 'picture', or 'photo'
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/img-redundant-alt
    'jsx-a11y/img-redundant-alt': 'error',

    // Enforce that elements with interactive handlers like onClick must be focusable
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/interactive-supports-focus
    'jsx-a11y/interactive-supports-focus': [
      'error',
      {
        tabbable: [
          'button',
          'checkbox',
          'link',
          'searchbox',
          'spinbutton',
          'switch',
          'textbox',
        ],
      },
    ],

    // Enforce that a label tag has a text label and an associated control
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/label-has-associated-control
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'both',
        controlComponents: [],
        depth: 25,
        labelAttributes: [],
        labelComponents: [],
      },
    ],

    // Enforce lang attribute has a valid value
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/lang
    'jsx-a11y/lang': 'error',

    // Enforces that <audio> and <video> elements must have a <track> for captions
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/media-has-caption
    'jsx-a11y/media-has-caption': [
      'error',
      {
        audio: [],
        video: [],
        track: [],
      },
    ],

    // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/mouse-events-have-key-events
    'jsx-a11y/mouse-events-have-key-events': 'error',

    // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-access-key
    'jsx-a11y/no-access-key': 'error',

    // Enforce autoFocus prop is not used
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-autofocus
    'jsx-a11y/no-autofocus': [
      'error',
      {
        ignoreNonDOM: true,
      },
    ],

    // Enforce distracting elements are not used
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-distracting-elements
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        elements: ['marquee', 'blink'],
      },
    ],

    // Interactive elements should not be assigned non-interactive roles
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-interactive-element-to-noninteractive-role
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation'],
      },
    ],

    // Non-interactive elements should not be assigned mouse or keyboard event listeners
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-interactions
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
        body: ['onError', 'onLoad'],
        dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
        handlers: [
          'onClick',
          'onError',
          'onLoad',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
        iframe: ['onError', 'onLoad'],
        img: ['onError', 'onLoad'],
      },
    ],

    // Non-interactive elements should not be assigned interactive roles
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-to-interactive-role
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        table: ['grid'],
        td: ['gridcell'],
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
      },
    ],

    // tabIndex should only be declared on interactive elements
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-tabindex
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        allowExpressionValues: true,
        roles: ['tabpanel'],
        tags: [],
      },
    ],

    // Enforce usage of onBlur over onChange on select menus for accessibility
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-onchange
    'jsx-a11y/no-onchange': 'error',

    // Enforce explicit role property is not the same as implicit/default role property on element
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-redundant-roles
    'jsx-a11y/no-redundant-roles': 'error',

    // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-static-element-interactions
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        allowExpressionValues: true,
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],

    // Enforce that elements with ARIA roles must have all required attributes for that role
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props
    'jsx-a11y/role-has-required-aria-props': 'error',

    // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props
    'jsx-a11y/role-supports-aria-props': 'error',

    // Enforce scope prop is only used on <th> elements
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/scope
    'jsx-a11y/scope': 'error',

    // Enforce tabIndex value is not greater than zero
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/tabindex-no-positive
    'jsx-a11y/tabindex-no-positive': 'error',
  },
};
