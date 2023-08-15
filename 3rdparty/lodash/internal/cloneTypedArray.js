"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cloneArrayBuffer_js_1 = __importDefault(require("./cloneArrayBuffer.js"));
function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? (0, cloneArrayBuffer_js_1.default)(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
exports.default = cloneTypedArray;
