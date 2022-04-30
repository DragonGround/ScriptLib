Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNode = exports.shallowDiffers = exports.assign = void 0;
function assign(obj, props) {
    for (let i in props)
        obj[i] = props[i];
    return (obj);
}
exports.assign = assign;
function shallowDiffers(a, b) {
    for (let i in a)
        if (i !== '__source' && !(i in b))
            return true;
    for (let i in b)
        if (i !== '__source' && a[i] !== b[i])
            return true;
    return false;
}
exports.shallowDiffers = shallowDiffers;
function removeNode(node) {
    let parentNode = node.parentNode;
    if (parentNode)
        parentNode.removeChild(node);
}
exports.removeNode = removeNode;
