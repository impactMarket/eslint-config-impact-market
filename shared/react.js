/* eslint-disable sort-keys */
module.exports = {
    parserOptions: { ecmaFeatures: { jsx: true } },
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/jsx-uses-vars': 'warn',
        'react/jsx-uses-react': 'warn',
        'jsx-quotes': ['error', 'prefer-double'],
        'react/display-name': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-curly-brace-presence': [
            'error',
            {
                props: 'never'
            }
        ],
        'react/jsx-key': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-sort-props': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-danger': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-string-refs': 'error',
        'react/no-unknown-property': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 'warn',
        'react/self-closing-comp': 'error',
        'react/sort-prop-types': 'error',
        'react-hooks/rules-of-hooks': 'error'
    },
    settings: {
        react: { version: 'detect' }
    }
};
