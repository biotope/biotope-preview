import { createTagStringForResource } from './create-tag-string-for-resource';

test('returns script string for js resource', () => {
  expect(createTagStringForResource('path/to/resource.js')).toBe('<script src="path/to/resource.js" type="module" async charset="utf-8"></script>');
});

test('returns script string for mjs resource', () => {
  expect(createTagStringForResource('path/to/resource.mjs')).toBe('<script src="path/to/resource.mjs" type="module" async charset="utf-8"></script>');
});

test('returns link string for css resource', () => {
  expect(createTagStringForResource('path/to/resource.css')).toBe('<link href="path/to/resource.css" rel="stylesheet"></link>');
});

test('returns undefined for other file types', () => {
  expect(createTagStringForResource('path/to/resource.html')).toBe(undefined);
});

test('returns undefined for no defined file type', () => {
  expect(createTagStringForResource('path/to/resource')).toBe(undefined);
});
