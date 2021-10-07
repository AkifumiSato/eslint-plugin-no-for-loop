# eslint-plugin-no-for-loop
[![npm version](https://badge.fury.io/js/eslint-plugin-no-for-loop.svg)](https://badge.fury.io/js/eslint-plugin-no-for-loop)
[![minified size](https://img.shields.io/bundlephobia/min/eslint-plugin-no-for-loop/latest)](https://bundlephobia.com/result?p=eslint-plugin-no-for-loop)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/eslint-plugin-no-for-loop/latest)](https://bundlephobia.com/result?p=eslint-plugin-no-for-loop)

An eslint plugin that does not allow for statements.

## Installation
```
npm install --save-dev eslint-plugin-no-for-loop
```

## Usage
`.eslintrc`

```json
{
  "plugins": ["no-for-loop"],
  "rules": {
    "no-for-loop/noForLoop": "error"
  }
}
```