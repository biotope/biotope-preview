declare module "file-handlers/get-sub-folders" {
    export const getSubFolders: (src: string, includeAbsolutePath?: boolean) => Promise<string[]>;
}
declare module "file-handlers/filter-file-paths-for-package-json" {
    export const filterFilePathsForPackageJson: (filePaths: string[]) => string[];
}
declare module "interfaces/i-story-configuration" {
    export interface IStoryConfiguration {
        name: string;
        htmlTagName: string;
        resources?: string[];
        previewConfigs: IPreviewConfig[];
        knobs?: IKnobConfiguration;
    }
    interface IPreviewConfig {
        name: string;
        props?: IProp;
        slot?: ISlottedConfiguration[];
        innerHTML?: string;
    }
    interface IProp {
        [key: string]: any;
    }
    export interface ISlottedConfiguration {
        htmlTagName: string;
        resources?: string[];
        props?: IProp;
        slot?: ISlottedConfiguration[];
        innerHTML?: string;
    }
    export interface IKnobConfiguration {
        [key: string]: {
            type: string;
            name: string;
        };
    }
}
declare module "html-builders/convert-value-to-attribute" {
    export const convertValueToAttribute: (value: any) => any;
}
declare module "html-builders/generate-slot-html" {
    import { ISlottedConfiguration } from "interfaces/i-story-configuration";
    export const generateSlotHtml: (slotConfig: ISlottedConfiguration) => string;
}
declare module "html-builders/render-knob" {
    export const renderKnob: (name: string, defaultValue: any, type: string) => string;
}
declare module "html-builders/generate-story-html" {
    import { IStoryConfiguration } from "interfaces/i-story-configuration";
    export const generateStoryHtml: (storyConfig: IStoryConfiguration) => string;
}
declare module "file-handlers/create-stories-file-for-story-config" {
    import { IStoryConfiguration } from "interfaces/i-story-configuration";
    export const createStoriesFileForStoryConfig: (storyConfig: IStoryConfiguration) => Promise<void>;
}
declare module "file-handlers/get-json-content" {
    export const getJsonContent: (filePath: string) => any;
}
declare module "index" { }
