import { ThemeConfiguration } from './theme-configuration';

export interface GlobalConfiguration {
  componentsSrcDir: string;
  globalResources: string[];
  resourcesDir: string;
  theme: ThemeConfiguration;
  outputDir: string;
}
