const reactStyleRules = {
  'react/jsx-curly-spacing': [2, 'never'],
  'react/jsx-equals-spacing': [2, 'never'],
  'react/jsx-indent': [2, 2],
  'react/jsx-indent-props': [2, 2],
  'react/jsx-tag-spacing': [
    2,
    {
      afterOpening: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    },
  ],
}

const styleRules = {
  'arrow-parens': [2, 'always'],
  'arrow-spacing': [2, { before: true, after: true }],
  'block-spacing': [2, 'always'],
  'brace-style': [2, '1tbs', { allowSingleLine: true }],
  'comma-spacing': [2, { before: false, after: true }],
  'comma-style': [2, 'last'],
  'dot-location': [2, 'property'],
  'func-call-spacing': [2, 'never'],
  'generator-star-spacing': [2, { before: true, after: true }],
  indent: [2, 2, { SwitchCase: 1 }],
  'jsx-quotes': [2, 'prefer-double'],
  'key-spacing': [2, { beforeColon: false, afterColon: true }],
  'keyword-spacing': [2, { before: true, after: true }],
  'max-len': [
    2,
    120,
    { ignoreUrls: true, ignoreRegExpLiterals: true, ignoreStrings: true },
  ],
  'no-mixed-spaces-and-tabs': 2,
  'no-multi-spaces': 0,
  'no-multiple-empty-lines': [2, { max: 1 }],
  'no-tabs': 2,
  'object-curly-spacing': [2, 'always'],
  'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
  'one-var': 0,
  'operator-linebreak': [
    2,
    'after',
    { overrides: { '?': 'before', ':': 'before' } },
  ],
  'padded-blocks': [2, 'never'],
  quotes: [2, 'single', { avoidEscape: true }],
  'rest-spread-spacing': [2, 'never'],
  semi: [2, 'never'],
  'semi-spacing': [2, { before: false, after: true }],
  'space-before-blocks': [2, 'always'],
  'space-before-function-paren': [2, 'always'],
  'space-in-parens': [2, 'never'],
  'space-infix-ops': 2,
  'space-unary-ops': [2, { words: true, nonwords: false }],
  'spaced-comment': [
    2,
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
  'template-curly-spacing': [2, 'never'],
  'yield-star-spacing': [2, 'both'],
}

const flowStyleRules = {
  'flowtype/generic-spacing': 2,
  'flowtype/space-after-type-colon': 2,
}

module.exports = { reactStyleRules, styleRules, flowStyleRules }
