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
because storybook needs the component in the `dist` folder.

To create a preview folder for your biotope elements project, you need to add the following scripts to your project's package.json:
```javascript
"storybook:build": "npm explore @biotope/preview -- npm run storybook:build",
"storybook:serve": "npm explore @biotope/preview -- npm run storybook:serve"
```
It parses your src/components/ subfolders for the component's package.json's and creates previews based on the configuration inside.

Then you can run either `storybook:build` or `storybook:serve`. `storybook:build` will create a preview folder in your project with a index.html you can then open in a browser. `storybook:serve` will not create any folder, but only serve a temporary storybook preview.
