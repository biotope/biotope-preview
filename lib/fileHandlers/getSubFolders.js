"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.getSubFolders = async (src, includeAbsolutePath = false) => {
    return new Promise((resolve, reject) => {
        fs.readdir(src, (error, componentFolders) => {
            if (error) {
                reject(error);
                console.error("Could not list the directory.", error);
                process.exit(1);
            }
            includeAbsolutePath ? resolve(componentFolders.map(componentFolder => `${src}/${componentFolder}`)) : resolve(componentFolders);
        });
    });
};
//# sourceMappingURL=getSubFolders.js.map