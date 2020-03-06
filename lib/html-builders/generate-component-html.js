"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_story_html_1 = require("./generate-story-html");
const storyTemplate = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

export default { title: #componentName, decorators: [withKnobs, withA11y] };

#configs;
`;
exports.generateComponentHtml = (config) => {
    if (!config) {
        throw Error('Could not read the story configuration.');
    }
    const configs = Object.keys(config.configurations).map(key => generate_story_html_1.generateStoryHtml(config.configurations[key], key, config.htmlTagName)).join(';');
    return storyTemplate
        .replace('#configs', configs)
        .replace(/#componentName/g, `"${config.title}"`)
        .replace(/#dependencies/g, config.resources ? ` data-resources=\"[{paths : [${(config.resources).map((r => `'${r}'`))}]}]\"` : '');
};
//# sourceMappingURL=generate-component-html.js.map