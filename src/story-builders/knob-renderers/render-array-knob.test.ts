import { renderArrayKnob } from './render-array-knob';

test('returns array knob', () => {
  expect(renderArrayKnob({ label: 'knobName', defaultValue: ['1', '2'] })).toBe('"${array(\'knobName\', ["1","2"])}"');
});

test('returns array knob with groupId', () => {
  expect(renderArrayKnob({ label: 'knobName', defaultValue: ['1', '2'], groupId: '123' })).toBe('"${array(\'knobName\', ["1","2"], \',\', \'123\')}"');
});
