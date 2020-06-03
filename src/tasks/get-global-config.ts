import { IGlobalConfiguration } from "../interfaces/i-global-configuration";
import { FALLBACK_THEME } from '../constants/fallback-theme';

export function getGlobalConfig(): IGlobalConfiguration {
    console.log("Reading global config...");
    const previewConfig: IGlobalConfiguration = require(`${process.cwd()}/preview-config.js`);
    return {
        globalResources: previewConfig.globalResources || [],
        componentsSrcDir: previewConfig.componentsSrcDir || "src/components",
        resourcesDir: previewConfig.resourcesDir || "dist/resources",
        theme: previewConfig.theme || FALLBACK_THEME,
        outputDir: previewConfig.outputDir || "dist",
    };
}