import { IFilesKnobConfiguration } from "../../interfaces/i-knob-configuration";
import { escapeObjectForTemplateLiterals } from "../escape-object-for-template-literals";

export const renderFilesKnob = (config: IFilesKnobConfiguration) => {
    const { label, groupId, acceptedFormats }= config;
    return `\"\${files('${label}'${acceptedFormats ? `, ${escapeObjectForTemplateLiterals(acceptedFormats.map(f => `.${f}`).join(', '))}` : ''}${groupId ? `, [], '${groupId}'` : ''})}\"`;
}