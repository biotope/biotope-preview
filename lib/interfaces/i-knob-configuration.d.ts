export interface IKnobConfiguration {
    type: string;
    name: string;
    groupId?: string;
}
export interface IKnobRenderConfiguration {
    name: string;
    groupId?: string;
}
export declare type IGenericKnobConfiguration = IStringKnobConfiguration | INumberKnobConfiguration | IBooleanKnobConfiguration | IObjectKnobConfiguration | IArrayKnobConfiguration | ISelectKnobConfiguration | IRadioButtonsKnobConfiguration | IFilesKnobConfiguration;
export interface IStringKnobConfiguration extends IKnobRenderConfiguration {
    defaultValue: string;
}
export interface INumberKnobConfiguration extends IKnobRenderConfiguration {
    defaultValue: number;
    options?: {
        range?: boolean;
        min?: number;
        max?: number;
        step?: number;
    };
}
export interface IBooleanKnobConfiguration extends IKnobRenderConfiguration {
    defaultValue: boolean;
}
export interface IObjectKnobConfiguration extends IKnobRenderConfiguration {
    defaultValue: any;
}
export interface IArrayKnobConfiguration extends IKnobRenderConfiguration {
    defaultValue: string[];
}
export interface ISelectKnobConfiguration extends IKnobRenderConfiguration {
    defaultValue: any;
    options: any;
}
export interface IRadioButtonsKnobConfiguration extends IKnobRenderConfiguration {
    defaultValue: any;
    options: {
        [key: string]: string;
    };
}
export interface IFilesKnobConfiguration extends IKnobRenderConfiguration {
    acceptedFormats?: string[];
}
