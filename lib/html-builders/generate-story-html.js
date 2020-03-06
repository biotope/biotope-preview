"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_knob_renderer_1 = require("./get-knob-renderer");
const convert_value_to_attribute_1 = require("./convert-value-to-attribute");
const generate_html_tag_1 = require("./generate-html-tag");
const camelize_1 = require("./helpers/camelize");
const configTemplate = `
export const #configName = () => {
    return \`<#tagName#dependencies#attributes>#content</#tagName>\`;
}`;
exports.generateStoryHtml = (config, title, htmlTagName) => {
    const props = config.props || [];
    const propsString = props.map(prop => {
        const { knob, value, name } = prop;
        if (knob) {
            const renderKnob = get_knob_renderer_1.getKnobRenderer(knob.type);
            return ` ${name}=${renderKnob(Object.assign(Object.assign({}, knob), { defaultValue: value }))}`;
        }
        return ` ${name}=${convert_value_to_attribute_1.convertValueToAttribute(value)}`;
    }).join('');
    let configString = configTemplate.replace('#attributes', propsString);
    configString = configString.replace(/#tagName/g, htmlTagName);
    configString = configString.replace(/#configName/g, camelize_1.camelize(title));
    if (config.children) {
        configString = configString.replace('#content', config.children.map(child => generate_html_tag_1.generateHtmlTag(child)).join(''));
    }
    else if (config.innerHTML) {
        configString = configString.replace('#content', config.innerHTML);
    }
    else {
        configString = configString.replace('#content', '');
    }
    return configString;
};
//# sourceMappingURL=generate-story-html.js.map