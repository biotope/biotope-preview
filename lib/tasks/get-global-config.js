"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalConfig = void 0;
const default_preview_config_1 = require("../constants/default-preview-config");
function getGlobalConfig() {
    console.log("Reading global config...");
    try {
        const previewConfig = require(`${process.cwd()}/preview-config.js`);
        return Object.assign(Object.assign({}, previewConfig), default_preview_config_1.DEFAULT_PREVIEW_CONFIG);
    }
    catch (_a) {
        console.log("No global config found, using default config...");
        return default_preview_config_1.DEFAULT_PREVIEW_CONFIG;
    }
}
exports.getGlobalConfig = getGlobalConfig;
//# sourceMappingURL=get-global-config.js.map