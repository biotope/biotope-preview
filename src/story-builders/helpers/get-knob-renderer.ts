import { renderStringKnob } from '../knob-renderers/render-string-knob';
import { renderNumberKnob } from '../knob-renderers/render-number-knob';
import { renderBooleanKnob } from '../knob-renderers/render-boolean-knob';
import { renderArrayKnob } from '../knob-renderers/render-array-knob';
import { renderObjectKnob } from '../knob-renderers/render-object-knob';
import { renderFilesKnob } from '../knob-renderers/render-files-knob';
import { renderSelectKnob } from '../knob-renderers/render-select-knob';
import { renderRadioButtonsKnob } from '../knob-renderers/render-radio-buttons-knob';

export const getKnobRenderer = (
  type: string,
): any => {
  switch (type) {
    case 'text': return renderStringKnob;
    case 'color': return renderStringKnob;
    case 'number': return renderNumberKnob;
    case 'boolean': return renderBooleanKnob;
    case 'object': return renderObjectKnob;
    case 'array': return renderArrayKnob;
    case 'select': return renderSelectKnob;
    case 'radioButtons': return renderRadioButtonsKnob;
    case 'files': return renderFilesKnob;
    default: return renderStringKnob;
  }
};
