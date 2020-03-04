import { IObjectKnobConfiguration } from "../../interfaces/i-knob-configuration";
import { escapeObjectForTemplateLiterals } from "../escape-object-for-template-literals";

export const renderObjectKnob = (config: IObjectKnobConfiguration) => {
    const { name, defaultValue, groupId }= config;
    return `\"\${object('${name}', ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}\"`;
}