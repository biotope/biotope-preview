"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const generateHtmlTemplateForStoryConfig_1 = require("../htmlBuilders/generateHtmlTemplateForStoryConfig");
exports.createStoriesFileForStoryConfig = (storyConfig) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./stories/${storyConfig.htmlTagName}.stories.js`, generateHtmlTemplateForStoryConfig_1.generateHtmlTemplateForStoryConfig(storyConfig), (err) => {
            if (err)
                reject();
            console.log(generateHtmlTemplateForStoryConfig_1.generateHtmlTemplateForStoryConfig(storyConfig));
            console.log('Saved!');
            resolve();
        });
    });
};
//# sourceMappingURL=createStoriesFileForStoryConfig.js.map