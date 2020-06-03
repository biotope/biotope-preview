import { IRadioButtonsKnobConfiguration } from "../../interfaces/i-knob-configuration";
import { escapeObjectForTemplateLiterals } from "../helpers/escape-object-for-template-literals";

export const renderRadioButtonsKnob = (config: IRadioButtonsKnobConfiguration) => {
    const { label, defaultValue, groupId, options }= config;
    return `\"\${radios('${label}', ${escapeObjectForTemplateLiterals(options)}, ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}\"`;
}