Object.defineProperty(exports, "__esModule", { value: true });
var assignValue_js_1 = require("./assignValue.js");
var baseAssignValue_js_1 = require("./baseAssignValue.js");
function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
        var key = props_1[_i];
        var newValue = customizer
            ? customizer(object[key], source[key], key, object, source)
            : undefined;
        if (newValue === undefined) {
            newValue = source[key];
        }
        if (isNew) {
            (0, baseAssignValue_js_1.default)(object, key, newValue);
        }
        else {
            (0, assignValue_js_1.default)(object, key, newValue);
        }
    }
    return object;
}
exports.default = copyObject;
