import { IPropConfiguration } from "./i-prop-configuration";
import { IHtmlElementConfiguration } from "./i-html-element-configuration";

export interface IStoryConfiguration {
    props?: IPropConfiguration[];
    children?: IHtmlElementConfiguration[];
    innerHtml?: string;
    containingHtml?: string;
    innerHtmlAsKnob?: boolean;
}