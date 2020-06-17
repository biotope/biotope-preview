import { GenericKnobConfiguration } from './knob-configuration';

export interface PropConfiguration {
  name: string;
  value: any;
  knob?: GenericKnobConfiguration;
}


export interface TypedPropConfiguration<T> {
  name: keyof T;
  value: any;
  knob?: GenericKnobConfiguration;
}
