const nodeRules = {
  'no-process-exit': 0,
  'node/no-extraneous-import': 2,
  'node/no-extraneous-require': 2,
  'node/no-missing-import': 2,
  'node/no-missing-require': 2,
  'node/no-unpublished-bin': 2,
  'node/no-unpublished-import': 2,
  'node/no-unpublished-require': 2,
  'node/no-unsupported-features/es-builtins': 2,
  'node/no-unsupported-features/es-syntax': 0,
  'node/no-unsupported-features/node-builtins': 2,
  'node/process-exit-as-throw': 2,
  'node/shebang': 0,
  'node/no-deprecated-api': 2,
  'node/prefer-global/buffer': [2, 'never'],
  'node/prefer-global/console': [2, 'always'],
  'node/prefer-global/process': [2, 'always'],
  'node/prefer-global/url-search-params': [2, 'never'],
  'node/prefer-global/url': [2, 'never'],
}

module.exports = { nodeRules }
