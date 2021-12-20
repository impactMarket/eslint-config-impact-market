# eslint-config-impact-market

impactMarket ESLint config

## Covers
- React
- Node
- Typescript


## Installation

add `"eslint-config-impact-market": "impactMarket/eslint-config-impact-market"` to your package.json

## Usage

Create an `.eslintrc.yml` file with the following:

```yaml
extends: eslint-config-impact-market
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