"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertValueToAttribute_1 = require("./convertValueToAttribute");
const generateHtmlStringForSlotConfig_1 = require("./generateHtmlStringForSlotConfig");
const renderKnob_1 = require("./renderKnob");
const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

storiesOf(#componentName, module)#configs;
`;
const knobsTemplate = `
.addDecorator(withKnobs)`;
const configTemplate = `
.add(#configName, () => {
    return \`<#tagName#dependencies#attributes>#content</#tagName>\`;
})`;
exports.generateHtmlTemplateForStoryConfig = (storyConfig) => {
    if (!storyConfig) {
        throw Error('Could not read the story configuration.');
    }
    const tagName = storyConfig.htmlTagName;
    const knobs = storyConfig.knobs || {};
    const configs = storyConfig.previewConfigs.map(config => {
        const props = config.props || {};
        const propsString = Object.keys(props).map(propKey => {
            const isKnobProp = Object.keys(knobs).find(knobKey => knobKey === propKey);
            return ` ${propKey}=${isKnobProp ? renderKnob_1.renderKnob(knobs[propKey].name, props[propKey], knobs[propKey].type) : convertValueToAttribute_1.convertValueToAttribute(props[propKey])}`;
        }).join('');
        let configString = configTemplate.replace('#attributes', propsString);
        configString = configString.replace(/#tagName/g, tagName);
        configString = configString.replace(/#configName/g, `"${config.name}"`);
        if (config.slot) {
            configString = configString.replace('#content', config.slot.map(slotConfig => generateHtmlStringForSlotConfig_1.generateHtmlStringForSlotConfig(slotConfig)).join(''));
        }
        else if (config.innerHTML) {
            configString = configString.replace('#content', config.innerHTML);
        }
        else {
            configString = configString.replace('#content', '');
        }
        return `${Object.keys(knobs).length !== 0 ? knobsTemplate + configString : configString}`;
    }).join('');
    return storyTemplate
        .replace('#configs', configs)
        .replace(/#componentName/g, `"${storyConfig.name}"`)
        .replace(/#dependencies/g, storyConfig.resources ? ` data-resources=\"[{paths : [${(storyConfig.resources).map((r => `'${r}'`))}]}]\"` : '');
};
//# sourceMappingURL=generateHtmlTemplateForStoryConfig.js.map