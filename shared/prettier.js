module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                bracketSameLine: false,
                endOfLine: 'lf',
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'none'
            }
        ]
    }
};
