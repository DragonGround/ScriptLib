Object.defineProperty(exports, "__esModule", { value: true });
var isPrototype_js_1 = require("./isPrototype.js");
function initCloneObject(object) {
    return (typeof object.constructor === 'function' && !(0, isPrototype_js_1.default)(object))
        ? Object.create(Object.getPrototypeOf(object))
        : {};
}
exports.default = initCloneObject;
