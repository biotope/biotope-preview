import path = require('path');

const storybook = require('@storybook/html/standalone');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export const runStorybook = (mode: string = 'static'): Promise<void> => {
    if(mode === 'static') {
        return storybook({
            mode: 'static',
            configDir: path.resolve(__dirname, '../.storybook'),
            staticDir: [`${projectBasePath}/dist/resources/components`],
            outputDir: `${projectBasePath}/preview`,
        });
    } else {
        return storybook({
            mode: 'dev',
            configDir: '.storybook',
            staticDir: [`${projectBasePath}/dist/resources/components`],
        });
    }
}