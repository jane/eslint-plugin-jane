const flowRules = {
  'flowtype/no-existential-type': 2,
  'flowtype/no-types-missing-file-annotation': 2,
  'flowtype/no-weak-types': 2,
  'flowtype/require-parameter-type': [2, { excludeParameterMatch: '^_' }],
  'flowtype/require-return-type': [
    2,
    'always',
    { annotateUndefined: 'always', excludeArrowFunctions: 'expressionsOnly' },
  ],
  'flowtype/require-variable-type': [
    2,
    { excludeVariableTypes: { const: true, let: false, var: false } },
  ],
  'flowtype/generic-spacing': 0,
  'flowtype/space-after-type-colon': 0,
}

module.exports = { flowRules }
