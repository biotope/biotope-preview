import * as fs from 'fs';
import { IStoryConfiguration, IKnobConfig } from './interfaces/IStoryConfiguration';

const componentsSrc = `../../../src/components`;

const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

storiesOf(#componentName, module)#configs;
`

const knobsTemplate = `
.addDecorator(withKnobs)`

const configTemplate = `
.add(#configName, () => {
    return \`<#tagName data-resources=\"[{paths : #dependencies}]\" #attributes></#tagName>\`;
})`

fs.readdir(componentsSrc, (error, componentFolders) => {
    if (error) {
      console.error("Could not list the directory.", error);
      process.exit(1);
    }
    
    componentFolders.forEach((componentFolderPath) => {
        if(fs.lstatSync(componentsSrc + '/' + componentFolderPath).isDirectory()) {
            fs.readdir(componentsSrc + '/' + componentFolderPath, (error, componentFolderFiles) => {
                if (error) {
                    console.error("Could not list the directory.", error);
                    process.exit(1);
                }
                componentFolderFiles.forEach((fileName) => {
                    if(fileName === 'package.json') {
                        createStoriesFileForPackageJson(
                            componentFolderPath,
                            fileName
                        );
                    }
                })
            })
        }
    })
});

const createStoriesFileForPackageJson = (componentFolderPath: string, fileName: string) => {
    const totalComponentPath = componentsSrc + '/' + componentFolderPath;
    const response = fs.readFileSync(totalComponentPath + `/${fileName}`, "utf8");
    const json: IStoryConfiguration = JSON.parse(response);
    const tagName = json.htmlTagName;
    const knobs = json.knobs;
    const configs = json.previewConfigs.map(config => {
        const props = config.props;
        const propsString = Object.keys(props).map(propKey => `${propKey}${props[propKey] ? renderValue(props[propKey], propKey, knobs) : ''}`).join(' ');
        let configString = configTemplate.replace('#attributes', propsString);

        configString = configString.replace(/#tagName/g, tagName);
        configString = configString.replace(/#configName/g, `'${config.name}'`);

        return `${knobs ? knobsTemplate + configString : configString}`;
    }).join('');
    const storyString = storyTemplate
        .replace('#configs', configs)
        .replace(/#componentName/g, `'${json.name}'`)
        .replace(/#dependencies/g, `[${json.resources.map((r => `'${r}'`))}]`);
    
    fs.writeFile(`./stories/${tagName}.stories.js`, storyString, (err) => {
        if (err) throw err;
        console.log(storyString);
        console.log('Saved!');
    });
}

const renderValue = (value: any, key: string, knobs: IKnobConfig) => {
    if(typeof value === 'object') {
        return '=\'' + JSON.stringify(value).replace(/"/g, '\"') + '\'';
    }
    if(knobs) {
        const knobConfigKey = Object.keys(knobs).find(knobKey => knobKey === key);
        const knobConfig = knobs[knobConfigKey];
        if(knobConfig) {
            return `=\${${knobConfig.type}("${knobConfig.name}", "${value}")}`;
        }
    }
    return '=\'' + value + '\'';
}