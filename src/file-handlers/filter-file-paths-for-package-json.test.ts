import { filterFilePathsForPackageJson } from './filter-file-paths-for-package-json';

test("only returns strings that contain 'package.json'", () => {
    expect(filterFilePathsForPackageJson(['path/to/index.js', 'path/to/main.scss', 'path/to/package.json'])).toEqual(['path/to/package.json']);
});