const prettierFormat = require('./prettier')

const { nodeRules } = require('./node')
const { a11yRules, reactRules } = require('./react')
const { baseRules } = require('./recommended')
const { jestRules } = require('./jest')
const { typescriptRules } = require('./typescript')

const prettierRules = {
  'prettier/prettier': [2, prettierFormat],
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
      plugins: ['react', 'jsx-a11y', 'react-hooks'],
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
    typescript: {
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: typescriptRules,
      parser: '@typescript-eslint/parser',
      parserOptions: { project: './tsconfig.json' },
    },
  },
}

Object.keys(plugin.configs).forEach((k) => {
  const c = plugin.configs[k]
  c.parser = c.parser || 'babel-eslint'
  c.parserOptions = c.parserOptions || defaultParserOptions
  c.env = Object.assign(c.env || {}, { es6: true, commonjs: true })
})

module.exports = plugin
