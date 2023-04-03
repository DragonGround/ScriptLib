"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function copyArray(source, array) {
    var index = -1;
    var length = source.length;
    array || (array = new Array(length));
    while (++index < length) {
        array[index] = source[index];
    }
    return array;
}
exports.default = copyArray;
