export interface KnobConfiguration {
  type: KnobType;
  label: string;
  groupId?: string;
}

export type KnobType = 'text' | 'number' | 'array' | 'boolean' | 'files' | 'object' | 'date' | 'radioButtons' | 'select' | 'color';

export type GenericKnobConfiguration =
    StringKnobConfiguration |
    NumberKnobConfiguration |
    BooleanKnobConfiguration |
    ObjectKnobConfiguration |
    ArrayKnobConfiguration |
    SelectKnobConfiguration |
    RadioButtonsKnobConfiguration |
    FilesKnobConfiguration;

export interface StringKnobConfiguration extends KnobConfiguration {
  defaultValue: string;
}

export interface NumberKnobConfiguration extends KnobConfiguration {
  defaultValue: number;
  options?: {
    range?: boolean;
    min?: number;
    max?: number;
    step?: number;
  };
}

export interface BooleanKnobConfiguration extends KnobConfiguration {
  defaultValue: boolean;
}

export interface ObjectKnobConfiguration extends KnobConfiguration {
  defaultValue: any;
}

export interface ArrayKnobConfiguration extends KnobConfiguration{
  defaultValue: string[];
}

export interface SelectKnobConfiguration extends KnobConfiguration {
  defaultValue: any;
  options: any;
}

export interface RadioButtonsKnobConfiguration extends KnobConfiguration {
  defaultValue: any;
  options: {
    [key: string]: string;
  };
}

export interface FilesKnobConfiguration extends KnobConfiguration {
  acceptedFormats?: string[];
}
