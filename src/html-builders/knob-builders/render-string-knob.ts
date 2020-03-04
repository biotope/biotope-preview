import { IStringKnobConfiguration } from "../../interfaces/i-knob-configuration";

export const renderStringKnob = (config: IStringKnobConfiguration, textType: string = 'text') => {
    const { name, defaultValue, groupId }= config;
    return `\"\${${textType}('${name}', '${defaultValue}'${groupId ? `, '${groupId}'` : ''})}\"`;
}