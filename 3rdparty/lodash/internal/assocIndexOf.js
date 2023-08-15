"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var eq_js_1 = __importDefault(require("../eq.js"));
function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
        if ((0, eq_js_1.default)(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
exports.default = assocIndexOf;
