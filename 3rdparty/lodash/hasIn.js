"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasIn(object, key) {
    return object != null && key in Object(object);
}
exports.default = hasIn;
