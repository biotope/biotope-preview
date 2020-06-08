import { KnobConfiguration } from './knob-configuration';

export interface PropConfiguration {
  name: string;
  value: any;
  knob?: KnobConfiguration;
}
