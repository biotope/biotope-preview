# biotope-preview 🌻

### Setup 
Install the @biotope/preview package like any other regular npm package:
```bash
npm install @biotope/preview --save
```

### Component configuration
The components you would like to see inside of the preview each need a package.json inside their base folder with a configuration. This is required for the process to work:

```javascript
{
    "name": "Component Name",
    "htmlTagName": "your-component-html-tag",
    "resources": [
        "path/to/component-script.js"
    ],
    "previewConfigs": [
        {
            "name": "Name for your Component Preview in Storybook",
            "props": [
                {
                    "name": "text-prop",
                    "value": "Lorem ipsum"
                },
                {
                    "name": "number-prop",
                    "value": 123
                }
            ]
            "slot": [
                {
                    "htmlTagName": "slotted-component-html-tag",
                    "resources": [...],
                    "props": [...],
                    "slot": [...]
                    "innerHTML": "HTML content"
                }
            ]
        }
    ]
}
```

Please make sure that your configuration matches the TypeScript interface IStoryConfiguration defined in the preview package.

### Generating the preview
Since @biotope/preview uses your components' compiled source code inside the dist folder, before generating the preview you need to run 
```javascript
npm run build
```

Then you can use either 

```javascript
npx biotope-preview-build
```
to create a preview folder in your project with a index.html you then can serve somewhere, or

```javascript
npx biotope-preview-serve
```

to only serve a temporary storybook preview.
