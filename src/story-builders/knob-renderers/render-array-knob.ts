import { ArrayKnobConfiguration } from '../../interfaces/knob-configuration';
import { escapeObjectForTemplateLiterals } from '../helpers/escape-object-for-template-literals';

export const renderArrayKnob = (config: ArrayKnobConfiguration): string => {
  const { label, defaultValue, groupId } = config;
  return `"\${array('${label}', ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, ',', '${groupId}'` : ''})}"`;
};
