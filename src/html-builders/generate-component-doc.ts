import { IComponentConfiguration } from "../interfaces/i-component-configuration";

const docImports = `import { Story } from '@storybook/addon-docs/blocks';`
const singleDoc = `
#markdown
#component
`;
const story = `
<Story id="#id" />
`

export const generateComponentDoc = (config: IComponentConfiguration): string => {
    if (!config) {
        throw Error('Could not read the story configuration.')
    }

    return docImports + Object.keys(config.configurations).map(key => singleDoc.replace('#markdown', config.configurations[key].description || '').replace('#component', () => story.replace('#id', `${config.title}--${key}`))).join('');
}