Object.defineProperty(exports, "__esModule", { value: true });
const isSymbol_js_1 = require("../isSymbol.js");
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const reIsPlainProp = /^\w*$/;
function isKey(value, object) {
    if (Array.isArray(value)) {
        return false;
    }
    const type = typeof value;
    if (type === 'number' || type === 'boolean' || value == null || (0, isSymbol_js_1.default)(value)) {
        return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
}
exports.default = isKey;
