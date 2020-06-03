"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoriesFileForConfig = void 0;
const path = require("path");
const fs = require("fs");
const generate_component_string_1 = require("../story-builders/generate-component-string");
exports.createStoriesFileForConfig = (config, globalResources = []) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.stories.js`), generate_component_string_1.generateComponentString(config, globalResources), (err) => {
            if (err)
                reject();
            resolve();
        });
    });
};
//# sourceMappingURL=create-stories-file.js.map