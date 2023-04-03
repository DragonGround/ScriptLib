"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getSymbolsIn_js_1 = require("./getSymbolsIn.js");
function getAllKeysIn(object) {
    var result = [];
    for (var key in object) {
        result.push(key);
    }
    if (!Array.isArray(object)) {
        result.push.apply(result, (0, getSymbolsIn_js_1.default)(object));
    }
    return result;
}
exports.default = getAllKeysIn;
