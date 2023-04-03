"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectProto = Object.prototype;
function isPrototype(value) {
    var Ctor = value && value.constructor;
    var proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;
    return value === proto;
}
exports.default = isPrototype;
