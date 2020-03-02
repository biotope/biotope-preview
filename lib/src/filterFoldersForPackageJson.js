"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.filterFoldersForPackageJson = (srcPath, componentFolders) => {
    const filteredFolders = componentFolders.filter((componentFolderPath) => {
        if (fs.lstatSync(srcPath + '/' + componentFolderPath).isDirectory()) {
            fs.readdir(srcPath + '/' + componentFolderPath, (error, componentFolderFiles) => {
                if (error) {
                    console.error("Could not list the directory.", error);
                    process.exit(1);
                }
                componentFolderFiles.forEach((fileName) => {
                    if (fileName === 'package.json') {
                        return true;
                    }
                    return false;
                });
            });
        }
    });
    return filteredFolders.map(filteredFolder => `${srcPath}/${filteredFolder}`);
};
//# sourceMappingURL=filterFoldersForPackageJson.js.map