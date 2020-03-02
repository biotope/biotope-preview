import { getSubFolders } from './getSubFolders';
import { filterFilePathsForPackageJson } from './filterFilePathsForPackageJson';
import { createStoriesFileForStoryConfig } from './createStoriesFileForStoryConfig';
import { getJsonContent } from './getJsonContent';
import { IStoryConfiguration } from './interfaces/IStoryConfiguration';

const componentsSrc = `../../../src/components`;

(async () => {
    const subFolders = await getSubFolders(componentsSrc);
    const filesPaths = await Promise.all(
        subFolders.map(
            subFolder => getSubFolders(`${componentsSrc}/${subFolder}`, true)
        )
    );
    const filteredFilesPaths = filterFilePathsForPackageJson([].concat.apply([], filesPaths));
    const storyConfigs = filteredFilesPaths.map((filePath: string) => getJsonContent(filePath));
    storyConfigs.map((storyConfig: IStoryConfiguration) => createStoriesFileForStoryConfig(storyConfig));    
})().catch(e => process.exit(e));