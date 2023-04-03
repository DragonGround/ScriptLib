"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseClone_js_1 = require("./internal/baseClone.js");
var CLONE_DEEP_FLAG = 1;
var CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
    return (0, baseClone_js_1.default)(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
exports.default = cloneDeep;
