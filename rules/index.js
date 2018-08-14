const prettierFormat = require('./prettier')

const { flowRules } = require('./flow')
const { nodeRules } = require('./node')
const { a11yRules, reactRules } = require('./react')
const { baseRules } = require('./recommended')
const { reactStyleRules, flowStyleRules, styleRules } = require('./style')

const jestRules = {
  'jest/no-disabled-tests': 0,
  'jest/no-focused-tests': 1,
  'jest/no-identical-title': 1,
  'jest/valid-expect': 1,
}

const prettierRules = {
  'prettier/prettier': [1, prettierFormat],
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
    },
    'react-style': {
      extends: ['plugin:import/warnings'],
      rules: reactStyleRules,
    },
    'flow-style': {
      extends: ['plugin:import/warnings'],
      rules: flowStyleRules,
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
