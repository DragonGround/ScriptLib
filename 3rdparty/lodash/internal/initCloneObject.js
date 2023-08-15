"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isPrototype_js_1 = __importDefault(require("./isPrototype.js"));
function initCloneObject(object) {
    return (typeof object.constructor === 'function' && !(0, isPrototype_js_1.default)(object))
        ? Object.create(Object.getPrototypeOf(object))
        : {};
}
exports.default = initCloneObject;
