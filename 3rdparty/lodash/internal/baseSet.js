Object.defineProperty(exports, "__esModule", { value: true });
const assignValue_js_1 = require("./assignValue.js");
const castPath_js_1 = require("./castPath.js");
const isIndex_js_1 = require("./isIndex.js");
const isObject_js_1 = require("../isObject.js");
const toKey_js_1 = require("./toKey.js");
function baseSet(object, path, value, customizer) {
    if (!(0, isObject_js_1.default)(object)) {
        return object;
    }
    path = (0, castPath_js_1.default)(path, object);
    const length = path.length;
    const lastIndex = length - 1;
    let index = -1;
    let nested = object;
    while (nested != null && ++index < length) {
        const key = (0, toKey_js_1.default)(path[index]);
        let newValue = value;
        if (index != lastIndex) {
            const objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) {
                newValue = (0, isObject_js_1.default)(objValue)
                    ? objValue
                    : ((0, isIndex_js_1.default)(path[index + 1]) ? [] : {});
            }
        }
        (0, assignValue_js_1.default)(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}
exports.default = baseSet;
