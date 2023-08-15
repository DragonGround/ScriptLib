"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var castPath_js_1 = __importDefault(require("./castPath.js"));
var toKey_js_1 = __importDefault(require("./toKey.js"));
function baseGet(object, path) {
    path = (0, castPath_js_1.default)(path, object);
    var index = 0;
    var length = path.length;
    while (object != null && index < length) {
        object = object[(0, toKey_js_1.default)(path[index++])];
    }
    return (index && index == length) ? object : undefined;
}
exports.default = baseGet;
