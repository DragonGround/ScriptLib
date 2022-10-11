Object.defineProperty(exports, "__esModule", { value: true });
var eq_js_1 = require("../eq.js");
function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
        if ((0, eq_js_1.default)(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
exports.default = assocIndexOf;
