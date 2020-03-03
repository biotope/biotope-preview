"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const getSubFolders_1 = require("./fileHandlers/getSubFolders");
const filterFilePathsForPackageJson_1 = require("./fileHandlers/filterFilePathsForPackageJson");
const createStoriesFileForStoryConfig_1 = require("./fileHandlers/createStoriesFileForStoryConfig");
const getJsonContent_1 = require("./fileHandlers/getJsonContent");
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
const componentsSrc = `${projectBasePath}/src/components`;
(async () => {
    const subFolders = await getSubFolders_1.getSubFolders(componentsSrc);
    const filesPaths = await Promise.all(subFolders.map(subFolder => getSubFolders_1.getSubFolders(`${componentsSrc}/${subFolder}`, true)));
    const filteredFilesPaths = filterFilePathsForPackageJson_1.filterFilePathsForPackageJson([].concat.apply([], filesPaths));
    const storyConfigs = filteredFilesPaths.map((filePath) => getJsonContent_1.getJsonContent(filePath));
    await Promise.all(storyConfigs.map((storyConfig) => createStoriesFileForStoryConfig_1.createStoriesFileForStoryConfig(storyConfig)));
})().catch(e => process.exit(e));
//# sourceMappingURL=index.js.map