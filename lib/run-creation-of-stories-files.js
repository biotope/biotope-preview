"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_stories_file_for_config_1 = require("./file-handlers/create-stories-file-for-config");
const recursive = require("recursive-readdir");
exports.runCreationOfStoriesFiles = async (componentsSrcDir = 'src/components') => {
    const recursiveFilePaths = await recursive(`${__dirname}/../configurations`);
    const importedConfigurations = recursiveFilePaths.map((filePath) => filePath.indexOf('index.ts') !== -1 ? require(filePath) : {});
    //const filteredFilesPaths = filterFilePathsForPackageJson([].concat.apply([], recursiveFilePaths));
    //const configs = recursiveFilePaths.map((filePath: string) => getJsonContent(filePath));
    await Promise.all(importedConfigurations.map((config) => create_stories_file_for_config_1.createStoriesFileForConfig(config.default)));
};
//# sourceMappingURL=run-creation-of-stories-files.js.map