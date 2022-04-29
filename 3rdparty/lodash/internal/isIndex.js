Object.defineProperty(exports, "__esModule", { value: true });
const MAX_SAFE_INTEGER = 9007199254740991;
const reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
    const type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
        (type === 'number' ||
            (type !== 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}
exports.default = isIndex;
