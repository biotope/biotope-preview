export const escapeObjectForTemplateLiterals = (object: any): string => JSON.stringify(object).replace(/"/g, '"').replace(/'/g, '"');
