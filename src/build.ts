import path = require('path');
import { getSubFolders } from './file-handlers/get-sub-folders';
import { filterFilePathsForPackageJson } from './file-handlers/filter-file-paths-for-package-json';
import { createStoriesFileForStoryConfig } from './file-handlers/create-stories-file-for-story-config';
import { getJsonContent } from './file-handlers/get-json-content';
import { IStoryConfiguration } from './interfaces/i-story-configuration';
const storybook = require('@storybook/html/standalone');

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

    storybook({
        mode: 'static',
        configDir: '.storybook',
        staticDir: [`${projectBasePath}/dist/resources/components`],
        outputDir: `${projectBasePath}/preview`,
    });
})().catch(e => process.exit(e));

