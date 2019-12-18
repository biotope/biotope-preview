# biotope-preview 🌻 

To create a preview folder for your biotope elements project, you need to add this script to your project's package.json: `"create:preview": "npm explore @biotope/preview -- npm run storybook"`

It parses your src/components/ subfolders for the component's package.json's and creates previews based on the configuration inside.
The following data is required for the process to work:

```
    "name": "Stage",
    "tagName": "x-stage",
    "previewConfigs": [
        {
            "name": "Default",
            "props": [
                {
                    "name": "text",
                    "value": {
                        "headline": "Stage",
                        "claim": "With a claim",
                        "secondaryColor": false
                    }
                },
                {
                    "name": "image",
                    "value": {
                        "url": "https://picsum.photos/id/804/1000/600",
                        "alignment": "center",
                        "alignmentLarge": "center",
                        "altText": "Image"
                    }
                }
            ]
        }
    ]
  ```
