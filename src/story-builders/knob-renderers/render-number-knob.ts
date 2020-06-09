import { NumberKnobConfiguration } from '../../interfaces/knob-configuration';
import { escapeObjectForTemplateLiterals } from '../helpers/escape-object-for-template-literals';

export const renderNumberKnob = (config: NumberKnobConfiguration): string => {
  const {
    label, defaultValue, groupId, options,
  } = config;
  return `"\${number('${label}', ${defaultValue}${options ? `, ${escapeObjectForTemplateLiterals(options)}` : ', {}'}${groupId ? `, '${groupId}'` : ''})}"`;
};
