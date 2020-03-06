import { IStoryConfiguration } from "./i-story-configuration";
export interface IHtmlElementConfiguration extends IStoryConfiguration {
    htmlTagName: string;
    resources?: string[];
}
