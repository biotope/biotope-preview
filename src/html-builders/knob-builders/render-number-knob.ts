import { INumberKnobConfiguration } from "../../interfaces/i-knob-configuration";

export const renderNumberKnob = (config: INumberKnobConfiguration) => {
    const { name, defaultValue, groupId, options }= config;
    return `\"\${number('${name}', ${defaultValue}${options ? `, ${JSON.stringify(options)}` : ', {}'}${groupId ? `, '${groupId}'` : ''})}\"`;
}