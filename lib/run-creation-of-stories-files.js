"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCreationOfStoriesFiles = void 0;
const create_stories_file_1 = require("./file-handlers/create-stories-file");
const create_docs_file_1 = require("./file-handlers/create-docs-file");
const recursive = require("recursive-readdir");
exports.runCreationOfStoriesFiles = async (globalResources) => {
    const recursiveFilePaths = await recursive(`${__dirname}/../configurations`);
    const configurationsPaths = recursiveFilePaths.filter((path) => path.indexOf("index.js") !== -1);
    const importedConfigurations = configurationsPaths.map((filePath) => require(filePath).default);
    await Promise.all(importedConfigurations.map((config) => create_stories_file_1.createStoriesFileForConfig(config, globalResources).catch((err) => err)));
    await Promise.all(importedConfigurations.map((config) => create_docs_file_1.createDocsFileForConfig(config).catch((err) => err)));
};
//# sourceMappingURL=run-creation-of-stories-files.js.map