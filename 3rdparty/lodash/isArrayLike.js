"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isLength_js_1 = __importDefault(require("./isLength.js"));
function isArrayLike(value) {
    return value != null && typeof value !== 'function' && (0, isLength_js_1.default)(value.length);
}
exports.default = isArrayLike;
