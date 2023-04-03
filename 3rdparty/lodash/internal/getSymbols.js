"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
function getSymbols(object) {
    if (object == null) {
        return [];
    }
    object = Object(object);
    return nativeGetSymbols(object).filter(function (symbol) { return propertyIsEnumerable.call(object, symbol); });
}
exports.default = getSymbols;
