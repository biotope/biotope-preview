import path = require('path');
import * as fs from 'fs';
import { IComponentConfiguration } from "../interfaces/i-component-configuration";
import { generateComponentHtml } from '../html-builders/generate-component-html';

export const createStoriesFileForConfig = (config: IComponentConfiguration): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.stories.js`), generateComponentHtml(config), (err) => {
            if (err) reject();
            console.log(generateComponentHtml(config));
            console.log('Saved!');
            resolve();
        });
    });
}