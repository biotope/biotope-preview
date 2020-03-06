import { createStoriesFileForConfig } from './file-handlers/create-stories-file-for-config';
const recursive = require("recursive-readdir");

export const runCreationOfStoriesFiles = async (componentsSrcDir: string = 'src/components') => {
    const recursiveFilePaths = await recursive(`${__dirname}/../configurations`);
    const importedConfigurations = recursiveFilePaths.map((filePath: string) => filePath.indexOf('index.ts') !== -1 ? require(filePath) : {});
    //const filteredFilesPaths = filterFilePathsForPackageJson([].concat.apply([], recursiveFilePaths));
    //const configs = recursiveFilePaths.map((filePath: string) => getJsonContent(filePath));
    await Promise.all(importedConfigurations.map((config: any) => createStoriesFileForConfig(config.default)));
}