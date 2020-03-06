# biotope-preview 🌻

### Setup 
Install the @biotope/preview package like any other regular npm package:
```bash
npm install @biotope/preview --save
```

### Component configuration
The components you would like to see inside of the preview each need a package.json inside their base folder with a configuration. This is required for the process to work:

```json
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

You can pass the following parameters to adjust the process to your project structure:
* **componentsSrcDir**: Path that contains all package.json files the preview should consider. Subfolders are parsed recursively. (default: 'src/components')
* **staticDir**: Path that contains all the (compiled) resources that you refer to inside the package.json. (default: 'dist/resources/components')

Please notice how the parameters are passed by the following example:

```bash
npx biotope-preview-serve componentsSrcDir=src/to/components staticDir=dist/with/components
```