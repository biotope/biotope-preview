"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderRadioButtonsKnob = void 0;
const escape_object_for_template_literals_1 = require("../escape-object-for-template-literals");
exports.renderRadioButtonsKnob = (config) => {
    const { label, defaultValue, groupId, options } = config;
    return `\"\${radios('${label}', ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(options)}, ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(defaultValue)}${groupId ? `, '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-radio-buttons-knob.js.map