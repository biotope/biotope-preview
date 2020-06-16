import { KnobType } from '../interfaces/knob-configuration';
import { renderStringKnob } from '../story-builders/knob-renderers/render-string-knob';
import { renderNumberKnob } from '../story-builders/knob-renderers/render-number-knob';
import { renderBooleanKnob } from '../story-builders/knob-renderers/render-boolean-knob';
import { renderObjectKnob } from '../story-builders/knob-renderers/render-object-knob';
import { renderArrayKnob } from '../story-builders/knob-renderers/render-array-knob';
import { renderSelectKnob } from '../story-builders/knob-renderers/render-select-knob';
import { renderRadioButtonsKnob } from '../story-builders/knob-renderers/render-radio-buttons-knob';
import { renderFilesKnob } from '../story-builders/knob-renderers/render-files-knob';

export const KNOB_RENDERER_MAP: {[key in KnobType]: Function} = {
  text: renderStringKnob,
  date: renderStringKnob,
  color: renderStringKnob,
  number: renderNumberKnob,
  boolean: renderBooleanKnob,
  object: renderObjectKnob,
  array: renderArrayKnob,
  select: renderSelectKnob,
  radioButtons: renderRadioButtonsKnob,
  files: renderFilesKnob,
};
