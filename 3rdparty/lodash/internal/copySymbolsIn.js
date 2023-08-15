"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var copyObject_js_1 = __importDefault(require("./copyObject.js"));
var getSymbolsIn_js_1 = __importDefault(require("./getSymbolsIn.js"));
function copySymbolsIn(source, object) {
    return (0, copyObject_js_1.default)(source, (0, getSymbolsIn_js_1.default)(source), object);
}
exports.default = copySymbolsIn;
