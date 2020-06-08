import { renderNumberKnob } from './render-number-knob';

test('returns number knob', () => {
  expect(renderNumberKnob({ label: 'knobName', defaultValue: 1 })).toBe('"${number(\'knobName\', 1, {})}"');
});

test('returns number knob with options', () => {
  expect(renderNumberKnob({ label: 'knobName', defaultValue: 1, options: { range: true } })).toBe('"${number(\'knobName\', 1, {"range":true})}"');
});

test('returns number knob with groupId', () => {
  expect(renderNumberKnob({ label: 'knobName', defaultValue: 1, groupId: '123' })).toBe('"${number(\'knobName\', 1, {}, \'123\')}"');
});
