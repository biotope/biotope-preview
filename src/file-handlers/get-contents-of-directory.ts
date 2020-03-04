import * as fs from 'fs';

export const getContentsOfDirectory = async (src: string, includeAbsolutePath: boolean, foldersOnly: boolean): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        if(fs.lstatSync(src).isDirectory()) {
            fs.readdir(src, (error, subContents) => {
                if (error) {
                    reject(error)
                    console.error("Could not list the directory.", error);
                    process.exit(1);
                }
                if(foldersOnly) {
                    // filter out hidden files/folders
                    const filteredContents = subContents.filter(c => !(/(^|\/)\.[^\/\.]/g).test(c));
                    const folders = filteredContents.filter(c => fs.lstatSync(`${src}/${c}`).isDirectory());
                    includeAbsolutePath ? resolve(folders.map(folder => `${src}/${folder}`)): resolve(folders)
                } else {
                    includeAbsolutePath ? resolve(subContents.map(subContent => `${src}/${subContent}`)): resolve(subContents)
                }
            })
        } else {
            reject(new Error(`This path is no folder: ${src}`))
        }
    });
}