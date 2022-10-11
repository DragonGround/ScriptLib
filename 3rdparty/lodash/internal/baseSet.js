Object.defineProperty(exports, "__esModule", { value: true });
var assignValue_js_1 = require("./assignValue.js");
var castPath_js_1 = require("./castPath.js");
var isIndex_js_1 = require("./isIndex.js");
var isObject_js_1 = require("../isObject.js");
var toKey_js_1 = require("./toKey.js");
function baseSet(object, path, value, customizer) {
    if (!(0, isObject_js_1.default)(object)) {
        return object;
    }
    path = (0, castPath_js_1.default)(path, object);
    var length = path.length;
    var lastIndex = length - 1;
    var index = -1;
    var nested = object;
    while (nested != null && ++index < length) {
        var key = (0, toKey_js_1.default)(path[index]);
        var newValue = value;
        if (index != lastIndex) {
            var objValue = nested[key];
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
