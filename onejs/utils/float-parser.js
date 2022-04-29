Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFloat4 = exports.parseFloat3 = exports.parseFloat2 = void 0;
const math_1 = require("math");
function parseFloat2(input) {
    var _a, _b;
    if (Array.isArray(input))
        input = (0, math_1.float2)((_a = input[0]) !== null && _a !== void 0 ? _a : 0, (_b = input[1]) !== null && _b !== void 0 ? _b : 0);
    return input;
}
exports.parseFloat2 = parseFloat2;
function parseFloat3(input) {
    var _a, _b, _c;
    if (Array.isArray(input))
        input = (0, math_1.float3)((_a = input[0]) !== null && _a !== void 0 ? _a : 0, (_b = input[1]) !== null && _b !== void 0 ? _b : 0, (_c = input[2]) !== null && _c !== void 0 ? _c : 0);
    return input;
}
exports.parseFloat3 = parseFloat3;
function parseFloat4(input) {
    var _a, _b, _c, _d;
    if (Array.isArray(input))
        input = (0, math_1.float4)((_a = input[0]) !== null && _a !== void 0 ? _a : 0, (_b = input[1]) !== null && _b !== void 0 ? _b : 0, (_c = input[2]) !== null && _c !== void 0 ? _c : 0, (_d = input[3]) !== null && _d !== void 0 ? _d : 0);
    return input;
}
exports.parseFloat4 = parseFloat4;
