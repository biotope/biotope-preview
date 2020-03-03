import * as fs from 'fs';
import { IStoryConfiguration } from "./interfaces/IStoryConfiguration";
import { generateHtmlStringForStoryConfig } from './generateHtmlStringForStoryConfig';

export const createStoriesFileForStoryConfig = (storyConfig: IStoryConfiguration) => {
    fs.writeFile(`./stories/${storyConfig.htmlTagName}.stories.js`, generateHtmlStringForStoryConfig(storyConfig), (err) => {
        if (err) throw err;
        console.log(generateHtmlStringForStoryConfig(storyConfig));
        console.log('Saved!');
    });
}