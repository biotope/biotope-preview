import { IStoryConfiguration } from "./i-story-configuration";

export interface IComponentConfiguration {
    title: string;
    htmlTagName: string;
    resources?: string[];
    configurations: {
        [key: string]: IStoryConfiguration;
    };
    templates?: {
        [key: string]: IStoryConfiguration;
    }
}