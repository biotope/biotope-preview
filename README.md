# biotope-preview 🌻

### Setup
```bash
npm install @biotope/preview --save
```

### Component configuration
The components you would like to see inside of the preview need configurations. The preview parses your components src directory for all files called "index.ts" inside folders called "preview".

```ts
{
    "title": "Component Title",
    "docs": `
        # Markdown
        ## To describe my component.

        I can as much markdown as I want.
    `
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
* **globalResources (string[])**: Paths that should be added as a resource for all component preview configurations. (default: [])
* **resourcesDir (string)**: Path that contains all the (compiled) resources that you refer to inside your component preview configurations. (default: 'dist/resources/components')
* **outputDir (string)**: Path where Storybook compiles its build to. (default: 'dist/preview')
* **theme (object)**: See "Customize your Storybook theme".

Here you can see a examplary preview-config.js:

```js
module.exports = {
    globalResources: [
        "css/styles.css",
    ],
    componentsSrcDir: "src/components",
    resourcesDir: "dist/resources",
    outputDir: "preview",
};
```

### Customize your Storybook Theme

The theme can be defined in the preview-config.js in the root of your project.
There are different parameters to adapt the theme. Here's an example:

```js
module.exports = {
	theme: {
        base: 'light',
        colorPrimary: '#607DBE',
        colorSecondary: '#F07D61',
        brandTitle: '@biotope/preview',
        brandUrl: 'https://biotope.sh/',
        brandImage: 'https://biotope.sh/_assets/biotope-logo.svg',
	}
};
```
There's a fallback theme, so you don't have to change the theme. You can also pass just one parameter, for example the colorSecondary:

```js
module.exports = {
	theme: {
        colorSecondary: '#ff238d'
    }
};
```

For all available theming parameters, please check out the [Storybook documentation](https://storybook.js.org/docs/configurations/theming/).