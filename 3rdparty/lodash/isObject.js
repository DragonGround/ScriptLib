Object.defineProperty(exports, "__esModule", { value: true });
function isObject(value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
}
exports.default = isObject;
