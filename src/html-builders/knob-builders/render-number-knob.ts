import { INumberKnobConfiguration } from "../../interfaces/i-knob-configuration";
import { escapeObjectForTemplateLiterals } from "../escape-object-for-template-literals";

export const renderNumberKnob = (config: INumberKnobConfiguration) => {
    const { name, defaultValue, groupId, options }= config;
    return `\"\${number('${name}', ${defaultValue}${options ? `, ${escapeObjectForTemplateLiterals(options)}` : ', {}'}${groupId ? `, '${groupId}'` : ''})}\"`;
}