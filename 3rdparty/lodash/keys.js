"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrayLikeKeys_js_1 = __importDefault(require("./internal/arrayLikeKeys.js"));
var isArrayLike_js_1 = __importDefault(require("./isArrayLike.js"));
function keys(object) {
    return (0, isArrayLike_js_1.default)(object)
        ? (0, arrayLikeKeys_js_1.default)(object)
        : Object.keys(Object(object));
}
exports.default = keys;
