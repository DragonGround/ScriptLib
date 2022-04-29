Object.defineProperty(exports, "__esModule", { value: true });
function baseAssignValue(object, key, value) {
    if (key == '__proto__') {
        Object.defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
        });
    }
    else {
        object[key] = value;
    }
}
exports.default = baseAssignValue;
