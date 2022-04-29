Object.defineProperty(exports, "__esModule", { value: true });
const basePickBy_js_1 = require("./basePickBy.js");
const hasIn_js_1 = require("../hasIn.js");
function basePick(object, paths) {
    return (0, basePickBy_js_1.default)(object, paths, (value, path) => (0, hasIn_js_1.default)(object, path));
}
exports.default = basePick;
