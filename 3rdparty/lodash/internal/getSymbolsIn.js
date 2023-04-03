"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getSymbols_js_1 = require("./getSymbols.js");
function getSymbolsIn(object) {
    var result = [];
    while (object) {
        result.push.apply(result, (0, getSymbols_js_1.default)(object));
        object = Object.getPrototypeOf(Object(object));
    }
    return result;
}
exports.default = getSymbolsIn;
