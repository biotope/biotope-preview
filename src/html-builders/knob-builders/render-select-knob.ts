import { ISelectKnobConfiguration } from "../../interfaces/i-knob-configuration";
import { escapeObjectForTemplateLiterals } from "../escape-object-for-template-literals";

export const renderSelectKnob = (config: ISelectKnobConfiguration) => {
    const { name, defaultValue, groupId, options }= config;
    return `\"\${select('${name}', ${escapeObjectForTemplateLiterals(options)}, ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}\"`;
}