Object.defineProperty(exports, "__esModule", { value: true });
const toString = Object.prototype.toString;
function getTag(value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
}
exports.default = getTag;
