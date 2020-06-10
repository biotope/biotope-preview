import { logger } from '../logger';
import { GlobalConfiguration } from '../interfaces/global-configuration';
import { DEFAULT_PREVIEW_CONFIG } from '../constants/default-preview-config';

export function getGlobalConfig(pathToConfigFile = 'preview-config.js'): GlobalConfiguration {
  logger.info('Reading global config...');
  try {
    const previewConfig: GlobalConfiguration = require(`${process.cwd()}/${pathToConfigFile}`);
    return {
      ...DEFAULT_PREVIEW_CONFIG,
      ...previewConfig,
    };
  } catch {
    logger.warn('No global config found, using default config...');
    return DEFAULT_PREVIEW_CONFIG;
  }
}
