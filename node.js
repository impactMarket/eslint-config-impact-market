module.exports = {
    env: { node: true },
    extends: ['./shared/core.js', './shared/typescript.js'],
    rules: {
        'no-buffer-constructor': 'warn'
    }
};
