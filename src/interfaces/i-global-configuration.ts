import { IThemeConfiguration } from "./i-theme-configuration";

export interface IGlobalConfiguration {
    componentsSrcDir?: string;
    globalResources?: string[];
    resourcesDir?: string;
    theme?: IThemeConfiguration;
}