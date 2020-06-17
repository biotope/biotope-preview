import { KnobType } from '../../interfaces/knob-configuration';
import { KNOB_RENDERER_MAP } from '../../constants/knob-renderer-map';
import { renderStringKnob } from '../knob-renderers/render-string-knob';

export const getKnobRenderer = (
  type: KnobType,
): Function => KNOB_RENDERER_MAP[type] || renderStringKnob;
