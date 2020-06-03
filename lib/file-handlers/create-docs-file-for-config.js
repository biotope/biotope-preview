"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocsFileForConfig = void 0;
const path = require("path");
const fs = require("fs");
exports.createDocsFileForConfig = (config) => {
    return new Promise((resolve, reject) => {
        if (config.doc) {
            fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.docs.mdx`), config.doc, (err) => {
                if (err)
                    reject();
                resolve();
            });
        }
        else {
            resolve();
        }
    });
};
//# sourceMappingURL=create-docs-file-for-config.js.map