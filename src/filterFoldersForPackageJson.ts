import * as fs from 'fs';

export const filterFoldersForPackageJson = (srcPath: string, componentFolders: string[]): string[] => {
    return componentFolders.filter((componentFolderPath) => {
        if (fs.lstatSync(srcPath + '/' + componentFolderPath).isDirectory()) {
            fs.readdir(srcPath + '/' + componentFolderPath, (error, componentFolderFiles) => {
                if (error) {
                    console.error("Could not list the directory.", error);
                    process.exit(1);
                }
                componentFolderFiles.forEach((fileName) => {
                    if (fileName === 'package.json') {
                        return `${srcPath}/${componentFolderPath}`;
                    }
                })
            })
        }
    });
}