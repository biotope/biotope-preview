import { renderColorKnob } from './render-color-knob';

test('returns color knob', () => {
  expect(renderColorKnob({ label: 'knobName', defaultValue: '#fff', groupId: '123' })).toBe('"${color(\'knobName\', \'#fff\', \'123\')}"');
});
