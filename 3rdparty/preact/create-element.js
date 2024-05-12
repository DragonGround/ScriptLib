"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidElement = exports.Fragment = exports.createRef = exports.createVNode = exports.createElement = void 0;
var util_1 = require("./util");
var options_1 = __importDefault(require("./options"));
var vnodeId = 0;
function createElement(type, props, children) {
    var normalizedProps = {}, key, ref, i;
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
    var vnode = {
        type: type,
        props: props,
        key: key,
        ref: ref,
        _children: null,
        _parent: null,
        _depth: 0,
        _dom: null,
        _nextDom: undefined,
        _component: null,
        constructor: undefined,
        _original: original == null ? ++vnodeId : original,
        _index: -1,
        _flags: 0
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
var isValidElement = function (vnode) {
    return vnode !== null && typeof vnode !== "undefined" && vnode.constructor == undefined;
};
exports.isValidElement = isValidElement;
