"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequence = (function () {
    function Sequence() {
    }
    Sequence.nextId = function () {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}());
exports.default = Sequence;
