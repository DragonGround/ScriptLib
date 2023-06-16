"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fragment = exports.jsxDEV = exports.jsxs = exports.jsx = void 0;
var preact_1 = require("preact");
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return preact_1.Fragment; } });
var vnodeId = 0;
function createVNode(type, props, key, isStaticChildren, __source, __self) {
    var normalizedProps = {}, ref, i;
    for (i in props) {
        if (i == 'ref') {
            ref = props[i];
        }
        else {
            normalizedProps[i] = props[i];
        }
    }
    var vnode = {
        type: type,
        props: normalizedProps,
        key: key,
        ref: ref,
        _children: null,
        _parent: null,
        _depth: 0,
        _dom: null,
        _nextDom: undefined,
        _component: null,
        _hydrating: null,
        constructor: undefined,
        _original: --vnodeId,
        __source: __source,
        __self: __self
    };
    if (typeof type === 'function' && (ref = type.defaultProps)) {
        for (i in ref)
            if (typeof normalizedProps[i] === 'undefined') {
                normalizedProps[i] = ref[i];
            }
    }
    if (preact_1.options.vnode)
        preact_1.options.vnode(vnode);
    return vnode;
}
exports.jsx = createVNode;
exports.jsxs = createVNode;
exports.jsxDEV = createVNode;
