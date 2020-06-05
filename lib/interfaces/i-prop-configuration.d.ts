import { IKnobConfiguration } from "./i-knob-configuration";
export interface IPropConfiguration {
    name: string;
    value: any;
    knob?: IKnobConfiguration;
}
