import { ISlottedConfiguration } from "./interfaces/IStoryConfiguration";
import { renderValue } from "./renderValue";

export const generateHtmlStringForSlotConfig = (slotConfig: ISlottedConfiguration): string => {
    const tagName = slotConfig.htmlTagName;
    const props = slotConfig.props || {};
    const propsString = Object.keys(props).map(propKey => ` ${propKey}${props[propKey] ? renderValue(props[propKey], propKey) : ''}`).join('') || '';
    const slot = slotConfig.slot ? slotConfig.slot.map(slotConfig => generateHtmlStringForSlotConfig(slotConfig)).join('') : slotConfig.innerHTML;
    const resources = slotConfig.resources ? ` data-resources=\"[{paths : [${slotConfig.resources.map((r => `'${r}'`))}]}]"` : '';
    return `<${tagName}${resources}${propsString}>${slot ? slot : ''}</${tagName}>`;
};