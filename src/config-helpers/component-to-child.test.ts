import { componentToChild } from './component-to-child';

test("returns a valid child component for a component configuration", () => {
    expect(componentToChild({
        title: "xyz",
        htmlTagName: "div",
        configurations: {
            config: {
                innerHtml: "yes"
            }
        }
    }, 'config')).toMatchObject({
        htmlTagName: "div",
        innerHtml: "yes"
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
                innerHtml: "yes"
            }
        }
    }, 'config')).toMatchObject({
        htmlTagName: "div",
        resources: [
            "path/to/resource.js"
        ],
        innerHtml: "yes"
    });
});

test("returns empty component if selected config does not exist", () => {
    expect(componentToChild({
        title: "xyz",
        htmlTagName: "component",
        resources: [
            "path/to/resource.js"
        ],
        configurations: {
            configX: {
                innerHtml: "yes"
            }
        }
    }, 'configA')).toMatchObject({
        htmlTagName: "component"
    });
});