"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalConfig = void 0;
const fallback_theme_1 = require("../constants/fallback-theme");
async function getGlobalConfig() {
    console.log("Reading global config...");
    const previewConfig = await Promise.resolve().then(() => require(`${process.cwd()}/preview-config.ts`));
    return {
        globalResources: previewConfig.globalResources || [],
        componentsSrcDir: previewConfig.componentsSrcDir || "src/components",
        resourcesDir: previewConfig.resourcesDir || "dist/resources",
        theme: previewConfig.theme || fallback_theme_1.FALLBACK_THEME,
        outputDir: previewConfig.outputDir || "dist",
    };
}
exports.getGlobalConfig = getGlobalConfig;
//# sourceMappingURL=get-global-config.js.map