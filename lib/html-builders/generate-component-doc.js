"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComponentDoc = void 0;
const docImports = `import { Story } from '@storybook/addon-docs/blocks';`;
const singleDoc = `
#markdown
#component
`;
const story = `
<Story id="#id" />
`;
exports.generateComponentDoc = (config) => {
    if (!config) {
        throw Error('Could not read the story configuration.');
    }
    return docImports + Object.keys(config.configurations).map(key => singleDoc.replace('#markdown', config.configurations[key].description || '').replace('#component', () => story.replace('#id', `${config.title}--${key}`))).join('');
};
//# sourceMappingURL=generate-component-doc.js.map