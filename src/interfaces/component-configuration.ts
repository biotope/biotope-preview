import { StoryConfiguration, TypedStoryConfiguration } from './story-configuration';

export interface ComponentConfiguration {
  legacyScriptPath: string;
  docs?: string;
  resources?: string[];
  configurations: {
    [key: string]: StoryConfiguration;
  };
}

export interface TypedComponentConfiguration<T> {
  legacyScriptPath: string;
  docs?: string;
  resources?: string[];
  configurations: {
    [key: string]: TypedStoryConfiguration<T>;
  };
}

export interface ExtendedComponentConfiguration extends ComponentConfiguration
{
  title: string;
  htmlTagName: string;
}
