Object.defineProperty(exports, "__esModule", { value: true });
exports.enqueueRender = exports.getDomSibling = exports.Component = void 0;
const util_1 = require("./util");
const index_1 = require("./diff/index");
const options_1 = require("./options");
const create_element_1 = require("./create-element");
function Component(props, context) {
    this.props = props;
    this.context = context;
}
exports.Component = Component;
Component.prototype.setState = function (update, callback) {
    let s;
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
    let sibling;
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
    let vnode = component._vnode, oldDom = vnode._dom, parentDom = component._parentDom;
    if (parentDom) {
        let commitQueue = [];
        const oldVNode = (0, util_1.assign)({}, vnode);
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
        for (let i = 0; i < vnode._children.length; i++) {
            let child = vnode._children[i];
            if (child !== null && child._dom !== null) {
                vnode._dom = vnode._component.base = child._dom;
                break;
            }
        }
        return updateParentDomPointers(vnode);
    }
}
let rerenderQueue = [];
let prevDebounce;
function enqueueRender(c) {
    if ((!c._dirty &&
        (c._dirty = true) &&
        rerenderQueue.push(c) &&
        !process._rerenderCount++) ||
        prevDebounce !== options_1.default.debounceRendering) {
        prevDebounce = options_1.default.debounceRendering;
        (prevDebounce || setTimeout)(process);
    }
}
exports.enqueueRender = enqueueRender;
function process() {
    let queue;
    while ((process._rerenderCount = rerenderQueue.length)) {
        queue = rerenderQueue.sort((a, b) => a._vnode._depth - b._vnode._depth);
        rerenderQueue = [];
        queue.some(c => {
            if (c._dirty)
                renderComponent(c);
        });
    }
}
process._rerenderCount = 0;
