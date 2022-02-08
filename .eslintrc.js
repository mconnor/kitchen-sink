module.exports = {
    extends: ['universe/native', 'airbnb', 'airbnb/hooks', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        requireConfigFile: false,
        jsx: true,
        babelOptions: {
            presets: ['@babel/preset-react']
        }
    },
    rules: {
        'prettier/prettier': 'off',
        'react/function-component-definition': [
            0,
            { namedComponents: 'function-declaration' }
        ],
        // 'sort-import': 'off',
        'react/jsx-key': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'react/prop-types': 1,
        'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
        'react/require-default-props': 0,

        'import/prefer-default-export': 0,
        'no-underscore-dangle': 'off',
        'react/forbid-prop-types': [
            1,
            {
                forbid: ['any', 'array', 'object'],
                checkContextTypes: true,
                checkChildContextTypes: true
            }
        ],
        'no-shadow': 'off',
        camelcase: 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks:
                    '(useDrawer|useProductVisibility|useDeepCompareEffect)'
            }
        ],
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'dot-notation': 'off',
        'no-unused-vars': 'off',

        // 'import/no-extraneous-dependencies': 2,
        'no-use-before-define': 'warn',
        'func-names': ['error', 'always'],
        'react/no-unescaped-entities': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        'global-require': 'warn'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    globals: {
        JSX: 'readonly'
    }
}
