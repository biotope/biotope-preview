"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
exports.createDocsFileForConfig = (config) => {
    return new Promise((resolve, reject) => {
        if (config.docs) {
            fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.docs.mdx`), config.docs, (err) => {
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