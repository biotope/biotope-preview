import { GlobalConfiguration } from '../interfaces/global-configuration';
import { FALLBACK_THEME } from './fallback-theme';

export const DEFAULT_PREVIEW_CONFIG: GlobalConfiguration = {
  globalResources: [],
  componentsSrcDir: 'src/components',
  resourcesDir: 'dist/resources',
  theme: FALLBACK_THEME,
  outputDir: 'dist',
};
