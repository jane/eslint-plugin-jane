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

const flowStyleRules = {
  'flowtype/generic-spacing': 1,
  'flowtype/space-after-type-colon': 1,
}

module.exports = { reactStyleRules, styleRules, flowStyleRules }
