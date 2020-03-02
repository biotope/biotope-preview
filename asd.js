import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

const fs = require('fs');
const componentsSrc = `../../../src/components`;

const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

storiesOf(#componentName, module)#configs;
`
const knobsTemplate = `
.addDecorator(withKnobs)`

const configTemplate = `
.add(#configName, () => {
    return \`<#tagName data-resources=\"[{paths : [\'#componentPath/index.js\']}]\" #attributes></#tagName>\`;
})`

fs.readdir(componentsSrc, (error, componentFolders) => {
    if (error) {
      console.error("Could not list the directory.", error);
      process.exit(1);
    }
    
    componentFolders.forEach((componentFolderPath, index) => {
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

const createStoriesFileForPackageJson = (componentFolderPath, fileName) => {
    const totalComponentPath = componentsSrc + '/' + componentFolderPath;
    const response = fs.readFileSync(totalComponentPath + `/${fileName}`, (error, file) => {
        if (error) {
            console.error("Could not read the component's package.json.", error);
        } else {
            return file;
        }
    });
    const json = JSON.parse(response);
    const tagName = json.tagName;
    const configs = json.previewConfigs.map(config => {
        const props = config.props;
        const knobs = json.knobs;
        const propsString = Object.keys(props).map(propKey => {
            return `${propKey}${props[propKey] ? renderValue(props[propKey], propKey, knobs) : ''}`
        }).join(' ');
        let configString = configTemplate.replace('#attributes', propsString);

        configString = configString.replace(/#tagName/g, tagName);
        configString = configString.replace(/#configName/g, `'${config.name}'`);

        return `${knobs ? knobsTemplate + configString : configString}`;
    }).join('');
    let storyString = storyTemplate
        .replace('#configs', configs)
        .replace(/#componentName/g, `'${json.name}'`)
        .replace(/#componentPath/g, componentFolderPath);
    
    fs.writeFile(`./stories/${tagName}.stories.js`, storyString, (err) => {
        if (err) throw err;
        console.log(storyString);
        console.log('Saved!');
    });
}

const renderValue = (value, key, knobs) => {
    if(typeof value === 'object') {
        return `='${JSON.stringify(value).replace(/"/g, '\"')}'`;
    }
    if(knobs) {
        const knobConfigKey = Object.keys(knobs).find(knobKey => knobKey === key);
        const knobConfig = knobs[knobConfigKey];
        if(knobConfig) {
            return `={${knobConfig.type}("${knobConfig.name}","${value}")}`;
        }
    }
    return `='${value}'`;
}