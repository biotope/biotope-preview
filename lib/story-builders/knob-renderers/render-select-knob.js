"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSelectKnob = void 0;
const escape_object_for_template_literals_1 = require("../helpers/escape-object-for-template-literals");
exports.renderSelectKnob = (config) => {
    const { label, defaultValue, groupId, options } = config;
    return `\"\${select('${label}', ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(options)}, ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-select-knob.js.map