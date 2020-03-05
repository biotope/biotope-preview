import path = require('path');
import { filterFilePathsForPackageJson } from './file-handlers/filter-file-paths-for-package-json';
import { createStoriesFileForStoryConfig } from './file-handlers/create-stories-file-for-story-config';
import { getJsonContent } from './file-handlers/get-json-content';
import { IStoryConfiguration } from './interfaces/i-story-configuration';
import recursive from 'recursive-readdir';

const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export const runCreationOfStoriesFiles = async (componentsSrcDir: string = 'src/components') => {
    const recursiveFilePaths = await recursive(`${projectBasePath}/${componentsSrcDir}`);
    const filteredFilesPaths = filterFilePathsForPackageJson([].concat.apply([], recursiveFilePaths));
    const storyConfigs = filteredFilesPaths.map((filePath: string) => getJsonContent(filePath));
    await Promise.all(storyConfigs.map((storyConfig: IStoryConfiguration) => createStoriesFileForStoryConfig(storyConfig)));
}