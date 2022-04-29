Object.defineProperty(exports, "__esModule", { value: true });
const eq_js_1 = require("./eq.js");
const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;
function defaults(object, ...sources) {
    object = Object(object);
    sources.forEach((source) => {
        if (source != null) {
            source = Object(source);
            for (const key in source) {
                const value = object[key];
                if (value === undefined ||
                    ((0, eq_js_1.default)(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
                    object[key] = source[key];
                }
            }
        }
    });
    return object;
}
exports.default = defaults;
