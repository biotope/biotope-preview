import { IArrayKnobConfiguration } from "../../interfaces/i-knob-configuration";
import { escapeObjectForTemplateLiterals } from "../escape-object-for-template-literals";

export const renderArrayKnob = (config: IArrayKnobConfiguration) => {
    const { label, defaultValue, groupId }= config;
    return `\"\${array('${label}', ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, ',', '${groupId}'` : ''})}\"`;
}