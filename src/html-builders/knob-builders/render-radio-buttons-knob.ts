import { IRadioButtonsKnobConfiguration } from "../../interfaces/i-knob-configuration";
import { escapeObjectForTemplateLiterals } from "../escape-object-for-template-literals";

export const renderRadioButtonsKnob = (config: IRadioButtonsKnobConfiguration) => {
    const { name, defaultValue, groupId, options }= config;
    return `\"\${radios('${name}', ${escapeObjectForTemplateLiterals(options)}, ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}\"`;
}