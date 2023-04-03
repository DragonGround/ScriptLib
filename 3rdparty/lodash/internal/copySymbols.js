"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var copyObject_js_1 = require("./copyObject.js");
var getSymbols_js_1 = require("./getSymbols.js");
function copySymbols(source, object) {
    return (0, copyObject_js_1.default)(source, (0, getSymbols_js_1.default)(source), object);
}
exports.default = copySymbols;
