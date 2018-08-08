# eslint-plugin-jane

Jane's Eslint plugin and configurations.

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
    "plugin:jane/style",
    "plugin:jane/prettier",
    "plugin:jane/jest"
  ],
  "plugins": [
    "jane"
  ]
}
```

You can extend any or all of the exported configurations.

You can also use or extend our Prettier config:

.prettierrc.js:
```javascript
module.exports = require('eslint-plugin-jane/prettier')
```

## TODO:

* Use eslint-plugin-jane to lint eslint-plugin-jane.
* Fix testing.
* Don't apply Flow-related style rules when Prettier is present.

## License

[MIT](./LICENSE.md)
