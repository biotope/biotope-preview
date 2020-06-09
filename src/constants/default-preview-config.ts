import { IGlobalConfiguration } from "../interfaces/i-global-configuration";
import { FALLBACK_THEME } from "./fallback-theme";

export const DEFAULT_PREVIEW_CONFIG: IGlobalConfiguration = {
    globalResources: [],
    previewConfigPatterns: ['src/components/**/preview/*.ts'],
    resourcesDir: "dist/resources",
    theme: FALLBACK_THEME,
    outputDir: "dist",
};