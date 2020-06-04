import { IPropConfiguration } from "./i-prop-configuration";
import { IHtmlElementConfiguration } from "./i-html-element-configuration";

export interface IStoryConfiguration {
    props?: IPropConfiguration[];
    children?: IHtmlElementConfiguration[];
    innerHTML?: string;
    containingHTML?: string;
    innerHTMLasKnob?: boolean;
}