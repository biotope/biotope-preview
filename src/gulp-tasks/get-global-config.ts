import { IGlobalConfiguration } from "../interfaces/i-global-configuration";
import { FALLBACK_THEME } from '../constants/fallback-theme';
import { IGlobalConfigurationInput } from '../interfaces/i-global-configuration-input';

require('typescript-require');
const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export function getGlobalConfig(): IGlobalConfiguration {
    console.log("Reading global config...");
    const previewConfig: IGlobalConfigurationInput = require(`${projectBasePath}/preview-config.ts`).previewConfig;
    return {
        globalResources: previewConfig.globalResources || [],
        componentsSrcDir: previewConfig.componentsSrcDir || "src/components",
        resourcesDir: previewConfig.resourcesDir || "dist/resources",
        theme: previewConfig.theme || FALLBACK_THEME,
        outputDir: previewConfig.outputDir || "dist",
    };
}