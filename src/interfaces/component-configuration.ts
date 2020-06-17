import { StoryConfiguration } from './story-configuration';

export interface ComponentConfiguration {
  title: string;
  htmlTagName: string;
  docs?: string;
  resources?: string[];
  configurations: {
    [key: string]: StoryConfiguration;
  };
}
