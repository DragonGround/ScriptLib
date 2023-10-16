"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enqueueRender = exports.getDomSibling = exports.Component = void 0;
var util_1 = require("./util");
var index_1 = require("./diff/index");
var options_1 = __importDefault(require("./options"));
var create_element_1 = require("./create-element");
function Component(props, context) {
    this.props = props;
    this.context = context;
}
exports.Component = Component;
Component.prototype.setState = function (update, callback) {
    var s;
    if (this._nextState != null && this._nextState !== this.state) {
        s = this._nextState;
    }
    else {
        s = this._nextState = (0, util_1.assign)({}, this.state);
    }
    if (typeof update == 'function') {
        update = update((0, util_1.assign)({}, s), this.props);
    }
    if (update) {
        (0, util_1.assign)(s, update);
    }
    if (update == null)
        return;
    if (this._vnode) {
        if (callback)
            this._renderCallbacks.push(callback);
        enqueueRender(this);
    }
};
Component.prototype.forceUpdate = function (callback) {
    if (this._vnode) {
        this._force = true;
        if (callback)
            this._renderCallbacks.push(callback);
        enqueueRender(this);
    }
};
Component.prototype.render = create_element_1.Fragment;
function getDomSibling(vnode, childIndex) {
    if (childIndex == null) {
        return vnode._parent
            ? getDomSibling(vnode._parent, vnode._parent._children.indexOf(vnode) + 1)
            : null;
    }
    var sibling;
    for (; childIndex < vnode._children.length; childIndex++) {
        sibling = vnode._children[childIndex];
        if (sibling !== null && typeof sibling !== "undefined" && sibling._dom !== null) {
            return sibling._dom;
        }
    }
    return typeof vnode.type == 'function' ? getDomSibling(vnode) : null;
}
exports.getDomSibling = getDomSibling;
function renderComponent(component) {
    var vnode = component._vnode, oldDom = vnode._dom, parentDom = component._parentDom;
    if (parentDom) {
        var commitQueue = [];
        var oldVNode = (0, util_1.assign)({}, vnode);
        oldVNode._original = vnode._original + 1;
        (0, index_1.diff)(parentDom, vnode, oldVNode, component._globalContext, parentDom.ownerSVGElement !== undefined, vnode._hydrating != null ? [oldDom] : null, commitQueue, oldDom == null ? getDomSibling(vnode) : oldDom, vnode._hydrating);
        (0, index_1.commitRoot)(commitQueue, vnode);
        if (vnode._dom !== oldDom) {
            updateParentDomPointers(vnode);
        }
    }
}
function updateParentDomPointers(vnode) {
    if ((vnode = vnode._parent) !== null && vnode._component !== null) {
        vnode._dom = vnode._component.base = null;
        for (var i = 0; i < vnode._children.length; i++) {
            var child = vnode._children[i];
            if (child !== null && child._dom !== null) {
                vnode._dom = vnode._component.base = child._dom;
                break;
            }
        }
        return updateParentDomPointers(vnode);
    }
}
var rerenderQueue = [];
var prevDebounce;
function enqueueRender(c) {
    if ((!c._dirty &&
        (c._dirty = true) &&
        rerenderQueue.push(c) &&
        !process._rerenderCount++) ||
        prevDebounce !== options_1.default.debounceRendering) {
        prevDebounce = options_1.default.debounceRendering;
        (prevDebounce || setTimeout)(process, 0);
    }
}
exports.enqueueRender = enqueueRender;
var depthSort = function (a, b) { return a._vnode._depth - b._vnode._depth; };
function process() {
    var c;
    rerenderQueue.sort(depthSort);
    while ((c = rerenderQueue.shift())) {
        if (c._dirty) {
            var renderQueueLength = rerenderQueue.length;
            renderComponent(c);
            if (rerenderQueue.length > renderQueueLength) {
                rerenderQueue.sort(depthSort);
            }
        }
    }
    process._rerenderCount = 0;
}
process._rerenderCount = 0;
