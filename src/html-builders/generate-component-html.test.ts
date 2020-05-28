import { generateComponentHtml } from "./generate-component-html";

const imports = `import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";`;

test("returns HTML string for tag name only", () => {
    const expectedTemplate = `${imports}
        export default { title: "Component", decorators: [withKnobs, withA11y] };

        export const config1 = () => {
            return \`<component></component>\`;
        };
    `;
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        configurations: {
            config1: {
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for resources", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs, withA11y] };

    export const config1 = () => {
        return \`<component data-resources="[{paths : ['path/to/resource.js']}]"></component>\`;
    };`;
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        resources: [
            "path/to/resource.js"
        ],
        configurations: {
            config1: {
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for resources with global resources", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs, withA11y] };

    export const config1 = () => {
        return \`<component data-resources="[{paths : ['path/to/resource.js', 'global/resource.js']}]"></component>\`;
    };`;
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        resources: [
            "path/to/resource.js"
        ],
        configurations: {
            config1: {
            }
        }
    }, ["global/resource.js"]);

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for props", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs, withA11y] };

    export const config1 = () => {
        return \`<component prop1=\"test\" prop2=2 prop3='{\"subProp1\":\"test\"}'></component>\`;
    };`;
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        configurations: {
            config1: {
                props: [
                    {
                        name: "prop1",
                        value: "test"
                    },
                    {
                        name: "prop2",
                        value: 2
                    },
                    {
                        name: "prop3",
                        value: {
                            subProp1: "test"
                        }
                    }
                ],
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for multiple preview configs", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs, withA11y] };

    export const config1 = () => {
        return \`<component prop1=\"test\" prop2=2 prop3='{\"subProp1\":\"test\"}'></component>\`;
    };
    export const config2 = () => {
        return \`<component prop1=\"test2\" prop2=2 prop3='{\"subProp1\":\"test2\"}'></component>\`;
    };`;
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        configurations: {
            config1: {
                props: [
                    {
                        name: "prop1",
                        value: "test"
                    },
                    {
                        name: "prop2",
                        value: 2
                    },
                    {
                        name: "prop3",
                        value: {
                            subProp1: "test"
                        }
                    }
                ],
            },
            config2: {
                props: [
                    {
                        name: "prop1",
                        value: "test2"
                    },
                    {
                        name: "prop2",
                        value: 2
                    },
                    {
                        name: "prop3",
                        value: {
                            subProp1: "test2"
                        }
                    }
                ],
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for preview config with slot", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs, withA11y] };

    export const config1 = () => {
        return \`<component><div></div></component>\`;
    };`
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        configurations: {
            config1: {
                children: [{
                    htmlTagName: "div"
                }]
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for preview config with innerHTML", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs, withA11y] };

    export const config1 = () => {
        return \`<component>Test</component>\`;
    };`
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        configurations: {
            config1: {
                innerHTML: "Test"
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for preview config with containing html", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs, withA11y] };

    export const config1 = () => {
        return \`<div><component>Test</component></div>\`;
    };`
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        configurations: {
            config1: {
                innerHTML: "Test",
                containingHTML: `<div>#content</div>`
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for preview config with knobs", () => {
    const expectedTemplate = `${imports}
    export default { title: "Component", decorators: [withKnobs, withA11y] };

    export const config1 = () => {
        return \`<component prop1=\"\${text('Prop 1', 'Test Value')}\" prop2='\${JSON.stringify(object('Prop 2', {\"x\":1})).replace(/"/g, '\"').replace(/'/g, '\"')}'></component>\`;
    };`
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        configurations: {
            config1: {
                props: [
                    {
                        name: "prop1",
                        value: "Test Value",
                        knob: {
                            type: "text",
                            label: "Prop 1"
                        }
                    },
                    {
                        name: "prop2",
                        value: { x: 1 },
                        knob: {
                            type: "object",
                            label: "Prop 2"
                        }
                    }
                ],
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});

test("returns HTML string for preview config and template", () => {
    const expectedTemplate = `${imports}
        export default { title: "Component", decorators: [withKnobs, withA11y] };

        export const config1 = () => {
            return \`<component></component>\`;
        };

        export const template1 = () => {
            return \`<article><component></component></article>\`;
        };
    `;
    const generatedTemplate = generateComponentHtml({
        title: "Component",
        htmlTagName: "component",
        configurations: {
            config1: {
            }
        },
        templates: {
            template1: {
                containingHTML: '<article>#content</article>'
            }
        }
    });

    expect(generatedTemplate.replace(/\s/g, '')).toBe(expectedTemplate.replace(/\s/g, ''));
});
