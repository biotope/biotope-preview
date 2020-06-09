import { runCreationOfStoriesFiles } from '../run-creation-of-stories-files';
import { runStorybook } from '../run-storybook';
import { getGlobalConfig } from './get-global-config';
import { createThemeFile } from '../file-handlers/create-theme-file';
import { logger } from '../logger';

export async function buildPreview(): Promise<void> {
  logger.info('Building the preview...');
  const globalConfig = getGlobalConfig();
  try {
    await runCreationOfStoriesFiles(globalConfig.globalResources);
    logger.info('Stories files created!');
    await createThemeFile(globalConfig.theme);
    logger.info('Theme file created!');
    await runStorybook({ mode: 'static', staticDir: globalConfig.resourcesDir, outputDir: globalConfig.outputDir });
  } catch (err) {
    logger.error(err);
    logger.error("Couldn't build the preview");
  }
}
