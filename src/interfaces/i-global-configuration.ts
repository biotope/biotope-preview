import { IThemeConfiguration } from "./i-theme-configuration";

export interface IGlobalConfiguration {
    previewConfigPatterns: string[];
    globalResources: string[];
    resourcesDir: string;
    theme: IThemeConfiguration;
    outputDir: string;
}