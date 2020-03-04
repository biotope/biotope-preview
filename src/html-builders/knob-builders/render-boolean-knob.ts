import { IBooleanKnobConfiguration } from "../../interfaces/i-knob-configuration";

export const renderBooleanKnob = (config: IBooleanKnobConfiguration) => {
    const { name, defaultValue, groupId }= config;
    return `\"\${boolean('${name}', ${defaultValue}${groupId ? `, '${groupId}'` : ''})}\"`;
}