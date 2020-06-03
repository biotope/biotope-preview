"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStorybook = void 0;
const path = require("path");
const storybook = require('@storybook/html/standalone');
exports.runStorybook = ({ staticDir = 'dist/resources/components', mode = 'static', outputDir = 'dist' }) => {
    if (mode === 'static') {
        return storybook({
            mode: 'static',
            configDir: path.resolve(__dirname, '../.storybook'),
            staticDir: [`${process.cwd()}/${staticDir}`],
            outputDir: `${process.cwd()}/${outputDir}/preview`,
        }).catch((err) => {
            throw err;
        });
    }
    else {
        return storybook({
            mode: 'dev',
            configDir: path.resolve(__dirname, '../.storybook'),
            staticDir: [`${process.cwd()}/${staticDir}`],
        }).catch((err) => {
            throw err;
        });
        ;
    }
};
//# sourceMappingURL=run-storybook.js.map