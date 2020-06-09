import { RadioButtonsKnobConfiguration } from '../../interfaces/knob-configuration';
import { escapeObjectForTemplateLiterals } from '../helpers/escape-object-for-template-literals';

export const renderRadioButtonsKnob = (config: RadioButtonsKnobConfiguration): string => {
  const {
    label, defaultValue, groupId, options,
  } = config;
  return `"\${radios('${label}', ${escapeObjectForTemplateLiterals(options)}, ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}"`;
};
