import { StoryConfiguration } from './story-configuration';

export interface HtmlElementConfiguration extends StoryConfiguration {
  htmlTagName: string;
  resources?: string[];
}
