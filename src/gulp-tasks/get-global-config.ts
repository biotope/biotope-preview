import { IGlobalConfiguration } from "../interfaces/i-global-configuration";
import { FALLBACK_THEME } from '../constants/fallback-theme';
import { IGlobalConfigurationInput } from '../interfaces/i-global-configuration-input';

require('typescript-require');

export function getGlobalConfig(): IGlobalConfiguration {
    console.log("Reading global config...");
    const previewConfig: IGlobalConfigurationInput = require(`${process.cwd()}/preview-config.ts`).previewConfig;
    return {
        globalResources: previewConfig.globalResources || [],
        componentsSrcDir: previewConfig.componentsSrcDir || "src/components",
        resourcesDir: previewConfig.resourcesDir || "dist/resources",
        theme: previewConfig.theme || FALLBACK_THEME,
        outputDir: previewConfig.outputDir || "dist",
    };
}