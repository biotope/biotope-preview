"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.getSubFolders = async (src) => {
    return new Promise((resolve, reject) => {
        fs.readdir(src, (error, componentFolders) => {
            if (error) {
                reject(error);
                console.error("Could not list the directory.", error);
                process.exit(1);
            }
            resolve(componentFolders);
        });
    });
};
//# sourceMappingURL=getSubFolders.js.map