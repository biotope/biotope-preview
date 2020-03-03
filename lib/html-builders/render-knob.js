"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderKnob = (name, defaultValue, type) => {
    let valueAttribute;
    if (typeof defaultValue === 'number' || typeof defaultValue === 'boolean') {
        valueAttribute = defaultValue;
    }
    else if (typeof defaultValue === 'object') {
        valueAttribute = `"${JSON.stringify(defaultValue).replace(/"/g, '\'').replace(/'/g, '\'')}"`;
    }
    else {
        valueAttribute = `"${defaultValue}"`;
    }
    return `\${${type}("${name}", ${valueAttribute})}`;
};
//# sourceMappingURL=render-knob.js.map