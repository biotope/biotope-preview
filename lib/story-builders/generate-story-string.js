"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStoryString = void 0;
const generate_html_tag_1 = require("./generate-html-tag");
const camelize_1 = require("./helpers/camelize");
const configTemplate = `
export const #configName = () => {
    return \`#htmlTag\`;
}`;
exports.generateStoryString = (config, title, htmlTagName, resources) => {
    const elementString = generate_html_tag_1.generateHtmlTag(Object.assign(Object.assign({}, config), { htmlTagName, resources }));
    let configString = configTemplate.replace(/#configName/g, camelize_1.camelize(title));
    configString = configString.replace('#htmlTag', elementString);
    return configString;
};
//# sourceMappingURL=generate-story-string.js.map