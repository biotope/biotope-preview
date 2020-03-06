import { IStoryConfiguration } from "../interfaces/i-story-configuration";
import { generateHtmlTag } from "./generate-html-tag";
import { camelize } from "./helpers/camelize";

const configTemplate = `
export const #configName = () => {
    return \`#htmlTag\`;
}`

export const generateStoryHtml = (config: IStoryConfiguration, title: string, htmlTagName: string, resources?: string[]) => {
    const elementString = generateHtmlTag({htmlTagName, props: config.props, children: config.children, innerHTML: config.innerHTML, resources}); 
    let configString = configTemplate.replace(/#configName/g, camelize(title));
    configString = configString.replace('#htmlTag', elementString);
    
    return configString;
}