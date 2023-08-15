"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isKey_js_1 = __importDefault(require("./isKey.js"));
var stringToPath_js_1 = __importDefault(require("./stringToPath.js"));
function castPath(value, object) {
    if (Array.isArray(value)) {
        return value;
    }
    return (0, isKey_js_1.default)(value, object) ? [value] : (0, stringToPath_js_1.default)(value);
}
exports.default = castPath;
