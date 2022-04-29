Object.defineProperty(exports, "__esModule", { value: true });
const basePick_1 = require("./internal/basePick");
function pick(object, ...paths) {
    return object == null ? {} : (0, basePick_1.default)(object, paths);
}
exports.default = pick;
