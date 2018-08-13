export const reactStyleRules = {
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

export const reactRules = {
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
