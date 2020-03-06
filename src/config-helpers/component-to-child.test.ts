import { componentToChild } from './component-to-child';

test("returns a valid child component for a component configuration", () => {
    expect(componentToChild({
        title: "xyz",
        htmlTagName: "div",
        configurations: {
            config: {
                innerHTML: "yes"
            }
        }
    }, 'config')).toMatchObject({
        htmlTagName: "div",
        innerHTML: "yes"
    });
});


test("returns a valid child component with resources for a component configuration", () => {
    expect(componentToChild({
        title: "xyz",
        htmlTagName: "div",
        resources: [
            "path/to/resource.js"
        ],
        configurations: {
            config: {
                innerHTML: "yes"
            }
        }
    }, 'config')).toMatchObject({
        htmlTagName: "div",
        resources: [
            "path/to/resource.js"
        ],
        innerHTML: "yes"
    });
})