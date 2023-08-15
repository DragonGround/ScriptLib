"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getSymbolsIn_js_1 = __importDefault(require("./getSymbolsIn.js"));
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
