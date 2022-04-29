Object.defineProperty(exports, "__esModule", { value: true });
const getTag_1 = require("./internal/getTag");
function isSymbol(value) {
    const type = typeof value;
    return type == 'symbol' || (type === 'object' && value != null && (0, getTag_1.default)(value) == '[object Symbol]');
}
exports.default = isSymbol;
