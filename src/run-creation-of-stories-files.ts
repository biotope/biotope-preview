import path = require('path');
import { filterFilePathsForPackageJson } from './file-handlers/filter-file-paths-for-package-json';
import { createStoriesFileForConfig } from './file-handlers/create-stories-file-for-config';
import { getJsonContent } from './file-handlers/get-json-content';
import { IComponentConfiguration } from './interfaces/i-component-configuration';
const recursive = require("recursive-readdir");

const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export const runCreationOfStoriesFiles = async (componentsSrcDir: string = 'src/components') => {
    const recursiveFilePaths = await recursive(`${projectBasePath}/${componentsSrcDir}`);
    const filteredFilesPaths = filterFilePathsForPackageJson([].concat.apply([], recursiveFilePaths));
    const configs = filteredFilesPaths.map((filePath: string) => getJsonContent(filePath));
    await Promise.all(configs.map((config: IComponentConfiguration) => createStoriesFileForConfig(config)));
}