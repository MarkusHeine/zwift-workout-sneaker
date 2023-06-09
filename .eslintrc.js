module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'xo',
    overrides: [
        {
            extends: ['xo-typescript'],
            files: ['*.ts', '*.tsx']
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'object-curly-spacing': 'off'
    }
};
