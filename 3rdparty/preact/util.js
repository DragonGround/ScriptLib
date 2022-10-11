Object.defineProperty(exports, "__esModule", { value: true });
exports.slice = exports.removeNode = exports.assign = void 0;
var constants_1 = require("./constants");
function assign(obj, props) {
    for (var i in props)
        obj[i] = props[i];
    return (obj);
}
exports.assign = assign;
function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode)
        parentNode.removeChild(node);
}
exports.removeNode = removeNode;
exports.slice = constants_1.EMPTY_ARR.slice;
