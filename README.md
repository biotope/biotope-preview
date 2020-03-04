# biotope-preview 🌻

First, install the @biotope/preview package as any other regular npm package:
```bash
npm install https://github.com/biotope/biotope-preview.git --save
```
Next, your component needs a package.json with the following data. This is required for the process to work:

```javascript
{
    "name": "yourComponentName",
    "tagName": "your-component-html-tag",
    "previewConfigs": [
        {
            "name": "Name for your Component Preview in Storybook",
            "props": {
                "exampletext": {
                    "headline": "Example",
                    "claim": "With a claim",
                    "secondaryColor": false
                },
                "exampleimage": {
                    "url": "https://picsum.photos/id/804/1000/600",
                    "alignment": "center",
                    "alignmentLarge": "center",
                    "altText": "Image"
                }
            }
        }
    ]
}
```
After creating a package.json with the required data, you have to run:
```javascript
npm run build
```
because storybook relies on the compiled components' source files in the `dist` folder.

It parses your src/components/ subfolders for the component's package.json's and creates previews based on the configuration inside.

Then you can run either 

```javascript
npx biotope-preview-build
```

or

```javascript
npx biotope-preview-serve
```

`biotope-preview-build` will create a preview folder in your project with a index.html you then can serve somewhere. `biotope-preview-serve` will not create any folder, but only serve a temporary storybook preview.
