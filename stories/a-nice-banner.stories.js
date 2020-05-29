import { text, boolean, number, color, select, array, object, radios, files } from "@storybook/addon-knobs";

export default { title: "Such a nice banner" };


export const regular = () => {
    return `<a-nice-banner data-resources="[{paths : ['components/a-nice-banner/a-nice-banner.ts','css/styles.css']}]"></a-nice-banner>`;
}; 
export const nice = () => {
    return `<h1>This is a template!</h1><article><a-nice-banner data-resources="[{paths : ['components/a-nice-banner/a-nice-banner.ts','css/styles.css']}]"></a-nice-banner></article>`;
};
