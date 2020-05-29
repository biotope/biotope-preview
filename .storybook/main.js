module.exports = {
    stories: ['../stories/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-knobs',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport',
        './compiled-code-addon/register.js'
    ]
};