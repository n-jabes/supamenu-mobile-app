module.exports = {
    'env': {
        'browser': true,
        'react-native/react-native': true
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-native'
    ],
    'parser': '@typescript-eslint/parser',
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 0,
        'react/jsx-filename-extension': [
            2,
            {
                'extensions': [
                    '.tsx'
                ]
            }
        ]
    }
};