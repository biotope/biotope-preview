"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFilesKnob = void 0;
const escape_object_for_template_literals_1 = require("../helpers/escape-object-for-template-literals");
exports.renderFilesKnob = (config) => {
    const { label, groupId, acceptedFormats } = config;
    return `\"\${files('${label}'${acceptedFormats ? `, ${escape_object_for_template_literals_1.escapeObjectForTemplateLiterals(acceptedFormats.map(f => `.${f}`).join(', '))}` : ''}${groupId ? `, [], '${groupId}'` : ''})}\"`;
};
//# sourceMappingURL=render-files-knob.js.map