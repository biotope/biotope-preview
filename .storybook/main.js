module.exports = {
    stories: ['../stories/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-knobs',
        '@storybook/addon-viewport',
        '@storybook/addon-docs/html/preset',
        '@biotope/storybook-addon-compiled-code',
    ]
};