import { getKnobRenderer } from './get-knob-renderer';

test('returns a function for a knob type', () => {
  expect(getKnobRenderer('color')).toBeInstanceOf(Function);
});
