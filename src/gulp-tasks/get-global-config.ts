import { IGlobalConfiguration } from "../interfaces/i-global-configuration";
import { FALLBACK_THEME } from '../constants/fallback-theme';
import { IGlobalConfigurationInput } from '../interfaces/i-global-configuration-input';

export async function getGlobalConfig(): Promise<IGlobalConfiguration> {
    console.log("Reading global config...");
    const previewConfig: IGlobalConfigurationInput = await import(`${process.cwd()}/preview-config.ts`);
    return {
        globalResources: previewConfig.globalResources || [],
        componentsSrcDir: previewConfig.componentsSrcDir || "src/components",
        resourcesDir: previewConfig.resourcesDir || "dist/resources",
        theme: previewConfig.theme || FALLBACK_THEME,
        outputDir: previewConfig.outputDir || "dist",
    };
}