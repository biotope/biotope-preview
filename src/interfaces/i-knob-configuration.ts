export interface IInputKnobConfiguration {
    type: string;
    name: string;
    groupId?: string;
}

export interface IKnobConfiguration {
    name: string;
    groupId?: string;
}

export type IGenericKnobConfiguration = 
    IStringKnobConfiguration |
    INumberKnobConfiguration |
    IBooleanKnobConfiguration |
    IObjectKnobConfiguration |
    IArrayKnobConfiguration |
    ISelectKnobConfiguration |
    IRadioButtonsKnobConfiguration |
    IFilesKnobConfiguration;

export interface IStringKnobConfiguration extends IKnobConfiguration {
    defaultValue: string;
}

export interface INumberKnobConfiguration extends IKnobConfiguration {
    defaultValue: number;
    options?: {
        range?: boolean,
        min?: number,
        max?: number,
        step?: number,
    };
}

export interface IBooleanKnobConfiguration extends IKnobConfiguration {
    defaultValue: boolean;
}

export interface IObjectKnobConfiguration extends IKnobConfiguration {
    defaultValue: any;
}

export interface IArrayKnobConfiguration  extends IKnobConfiguration{
    defaultValue: string[];
}

export interface ISelectKnobConfiguration extends IKnobConfiguration {
    defaultValue: any;
    options: {
        [key: string]: any;
    };
}

export interface IRadioButtonsKnobConfiguration extends IKnobConfiguration {
    defaultValue: any;
    options: {
        [key: string]: string;
    };
}

export interface IFilesKnobConfiguration extends IKnobConfiguration {
    acceptedFormats?: string[]; 
}