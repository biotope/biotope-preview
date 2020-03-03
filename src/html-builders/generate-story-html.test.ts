import { generateStoryHtml } from "./generate-story-html";

const imports = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";`;

test("returns HTML string for tag name only", () => {
    const expectedTemplate = `${imports}
        export default { title: "Component", decorators: [withKnobs] };

        export const config1 = () => {
            return \`<component></component>\`;
        };
    `;
    const generatedTemplate = generateStoryHtml({
        name: "Component",
        htmlTagName: "component",
        previewConfigs: [{
            name: "Config 1",

        }]
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for resources", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs] };

    export const config1 = () => {
        return \`<component data-resources="[{paths : ['path/to/resource.js']}]"></component>\`;
    };`;
    const generatedTemplate = generateStoryHtml({
        name: "Component",
        htmlTagName: "component",
        resources: [
            "path/to/resource.js"
        ],
        previewConfigs: [{
            name: "Config 1",
        }]
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for props", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs] };

    export const config1 = () => {
        return \`<component prop1=\"test\" prop2=2 prop3=\"{'subProp1':'test'}\"></component>\`;
    };`;
    const generatedTemplate = generateStoryHtml({
        name: "Component",
        htmlTagName: "component",
        previewConfigs: [{
            name: "Config 1",
            props: {
                prop1: "test",
                prop2: 2,
                prop3: {
                    subProp1: "test"
                }
            },
        }]
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for multiple preview configs", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs] };

    export const config1 = () => {
        return \`<component prop1=\"test\" prop2=2 prop3=\"{'subProp1':'test'}\"></component>\`;
    };
    export const config2 = () => {
        return \`<component prop1=\"test2\" prop2=2 prop3=\"{'subProp1':'test2'}\"></component>\`;
    };`;
    const generatedTemplate = generateStoryHtml({
        name: "Component",
        htmlTagName: "component",
        previewConfigs: [{
            name: "Config 1",
            props: {
                prop1: "test",
                prop2: 2,
                prop3: {
                    subProp1: "test"
                }
            },
        }, {
            name: "Config 2",
            props: {
                prop1: "test2",
                prop2: 2,
                prop3: {
                    subProp1: "test2"
                }
            },
        }]
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for preview config with slot", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs] };

    export const config1 = () => {
        return \`<component><div></div></component>\`;
    };`
    const generatedTemplate = generateStoryHtml({
        name: "Component",
        htmlTagName: "component",
        previewConfigs: [{
            name: "Config 1",
            slot: [{
                htmlTagName: "div"
            }]
        }]
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for preview config with innerHTML", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs] };

    export const config1 = () => {
        return \`<component>Test</component>\`;
    };`
    const generatedTemplate = generateStoryHtml({
        name: "Component",
        htmlTagName: "component",
        previewConfigs: [{
            name: "Config 1",
            innerHTML: "Test"
        }]
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for preview config with knobs", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs] };

    export const config1 = () => {
        return \`<component prop1=\${text("Prop 1", "Test Value")}></component>\`;
    };`
    const generatedTemplate = generateStoryHtml({
        name: "Component",
        htmlTagName: "component",
        previewConfigs: [{
            name: "Config 1",
            props: {
                prop1: "Test Value"
            }
        }],
        knobs: {
            prop1: {
                type: "text",
                name: "Prop 1"
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});