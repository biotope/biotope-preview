import { IHtmlElementConfiguration } from "../interfaces/i-html-element-configuration";
import { generateHtmlTag } from "../html-builders/generate-html-tag";

export const generateHtmlSnippet = (config: IHtmlElementConfiguration) => {
    const copy = stripHtmlConfigFromKnobs(config);
    return generateHtmlTag(copy);
}

export const stripHtmlConfigFromKnobs = (config: IHtmlElementConfiguration): IHtmlElementConfiguration => {
    const copy: IHtmlElementConfiguration = Object.assign({}, config);
    if(copy.props) {
        copy.props.forEach(prop => {
            if(prop.knob) {
               delete prop.knob
            }
        });
    }
    config.children ? config.children.map(child => stripHtmlConfigFromKnobs(child)) : null;
    return copy;
}