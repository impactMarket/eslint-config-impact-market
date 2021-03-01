# eslint-config-im

Impact Market React ESLint config

## Covers
- React
- Node
- Typescript


## Installation

add `"eslint-config-im": "impactMarket/eslint-config-im"` to your package.json

## Usage

Create an `.eslintrc.yml` file with the following:

```yaml
extends: eslint-config-im
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
$ npm run lint
```