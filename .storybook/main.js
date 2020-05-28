module.exports = {
    stories: ['../stories/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-knobs',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport',
        'node_modules/@biotope/preview/.storybook/source-code-utils/storybook-register.js',
    ]
};