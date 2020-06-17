import { StringKnobConfiguration } from '../../interfaces/knob-configuration';

export const renderStringKnob = (config: StringKnobConfiguration): string => {
  const { label, defaultValue, groupId } = config;
  return `"\${text('${label}', '${defaultValue}'${groupId ? `, '${groupId}'` : ''})}"`;
};
