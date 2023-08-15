"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_js_1 = __importDefault(require("./Stack.js"));
var arrayEach_js_1 = __importDefault(require("./arrayEach.js"));
var assignValue_js_1 = __importDefault(require("./assignValue.js"));
var cloneBuffer_js_1 = __importDefault(require("./cloneBuffer.js"));
var copyArray_js_1 = __importDefault(require("./copyArray.js"));
var copyObject_js_1 = __importDefault(require("./copyObject.js"));
var cloneArrayBuffer_js_1 = __importDefault(require("./cloneArrayBuffer.js"));
var cloneDataView_js_1 = __importDefault(require("./cloneDataView.js"));
var cloneRegExp_js_1 = __importDefault(require("./cloneRegExp.js"));
var cloneSymbol_js_1 = __importDefault(require("./cloneSymbol.js"));
var cloneTypedArray_js_1 = __importDefault(require("./cloneTypedArray.js"));
var copySymbols_js_1 = __importDefault(require("./copySymbols.js"));
var copySymbolsIn_js_1 = __importDefault(require("./copySymbolsIn.js"));
var getAllKeys_js_1 = __importDefault(require("./getAllKeys.js"));
var getAllKeysIn_js_1 = __importDefault(require("./getAllKeysIn.js"));
var getTag_js_1 = __importDefault(require("./getTag.js"));
var initCloneObject_js_1 = __importDefault(require("./initCloneObject.js"));
var isBuffer_js_1 = __importDefault(require("../isBuffer.js"));
var isObject_js_1 = __importDefault(require("../isObject.js"));
var isTypedArray_js_1 = __importDefault(require("../isTypedArray.js"));
var keys_js_1 = __importDefault(require("../keys.js"));
var keysIn_js_1 = __importDefault(require("../keysIn.js"));
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag = '[object Symbol]';
var weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
        cloneableTags[boolTag] = cloneableTags[dateTag] =
            cloneableTags[float32Tag] = cloneableTags[float64Tag] =
                cloneableTags[int8Tag] = cloneableTags[int16Tag] =
                    cloneableTags[int32Tag] = cloneableTags[mapTag] =
                        cloneableTags[numberTag] = cloneableTags[objectTag] =
                            cloneableTags[regexpTag] = cloneableTags[setTag] =
                                cloneableTags[stringTag] = cloneableTags[symbolTag] =
                                    cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
                                        cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[weakMapTag] = false;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
        case arrayBufferTag:
            return (0, cloneArrayBuffer_js_1.default)(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return (0, cloneDataView_js_1.default)(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return (0, cloneTypedArray_js_1.default)(object, isDeep);
        case mapTag:
            return new Ctor;
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return (0, cloneRegExp_js_1.default)(object);
        case setTag:
            return new Ctor;
        case symbolTag:
            return (0, cloneSymbol_js_1.default)(object);
    }
}
function initCloneArray(array) {
    var length = array.length;
    var result = new array.constructor(length);
    if (length && typeof array[0] === 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
function baseClone(value, bitmask, customizer, key, object, stack) {
    var result;
    var isDeep = bitmask & CLONE_DEEP_FLAG;
    var isFlat = bitmask & CLONE_FLAT_FLAG;
    var isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
        return result;
    }
    if (!(0, isObject_js_1.default)(value)) {
        return value;
    }
    var isArr = Array.isArray(value);
    var tag = (0, getTag_js_1.default)(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
            return (0, copyArray_js_1.default)(value, result);
        }
    }
    else {
        var isFunc = typeof value === 'function';
        if ((0, isBuffer_js_1.default)(value)) {
            return (0, cloneBuffer_js_1.default)(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
            result = (isFlat || isFunc) ? {} : (0, initCloneObject_js_1.default)(value);
            if (!isDeep) {
                return isFlat
                    ? (0, copySymbolsIn_js_1.default)(value, (0, copyObject_js_1.default)(value, (0, keysIn_js_1.default)(value), result))
                    : (0, copySymbols_js_1.default)(value, Object.assign(result, value));
            }
        }
        else {
            if (isFunc || !cloneableTags[tag]) {
                return object ? value : {};
            }
            result = initCloneByTag(value, tag, isDeep);
        }
    }
    stack || (stack = new Stack_js_1.default);
    var stacked = stack.get(value);
    if (stacked) {
        return stacked;
    }
    stack.set(value, result);
    if (tag == mapTag) {
        value.forEach(function (subValue, key) {
            result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
        return result;
    }
    if (tag == setTag) {
        value.forEach(function (subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
        return result;
    }
    if ((0, isTypedArray_js_1.default)(value)) {
        return result;
    }
    var keysFunc = isFull
        ? (isFlat ? getAllKeysIn_js_1.default : getAllKeys_js_1.default)
        : (isFlat ? keysIn_js_1.default : keys_js_1.default);
    var props = isArr ? undefined : keysFunc(value);
    (0, arrayEach_js_1.default)(props || value, function (subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        (0, assignValue_js_1.default)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
}
exports.default = baseClone;
