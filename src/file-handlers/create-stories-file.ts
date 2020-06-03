import path = require('path');
import * as fs from 'fs';
import { IComponentConfiguration } from "../interfaces/i-component-configuration";
import { generateComponentString } from '../story-builders/generate-component-string';

export const createStoriesFileForConfig = (config: IComponentConfiguration, globalResources: string[] = []): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, `../../stories/${config.htmlTagName}.stories.js`), generateComponentString(config, globalResources), (err) => {
            if (err) reject();
            resolve();
        });
    });
}