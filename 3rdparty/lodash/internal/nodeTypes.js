"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var freeGlobal_js_1 = require("./freeGlobal.js");
var freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports;
var freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal_js_1.default.process;
var nodeTypes = ((function () {
    try {
        var typesHelper = freeModule && freeModule.require && freeModule.require('util').types;
        return typesHelper
            ? typesHelper
            : freeProcess && freeProcess.binding && freeProcess.binding('util');
    }
    catch (e) { }
})());
exports.default = nodeTypes;
