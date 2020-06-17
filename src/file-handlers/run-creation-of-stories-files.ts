import * as fs from 'fs-extra';
import { createStoriesFile } from './create-stories-file';
import { createDocsFile } from './create-docs-file';
import { ComponentConfiguration } from '../interfaces/component-configuration';
import { logger } from '../logger';
import { createHtmlFile } from './create-html-file';
import { polyfillBrowserVariables } from '../polyfills';
import { GlobalConfiguration } from '../interfaces/global-configuration';

import recursive = require('recursive-readdir');

export const runCreationOfStoriesFiles = async (
  globalConfig: GlobalConfiguration,
  serve = false,
): Promise<void> => {
  logger.info('Creating stories files...');
  try {
    const recursiveFilePaths = await recursive(
      `${__dirname}/../../configurations`,
    );
    const importedConfigurations: ComponentConfiguration[] = recursiveFilePaths.map(
      (filePath: string) => {
        delete require.cache[require.resolve(filePath)];
        const file = require(filePath);
        if (!file.default) {
          throw new Error('Couldn\'t read preview configurations. Please make sure that each file matching the previewConfigPatterns exposes its configuration as a default export.');
        }
        return file.default;
      },
    );

    fs.ensureDirSync(`${__dirname}/../../stories/`);
    fs.emptyDirSync(`${__dirname}/../../stories/`);
    fs.ensureDirSync(`${__dirname}/../../html/`);
    fs.emptyDirSync(`${__dirname}/../../html/`);
    fs.ensureDirSync(`${process.cwd()}/html`);
    fs.emptyDirSync(`${process.cwd()}/html`);

    polyfillBrowserVariables();

    importedConfigurations.forEach(
      (config) => {
        const component = require(`${process.cwd()}/${globalConfig.resourcesDir}/${config.legacyScriptPath}`).default;
        if (serve) {
          createHtmlFile(Object.keys(config.configurations).map(((key) => ({
            title: component.name,
            htmlTagName: component.componentName,
            resources: config.resources,
            props: config.configurations[key].props,
          }))));
        } else {
          const extendedConfig = {
            ...config,
            title: component.name,
            htmlTagName: component.componentName,
          };
          createStoriesFile(extendedConfig);
          createDocsFile(extendedConfig);
        }
      },
    );
  } catch (err) {
    logger.error(err);
    logger.error("Couldn't create story files for preview");
  }
};
