import { compileTsConfigs } from './tasks/compile-ts-configs';
import { servePreview } from './tasks/serve-preview';
import { logger } from './logger';
import { getGlobalConfig } from './tasks/get-global-config';

export const serve = async (pathToConfigFile: string | undefined): Promise<void> => {
  const globalConfig = getGlobalConfig(pathToConfigFile);
  try {
    await compileTsConfigs(globalConfig);
    logger.info('Preview configurations compiled!');
    await servePreview(globalConfig);
    logger.info('Preview serve finished!');
  } catch (err) {
    logger.error(err);
  }
};
