import { KnobConfiguration } from './knob-configuration';

export interface PropConfiguration {
  name: string;
  value: any;
  knob?: KnobConfiguration;
}


export interface TypedPropConfiguration<T> {
  name: keyof T;
  value: T;
  knob?: KnobConfiguration;
}
