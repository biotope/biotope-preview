import { logger } from '../logger';
import { GlobalConfiguration } from '../interfaces/global-configuration';
import { DEFAULT_PREVIEW_CONFIG } from '../constants/default-preview-config';

export function getGlobalConfig(configPath: string): GlobalConfiguration {
  logger.info('Reading global config...');
  try {
    const previewConfig: GlobalConfiguration = require(configPath);
    return {
      ...DEFAULT_PREVIEW_CONFIG,
      ...previewConfig,
    };
  } catch {
    logger.warn('No global config found, using default config...');
    return DEFAULT_PREVIEW_CONFIG;
  }
}
