const path = require('path');
const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];

export function getGlobalConfig() {
    console.log("Reading global config...");
    const previewConfig = require(`${projectBasePath}/preview-config.js`);
    return {
        globalResources: previewConfig.globalResources || [],
        componentsSrcDir: previewConfig.componentsSrcDir || "src/components",
        resourcesDir: previewConfig.resourcesDir || "dist/resources"
    };
}