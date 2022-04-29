Object.defineProperty(exports, "__esModule", { value: true });
const isKey_js_1 = require("./isKey.js");
const stringToPath_js_1 = require("./stringToPath.js");
function castPath(value, object) {
    if (Array.isArray(value)) {
        return value;
    }
    return (0, isKey_js_1.default)(value, object) ? [value] : (0, stringToPath_js_1.default)(value);
}
exports.default = castPath;
