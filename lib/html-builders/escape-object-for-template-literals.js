"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeObjectForTemplateLiterals = (object) => JSON.stringify(object).replace(/"/g, '\"').replace(/'/g, '\"');
//# sourceMappingURL=escape-object-for-template-literals.js.map