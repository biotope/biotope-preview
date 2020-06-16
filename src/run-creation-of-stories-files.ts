import * as fs from 'fs-extra';
import { createStoriesFile } from './file-handlers/create-stories-file';
import { createDocsFile } from './file-handlers/create-docs-file';
import { ComponentConfiguration } from './interfaces/component-configuration';
import { logger } from './logger';

import recursive = require('recursive-readdir');

export const runCreationOfStoriesFiles = async (): Promise<void> => {
  logger.info('Creating stories files...');
  try {
    const recursiveFilePaths = await recursive(
      `${__dirname}/../configurations`,
    );
    const importedConfigurations = recursiveFilePaths.map(
      (filePath: string) => {
        const file = require(filePath);
        if (!file.default) {
          throw new Error('Couldn\'t read preview configurations. Please make sure that each file matching the previewConfigPatterns exposes its configuration as a default export.');
        }
        return file.default;
      },
    );
    fs.ensureDirSync(`${__dirname}/../stories/`);
    fs.emptyDirSync(`${__dirname}/../stories/`);
    importedConfigurations.map(
      (config: ComponentConfiguration) => createStoriesFile(config),
    );
    importedConfigurations.map(
      (config: ComponentConfiguration) => createDocsFile(config),
    );
  } catch (err) {
    logger.error(err);
    logger.error("Couldn't create story files for preview");
  }
};
