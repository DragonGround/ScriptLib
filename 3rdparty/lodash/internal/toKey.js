"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isSymbol_js_1 = require("../isSymbol.js");
var INFINITY = 1 / 0;
function toKey(value) {
    if (typeof value === 'string' || (0, isSymbol_js_1.default)(value)) {
        return value;
    }
    var result = "".concat(value);
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
exports.default = toKey;
