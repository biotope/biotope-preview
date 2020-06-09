import { runCreationOfStoriesFiles } from '../run-creation-of-stories-files';
import { runStorybook } from '../run-storybook';
import { getGlobalConfig } from './get-global-config';
import { createThemeFile } from '../file-handlers/create-theme-file';
import { logger } from '../logger/index';

export async function servePreview(): Promise<void> {
  logger.info('Serving the preview...');
  const globalConfig = getGlobalConfig();
  try {
    await runCreationOfStoriesFiles(globalConfig.globalResources);
    await createThemeFile(globalConfig.theme);
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
