import { SelectKnobConfiguration } from '../../interfaces/knob-configuration';
import { escapeObjectForTemplateLiterals } from '../helpers/escape-object-for-template-literals';

export const renderSelectKnob = (config: SelectKnobConfiguration): string => {
  const {
    label, defaultValue, groupId, options,
  } = config;
  return `"\${select('${label}', ${escapeObjectForTemplateLiterals(options)}, ${escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}"`;
};
