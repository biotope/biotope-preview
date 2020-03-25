# biotope-preview 🌻

### Setup 
Install the @biotope/preview package like any other regular npm package:
```bash
npm install @biotope/preview --save
```

### Component configuration
The components you would like to see inside of the preview each need configurations. The preview parses your components src directory for all files called "index.ts" inside folders called "preview". 

```ts
{
    "title": "Component Title",
    "htmlTagName": "your-component-html-tag",
    "resources": [
        "path/to/component-script.js"
    ],
    "configurations": [
        {
            "title": "Title for your Component in Storybook",
            "props": [
                {
                    "name": "text-prop",
                    "value": "Lorem ipsum",
                    "knob": {
                        "type": "text",
                        "label": "Component Text",
                    }
                },
                {
                    "name": "number-prop",
                    "value": 123
                }
            ],
            "children": [
                {
                    "htmlTagName": "slotted-component-html-tag",
                    "resources": [...],
                    "props": [...],
                    "children": [...],
                    "innerHTML": "HTML content"
                }
            ]
        }
    ]
}
```

Please make sure that your configuration matches the TypeScript interface IComponentConfiguration defined in the preview package.

### Generating the preview
Since @biotope/preview uses your components' compiled source code inside the dist folder, before generating the preview you need to run

```javascript
npm run build
```

Then you can use either 

```bash
npx biotope-preview-build
```

to create a preview folder in your project with a index.html you then can serve somewhere, or

```bash
npx biotope-preview-serve
```

to only serve a temporary storybook preview.


### Global Configuration

To further configure the biotope preview, you can create a preview-config.js on your project's base level.
You can the define the following (optional) parameters to adjust the process to your project structure:
* **componentsSrcDir (string)**: Path that contains all component preview configuration files the preview should consider. Subfolders are parsed recursively. (default: 'src/components')
* **globalResources (string[ ])**: Paths that should be added as a resource for all component preview configurations. (default: none)
* **resourcesDir (string)**: Path that contains all the (compiled) resources that you refer to inside your component preview configurations. (default: 'dist/resources/components')

Here you can see a examplary preview-config.js:

```js
module.exports = {
    globalResources: [
        "css/styles.css",
    ],
    componentsSrcDir: "src/components",
    resourcesDir: "dist/resources",
};
```