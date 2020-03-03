"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderValue = (value, key, knobs) => {
    if (typeof value === 'object') {
        return '=\"' + JSON.stringify(value).replace(/"/g, '\'').replace(/'/g, '\'') + '\"';
    }
    if (knobs) {
        const knobConfigKey = Object.keys(knobs).find(knobKey => knobKey === key);
        if (knobConfigKey) {
            const knobConfig = knobs[knobConfigKey];
            return `=\${${knobConfig.type}('${knobConfig.name}', '${value}')}`;
        }
    }
    return '=\"' + value + '\"';
};
//# sourceMappingURL=renderValue.js.map