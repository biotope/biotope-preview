"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const generate_story_html_1 = require("../html-builders/generate-story-html");
exports.createStoriesFileForStoryConfig = (storyConfig) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, `../../stories/${storyConfig.htmlTagName}.stories.js`), generate_story_html_1.generateStoryHtml(storyConfig), (err) => {
            if (err)
                reject();
            console.log(generate_story_html_1.generateStoryHtml(storyConfig));
            console.log('Saved!');
            resolve();
        });
    });
};
//# sourceMappingURL=create-stories-file-for-story-config.js.map