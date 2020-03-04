export interface IKnobConfiguration {
    type: string;
    name: string;
    groupId?: string;
    options?: any;
}

export interface IStringKnobConfiguration {
    name: string;
    defaultValue: string;
    groupId?: string;
}

export interface INumberKnobConfiguration {
    name: string;
    defaultValue: number;
    groupId?: string;
    options?: {
        range?: boolean,
        min?: number,
        max?: number,
        step?: number,
    };
}

export interface IBooleanKnobConfiguration {
    name: string;
    defaultValue: boolean;
    groupId?: string;
}

export interface IObjectKnobConfiguration {
    name: string;
    defaultValue: any;
    groupId?: string;
}

export interface IArrayKnobConfiguration {
    name: string;
    defaultValue: string[];
    groupId?: string;
}

export interface ISelectKnobConfiguration {
    name: string;
    defaultValue: any;
    groupId?: string;
    options: {
        [key: string]: any;
    };
}

export interface IRadioButtonsConfiguration {
    name: string;
    defaultValue: any;
    groupId?: string;
    options: {
        [key: string]: string;
    };
}
