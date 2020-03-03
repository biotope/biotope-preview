import path = require('path');
import { getSubFolders } from './fileHandlers/getSubFolders';
import { filterFilePathsForPackageJson } from './fileHandlers/filterFilePathsForPackageJson';
import { createStoriesFileForStoryConfig } from './fileHandlers/createStoriesFileForStoryConfig';
import { getJsonContent } from './fileHandlers/getJsonContent';
import { IStoryConfiguration } from './interfaces/IStoryConfiguration';

const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
const componentsSrc = `${projectBasePath}/src/components`;

(async () => {
    const subFolders = await getSubFolders(componentsSrc);
    const filesPaths = await Promise.all(
        subFolders.map(
            subFolder => getSubFolders(`${componentsSrc}/${subFolder}`, true)
        )
    );
    const filteredFilesPaths = filterFilePathsForPackageJson([].concat.apply([], filesPaths));
    const storyConfigs = filteredFilesPaths.map((filePath: string) => getJsonContent(filePath));
    await Promise.all(storyConfigs.map((storyConfig: IStoryConfiguration) => createStoriesFileForStoryConfig(storyConfig)));
})().catch(e => process.exit(e));