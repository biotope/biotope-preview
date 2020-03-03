define("file-handlers/get-sub-folders", ["require", "exports", "fs"], function (require, exports, fs) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSubFolders = async (src, includeAbsolutePath = false) => {
        return new Promise((resolve, reject) => {
            fs.readdir(src, (error, componentFolders) => {
                if (error) {
                    reject(error);
                    console.error("Could not list the directory.", error);
                    process.exit(1);
                }
                includeAbsolutePath ? resolve(componentFolders.map(componentFolder => `${src}/${componentFolder}`)) : resolve(componentFolders);
            });
        });
    };
});
define("file-handlers/filter-file-paths-for-package-json", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filterFilePathsForPackageJson = (filePaths) => {
        return filePaths.filter((filePath) => {
            if (filePath.indexOf('package.json') !== -1) {
                return true;
            }
            return false;
        });
    };
});
define("interfaces/i-story-configuration", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("html-builders/convert-value-to-attribute", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertValueToAttribute = (value) => {
        if (typeof value === 'number' || typeof value === 'boolean') {
            return value;
        }
        else if (typeof value === 'object') {
            return `"${JSON.stringify(value).replace(/"/g, '\'').replace(/'/g, '\'')}"`;
        }
        else {
            return `"${value}"`;
        }
    };
});
define("html-builders/generate-slot-html", ["require", "exports", "html-builders/convert-value-to-attribute"], function (require, exports, convert_value_to_attribute_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateSlotHtml = (slotConfig) => {
        const tagName = slotConfig.htmlTagName;
        const props = slotConfig.props || {};
        const propsString = Object.keys(props).map(propKey => ` ${propKey}=${props[propKey] ? convert_value_to_attribute_1.convertValueToAttribute(props[propKey]) : ''}`).join('') || '';
        const slot = slotConfig.slot ? slotConfig.slot.map(slotConfig => exports.generateSlotHtml(slotConfig)).join('') : slotConfig.innerHTML;
        const resources = slotConfig.resources ? ` data-resources=\"[{paths : [${slotConfig.resources.map((r => `'${r}'`))}]}]"` : '';
        return `<${tagName}${resources}${propsString}>${slot ? slot : ''}</${tagName}>`;
    };
});
define("html-builders/render-knob", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderKnob = (name, defaultValue, type) => {
        let valueAttribute;
        if (typeof defaultValue === 'number' || typeof defaultValue === 'boolean') {
            valueAttribute = defaultValue;
        }
        else if (typeof defaultValue === 'object') {
            valueAttribute = `"${JSON.stringify(defaultValue).replace(/"/g, '\'').replace(/'/g, '\'')}"`;
        }
        else {
            valueAttribute = `"${defaultValue}"`;
        }
        return `\${${type}("${name}", ${valueAttribute})}`;
    };
});
define("html-builders/generate-story-html", ["require", "exports", "html-builders/convert-value-to-attribute", "html-builders/generate-slot-html", "html-builders/render-knob"], function (require, exports, convert_value_to_attribute_2, generate_slot_html_1, render_knob_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

storiesOf(#componentName, module)#configs;
`;
    const knobsTemplate = `
.addDecorator(withKnobs)`;
    const configTemplate = `
.add(#configName, () => {
    return \`<#tagName#dependencies#attributes>#content</#tagName>\`;
})`;
    exports.generateStoryHtml = (storyConfig) => {
        if (!storyConfig) {
            throw Error('Could not read the story configuration.');
        }
        const tagName = storyConfig.htmlTagName;
        const knobs = storyConfig.knobs || {};
        const configs = storyConfig.previewConfigs.map(config => {
            const props = config.props || {};
            const propsString = Object.keys(props).map(propKey => {
                const isKnobProp = Object.keys(knobs).find(knobKey => knobKey === propKey);
                return ` ${propKey}=${isKnobProp ? render_knob_1.renderKnob(knobs[propKey].name, props[propKey], knobs[propKey].type) : convert_value_to_attribute_2.convertValueToAttribute(props[propKey])}`;
            }).join('');
            let configString = configTemplate.replace('#attributes', propsString);
            configString = configString.replace(/#tagName/g, tagName);
            configString = configString.replace(/#configName/g, `"${config.name}"`);
            if (config.slot) {
                configString = configString.replace('#content', config.slot.map(slotConfig => generate_slot_html_1.generateSlotHtml(slotConfig)).join(''));
            }
            else if (config.innerHTML) {
                configString = configString.replace('#content', config.innerHTML);
            }
            else {
                configString = configString.replace('#content', '');
            }
            return `${Object.keys(knobs).length !== 0 ? knobsTemplate + configString : configString}`;
        }).join('');
        return storyTemplate
            .replace('#configs', configs)
            .replace(/#componentName/g, `"${storyConfig.name}"`)
            .replace(/#dependencies/g, storyConfig.resources ? ` data-resources=\"[{paths : [${(storyConfig.resources).map((r => `'${r}'`))}]}]\"` : '');
    };
});
define("file-handlers/create-stories-file-for-story-config", ["require", "exports", "fs", "html-builders/generate-story-html"], function (require, exports, fs, generate_story_html_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createStoriesFileForStoryConfig = (storyConfig) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(`./stories/${storyConfig.htmlTagName}.stories.js`, generate_story_html_1.generateStoryHtml(storyConfig), (err) => {
                if (err)
                    reject();
                console.log(generate_story_html_1.generateStoryHtml(storyConfig));
                console.log('Saved!');
                resolve();
            });
        });
    };
});
define("file-handlers/get-json-content", ["require", "exports", "fs"], function (require, exports, fs) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getJsonContent = (filePath) => {
        const response = fs.readFileSync(filePath, "utf8");
        return JSON.parse(response);
    };
});
define("index", ["require", "exports", "path", "file-handlers/get-sub-folders", "file-handlers/filter-file-paths-for-package-json", "file-handlers/create-stories-file-for-story-config", "file-handlers/get-json-content"], function (require, exports, path, get_sub_folders_1, filter_file_paths_for_package_json_1, create_stories_file_for_story_config_1, get_json_content_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const projectBasePath = path.resolve(__dirname).split('/node_modules')[0];
    const componentsSrc = `${projectBasePath}/src/components`;
    (async () => {
        const subFolders = await get_sub_folders_1.getSubFolders(componentsSrc);
        const filesPaths = await Promise.all(subFolders.map(subFolder => get_sub_folders_1.getSubFolders(`${componentsSrc}/${subFolder}`, true)));
        const filteredFilesPaths = filter_file_paths_for_package_json_1.filterFilePathsForPackageJson([].concat.apply([], filesPaths));
        const storyConfigs = filteredFilesPaths.map((filePath) => get_json_content_1.getJsonContent(filePath));
        await Promise.all(storyConfigs.map((storyConfig) => create_stories_file_for_story_config_1.createStoriesFileForStoryConfig(storyConfig)));
    })().catch(e => process.exit(e));
});
//# sourceMappingURL=index.js.map