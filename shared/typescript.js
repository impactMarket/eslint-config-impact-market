const { jsExtensions, tsExtensions } = require('./extensions');

const allExtensions = [...jsExtensions, ...tsExtensions];

module.exports = {
    extends: ['plugin:import/typescript'],
    plugins: ['@typescript-eslint'],
    rules: {
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'warn',
            {
                functions: false,
                classes: false,
                variables: false,
                typedefs: false,
            },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
        /* eslint-disable sort-keys */
        'sort-class-members/sort-class-members': [
            'error',
            {
                order: [
                    '[static-properties-alpha]',
                    '[static-methods-alpha]',
                    '[properties-alpha]',
                    '[constructor]',
                    '[methods-alpha]',
                ],
                groups: {
                    'static-properties-alpha': [
                        {
                            type: 'property',
                            static: true,
                            sort: 'alphabetical',
                        },
                    ],
                    'static-methods-alpha': [
                        {
                            type: 'method',
                            static: true,
                            sort: 'alphabetical',
                        },
                    ],
                    'properties-alpha': [
                        {
                            type: 'property',
                            propertyType: 'Literal',
                            sort: 'alphabetical',
                        },
                    ],
                    'methods-alpha': [{ type: 'method', sort: 'alphabetical' }],
                },
            },
        ],
    },
    settings: {
        'import/extensions': allExtensions,
        'import/parsers': {
            '@typescript-eslint/parser': tsExtensions,
        },
        'import/resolver': {
            node: { extensions: allExtensions },
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.d.ts'],
            parser: '@typescript-eslint/parser',
        },
    ],
};
