Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNode = exports.shallowDiffers = exports.assign = void 0;
function assign(obj, props) {
    for (var i in props)
        obj[i] = props[i];
    return (obj);
}
exports.assign = assign;
function shallowDiffers(a, b) {
    for (var i in a)
        if (i !== '__source' && !(i in b))
            return true;
    for (var i in b)
        if (i !== '__source' && a[i] !== b[i])
            return true;
    return false;
}
exports.shallowDiffers = shallowDiffers;
function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode)
        parentNode.removeChild(node);
}
exports.removeNode = removeNode;
