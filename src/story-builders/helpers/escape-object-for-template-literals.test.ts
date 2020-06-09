import { escapeObjectForTemplateLiterals } from './escape-object-for-template-literals';

test('escapes objects correctly', () => {
  expect(escapeObjectForTemplateLiterals({
    x: 1,
    y: '2',
    z: {
      a: [1, '2'],
    },
  })).toBe('{"x":1,"y":"2","z":{"a":[1,"2"]}}');
});
