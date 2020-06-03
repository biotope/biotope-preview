import { IBooleanKnobConfiguration } from "../../interfaces/i-knob-configuration";

export const renderBooleanKnob = (config: IBooleanKnobConfiguration) => {
    const { label, defaultValue, groupId }= config;
    return `\"\${boolean('${label}', ${defaultValue}${groupId ? `, '${groupId}'` : ''})}\"`;
}