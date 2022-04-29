Object.defineProperty(exports, "__esModule", { value: true });
const baseAssignValue_1 = require("./baseAssignValue");
const eq_1 = require("../eq");
const hasOwnProperty = Object.prototype.hasOwnProperty;
function assignValue(object, key, value) {
    const objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && (0, eq_1.default)(objValue, value))) {
        if (value !== 0 || (1 / value) === (1 / objValue)) {
            (0, baseAssignValue_1.default)(object, key, value);
        }
    }
    else if (value === undefined && !(key in object)) {
        (0, baseAssignValue_1.default)(object, key, value);
    }
}
exports.default = assignValue;
