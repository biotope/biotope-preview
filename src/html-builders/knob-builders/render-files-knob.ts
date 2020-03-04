import { IFilesKnobConfiguration } from "../../interfaces/i-knob-configuration";
import { escapeObjectForTemplateLiterals } from "../escape-object-for-template-literals";

export const renderFilesKnob = (config: IFilesKnobConfiguration) => {
    const { name, groupId, acceptedFormats }= config;
    return `\"\${files('${name}'${acceptedFormats ? `, ${escapeObjectForTemplateLiterals(acceptedFormats.map(f => `.${f}`).join(', '))}` : ''}${groupId ? `, [], '${groupId}'` : ''})}\"`;
}