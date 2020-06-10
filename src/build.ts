import { compileTsConfigs } from './tasks/compile-ts-configs';
import { buildPreview } from './tasks/build-preview';
import { logger } from './logger';
import { getGlobalConfig } from './tasks/get-global-config';

export const build = async (pathToConfigFile: string | undefined): Promise<void> => {
  const globalConfig = getGlobalConfig(pathToConfigFile);
  try {
    await compileTsConfigs(globalConfig);
    logger.info('Preview configurations compiled!');
    await buildPreview(globalConfig);
    logger.info('Preview build finished!');
  } catch (err) {
    logger.error(err);
  }
};
