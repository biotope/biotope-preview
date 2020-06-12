import { runCreationOfStoriesFiles } from '../run-creation-of-stories-files';
import { runStorybook } from '../run-storybook';
import { createThemeFile } from '../file-handlers/create-theme-file';
import { logger } from '../logger';
import { GlobalConfiguration } from '../interfaces/global-configuration';
import { addGlobalResourcesToPreviewHead } from '../file-handlers/add-global-resources-to-preview-head';

export async function servePreview(globalConfig: GlobalConfiguration): Promise<void> {
  logger.info('Serving the preview...');
  try {
    await runCreationOfStoriesFiles();
    logger.info('Stories files created!');
    await addGlobalResourcesToPreviewHead(globalConfig.globalResources);
    logger.info('Scripts/links for global resources added!');
    await createThemeFile(globalConfig.theme);
    logger.info('Theme file created!');
    await runStorybook({
      mode: 'dev',
      staticDir: globalConfig.resourcesDir,
      outputDir: globalConfig.outputDir,
    });
  } catch (err) {
    logger.error(err);
    logger.error("Couldn't serve the preview!");
  }
}
