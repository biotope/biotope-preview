import * as fs from 'fs';

export const getSubFolders = async (src: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        fs.readdir(src, (error, componentFolders) => {
            if (error) {
                reject(error)
                console.error("Could not list the directory.", error);
                process.exit(1);
            }
            resolve(componentFolders);
        })
    });
}