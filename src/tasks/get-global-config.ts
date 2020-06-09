import { logger } from '../logger';
import { GlobalConfiguration } from '../interfaces/global-configuration';
import { DEFAULT_PREVIEW_CONFIG } from '../constants/default-preview-config';

export function getGlobalConfig(): GlobalConfiguration {
  logger.info('Reading global config...');
  try {
    const previewConfig: GlobalConfiguration = require(`${process.cwd()}/preview-config.js`);
    return {
      ...DEFAULT_PREVIEW_CONFIG,
      ...previewConfig,
    };
  } catch {
    logger.warn('No global config found, using default config...');
    return DEFAULT_PREVIEW_CONFIG;
  }
}
