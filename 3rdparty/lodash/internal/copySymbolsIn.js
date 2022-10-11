Object.defineProperty(exports, "__esModule", { value: true });
var copyObject_js_1 = require("./copyObject.js");
var getSymbolsIn_js_1 = require("./getSymbolsIn.js");
function copySymbolsIn(source, object) {
    return (0, copyObject_js_1.default)(source, (0, getSymbolsIn_js_1.default)(source), object);
}
exports.default = copySymbolsIn;
