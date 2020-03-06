import { IStringKnobConfiguration } from "../../interfaces/i-knob-configuration";

export const renderStringKnob = (config: IStringKnobConfiguration, textType: string = 'text') => {
    const { label, defaultValue, groupId }= config;
    return `\"\${${textType}('${label}', '${defaultValue}'${groupId ? `, '${groupId}'` : ''})}\"`;
}