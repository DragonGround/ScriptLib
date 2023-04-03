"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keysIn(object) {
    var result = [];
    for (var key in object) {
        result.push(key);
    }
    return result;
}
exports.default = keysIn;
