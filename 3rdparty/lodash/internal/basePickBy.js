Object.defineProperty(exports, "__esModule", { value: true });
const baseGet_js_1 = require("./baseGet.js");
const baseSet_js_1 = require("./baseSet.js");
const castPath_js_1 = require("./castPath.js");
function basePickBy(object, paths, predicate) {
    let index = -1;
    const length = paths.length;
    const result = {};
    while (++index < length) {
        const path = paths[index];
        const value = (0, baseGet_js_1.default)(object, path);
        if (predicate(value, path)) {
            (0, baseSet_js_1.default)(result, (0, castPath_js_1.default)(path, object), value);
        }
    }
    return result;
}
exports.default = basePickBy;
