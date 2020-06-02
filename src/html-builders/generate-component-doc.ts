import { IComponentConfiguration } from "../interfaces/i-component-configuration";

const docImports = `import { Story } from '@storybook/addon-docs/blocks';`
const singleDoc = `
#markdown
#component
`;
const story = `
<Story id="#id" />
`

const kebabCase = (string: string) => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()

export const generateComponentDoc = (config: IComponentConfiguration): string => {
    if (!config) {
        throw Error('Could not read the story configuration.')
    }

    return docImports + Object.keys(config.configurations).map(key => singleDoc.replace('#markdown', config.configurations[key].description || '').replace('#component', () => story.replace('#id', `${kebabCase(config.title)}--${kebabCase(key)}`))).join('');
}