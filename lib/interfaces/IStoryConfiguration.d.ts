export interface IStoryConfiguration {
    name: string;
    resources: string[];
    htmlTagName: string;
    previewConfigs: IPreviewConfig[];
    knobs: IKnobConfig;
}
interface IPreviewConfig {
    name: string;
    props?: IProp[];
    slot?: ISlottedConfig[];
}
interface IProp {
    [key: string]: any;
}
interface ISlottedConfig {
    htmlTagName: string;
    resources: string[];
    props?: IProp[];
    slot?: ISlottedConfig[];
    innerHTML?: string;
}
export interface IKnobConfig {
    [key: string]: {
        type: string;
        name: string;
    };
}
export {};