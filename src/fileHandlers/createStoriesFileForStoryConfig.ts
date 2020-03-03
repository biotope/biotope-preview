import * as fs from 'fs';
import { IStoryConfiguration } from "../interfaces/IStoryConfiguration";
import { generateHtmlTemplateForStoryConfig } from '../htmlBuilders/generateHtmlTemplateForStoryConfig';

export const createStoriesFileForStoryConfig = (storyConfig: IStoryConfiguration): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./stories/${storyConfig.htmlTagName}.stories.js`, generateHtmlTemplateForStoryConfig(storyConfig), (err) => {
            if (err) reject();
            console.log(generateHtmlTemplateForStoryConfig(storyConfig));
            console.log('Saved!');
            resolve();
        });
    });
}