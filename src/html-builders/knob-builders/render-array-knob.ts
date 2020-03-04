import { IArrayKnobConfiguration } from "../../interfaces/i-knob-configuration";
import { escapeObjectForTemplateLiterals } from "../escape-object-for-template-literals";

export const renderArrayKnob = (config: IArrayKnobConfiguration) => {
    const { name, defaultValue, groupId }= config;
    return `\"\${array('${name}', ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, ',', '${groupId}'` : ''})}\"`;
}