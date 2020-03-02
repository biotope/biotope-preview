"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const getSubFolders_1 = require("./getSubFolders");
const filterFilePathsForPackageJson_1 = require("./filterFilePathsForPackageJson");
const createStoriesFileForStoryConfig_1 = require("./createStoriesFileForStoryConfig");
const getJsonContent_1 = require("./getJsonContent");
const projectBasePath = path_1.default.resolve(__dirname).split('/node_modules')[0];
const componentsSrc = `${projectBasePath}/src/components`;
(async () => {
    const subFolders = await getSubFolders_1.getSubFolders(componentsSrc);
    const filesPaths = await Promise.all(subFolders.map(subFolder => getSubFolders_1.getSubFolders(`${componentsSrc}/${subFolder}`, true)));
    const filteredFilesPaths = filterFilePathsForPackageJson_1.filterFilePathsForPackageJson([].concat.apply([], filesPaths));
    const storyConfigs = filteredFilesPaths.map((filePath) => getJsonContent_1.getJsonContent(filePath));
    storyConfigs.map((storyConfig) => createStoriesFileForStoryConfig_1.createStoriesFileForStoryConfig(storyConfig));
})().catch(e => process.exit(e));
//# sourceMappingURL=index.js.map