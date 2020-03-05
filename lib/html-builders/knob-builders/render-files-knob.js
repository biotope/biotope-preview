"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape_object_for_template_literals_1 = require("../escape-object-for-template-literals");
exports.renderFilesKnob = (config) => {
    const { name, groupId, acceptedFormats } = config;
    return `\"\${files('${name}'${acceptedFormats ? `, ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(acceptedFormats.map(f => `.${f}`).join(', '))}` : ''}${groupId ? `, [], '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-files-knob.js.map