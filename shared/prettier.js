module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                printWidth: 120,
                singleQuote: true,
                trailingComma: 'none',
            },
        ],
    },
  };