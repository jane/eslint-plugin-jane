const baseRules = {
  'array-callback-return': 2,
  'arrow-body-style': [2, 'as-needed'],
  camelcase: [2, { properties: 'never' }],
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
  'constructor-super': 2,
  curly: 2,
  'default-case': [2, { commentPattern: '^no default$' }],
  'eol-last': 2,
  'func-style': [2, 'expression'],
  eqeqeq: [2, 'allow-null'],
  'guard-for-in': 2,
  'linebreak-style': [2, 'unix'],
  'max-classes-per-file': [2, 4],
  'max-depth': [2, 4],
  'max-nested-callbacks': [2, 4],
  'max-params': [2, 4],
  'max-statements': [2, 40],
  'new-cap': [2, { newIsCap: true, capIsNew: false }],
  'new-parens': 2,
  'no-array-constructor': 2,
  'no-caller': 2,
  'no-class-assign': 2,
  'no-cond-assign': [2, 'always'],
  'no-console': [2],
  'no-const-assign': 2,
  'no-constant-condition': [2, { checkLoops: false }],
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-delete-var': 2,
  'no-dupe-args': 2,
  'no-dupe-class-members': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-duplicate-imports': 2,
  'no-empty-character-class': 2,
  'no-empty-pattern': 2,
  'no-eval': 2,
  'no-ex-assign': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-extra-parens': [2, 'functions'],
  'no-fallthrough': 2,
  'no-func-assign': 2,
  'no-global-assign': 2,
  'no-implied-eval': 2,
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-iterator': 2,
  'no-label-var': 2,
  'no-labels': [2, { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-mixed-operators': [
    2,
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
  'no-multi-str': 2,
  'no-native-reassign': 2,
  'no-negated-in-lhs': 2,
  'no-new-func': 2,
  'no-new-object': 2,
  'no-new-require': 2,
  'no-new-symbol': 2,
  'no-new-wrappers': 2,
  'no-obj-calls': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-path-concat': 2,
  'no-proto': 2,
  'no-redeclare': 2,
  'no-regex-spaces': 2,
  'no-restricted-syntax': [2, 'LabeledStatement', 'WithStatement'],
  'no-return-assign': [2, 'except-parens'],
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-shadow-restricted-names': 2,
  'no-sparse-arrays': 2,
  'no-template-curly-in-string': 2,
  'no-this-before-super': 2,
  'no-throw-literal': 2,
  'no-trailing-spaces': 2,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-unexpected-multiline': 2,
  'no-unneeded-ternary': [2, { defaultAssignment: false }],
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'no-unsafe-negation': 2,
  'no-unused-expressions': [2, { allowTernary: true, allowShortCircuit: true }],
  'no-unused-labels': 2,
  'no-unused-vars': [
    2,
    {
      vars: 'local',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_|...props|props',
      args: 'after-used',
      ignoreRestSiblings: true,
    },
  ],
  'no-use-before-define': [2, 'nofunc'],
  'no-useless-call': 2,
  'no-useless-computed-key': 2,
  'no-useless-concat': 2,
  'no-useless-constructor': 2,
  'no-useless-escape': 2,
  'no-useless-rename': [
    2,
    { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
  ],
  'no-var': 2,
  'no-whitespace-before-property': 2,
  'no-with': 2,
  'operator-assignment': [2, 'always'],
  'prefer-const': 2,
  'quote-props': [2, 'as-needed', { numbers: true }],
  radix: 2,
  'require-yield': 2,
  strict: [2, 'never'],
  'unicode-bom': [2, 'never'],
  'unicorn/better-regex': 2,
  'unicorn/consistent-destructuring': 2,
  'unicorn/custom-error-definition': 2,
  'unicorn/filename-case': [2, { case: 'kebabCase' }],
  'unicorn/new-for-builtins': 2,
  'unicorn/no-abusive-eslint-disable': 2,
  'unicorn/no-instanceof-array': 2,
  'unicorn/no-new-array': 2,
  'unicorn/no-new-buffer': 2,
  'unicorn/no-unreadable-array-destructuring': 2,
  'unicorn/no-useless-undefined': 2,
  'unicorn/no-zero-fractions': 2,
  'unicorn/prefer-array-find': 2,
  'unicorn/prefer-date-now': 2,
  'unicorn/prefer-default-parameters': 2,
  'unicorn/prefer-includes': 2,
  'unicorn/prefer-optional-catch-binding': 2,
  'unicorn/prefer-spread': 2,
  'unicorn/prefer-string-starts-ends-with': 2,
  'unicorn/prefer-type-error': 2,
  'unicorn/throw-new-error': 2,
  'use-isnan': 2,
  'valid-typeof': 2,
  'wrap-iife': [2, 'any'],
  yoda: [2, 'never'],
}

module.exports = { baseRules }
