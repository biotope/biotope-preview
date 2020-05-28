"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPreview = void 0;
const run_creation_of_stories_files_1 = require("../run-creation-of-stories-files");
const run_storybook_1 = require("../run-storybook");
const get_global_config_1 = require("./get-global-config");
async function buildPreview() {
    console.log("Building the preview...");
    const globalConfig = get_global_config_1.getGlobalConfig();
    await run_creation_of_stories_files_1.runCreationOfStoriesFiles(globalConfig.globalResources);
    await run_storybook_1.runStorybook({ mode: 'static', staticDir: globalConfig.resourcesDir });
}
exports.buildPreview = buildPreview;
//# sourceMappingURL=build-preview.js.map