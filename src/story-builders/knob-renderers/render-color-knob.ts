import { StringKnobConfiguration } from '../../interfaces/knob-configuration';

export const renderColorKnob = (config: StringKnobConfiguration): string => {
  const { label, defaultValue, groupId } = config;
  return `"\${color('${label}', '${defaultValue}'${groupId ? `, '${groupId}'` : ''})}"`;
};
