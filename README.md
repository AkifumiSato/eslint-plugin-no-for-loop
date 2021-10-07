# eslint-plugin-no-for-loop
An eslint plugin that does not allow for statements.

## Installation
```
npm install --save-dev eslint-plugin-no-loops
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