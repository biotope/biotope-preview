import { ObjectKnobConfiguration } from '../../interfaces/knob-configuration';
import { escapeObjectForTemplateLiterals } from '../helpers/escape-object-for-template-literals';

export const renderObjectKnob = (config: ObjectKnobConfiguration): string => {
  const { label, defaultValue, groupId } = config;
  return `'\${JSON.stringify(object('${label}', ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})).replace(/"/g, '"').replace(/'/g, '"')}'`;
};
