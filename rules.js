/* eslint-disable max-lines */

const prettierFormat = require('./prettier')

const nodeRules = {
  'no-process-exit': 0,
  'node/no-extraneous-import': 1,
  'node/no-extraneous-require': 1,
  'node/no-missing-import': 2,
  'node/no-missing-require': 2,
  'node/no-unpublished-bin': 2,
  'node/no-unpublished-import': 1,
  'node/no-unpublished-require': 1,
  'node/no-unsupported-features/es-builtins': 2,
  'node/no-unsupported-features/es-syntax': 0,
  'node/no-unsupported-features/node-builtins': 2,
  'node/process-exit-as-throw': 1,
  'node/no-deprecated-api': 1,
  'node/prefer-global/buffer': [1, 'never'],
  'node/prefer-global/console': [1, 'always'],
  'node/prefer-global/process': [1, 'always'],
  'node/prefer-global/url-search-params': [1, 'never'],
  'node/prefer-global/url': [1, 'never'],
}

const reactStyleRules = {
  'react/jsx-curly-spacing': [1, 'never'],
  'react/jsx-equals-spacing': [1, 'never'],
  'react/jsx-indent': [1, 2],
  'react/jsx-indent-props': [1, 2],
  'react/jsx-tag-spacing': [
    1,
    {
      afterOpening: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    },
  ],
}

const reactRules = {
  'react/jsx-boolean-value': 1,
  'react/jsx-no-bind': 0,
  'react/jsx-no-duplicate-props': [1, { ignoreCase: true }],
  'react/jsx-no-undef': 1,
  'react/jsx-pascal-case': [1, { allowAllCaps: true, ignore: [] }],
  'react/jsx-uses-react': 1,
  'react/jsx-uses-vars': 1,
  'react/no-access-state-in-setstate': 1,
  'react/no-deprecated': 1,
  'react/no-did-update-set-state': 1,
  'react/no-direct-mutation-state': 2,
  'react/no-is-mounted': 1,
  'react/no-unknown-property': 1,
  'react/prop-types': 1,
  'react/react-in-jsx-scope': 1,
  'react/require-render-return': 1,
  'react/self-closing-comp': 1,
}

const a11yRules = {
  'jsx-a11y/accessible-emoji': 1,
  'jsx-a11y/alt-text': 1,
  'jsx-a11y/anchor-has-content': 1,
  'jsx-a11y/anchor-is-valid': 1,
  'jsx-a11y/aria-activedescendant-has-tabindex': 1,
  'jsx-a11y/aria-props': 1,
  'jsx-a11y/aria-proptypes': 1,
  'jsx-a11y/aria-role': 1,
  'jsx-a11y/aria-unsupported-elements': 1,
  'jsx-a11y/click-events-have-key-events': 1,
  'jsx-a11y/heading-has-content': 1,
  'jsx-a11y/html-has-lang': 1,
  'jsx-a11y/iframe-has-title': 1,
  'jsx-a11y/img-redundant-alt': 1,
  'jsx-a11y/interactive-supports-focus': 1,
  'jsx-a11y/label-has-for': 1,
  'jsx-a11y/mouse-events-have-key-events': 1,
  'jsx-a11y/no-access-key': 1,
  'jsx-a11y/no-distracting-elements': 1,
  'jsx-a11y/no-onchange': 1,
  'jsx-a11y/no-redundant-roles': 1,
  'jsx-a11y/role-has-required-aria-props': 1,
  'jsx-a11y/role-supports-aria-props': 1,
  'jsx-a11y/scope': 1,
  'jsx-a11y/tabindex-no-positive': 1,
}

const jestRules = {
  'jest/no-disabled-tests': 0,
  'jest/no-focused-tests': 1,
  'jest/no-identical-title': 1,
  'jest/valid-expect': 1,
}

