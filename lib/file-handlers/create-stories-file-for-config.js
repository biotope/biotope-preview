"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const generate_component_html_1 = require("../html-builders/generate-component-html");
exports.createStoriesFileForConfig = (config) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.stories.js`), generate_component_html_1.generateComponentHtml(config), (err) => {
            if (err)
                reject();
            console.log(generate_component_html_1.generateComponentHtml(config));
            console.log('Saved!');
            resolve();
        });
    });
};
//# sourceMappingURL=create-stories-file-for-config.js.map