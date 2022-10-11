Object.defineProperty(exports, "__esModule", { value: true });
var getTag_js_1 = require("./internal/getTag.js");
var isObjectLike_js_1 = require("./isObjectLike.js");
function isArguments(value) {
    return (0, isObjectLike_js_1.default)(value) && (0, getTag_js_1.default)(value) == '[object Arguments]';
}
exports.default = isArguments;
