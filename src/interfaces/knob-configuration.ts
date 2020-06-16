export interface KnobConfiguration {
  type: KnobType;
  label: string;
  groupId?: string;
}

export interface KnobRenderConfiguration {
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

export interface StringKnobConfiguration extends KnobRenderConfiguration {
  defaultValue: string;
}

export interface NumberKnobConfiguration extends KnobRenderConfiguration {
  defaultValue: number;
  options?: {
    range?: boolean;
    min?: number;
    max?: number;
    step?: number;
  };
}

export interface BooleanKnobConfiguration extends KnobRenderConfiguration {
  defaultValue: boolean;
}

export interface ObjectKnobConfiguration extends KnobRenderConfiguration {
  defaultValue: any;
}

export interface ArrayKnobConfiguration extends KnobRenderConfiguration{
  defaultValue: string[];
}

export interface SelectKnobConfiguration extends KnobRenderConfiguration {
  defaultValue: any;
  options: any;
}

export interface RadioButtonsKnobConfiguration extends KnobRenderConfiguration {
  defaultValue: any;
  options: {
    [key: string]: string;
  };
}

export interface FilesKnobConfiguration extends KnobRenderConfiguration {
  acceptedFormats?: string[];
}
