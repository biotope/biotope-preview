"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertValueToAttribute_1 = require("./convertValueToAttribute");
exports.generateHtmlStringForSlotConfig = (slotConfig) => {
    const tagName = slotConfig.htmlTagName;
    const props = slotConfig.props || {};
    const propsString = Object.keys(props).map(propKey => ` ${propKey}=${props[propKey] ? convertValueToAttribute_1.convertValueToAttribute(props[propKey]) : ''}`).join('') || '';
    const slot = slotConfig.slot ? slotConfig.slot.map(slotConfig => exports.generateHtmlStringForSlotConfig(slotConfig)).join('') : slotConfig.innerHTML;
    const resources = slotConfig.resources ? ` data-resources=\"[{paths : [${slotConfig.resources.map((r => `'${r}'`))}]}]"` : '';
    return `<${tagName}${resources}${propsString}>${slot ? slot : ''}</${tagName}>`;
};
//# sourceMappingURL=generateHtmlStringForSlotConfig.js.map