import * as fs from 'fs';
import { IStoryConfiguration } from "../interfaces/i-story-configuration";
import { generateStoryHtml } from '../html-builders/generate-story-html';

export const createStoriesFileForStoryConfig = (storyConfig: IStoryConfiguration): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./stories/${storyConfig.htmlTagName}.stories.js`, generateStoryHtml(storyConfig), (err) => {
            if (err) reject();
            console.log(generateStoryHtml(storyConfig));
            console.log('Saved!');
            resolve();
        });
    });
}