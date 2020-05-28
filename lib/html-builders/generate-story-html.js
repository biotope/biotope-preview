"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_html_tag_1 = require("./generate-html-tag");
const camelize_1 = require("./helpers/camelize");
const configTemplate = `
export const #configName = () => {
    return \`#htmlTag\`;
}`;
exports.generateStoryHtml = (config, title, htmlTagName, resources) => {
    const elementString = generate_html_tag_1.generateHtmlTag({ htmlTagName, props: config.props, children: config.children, innerHTML: config.innerHTML, resources });
    let configString = configTemplate.replace(/#configName/g, camelize_1.camelize(title));
    if (config.containingHTML) {
        const containerWithElement = config.containingHTML.replace('#content', elementString);
        configString = configString.replace('#htmlTag', containerWithElement);
    }
    configString = configString.replace('#htmlTag', elementString);
    return configString;
};
//# sourceMappingURL=generate-story-html.js.map