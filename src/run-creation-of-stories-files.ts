import * as fs from 'fs-extra';
import { createStoriesFileForConfig } from './file-handlers/create-stories-file';
import { createDocsFileForConfig } from './file-handlers/create-docs-file';
import { ComponentConfiguration } from './interfaces/component-configuration';

const recursive = require('recursive-readdir');

export const runCreationOfStoriesFiles = async (globalResources: string[]): Promise<void> => {
  try {
    const recursiveFilePaths = await recursive(
      `${__dirname}/../configurations`,
    );
    const importedConfigurations = recursiveFilePaths.map(
      (filePath: string) => {
        const file = require(filePath);
        if(!file.default) {
          throw new Error('Couldn\'t read preview configurations. Please make sure that each file matching the previewConfigPatterns exposes its configuration as a default export.')
        }
        return file.default;
      }
    );
    fs.ensureDirSync(`${__dirname}/../stories/`);
    fs.emptyDirSync(`${__dirname}/../stories/`);
    await Promise.all(
      importedConfigurations.map(
        (config: ComponentConfiguration) => createStoriesFileForConfig(config, globalResources)
          .catch((err) => console.log(err)),
      ),
    );
    await Promise.all(
      importedConfigurations.map(
        (config: ComponentConfiguration) => createDocsFileForConfig(config)
          .catch((err) => console.log(err)),
      ),
    );
  } catch (err) {
    console.log("Couldn't create story files for preview", err);
  }
};
