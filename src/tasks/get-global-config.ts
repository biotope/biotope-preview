import { GlobalConfiguration } from '../interfaces/global-configuration';
import { DEFAULT_PREVIEW_CONFIG } from '../constants/default-preview-config';

export function getGlobalConfig(): GlobalConfiguration {
  console.log('Reading global config...');
  try {
    const previewConfig: GlobalConfiguration = require(`${process.cwd()}/preview-config.js`);
    return {
      ...DEFAULT_PREVIEW_CONFIG,
      ...previewConfig,
    };
  } catch {
    console.log('No global config found, using default config...');
    return DEFAULT_PREVIEW_CONFIG;
  }
}
