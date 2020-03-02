"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSubFolders_1 = require("./getSubFolders");
const filterFoldersForPackageJson_1 = require("./filterFoldersForPackageJson");
const createStoriesFileForStoryConfig_1 = require("./createStoriesFileForStoryConfig");
const getJsonContent_1 = require("./getJsonContent");
const componentsSrc = `../../../src/components`;
getSubFolders_1.getSubFolders(componentsSrc)
    .then(subFolders => {
    const filteredFolders = filterFoldersForPackageJson_1.filterFoldersForPackageJson(componentsSrc, subFolders);
    const storyConfigs = filteredFolders.map(folder => getJsonContent_1.getJsonContent(`{${folder}/package.json`));
    storyConfigs.map((storyConfig) => createStoriesFileForStoryConfig_1.createStoriesFileForStoryConfig(storyConfig));
})
    .catch(e => process.exit(e));
//# sourceMappingURL=index.js.map