"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_value_to_attribute_1 = require("./convert-value-to-attribute");
const get_knob_renderer_1 = require("./get-knob-renderer");
exports.generateHtmlTag = (config) => {
    const tagName = config.htmlTagName;
    const props = config.props || [];
    const propsString = props.map(prop => {
        const { knob, value, name } = prop;
        if (knob) {
            const renderKnob = get_knob_renderer_1.getKnobRenderer(knob.type);
            return ` ${name}=${renderKnob(Object.assign(Object.assign({}, knob), { defaultValue: value }))}`;
        }
        return ` ${name}=${convert_value_to_attribute_1.convertValueToAttribute(value)}`;
    }).join('');
    const children = config.children ? config.children.map(child => exports.generateHtmlTag(child)).join('') : config.innerHTML;
    const resources = config.resources && config.resources.length > 0 ? ` data-resources=\"[{paths : [${config.resources.map((r => `'${r}'`))}]}]"` : '';
    const htmlBefore = config.containingHTML ? config.containingHTML.split('#content')[0] : '';
    const htmlAfter = config.containingHTML ? config.containingHTML.split('#content')[1] : '';
    return `${htmlBefore}<${tagName}${resources}${propsString}>${children ? children : ''}</${tagName}>${htmlAfter}`;
};
//# sourceMappingURL=generate-html-tag.js.map