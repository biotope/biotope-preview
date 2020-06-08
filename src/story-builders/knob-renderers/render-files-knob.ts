import { FilesKnobConfiguration } from '../../interfaces/knob-configuration';
import { escapeObjectForTemplateLiterals } from '../helpers/escape-object-for-template-literals';

export const renderFilesKnob = (config: FilesKnobConfiguration): string => {
  const { label, groupId, acceptedFormats } = config;
  return `"\${files('${label}'${acceptedFormats ? `, ${escapeObjectForTemplateLiterals(acceptedFormats.map((f) => `.${f}`).join(', '))}` : ''}${groupId ? `, [], '${groupId}'` : ''})}"`;
};
