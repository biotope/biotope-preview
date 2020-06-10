import { StringKnobConfiguration } from '../../interfaces/knob-configuration';

export const renderStringKnob = (config: StringKnobConfiguration, textType = 'text'): string => {
  const { label, defaultValue, groupId } = config;
  return `"\${${textType}('${label}', '${defaultValue}'${groupId ? `, '${groupId}'` : ''})}"`;
};
