import { IKnobConfig } from "../interfaces/IStoryConfiguration";

export const renderValue = (value: any, key: string, knobs: IKnobConfig) => {
    if (typeof value === 'object') {
        return '=\'' + JSON.stringify(value).replace(/"/g, '\"') + '\'';
    }
    if (knobs) {
        const knobConfigKey = Object.keys(knobs).find(knobKey => knobKey === key);
        const knobConfig = knobs[knobConfigKey];
        if (knobConfig) {
            return `=\${${knobConfig.type}("${knobConfig.name}", "${value}")}`;
        }
    }
    return '=\'' + value + '\'';
}