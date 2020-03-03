"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertValueToAttribute = (value) => {
    if (typeof value === 'number' || typeof value === 'boolean') {
        return value;
    }
    else if (typeof value === 'object') {
        return `"${JSON.stringify(value).replace(/"/g, '\'').replace(/'/g, '\'')}"`;
    }
    else {
        return `"${value}"`;
    }
};
//# sourceMappingURL=convertValueToAttribute.js.map