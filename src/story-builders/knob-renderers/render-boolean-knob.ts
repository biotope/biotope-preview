import { BooleanKnobConfiguration } from '../../interfaces/knob-configuration';

export const renderBooleanKnob = (config: BooleanKnobConfiguration): string => {
  const { label, defaultValue, groupId } = config;
  return `"\${boolean('${label}', ${defaultValue}${groupId ? `, '${groupId}'` : ''})}"`;
};
