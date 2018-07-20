const assert = require('assert')
const { CLIEngine } = require('eslint')

const c = new CLIEngine({
  useEslintrc: false,
  configFile: 'index.js',
})

assert.ok(c.executeOnText('const foo = 2\n'), 'not ok')
