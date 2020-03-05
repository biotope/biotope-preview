"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape_object_for_template_literals_1 = require("./escape-object-for-template-literals");
exports.convertValueToAttribute = (value) => {
    if (typeof value === 'number' || typeof value === 'boolean') {
        return value;
    }
    else if (typeof value === 'object') {
        return `'${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(value)}'`;
    }
    else {
        return `"${value}"`;
    }
};
//# sourceMappingURL=convert-value-to-attribute.js.map