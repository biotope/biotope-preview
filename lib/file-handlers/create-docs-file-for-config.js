"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocsFileForConfig = void 0;
const path = require("path");
const fs = require("fs");
const generate_component_doc_1 = require("../html-builders/generate-component-doc");
exports.createDocsFileForConfig = (config, globalResources = []) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.docs.mdx`), generate_component_doc_1.generateComponentDoc(config), (err) => {
            if (err)
                reject();
            resolve();
        });
    });
};
//# sourceMappingURL=create-docs-file-for-config.js.map