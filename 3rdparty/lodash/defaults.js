"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var eq_js_1 = __importDefault(require("./eq.js"));
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function defaults(object) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    object = Object(object);
    sources.forEach(function (source) {
        if (source != null) {
            source = Object(source);
            for (var key in source) {
                var value = object[key];
                if (value === undefined ||
                    ((0, eq_js_1.default)(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
                    object[key] = source[key];
                }
            }
        }
    });
    return object;
}
exports.default = defaults;
