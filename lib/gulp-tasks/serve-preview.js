"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const run_creation_of_stories_files_1 = require("../run-creation-of-stories-files");
const run_storybook_1 = require("../run-storybook");
async function servePreview() {
    console.log("Serving the preview...");
    await run_creation_of_stories_files_1.runCreationOfStoriesFiles();
    await run_storybook_1.runStorybook({ mode: 'dev' });
}
exports.servePreview = servePreview;
//# sourceMappingURL=serve-preview.js.map