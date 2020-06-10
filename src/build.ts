import { compileTsConfigs } from './tasks/compile-ts-configs';
import { buildPreview } from './tasks/build-preview';
import { logger } from './logger';

export const build = async (): Promise<void> => {
  try {
    await compileTsConfigs();
    logger.info('Preview configurations compiled!');
    await buildPreview();
    logger.info('Preview build finished!');
  } catch (err) {
    logger.error(err);
  }
};
