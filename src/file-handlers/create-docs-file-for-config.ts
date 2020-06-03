import path = require('path');
import * as fs from 'fs';
import { IComponentConfiguration } from "../interfaces/i-component-configuration";

export const createDocsFileForConfig = (config: IComponentConfiguration): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (config.doc) {
            fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.docs.mdx`), config.doc, (err) => {
                if (err) reject();
                resolve();
            });
        } else {
            resolve();
        }
    });
}