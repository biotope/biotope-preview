export interface IStoryConfiguration {
    name: string;
    htmlTagName: string;
    resources?: string[];
    previewConfigs: IPreviewConfig[];
}
interface IPreviewConfig {
    name: string;
    props?: IProp;
    slot?: ISlottedConfiguration[];
    innerHTML?: string;
}
interface IProp {
    [key: string]: {
        value: any;
        knob?: {
            type: string;
            name: string;
        };
    };
}
export interface ISlottedConfiguration {
    htmlTagName: string;
    resources?: string[];
    props?: IProp;
    slot?: ISlottedConfiguration[];
    innerHTML?: string;
}
export interface IKnobConfiguration {
    [key: string]: {
        type: string;
        name: string;
    };
}
export {};
