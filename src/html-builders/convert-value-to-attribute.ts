export const convertValueToAttribute = (value: any): any => {
    if (typeof value === 'number' || typeof value === 'boolean') {
        return value;
    } else if (typeof value === 'object') {
        return `"${JSON.stringify(value).replace(/"/g, '\'').replace(/'/g, '\'')}"`;
    } else {
        return `"${value}"`;
    }
}