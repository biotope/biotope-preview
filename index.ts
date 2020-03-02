import { getSubFolders } from './src/getSubFolders';
import { filterFoldersForPackageJson } from './src/filterFoldersForPackageJson';
import { createStoriesFileForStoryConfig } from './src/createStoriesFileForStoryConfig';
import { getJsonContent } from './src/getJsonContent';
import { IStoryConfiguration } from './interfaces/IStoryConfiguration';

const componentsSrc = `../../../src/components`;

getSubFolders(componentsSrc)
    .then(subFolders => {
        const filteredFolders = filterFoldersForPackageJson(componentsSrc, subFolders);
        const storyConfigs = filteredFolders.map(folder => getJsonContent(`{${folder}/package.json`));
        storyConfigs.map((storyConfig: IStoryConfiguration) => createStoriesFileForStoryConfig(storyConfig));
    })
    .catch(e => process.exit(e));