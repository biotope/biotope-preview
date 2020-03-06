"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_stories_file_for_config_1 = require("./file-handlers/create-stories-file-for-config");
const recursive = require("recursive-readdir");
exports.runCreationOfStoriesFiles = async (componentsSrcDir = 'src/components') => {
    const recursiveFilePaths = await recursive(`${__dirname}/../configurations`);
    const configurationsPaths = recursiveFilePaths.filter((path) => path.indexOf('index.ts') !== -1);
    const importedConfigurations = configurationsPaths.map((filePath) => require(filePath).default);
    await Promise.all(importedConfigurations.map((config) => create_stories_file_for_config_1.createStoriesFileForConfig(config)));
};
//# sourceMappingURL=run-creation-of-stories-files.js.map