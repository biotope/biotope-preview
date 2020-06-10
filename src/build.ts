import { compileTsConfigs } from './tasks/compile-ts-configs';
import { buildPreview } from './tasks/build-preview';
import { logger } from './logger';

export const build = async (configPath: string): Promise<void> => {
  try {
    console.log(configPath);
    await compileTsConfigs(configPath);
    logger.info('Preview configurations compiled!');
    await buildPreview(configPath);
    logger.info('Preview build finished!');
  } catch (err) {
    logger.error(err);
  }
};
