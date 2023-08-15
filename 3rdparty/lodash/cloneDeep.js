"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseClone_js_1 = __importDefault(require("./internal/baseClone.js"));
var CLONE_DEEP_FLAG = 1;
var CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
    return (0, baseClone_js_1.default)(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
exports.default = cloneDeep;
