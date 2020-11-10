module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true
  },

  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {

    // Disallow unnecessary spaces next to array brackets
    'array-bracket-spacing': [0],

    // Allow freedom on when to use braces on arrow functions
    'arrow-body-style': [0],

    // Enforce parentheses for arrow functions
    'arrow-parens': ['warn'],

    // Allow line breaks between if, else if, and else statements
    'brace-style': [0],

    // Disallow trailing commas
    'comma-dangle': ['warn', 'never'],

    // Allow arrow functions to return undefined
    'consistent-return': [0],

    // Don't enforce new lines at end of file
    'eol-last': [0],

    // Allow unnamed generator functions
    'func-names': ['warn', 'always', { generators: 'as-needed' }],

    // Enforce all occurrences of 'require()' to be on top-level module scope
    'global-require': ['warn'],

    // Allow line break after implicit arrow function
    'implicit-arrow-linebreak': [0],

    // Enforce no dynamic requires
    'import/no-dynamic-require': ['warn'],

    // Enforce dependencies are used and come from the right place
    'import/no-extraneous-dependencies': [0],

    // Enforce import order conventions
    'import/order': ['warn'],

    // Allow export const instead of default export
    'import/prefer-default-export': [0],

    // Enforce 2 space indentation
    'indent': ['warn', 2, { SwitchCase: 1 }],

    // Enforce valid anchor tags
    'jsx-a11y/anchor-is-valid': ['warn'],

    // Allow click handlers w/o key handlers
    'jsx-a11y/click-events-have-key-events': [0],

    // Allow drop downs to not have a focus event
    'jsx-a11y/interactive-supports-focus': [0],

    // Allow uncontrolled labels
    'jsx-a11y/label-has-associated-control': [0],

    // Allow event handlers on perceived "non-interactive" elements
    'jsx-a11y/no-noninteractive-element-interactions': [0],

    // Enforce keyword spacing
    'keyword-spacing': ['warn'],

    // Don't enforce linebreak types (e.g., 'lf')
    'linebreak-style': [0],

    // Limit max line length to 80
    'max-len': ['warn'],

    // Allow console.warn and console.error but not console.log
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // Allow nested ternary expressions
    'no-nested-ternary': [0],

    // Allow reassignment to prevent errors on Array.reduce()
    'no-param-reassign': [0],

    // Disallow tab and space mixing
    'no-mixed-spaces-and-tabs': ['warn'],

    // Disallow multiple spaces
    'no-multi-spaces': ['warn'],

    // Disallow multiple empty lines
    'no-multiple-empty-lines': [0],

    // Don't enforce "restricted" syntax
    'no-restricted-syntax': [0],

    // Disallow tabs
    'no-tabs': ['warn'],

    // Disallow trailing spaces
    'no-trailing-spaces': ['warn'],

    // Disallow unnecessary ternary operators
    'no-unneeded-ternary': ['warn'],

    // Disallow unnecessary dangling underscores
    'no-underscore-dangle': ['warn'],

    // Enforce that there are no unused variables
    'no-unused-vars': ['warn'],

    // Allow 'function' keyword to be used before defined
    'no-use-before-define': ['error', { 'functions': false }],

    // Enforce new lines for object curly braces
    'object-curly-newline': [0],

    // Enforce spacing around objects
    'object-curly-spacing': ['warn'],

    // Enforce object shorthand property assignment
    'object-shorthand': ['warn', 'always'],

    // Allow initializing more than one variable at a time
    'one-var': ['warn', { 'initialized': 'never' }],

    // Allow initializing more than one variable on the same line
    'one-var-declaration-per-line': ['warn', 'initializations'],

    // Enforce newlines for operators
    'operator-linebreak': ['warn'],

    // Disallow padded blocks
    'padded-blocks': [0],

    // Enforce arrow functions in callbacks
    'prefer-arrow-callback': ['warn'],

    // Enforce use of constants where possible
    'prefer-const': ['warn'],

    // Enforce object and array destructuring
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // Enforce template literals
    'prefer-template': ['warn'],

    // Enforce single quotes for strings
    'quotes': ['warn'],

    // Disallow unnecessarily quoted props
    'quote-props': ['warn', 'consistent'],

    // Spread operators should be spaced like: [...arr] rather than: [... arr]
    'rest-spread-spacing': ['warn', 'never'],

    // Enforce semicolons
    'semi': ['warn'],

    // Enforce a space after // and before comment text
    'spaced-comment': ['warn'],

    // Enforce spaces before function parentheses
    'space-before-function-paren': ['warn'],

    // Allow destructuring and dot notation
    'react/destructuring-assignment': [0],

    // Allow any prop type
    'react/forbid-prop-types': [0],

    // Enforce same line indentation for opening and closing brackets
    'react/jsx-closing-bracket-location': ['warn'],

    // Enforce line breaks in JSX attributes and expressions
    'react/jsx-curly-newline': ['warn'],

    // Enforce spaces within jsx curly braces
    'react/jsx-curly-spacing': ['warn', 'always'],

    // Disable JSX only in .JSX rule
    'react/jsx-filename-extension': [0],

    // Disable prefer shorthand '<>' for React fragments
    'react/jsx-fragments': [0],

    // Enforce two space indents
    'react/jsx-indent': ['warn', 2],

    // Enforce no spacing around equal signs in JSX
    'react/jsx-equals-spacing': ['warn'],

    // One expression per line in JSX
    'react/jsx-one-expression-per-line': ['warn'],

    // Allow use of JSX props spreading
    'react/jsx-props-no-spreading': [0],

    // Disallow tag spacing
    'react/jsx-tag-spacing': ['warn'],

    // Enforce parentheses around multiline JSX
    'react/jsx-wrap-multilines': ['warn'],

    // Allow access to state within setState
    'react/no-access-state-in-setstate': [0],

    // Allow use of array indexes as component keys
    'react/no-array-index-key': [0],

    // Enforce no unused state fields
    'react/no-unused-state': ['warn'],

    // Enforce PropTypes validation
    'react/prop-types': ['warn'],

    // Enforce stateless functions where possible
    'react/prefer-stateless-function': ['warn'],

    // Enforce use of default props for non-required props
    'react/require-default-props': ['warn'],

    // Disable enforcement of component property sorting rules
    'react/sort-comp': [0],

    // Disallow setting state within the constructor
    'react/state-in-constructor': ['warn', 'never']
  },

  settings: {
    'import/resolver': {
      node: {
        paths: ['./', 'src']
      }
    }
  }
};