import { generateHtmlSnippet } from './generate-html-snippet';

test("it", () => {
    const config = {
        htmlTagName: "neo-event-teaser",
        resources: [
            "NeoEventTeaser/index.js"
        ],
        props: [
            {
                name: "date",
                value: "21.02.2020",
                knob: {
                    label: "Date",
                    type: "string",
                    groupId: "main"
                }
            }
        ],
        children: [
            {
                htmlTagName: "neo-headline",
                props: [
                    {
                        name: "level",
                        value: 4,
                    }
                ],
                innerHTML: "Lorem ipsum"
            },
            {
                htmlTagName: "neo-paragraph",
                innerHTML: "<b>bold text test</b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, obcaecati? Odio, architecto enim corrupti reiciendis quidem molestiae accusamus assumenda magnam quae expedita molestias quaerat animi, atque praesentium officia odit necessitatibus?"
            }
        ]
    }

    expect(generateHtmlSnippet(config).replace(/\s/g, '')).toBe(`
        <neo-event-teaser data-resources=\"[{paths : ['NeoEventTeaser/index.js']}]\" date=\"21.02.2020\">
            <neo-headline level=4>Lorem ipsum</neo-headline>
            <neo-paragraph>
                <b>bold text test</b>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, obcaecati? Odio, architecto enim corrupti reiciendis quidem molestiae accusamusassumenda magnam quae expedita molestias quaerat animi, atque praesentium officia odit necessitatibus?
            </neo-paragraph>
        </neo-event-teaser>
    `.replace(/\s/g, ''))
})