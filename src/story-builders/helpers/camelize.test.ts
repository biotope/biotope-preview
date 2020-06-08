import { camelize } from './camelize';

test('camelizes pascal case', () => {
  expect(camelize('SuperNice')).toBe('superNice');
});

test('camelizes string with spaces', () => {
  expect(camelize('Component Name')).toBe('componentName');
});
