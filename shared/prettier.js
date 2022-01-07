module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                bracketSameLine: true,
                printWidth: 80,
                singleQuote: true,
                trailingComma: 'none'
            }
        ]
    }
};
