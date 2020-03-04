import { escapeObjectForTemplateLiterals } from "./escape-object-for-template-literals";

export const convertValueToAttribute = (value: any): any => {
    if (typeof value === 'number' || typeof value === 'boolean') {
        return value;
    } else if (typeof value === 'object') {
        return `"${escapeObjectForTemplateLiterals(value)}"`;
    } else {
        return `"${value}"`;
    }
}