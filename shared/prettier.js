module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                bracketSameLine: false,
                printWidth: 120,
                singleQuote: true,
                trailingComma: 'none'
            }
        ]
    }
};
