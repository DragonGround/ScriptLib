Object.defineProperty(exports, "__esModule", { value: true });
const isSymbol_js_1 = require("../isSymbol.js");
const INFINITY = 1 / 0;
function toKey(value) {
    if (typeof value === 'string' || (0, isSymbol_js_1.default)(value)) {
        return value;
    }
    const result = `${value}`;
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
exports.default = toKey;
