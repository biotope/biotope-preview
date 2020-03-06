import { createStoriesFileForConfig } from './file-handlers/create-stories-file-for-config';
import { IComponentConfiguration } from './interfaces/i-component-configuration';
const recursive = require("recursive-readdir");

export const runCreationOfStoriesFiles = async (componentsSrcDir: string = 'src/components') => {
    const recursiveFilePaths = await recursive(`${__dirname}/../configurations`);
    const configurationsPaths = recursiveFilePaths.filter((path : string) => path.indexOf('index.ts') !== -1);
    const importedConfigurations = configurationsPaths.map((filePath: string) => require(filePath).default);
    await Promise.all(importedConfigurations.map((config: IComponentConfiguration) => createStoriesFileForConfig(config)));
}