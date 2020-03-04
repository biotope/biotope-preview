export interface IStoryConfiguration {
    name: string;
    htmlTagName: string;
    resources?: string[];
    previewConfigs: IPreviewConfig[];
}
interface IPreviewConfig {
    name: string;
    props?: IProp[];
    slot?: ISlottedConfiguration[];
    innerHTML?: string;
}
interface IProp {
    name: string;
    value: any;
    knob?: IKnobConfiguration;
}
export interface ISlottedConfiguration {
    htmlTagName: string;
    resources?: string[];
    props?: IProp[];
    slot?: ISlottedConfiguration[];
    innerHTML?: string;
}
export interface IKnobConfiguration {
    type: string;
    name: string;
}
export {};
