import { IProp } from "./i-prop";
import { IHtmlElementConfiguration } from "./i-html-element-configuration";
export interface IStoryConfiguration {
    props?: IProp[];
    children?: IHtmlElementConfiguration[];
    innerHTML?: string;
}
