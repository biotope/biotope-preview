"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const run_creation_of_stories_files_1 = require("../run-creation-of-stories-files");
const run_storybook_1 = require("../run-storybook");
async function buildPreview() {
    console.log("Building the preview...");
    await run_creation_of_stories_files_1.runCreationOfStoriesFiles();
    await run_storybook_1.runStorybook({ mode: 'static' });
}
exports.buildPreview = buildPreview;
//# sourceMappingURL=build-preview.js.map