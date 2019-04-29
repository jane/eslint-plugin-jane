# eslint-plugin-jane

Jane's ESLint plugin and configurations.

[![npm version](https://img.shields.io/npm/v/eslint-plugin-jane.svg)](https://npm.im/eslint-plugin-jane) [![CircleCI](https://circleci.com/gh/jane/eslint-plugin-jane.svg?style=svg)](https://circleci.com/gh/jane/eslint-plugin-jane) [![Maintainability](https://api.codeclimate.com/v1/badges/33e6dcb7e992c8d799e6/maintainability)](https://codeclimate.com/github/jane/eslint-plugin-jane/maintainability)

--------

## Installation

`npm i -D eslint eslint-plugin-jane`

## Usage

.eslintrc.json:
```json
{
  "root": true,
  "extends": [
    "plugin:jane/recommended",
    "plugin:jane/react",
    "plugin:jane/node",
    "plugin:jane/flow",
    "plugin:jane/typescript",
    "plugin:jane/prettier-ts",
    "plugin:jane/prettier",
    "plugin:jane/jest"
  ],
  "plugins": [
    "jane"
  ]
}
```

You can extend any or all of the exported configurations.
If you are using the typescript plugin, some of the rules require this to be
added to the .eslintrc file
```json
"parser": "@typescript-eslint/parser",
"parserOptions": {
  "project": "./tsconfig.json"
},
```

You can also use or extend our Prettier config:

.prettierrc.js:
```javascript
module.exports = require('eslint-plugin-jane/prettier')
// OR for TS files
module.exports = require('eslint-plugin-jane/prettier-ts')
```

## License

[MIT](./LICENSE.md)
