"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseGet_js_1 = __importDefault(require("./baseGet.js"));
var baseSet_js_1 = __importDefault(require("./baseSet.js"));
var castPath_js_1 = __importDefault(require("./castPath.js"));
function basePickBy(object, paths, predicate) {
    var index = -1;
    var length = paths.length;
    var result = {};
    while (++index < length) {
        var path = paths[index];
        var value = (0, baseGet_js_1.default)(object, path);
        if (predicate(value, path)) {
            (0, baseSet_js_1.default)(result, (0, castPath_js_1.default)(path, object), value);
        }
    }
    return result;
}
exports.default = basePickBy;
