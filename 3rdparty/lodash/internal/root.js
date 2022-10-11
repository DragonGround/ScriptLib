Object.defineProperty(exports, "__esModule", { value: true });
var freeGlobal_js_1 = require("./freeGlobal.js");
var freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis;
var freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self;
var root = freeGlobalThis || freeGlobal_js_1.default || freeSelf || Function('return this')();
exports.default = root;
