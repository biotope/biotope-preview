import { IProp } from "./i-prop";
export interface IHtmlElementConfiguration {
    htmlTagName: string;
    resources?: string[];
    props?: IProp[];
    children?: IHtmlElementConfiguration[];
    innerHTML?: string;
}
