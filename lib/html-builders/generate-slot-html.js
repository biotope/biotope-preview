"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_value_to_attribute_1 = require("./convert-value-to-attribute");
const get_knob_renderer_1 = require("./get-knob-renderer");
exports.generateSlotHtml = (slotConfig) => {
    const tagName = slotConfig.htmlTagName;
    const props = slotConfig.props || [];
    const propsString = props.map(prop => {
        const { knob, value, name } = prop;
        if (knob) {
            const renderKnob = get_knob_renderer_1.getKnobRenderer(knob.type);
            return ` ${name}=${renderKnob(Object.assign(Object.assign({}, knob), { defaultValue: value }))}`;
        }
        return ` ${name}=${convert_value_to_attribute_1.convertValueToAttribute(value)}`;
    }).join('');
    const slot = slotConfig.slot ? slotConfig.slot.map(slotConfig => exports.generateSlotHtml(slotConfig)).join('') : slotConfig.innerHTML;
    const resources = slotConfig.resources ? ` data-resources=\"[{paths : [${slotConfig.resources.map((r => `'${r}'`))}]}]"` : '';
    return `<${tagName}${resources}${propsString}>${slot ? slot : ''}</${tagName}>`;
};
//# sourceMappingURL=generate-slot-html.js.map