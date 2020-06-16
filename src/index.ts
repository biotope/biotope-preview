import { compileTsConfigs } from './file-handlers/compile-ts-configs';
import { logger } from './logger';
import { getGlobalConfig } from './file-handlers/get-global-config';
import { runCreationOfStoriesFiles } from './file-handlers/run-creation-of-stories-files';
import { addGlobalResourcesToPreviewHead } from './file-handlers/add-global-resources-to-preview-head';
import { createThemeFile } from './file-handlers/create-theme-file';
import { runStorybook } from './run-storybook';

export const createPreview = async (
  serve: boolean,
  pathToConfigFile: string | undefined,
): Promise<void> => {
  const globalConfig = getGlobalConfig(pathToConfigFile);
  try {
    await compileTsConfigs(globalConfig);
    logger.info('Preview configurations compiled!');
    logger.info('Building the preview...');
    await runCreationOfStoriesFiles();
    logger.info('Stories files created!');
    addGlobalResourcesToPreviewHead(globalConfig.globalResources);
    logger.info('Scripts/links for global resources added!');
    createThemeFile(globalConfig.theme);
    logger.info('Theme file created!');
    await runStorybook({
      mode: serve ? 'dev' : 'static',
      staticDir: globalConfig.resourcesDir,
      outputDir: globalConfig.outputDir,
    });
    logger.info('Preview build finished!');
  } catch (err) {
    logger.error(err);
    logger.error("Couldn't build the preview");
  }
};
