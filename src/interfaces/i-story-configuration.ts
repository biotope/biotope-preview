export interface IStoryConfiguration {
    name: string;
    htmlTagName: string;
    resources?: string[];
    previewConfigs: IPreviewConfig[];
    knobs?: IKnobConfiguration;
}

interface IPreviewConfig {
    name: string;
    props?: IProp;
    slot?: ISlottedConfiguration[];
    innerHTML?: string;
}

interface IProp {
    [key: string]: any;
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