"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelize = void 0;
exports.camelize = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
};
//# sourceMappingURL=camelize.js.map