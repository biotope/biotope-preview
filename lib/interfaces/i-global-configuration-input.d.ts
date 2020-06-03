import { IThemeConfiguration } from "./i-theme-configuration";
export interface IGlobalConfigurationInput {
    componentsSrcDir?: string;
    globalResources?: string[];
    resourcesDir?: string;
    theme?: IThemeConfiguration;
    outputDir?: string;
}
