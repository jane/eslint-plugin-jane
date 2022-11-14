const assert = require('assert')

const { ESLint } = require('eslint')

const c = new ESLint({ useEslintrc: true })

assert.ok(c.lintText('const foo = 2\n'), 'not ok')
