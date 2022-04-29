Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidElement = exports.Fragment = exports.createRef = exports.createVNode = exports.createElement = void 0;
const util_1 = require("./util");
const options_1 = require("./options");
let vnodeId = 0;
function createElement(type, props, children) {
    let normalizedProps = {}, key, ref, i;
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
    if (typeof type == 'function' && type.defaultProps != null) {
        for (i in type.defaultProps) {
            if (normalizedProps[i] === undefined) {
                normalizedProps[i] = type.defaultProps[i];
            }
        }
    }
    return createVNode(type, normalizedProps, key, ref, null);
}
exports.createElement = createElement;
function createVNode(type, props, key, ref, original) {
    const vnode = {
        type,
        props,
        key,
        ref,
        _children: null,
        _parent: null,
        _depth: 0,
        _dom: null,
        _nextDom: undefined,
        _component: null,
        _hydrating: null,
        constructor: undefined,
        _original: original == null ? ++vnodeId : original
    };
    if (original == null && options_1.default.vnode != null)
        options_1.default.vnode(vnode);
    return vnode;
}
exports.createVNode = createVNode;
function createRef() {
    return { current: null };
}
exports.createRef = createRef;
function Fragment(props) {
    return props.children;
}
exports.Fragment = Fragment;
const isValidElement = vnode => vnode != null && vnode.constructor === undefined;
exports.isValidElement = isValidElement;
