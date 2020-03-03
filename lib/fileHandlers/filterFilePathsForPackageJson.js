"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterFilePathsForPackageJson = (filePaths) => {
    return filePaths.filter((filePath) => {
        if (filePath.indexOf('package.json') !== -1) {
            return true;
        }
        return false;
    });
};
//# sourceMappingURL=filterFilePathsForPackageJson.js.map