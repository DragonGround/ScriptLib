Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneElement = void 0;
var util_1 = require("./util");
var create_element_1 = require("./create-element");
function cloneElement(vnode, props, children) {
    var normalizedProps = (0, util_1.assign)({}, vnode.props), key, ref, i;
    for (i in props) {
        if (i == 'key')
            key = props[i];
        else if (i == 'ref')
            ref = props[i];
        else
            normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) {
        normalizedProps.children =
            arguments.length > 3 ? util_1.slice.call(arguments, 2) : children;
    }
    return (0, create_element_1.createVNode)(vnode.type, normalizedProps, key || vnode.key, ref || vnode.ref, null);
}
exports.cloneElement = cloneElement;
