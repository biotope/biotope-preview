export const renderKnob = (name: string, defaultValue: any, type: string) => {
    let valueAttribute;
    if (typeof defaultValue === 'number' || typeof defaultValue === 'boolean') {
        valueAttribute = defaultValue;
    } else if (typeof defaultValue === 'object') {
        valueAttribute = `"${JSON.stringify(defaultValue).replace(/"/g, '\'').replace(/'/g, '\'')}"`;
    } else {
        valueAttribute = `"${defaultValue}"`;
    }

    return `\${${type}("${name}", ${valueAttribute})}`;

}