const styleRules = {
  'arrow-parens': [1, 'always'],
  'arrow-spacing': [1, { before: true, after: true }],
  'block-spacing': [1, 'always'],
  'brace-style': [1, '1tbs', { allowSingleLine: true }],
  'comma-spacing': [1, { before: false, after: true }],
  'comma-style': [1, 'last'],
  'dot-location': [1, 'property'],
  'func-call-spacing': [1, 'never'],
  'generator-star-spacing': [1, { before: true, after: true }],
  indent: [2, 2, { SwitchCase: 1 }],
  'jsx-quotes': [1, 'prefer-double'],
  'key-spacing': [1, { beforeColon: false, afterColon: true }],
  'keyword-spacing': [1, { before: true, after: true }],
  'max-len': [
    1,
    120,
    { ignoreUrls: true, ignoreRegExpLiterals: true, ignoreStrings: true },
  ],
  'no-mixed-spaces-and-tabs': 2,
  'no-multi-spaces': 0,
  'no-multiple-empty-lines': [1, { max: 1 }],
  'no-tabs': 2,
  'object-curly-spacing': [1, 'always'],
  'object-property-newline': [1, { allowMultiplePropertiesPerLine: true }],
  'one-var': 0,
  'operator-linebreak': [
    1,
    'after',
    { overrides: { '?': 'before', ':': 'before' } },
  ],
  'padded-blocks': [1, 'never'],
  quotes: [2, 'single', { avoidEscape: true }],
  'rest-spread-spacing': [1, 'never'],
  semi: [1, 'never'],
  'semi-spacing': [1, { before: false, after: true }],
  'space-before-blocks': [1, 'always'],
  'space-before-function-paren': [1, 'always'],
  'space-in-parens': [1, 'never'],
  'space-infix-ops': 1,
  'space-unary-ops': [1, { words: true, nonwords: false }],
  'spaced-comment': [
    1,
    'always',
    {
      line: { markers: ['*package', '!', ','] },
      block: {
        balanced: true,
        markers: ['*package', '!', ','],
        exceptions: ['*'],
      },
    },
  ],
  'template-curly-spacing': [1, 'never'],
  'yield-star-spacing': [1, 'both'],
}

const prettierRules = {
  'prettier/prettier': [1, prettierFormat],
}

const flowRules = {
  'flowtype-errors/show-errors': 2,
  'flowtype/generic-spacing': 0,
  'flowtype/no-types-missing-file-annotation': 2,
  'flowtype/no-weak-types': 2,
  'flowtype/require-parameter-type': 2,
  'flowtype/require-return-type': [
    2,
    'always',
    { annotateUndefined: 'always', excludeArrowFunctions: 'expressionsOnly' },
  ],
  'flowtype/require-variable-type': [
    2,
    { excludeVariableTypes: { const: true, let: false, var: false } },
  ],
  'flowtype/space-after-type-colon': 1,
}

