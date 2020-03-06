import { IKnobConfiguration } from "./i-knob-configuration";
export interface IProp {
    name: string;
    value: any;
    knob?: IKnobConfiguration;
}
