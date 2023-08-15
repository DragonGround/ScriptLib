"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseAssignValue_1 = __importDefault(require("./baseAssignValue"));
var eq_1 = __importDefault(require("../eq"));
var hasOwnProperty = Object.prototype.hasOwnProperty;
function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && (0, eq_1.default)(objValue, value))) {
        if (value !== 0 || (1 / value) === (1 / objValue)) {
            (0, baseAssignValue_1.default)(object, key, value);
        }
    }
    else if (value === undefined && !(key in object)) {
        (0, baseAssignValue_1.default)(object, key, value);
    }
}
exports.default = assignValue;
