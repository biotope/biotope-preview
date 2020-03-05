import path = require('path');
import { getContentsOfDirectory } from './file-handlers/get-contents-of-directory';
import { filterFilePathsForPackageJson } from './file-handlers/filter-file-paths-for-package-json';
import { createStoriesFileForStoryConfig } from './file-handlers/create-stories-file-for-story-config';
import { getJsonContent } from './file-handlers/get-json-content';
import { IStoryConfiguration } from './interfaces/i-story-configuration';

const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export const runCreationOfStoriesFiles = async (componentsSrcDir: string = 'src/components') => {
    const subFolders = await getContentsOfDirectory(`${projectBasePath}/${componentsSrcDir}`, true, true);
    const filesPaths = await Promise.all(
        subFolders.map(
            subFolder => getContentsOfDirectory(subFolder, true, false)
        )
    );
    const filteredFilesPaths = filterFilePathsForPackageJson([].concat.apply([], filesPaths));
    const storyConfigs = filteredFilesPaths.map((filePath: string) => getJsonContent(filePath));
    await Promise.all(storyConfigs.map((storyConfig: IStoryConfiguration) => createStoriesFileForStoryConfig(storyConfig)));
}