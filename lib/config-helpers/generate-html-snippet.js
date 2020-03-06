"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_html_tag_1 = require("../html-builders/generate-html-tag");
exports.generateHtmlSnippet = (config) => {
    const copy = exports.stripHtmlConfigFromKnobs(config);
    return generate_html_tag_1.generateHtmlTag(copy);
};
exports.stripHtmlConfigFromKnobs = (config) => {
    const copy = Object.assign({}, config);
    if (copy.props) {
        copy.props.forEach(prop => {
            if (prop.knob) {
                delete prop.knob;
            }
        });
    }
    config.children ? config.children.map(child => exports.stripHtmlConfigFromKnobs(child)) : null;
    return copy;
};
//# sourceMappingURL=generate-html-snippet.js.map