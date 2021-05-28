module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": 0,
        "import/extensions": 0,
        "no-underscore-dangle": [2, { "allow": ["__filename", "__dirname"] }],
        "eqeqeq": "warn",
        "strict": "off",
        "semi": "error"
    }
};
