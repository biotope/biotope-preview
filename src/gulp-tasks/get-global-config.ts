import { IGlobalConfiguration } from "../interfaces/i-global-configuration";
import { FALLBACK_THEME } from '../constants/fallback-theme';

const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export function getGlobalConfig(): IGlobalConfiguration {
    console.log("Reading global config...");
    const previewConfig: IGlobalConfiguration = require(`${projectBasePath}/preview-config.js`);
    return {
        globalResources: previewConfig.globalResources || [],
        componentsSrcDir: previewConfig.componentsSrcDir || "src/components",
        resourcesDir: previewConfig.resourcesDir || "dist/resources",
        theme: previewConfig.theme || FALLBACK_THEME,
        outputDir: previewConfig.outputDir || "dist",
    };
}