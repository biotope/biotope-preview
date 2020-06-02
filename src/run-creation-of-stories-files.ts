import { createStoriesFileForConfig } from './file-handlers/create-stories-file-for-config';
import { createDocsFileForConfig } from './file-handlers/create-docs-file-for-config';
import { IComponentConfiguration } from './interfaces/i-component-configuration';
const recursive = require("recursive-readdir");

export const runCreationOfStoriesFiles = async (globalResources: string[]) => {
    const recursiveFilePaths = await recursive(`${__dirname}/../configurations`);
    const configurationsPaths = recursiveFilePaths.filter((path : string) => path.indexOf('index.js') !== -1);
    const importedConfigurations = configurationsPaths.map((filePath: string) => require(filePath).default);
    await Promise.all(importedConfigurations.map((config: IComponentConfiguration) => createStoriesFileForConfig(config, globalResources)));
    await Promise.all(importedConfigurations.map((config: IComponentConfiguration) => createDocsFileForConfig(config, globalResources)));
}
