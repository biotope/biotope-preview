"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const storybook = require('@storybook/html/standalone');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
exports.runStorybook = (mode = 'static') => {
    if (mode === 'static') {
        return storybook({
            mode: 'static',
            configDir: path.resolve(__dirname, '../.storybook'),
            staticDir: [`${projectBasePath}/dist/resources/components`],
            outputDir: `${projectBasePath}/preview`,
        });
    }
    else {
        return storybook({
            mode: 'dev',
            configDir: path.resolve(__dirname, '../.storybook'),
            staticDir: [`${projectBasePath}/dist/resources/components`],
        });
    }
};
//# sourceMappingURL=run-storybook.js.map