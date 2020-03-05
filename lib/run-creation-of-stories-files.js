"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const get_contents_of_directory_1 = require("./file-handlers/get-contents-of-directory");
const filter_file_paths_for_package_json_1 = require("./file-handlers/filter-file-paths-for-package-json");
const create_stories_file_for_story_config_1 = require("./file-handlers/create-stories-file-for-story-config");
const get_json_content_1 = require("./file-handlers/get-json-content");
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
exports.runCreationOfStoriesFiles = async (componentsSrcDir = 'src/components') => {
    const subFolders = await get_contents_of_directory_1.getContentsOfDirectory(`${projectBasePath}/${componentsSrcDir}`, true, true);
    const filesPaths = await Promise.all(subFolders.map(subFolder => get_contents_of_directory_1.getContentsOfDirectory(subFolder, true, false)));
    const filteredFilesPaths = filter_file_paths_for_package_json_1.filterFilePathsForPackageJson([].concat.apply([], filesPaths));
    const storyConfigs = filteredFilesPaths.map((filePath) => get_json_content_1.getJsonContent(filePath));
    await Promise.all(storyConfigs.map((storyConfig) => create_stories_file_for_story_config_1.createStoriesFileForStoryConfig(storyConfig)));
};
//# sourceMappingURL=run-creation-of-stories-files.js.map