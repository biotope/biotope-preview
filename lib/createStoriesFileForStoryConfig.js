"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const generateHtmlStringForStoryConfig_1 = require("./generateHtmlStringForStoryConfig");
exports.createStoriesFileForStoryConfig = (storyConfig) => {
    fs.writeFile(`./stories/${storyConfig.htmlTagName}.stories.js`, generateHtmlStringForStoryConfig_1.generateHtmlStringForStoryConfig(storyConfig), (err) => {
        if (err)
            throw err;
        console.log(generateHtmlStringForStoryConfig_1.generateHtmlStringForStoryConfig(storyConfig));
        console.log('Saved!');
    });
};
//# sourceMappingURL=createStoriesFileForStoryConfig.js.map