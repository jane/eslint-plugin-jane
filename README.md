# eslint-plugin-jane

**IMPORTANT** Pre-release and unstable.

Jane's Eslint plugin and configurations.

--------

## Installation

`npm i -D eslint eslint-plugin-jane`

## Usage

.eslintrc.json
```json
{
  "root": true,
  "extends": [
    "plugin:jane/recommended",
    "plugin:jane/react",
    "plugin:jane/node",
    "plugin:jane/flow",
    "plugin:jane/style",
    "plugin:jane/jest"
  ],
  "plugins": [
    "jane"
  ]
}
```

You can extend any or all of the exported configurations.

## License

[MIT](./LICENSE.md)
