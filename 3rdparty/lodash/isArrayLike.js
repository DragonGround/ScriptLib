"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLength_js_1 = require("./isLength.js");
function isArrayLike(value) {
    return value != null && typeof value !== 'function' && (0, isLength_js_1.default)(value.length);
}
exports.default = isArrayLike;
