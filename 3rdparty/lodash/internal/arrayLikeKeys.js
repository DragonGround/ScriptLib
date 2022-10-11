Object.defineProperty(exports, "__esModule", { value: true });
var isArguments_js_1 = require("../isArguments.js");
var isBuffer_js_1 = require("../isBuffer.js");
var isIndex_js_1 = require("./isIndex.js");
var isTypedArray_js_1 = require("../isTypedArray.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
    var isArr = Array.isArray(value);
    var isArg = !isArr && (0, isArguments_js_1.default)(value);
    var isBuff = !isArr && !isArg && (0, isBuffer_js_1.default)(value);
    var isType = !isArr && !isArg && !isBuff && (0, isTypedArray_js_1.default)(value);
    var skipIndexes = isArr || isArg || isBuff || isType;
    var length = value.length;
    var result = new Array(skipIndexes ? length : 0);
    var index = skipIndexes ? -1 : length;
    while (++index < length) {
        result[index] = "".concat(index);
    }
    for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && ((key === 'length' ||
                (0, isIndex_js_1.default)(key, length))))) {
            result.push(key);
        }
    }
    return result;
}
exports.default = arrayLikeKeys;
