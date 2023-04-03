"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFloat4 = exports.parseFloat3 = exports.parseFloat2 = void 0;
var math_1 = require("math");
function parseFloat2(input) {
    var _a, _b, _c, _d;
    if (!input)
        return (0, math_1.float2)(0, 0);
    if (Array.isArray(input))
        input = (0, math_1.float2)((_a = input[0]) !== null && _a !== void 0 ? _a : 0, (_b = input[1]) !== null && _b !== void 0 ? _b : 0);
    return (0, math_1.float2)((_c = input.x) !== null && _c !== void 0 ? _c : 0, (_d = input.y) !== null && _d !== void 0 ? _d : 0);
}
exports.parseFloat2 = parseFloat2;
function parseFloat3(input) {
    var _a, _b, _c, _d, _e, _f;
    if (!input)
        return (0, math_1.float3)(0, 0, 0);
    if (Array.isArray(input))
        input = (0, math_1.float3)((_a = input[0]) !== null && _a !== void 0 ? _a : 0, (_b = input[1]) !== null && _b !== void 0 ? _b : 0, (_c = input[2]) !== null && _c !== void 0 ? _c : 0);
    return (0, math_1.float3)((_d = input.x) !== null && _d !== void 0 ? _d : 0, (_e = input.y) !== null && _e !== void 0 ? _e : 0, (_f = input.z) !== null && _f !== void 0 ? _f : 0);
}
exports.parseFloat3 = parseFloat3;
function parseFloat4(input) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!input)
        return (0, math_1.float4)(0, 0, 0, 0);
    if (Array.isArray(input))
        input = (0, math_1.float4)((_a = input[0]) !== null && _a !== void 0 ? _a : 0, (_b = input[1]) !== null && _b !== void 0 ? _b : 0, (_c = input[2]) !== null && _c !== void 0 ? _c : 0, (_d = input[3]) !== null && _d !== void 0 ? _d : 0);
    return (0, math_1.float4)((_e = input.x) !== null && _e !== void 0 ? _e : 0, (_f = input.y) !== null && _f !== void 0 ? _f : 0, (_g = input.z) !== null && _g !== void 0 ? _g : 0, (_h = input.w) !== null && _h !== void 0 ? _h : 0);
}
exports.parseFloat4 = parseFloat4;
