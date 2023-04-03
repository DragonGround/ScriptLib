"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var symbolValueOf = Symbol.prototype.valueOf;
function cloneSymbol(symbol) {
    return Object(symbolValueOf.call(symbol));
}
exports.default = cloneSymbol;
