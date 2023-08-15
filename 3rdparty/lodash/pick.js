"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basePick_1 = __importDefault(require("./internal/basePick"));
function pick(object) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    return object == null ? {} : (0, basePick_1.default)(object, paths);
}
exports.default = pick;
