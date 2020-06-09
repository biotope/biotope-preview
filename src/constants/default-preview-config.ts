import { GlobalConfiguration } from '../interfaces/global-configuration';
import { FALLBACK_THEME } from './fallback-theme';

export const DEFAULT_PREVIEW_CONFIG: GlobalConfiguration = {
  globalResources: [],
  previewConfigPatterns: ['src/components/**/preview/*.ts'],
  resourcesDir: 'dist/resources',
  theme: FALLBACK_THEME,
  outputDir: 'dist',
};
