"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getSymbols_js_1 = require("./getSymbols.js");
var keys_js_1 = require("../keys.js");
function getAllKeys(object) {
    var result = (0, keys_js_1.default)(object);
    if (!Array.isArray(object)) {
        result.push.apply(result, (0, getSymbols_js_1.default)(object));
    }
    return result;
}
exports.default = getAllKeys;
