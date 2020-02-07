# biotope-preview 🌻 

To create a preview folder for your biotope elements project, you need to add the following scripts to your project's package.json: `
"storybook:build": "npm explore @biotope/preview -- npm run storybook:build",
"storybook:serve": "npm explore @biotope/preview -- npm run storybook:serve"
`

It parses your src/components/ subfolders for the component's package.json's and creates previews based on the configuration inside.
The following data is required for the process to work:

```
    "name": "Stage",
    "tagName": "x-stage",
    "previewConfigs": [
        {
            "name": "Default",
            "text": {
                "headline": "Stage",
                "claim": "With a claim",
                "secondaryColor": false
            },
            "image": {
                "url": "https://picsum.photos/id/804/1000/600",
                "alignment": "center",
                "alignmentLarge": "center",
                "altText": "Image"
            }
        }
    ]
  ```
