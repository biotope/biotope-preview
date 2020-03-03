export interface IStoryConfiguration {
    type: 'storyConfig';
    name: string;
    resources: string[];
    htmlTagName: string;
    previewConfigs: IPreviewConfig[];
    knobs: IKnobConfiguration;
}
interface IPreviewConfig {
    name: string;
    props?: IProp[];
    slot?: ISlottedConfiguration[];
    innerHTML?: string;
}
interface IProp {
    [key: string]: any;
}
export interface ISlottedConfiguration {
    type: 'slottedConfig';
    htmlTagName: string;
    resources?: string[];
    props?: IProp[];
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
