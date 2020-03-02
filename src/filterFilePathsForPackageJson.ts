export const filterFilePathsForPackageJson = (filePaths: string[]): string[] => {
    return filePaths.filter((filePath) => {
        if (filePath.indexOf('package.json') !== -1) {
            return true;
        }
        return false;
    });
}