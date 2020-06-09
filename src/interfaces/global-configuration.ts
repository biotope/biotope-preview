import { ThemeConfiguration } from './theme-configuration';

export interface GlobalConfiguration {
  previewConfigPatterns: string[];
  globalResources: string[];
  resourcesDir: string;
  theme: ThemeConfiguration;
  outputDir: string;
}
