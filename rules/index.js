const { jestRules } = require('./jest')
const { nodeRules } = require('./node')
const prettierFormat = require('./prettier')
const { a11yRules, reactRules } = require('./react')
const { baseRules } = require('./recommended')
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
      settings: {
        'import/internal-regex': '^(@/|@:).+',
      },
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
      extends: ['plugin:import/warnings', 'prettier'],
      rules: Object.assign({}, reactRules, a11yRules),
    },
    node: {
      env: {
        node: true,
      },
      extends: [
        'plugin:import/warnings',
        'plugin:node/recommended',
        'prettier',
      ],
      rules: nodeRules,
    },
    jest: {
      env: {
        jest: true,
      },
      plugins: ['jest'],
      extends: ['plugin:import/warnings', 'prettier'],
      rules: jestRules,
    },
    prettier: {
      plugins: ['prettier'],
      extends: ['plugin:import/warnings', 'prettier'],
      rules: prettierRules,
    },
    typescript: {
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'prettier',
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