const baseRules = {
  'array-callback-return': 1,
  'arrow-body-style': [1, 'as-needed'],
  camelcase: [1, { properties: 'never' }],
  'comma-dangle': [
    2,
    {
      arrays: 'ignore',
      objects: 'ignore',
      imports: 'ignore',
      exports: 'ignore',
      functions: 'never',
    },
  ],
  complexity: [1, 20],
  'constructor-super': 1,
  curly: [1, 'multi-line'],
  'default-case': [1, { commentPattern: '^no default$' }],
  'eol-last': 2,
  eqeqeq: [1, 'allow-null'],
  'guard-for-in': 1,
  'linebreak-style': [2, 'unix'],
  'max-classes-per-file': [1, 4],
  'max-depth': [1, 4],
  'max-lines': [1, 400],
  'max-lines-per-function': [
    1,
    { max: 150, skipBlankLines: true, skipComments: true, IIFEs: true },
  ],
  'max-nested-callbacks': [1, 4],
  'max-params': [1, 4],
  'max-statements': [1, 40],
  'new-cap': [2, { newIsCap: true, capIsNew: false }],
  'new-parens': 1,
  'no-array-constructor': 1,
  'no-caller': 1,
  'no-class-assign': 1,
  'no-cond-assign': [1, 'always'],
  'no-console': [1],
  'no-const-assign': 1,
  'no-constant-condition': [1, { checkLoops: false }],
  'no-control-regex': 1,
  'no-debugger': 1,
  'no-delete-var': 1,
  'no-dupe-args': 1,
  'no-dupe-class-members': 1,
  'no-dupe-keys': 1,
  'no-duplicate-case': 1,
  'no-duplicate-imports': 2,
  'no-empty-character-class': 1,
  'no-empty-pattern': 1,
  'no-eval': 2,
  'no-ex-assign': 1,
  'no-extend-native': 2,
  'no-extra-bind': 1,
  'no-extra-label': 1,
  'no-extra-parens': [1, 'functions'],
  'no-fallthrough': 1,
  'no-func-assign': 1,
  'no-global-assign': 2,
  'no-implied-eval': 1,
  'no-invalid-regexp': 1,
  'no-irregular-whitespace': 1,
  'no-iterator': 1,
  'no-label-var': 1,
  'no-labels': [1, { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 1,
  'no-loop-func': 1,
  'no-mixed-operators': [
    1,
    {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    },
  ],
  'no-multi-str': 1,
  'no-native-reassign': 1,
  'no-negated-in-lhs': 1,
  'no-new-func': 1,
  'no-new-object': 1,
  'no-new-require': 1,
  'no-new-symbol': 1,
  'no-new-wrappers': 1,
  'no-obj-calls': 1,
  'no-octal': 1,
  'no-octal-escape': 1,
  'no-path-concat': 1,
  'no-proto': 1,
  'no-redeclare': 1,
  'no-regex-spaces': 1,
  'no-restricted-syntax': [1, 'LabeledStatement', 'WithStatement'],
  'no-return-assign': [1, 'except-parens'],
  'no-script-url': 1,
  'no-self-assign': 1,
  'no-self-compare': 1,
  'no-sequences': 1,
  'no-shadow-restricted-names': 1,
  'no-sparse-arrays': 1,
  'no-template-curly-in-string': 1,
  'no-this-before-super': 1,
  'no-throw-literal': 1,
  'no-trailing-spaces': 1,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-unexpected-multiline': 1,
  'no-unneeded-ternary': [1, { defaultAssignment: false }],
  'no-unreachable': 1,
  'no-unsafe-finally': 1,
  'no-unsafe-negation': 1,
  'no-unused-expressions': [1, { allowTernary: true, allowShortCircuit: true }],
  'no-unused-labels': 1,
  'no-unused-vars': [
    1,
    {
      vars: 'local',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_|...props|props',
      args: 'after-used',
      ignoreRestSiblings: true,
    },
  ],
  'no-use-before-define': [1, 'nofunc'],
  'no-useless-call': 1,
  'no-useless-computed-key': 1,
  'no-useless-concat': 1,
  'no-useless-constructor': 1,
  'no-useless-escape': 1,
  'no-useless-rename': [
    1,
    { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
  ],
  'no-var': 1,
  'no-whitespace-before-property': 1,
  'no-with': 2,
  'operator-assignment': [1, 'always'],
  'prefer-const': 1,
  'quote-props': [1, 'as-needed', { numbers: true }],
  radix: 1,
  'require-yield': 1,
  strict: [1, 'never'],
  'unicode-bom': [2, 'never'],
  'unicorn/filename-case': [2, { case: 'kebabCase' }],
  'unicorn/no-array-instanceof': 1,
  'unicorn/no-new-buffer': 1,
  'unicorn/prefer-starts-ends-with': 1,
  'unicorn/prefer-type-error': 1,
  'use-isnan': 1,
  'valid-typeof': 1,
  'wrap-iife': [1, 'any'],
  yoda: [1, 'never'],
}

const defaultParserOptions = {
  ecmaVersion: 9,
  sourceType: 'module',
}

const defaultPlugins = ['babel', 'unicorn', 'promise', 'import']

const plugin = {
  environments: {
    browser: {
      globals: {
        _jane: false,
      },
    },
  },
  configs: {
    recommended: {
      plugins: defaultPlugins,
      extends: ['plugin:import/warnings'],
      rules: baseRules,
    },
    react: {
      parserOptions: Object.assign({}, defaultParserOptions, {
        ecmaFeatures: {
          jsx: true,
        },
      }),
      env: {
        browser: true,
      },
      plugins: ['react', 'jsx-a11y'],
      extends: ['plugin:import/warnings'],
      rules: Object.assign({}, reactRules, a11yRules),
    },
    node: {
      env: {
        node: true,
      },
      extends: ['plugin:import/warnings', 'plugin:node/recommended'],
      rules: nodeRules,
    },
    flow: {
      plugins: ['flowtype', 'flowtype-errors'],
      extends: ['plugin:import/warnings', 'plugin:flowtype/recommended'],
      rules: flowRules,
    },
    style: {
      extends: ['plugin:import/warnings'],
      rules: styleRules,
      // todo: reactStyleRules
    },
    jest: {
      env: {
        jest: true,
      },
      plugins: ['jest'],
      extends: ['plugin:import/warnings'],
      rules: jestRules,
    },
    prettier: {
      plugins: ['prettier'],
      extends: ['plugin:import/warnings'],
      rules: prettierRules,
    },
  },
}

Object.keys(plugin.configs).forEach((k) => {
  const c = plugin.configs[k]
  c.parser = 'babel-eslint'
  c.parserOptions = c.parserOptions || defaultParserOptions
  c.env = Object.assign(c.env || {}, { es6: true, commonjs: true })
})

module.exports = plugin
