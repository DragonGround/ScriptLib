"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getSymbols_js_1 = __importDefault(require("./getSymbols.js"));
function getSymbolsIn(object) {
    var result = [];
    while (object) {
        result.push.apply(result, (0, getSymbols_js_1.default)(object));
        object = Object.getPrototypeOf(Object(object));
    }
    return result;
}
exports.default = getSymbolsIn;
