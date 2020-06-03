import path = require('path');
import * as fs from 'fs';
import { IComponentConfiguration } from "../interfaces/i-component-configuration";

export const createDocsFileForConfig = (config: IComponentConfiguration, globalResources: string[] = []): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.docs.mdx`), config.doc, (err) => {
            if (err) reject();
            resolve();
        });
    });
}