"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseClone_js_1 = require("./internal/baseClone.js");
var CLONE_SYMBOLS_FLAG = 4;
function clone(value) {
    return (0, baseClone_js_1.default)(value, CLONE_SYMBOLS_FLAG);
}
exports.default = clone;
