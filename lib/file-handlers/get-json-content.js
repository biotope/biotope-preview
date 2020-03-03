"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.getJsonContent = (filePath) => {
    const response = fs.readFileSync(filePath, "utf8");
    return JSON.parse(response);
};
//# sourceMappingURL=get-json-content.js.map