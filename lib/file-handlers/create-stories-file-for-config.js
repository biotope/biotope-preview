"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoriesFileForConfig = void 0;
const path = require("path");
const fs = require("fs");
const generate_component_html_1 = require("../html-builders/generate-component-html");
exports.createStoriesFileForConfig = (config, globalResources = []) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.stories.js`), generate_component_html_1.generateComponentHtml(config, globalResources), (err) => {
            if (err)
                reject();
            resolve();
        });
    });
};
//# sourceMappingURL=create-stories-file-for-config.js.map