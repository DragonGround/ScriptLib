"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isSymbol_js_1 = require("../isSymbol.js");
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
    if (Array.isArray(value)) {
        return false;
    }
    var type = typeof value;
    if (type === 'number' || type === 'boolean' || value == null || (0, isSymbol_js_1.default)(value)) {
        return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
}
exports.default = isKey;
