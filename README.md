# eslint-config-impact-market

impactMarket ESLint config

## Covers
- React
- Node
- Typescript


## Installation

add `eslint-config-impact-market` to your package.json

## Usage

Create an `.eslintrc.js` file with the following:

```javascript
module.exports = {
    extends: ['impact-market/node', 'prettier'],
};

```

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

and run the linter with:

```sh
$ yarn lint
```