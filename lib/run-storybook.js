"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStorybook = void 0;
const path = require("path");
const storybook = require('@storybook/html/standalone');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
exports.runStorybook = ({ staticDir = 'dist/resources/components', mode = 'static', outputDir = 'dist' }) => {
    if (mode === 'static') {
        return storybook({
            mode: 'static',
            configDir: path.resolve(__dirname, '../.storybook'),
            staticDir: [`${projectBasePath}/${staticDir}`],
            outputDir: `${projectBasePath}/${outputDir}/preview`,
        });
    }
    else {
        return storybook({
            mode: 'dev',
            configDir: path.resolve(__dirname, '../.storybook'),
            staticDir: [`${projectBasePath}/${staticDir}`],
        });
    }
};
//# sourceMappingURL=run-storybook.js.map