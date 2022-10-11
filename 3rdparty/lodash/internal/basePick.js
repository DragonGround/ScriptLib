Object.defineProperty(exports, "__esModule", { value: true });
var basePickBy_js_1 = require("./basePickBy.js");
var hasIn_js_1 = require("../hasIn.js");
function basePick(object, paths) {
    return (0, basePickBy_js_1.default)(object, paths, function (value, path) { return (0, hasIn_js_1.default)(object, path); });
}
exports.default = basePick;
