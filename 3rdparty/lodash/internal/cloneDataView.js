"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cloneArrayBuffer_js_1 = require("./cloneArrayBuffer.js");
function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? (0, cloneArrayBuffer_js_1.default)(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
exports.default = cloneDataView;
