import { IStoryConfiguration } from "./i-story-configuration";
import { IHtmlElementConfiguration } from "./i-html-element-configuration";
export interface IComponentConfiguration {
    title: string;
    htmlTagName: string;
    resources?: string[];
    configurations: {
        [key: string]: IStoryConfiguration;
    };
    templates?: {
        [key: string]: IHtmlElementConfiguration;
    };
}
