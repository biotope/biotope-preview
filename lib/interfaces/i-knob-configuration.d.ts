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
    options?: any;
}
export interface IBooleanKnobConfiguration {
    name: string;
    defaultValue: boolean;
    groupId?: string;
}
