"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_value_to_attribute_1 = require("./convert-value-to-attribute");
exports.generateSlotHtml = (slotConfig) => {
    const tagName = slotConfig.htmlTagName;
    const props = slotConfig.props || {};
    const propsString = Object.keys(props).map(propKey => ` ${propKey}=${props[propKey] ? convert_value_to_attribute_1.convertValueToAttribute(props[propKey]) : ''}`).join('') || '';
    const slot = slotConfig.slot ? slotConfig.slot.map(slotConfig => exports.generateSlotHtml(slotConfig)).join('') : slotConfig.innerHTML;
    const resources = slotConfig.resources ? ` data-resources=\"[{paths : [${slotConfig.resources.map((r => `'${r}'`))}]}]"` : '';
    return `<${tagName}${resources}${propsString}>${slot ? slot : ''}</${tagName}>`;
};
//# sourceMappingURL=generate-slot-html.js.map