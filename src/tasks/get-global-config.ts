import { IGlobalConfiguration } from "../interfaces/i-global-configuration";
import { DEFAULT_PREVIEW_CONFIG } from "../constants/default-preview-config";

export function getGlobalConfig(): IGlobalConfiguration {
    console.log("Reading global config...");
    try {
        const previewConfig: IGlobalConfiguration = require(`${process.cwd()}/preview-config.js`);
        return {
            ...previewConfig,
            ...DEFAULT_PREVIEW_CONFIG,
        };
    }
    catch {
        console.log("No global config found, using default config...");
        return DEFAULT_PREVIEW_CONFIG;
    }
}