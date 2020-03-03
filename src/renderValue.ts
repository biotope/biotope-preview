import { IKnobConfiguration } from "./interfaces/IStoryConfiguration";

export const renderValue = (value: any, key: string, knobs?: IKnobConfiguration) => {
    if (typeof value === 'object') {
        return '=\"' + JSON.stringify(value).replace(/"/g, '\'').replace(/'/g, '\'') + '\"';
    }
    if (knobs) {
        const knobConfigKey = Object.keys(knobs).find(knobKey => knobKey === key);
        if (knobConfigKey) {
            const knobConfig = knobs[knobConfigKey];
            return `=\${${knobConfig.type}('${knobConfig.name}', '${value}')}`;
        }
    }
    return '=\"' + value + '\"';
}