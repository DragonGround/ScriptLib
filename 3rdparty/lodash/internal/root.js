"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var freeGlobal_js_1 = __importDefault(require("./freeGlobal.js"));
var freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis;
var freeSelf = null;
var root = freeGlobalThis || freeGlobal_js_1.default || freeSelf || Function('return this')();
exports.default = root;
