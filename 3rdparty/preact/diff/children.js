Object.defineProperty(exports, "__esModule", { value: true });
exports.toChildArray = exports.diffChildren = void 0;
const index_1 = require("./index");
const create_element_1 = require("../create-element");
const constants_1 = require("../constants");
const component_1 = require("../component");
function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating) {
    let i, j, oldVNode, childVNode, newDom, firstChildDom, refs;
    let oldChildren = (oldParentVNode && oldParentVNode._children) || constants_1.EMPTY_ARR;
    let oldChildrenLength = oldChildren.length;
    newParentVNode._children = [];
    for (i = 0; i < renderResult.length; i++) {
        childVNode = renderResult[i];
        if (childVNode === null || typeof childVNode === 'boolean') {
            childVNode = newParentVNode._children[i] = null;
        }
        else if (typeof childVNode === 'string' ||
            typeof childVNode === 'number' ||
            typeof childVNode === 'bigint') {
            childVNode = newParentVNode._children[i] = (0, create_element_1.createVNode)(null, childVNode, null, null, childVNode);
        }
        else if (Array.isArray(childVNode)) {
            childVNode = newParentVNode._children[i] = (0, create_element_1.createVNode)(create_element_1.Fragment, { children: childVNode }, null, null, null);
        }
        else if (typeof childVNode !== "undefined" && childVNode._depth > 0) {
            childVNode = newParentVNode._children[i] = (0, create_element_1.createVNode)(childVNode.type, childVNode.props, childVNode.key, childVNode.ref ? childVNode.ref : null, childVNode._original);
        }
        else {
            childVNode = newParentVNode._children[i] = childVNode;
        }
        if (childVNode === null || typeof childVNode === "undefined") {
            continue;
        }
        childVNode._parent = newParentVNode;
        childVNode._depth = newParentVNode._depth + 1;
        oldVNode = oldChildren[i];
        if (oldVNode === null ||
            (oldVNode &&
                childVNode.key == oldVNode.key &&
                childVNode.type === oldVNode.type)) {
            oldChildren[i] = undefined;
        }
        else {
            for (j = 0; j < oldChildrenLength; j++) {
                oldVNode = oldChildren[j];
                if (oldVNode &&
                    childVNode.key == oldVNode.key &&
                    childVNode.type === oldVNode.type) {
                    oldChildren[j] = undefined;
                    break;
                }
                oldVNode = null;
            }
        }
        oldVNode = oldVNode || constants_1.EMPTY_OBJ;
        (0, index_1.diff)(parentDom, childVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating);
        newDom = childVNode._dom;
        if ((j = childVNode.ref) && oldVNode.ref != j) {
            if (refs === null || typeof refs === "undefined")
                refs = [];
            if (oldVNode.ref)
                refs.push(oldVNode.ref, null, childVNode);
            refs.push(j, childVNode._component || newDom, childVNode);
        }
        if (newDom != null) {
            if (firstChildDom == null) {
                firstChildDom = newDom;
            }
            if (typeof childVNode.type == 'function' &&
                childVNode._children === oldVNode._children) {
                childVNode._nextDom = oldDom = reorderChildren(childVNode, oldDom, parentDom);
            }
            else {
                oldDom = placeChild(parentDom, childVNode, oldVNode, oldChildren, newDom, oldDom);
            }
            if (typeof newParentVNode.type == 'function') {
                newParentVNode._nextDom = oldDom;
            }
        }
        else if (oldDom &&
            oldVNode._dom == oldDom &&
            oldDom.parentNode != parentDom) {
            oldDom = (0, component_1.getDomSibling)(oldVNode);
        }
    }
    newParentVNode._dom = firstChildDom;
    for (i = oldChildrenLength; i--;) {
        if (typeof oldChildren[i] !== "undefined" && oldChildren[i] !== null) {
            if (typeof newParentVNode.type == 'function' &&
                oldChildren[i]._dom != null &&
                oldChildren[i]._dom == newParentVNode._nextDom) {
                newParentVNode._nextDom = (0, component_1.getDomSibling)(oldParentVNode, i + 1);
            }
            (0, index_1.unmount)(oldChildren[i], oldChildren[i]);
        }
    }
    if (refs) {
        for (i = 0; i < refs.length; i++) {
            (0, index_1.applyRef)(refs[i], refs[++i], refs[++i]);
        }
    }
}
exports.diffChildren = diffChildren;
function reorderChildren(childVNode, oldDom, parentDom) {
    let c = childVNode._children;
    let tmp = 0;
    for (; c && tmp < c.length; tmp++) {
        let vnode = c[tmp];
        if (vnode) {
            vnode._parent = childVNode;
            if (typeof vnode.type == 'function') {
                oldDom = reorderChildren(vnode, oldDom, parentDom);
            }
            else {
                oldDom = placeChild(parentDom, vnode, vnode, c, vnode._dom, oldDom);
            }
        }
    }
    return oldDom;
}
function toChildArray(children, out) {
    out = out || [];
    if (children == null || typeof children == 'boolean') {
    }
    else if (Array.isArray(children)) {
        children.some(child => {
            toChildArray(child, out);
        });
    }
    else {
        out.push(children);
    }
    return out;
}
exports.toChildArray = toChildArray;
function placeChild(parentDom, childVNode, oldVNode, oldChildren, newDom, oldDom) {
    let nextDom;
    if (childVNode._nextDom !== undefined) {
        nextDom = childVNode._nextDom;
        childVNode._nextDom = undefined;
    }
    else if (oldVNode === null ||
        newDom != oldDom ||
        newDom.parentNode == null) {
        outer: if (oldDom == null || oldDom.parentNode !== parentDom) {
            parentDom.appendChild(newDom);
            nextDom = null;
        }
        else {
            for (let sibDom = oldDom, j = 0; (sibDom = sibDom.nextSibling) && j < oldChildren.length; j += 2) {
                if (sibDom == newDom) {
                    break outer;
                }
            }
            parentDom.insertBefore(newDom, oldDom);
            nextDom = oldDom;
        }
    }
    if (nextDom !== undefined) {
        oldDom = nextDom;
    }
    else {
        oldDom = newDom.nextSibling;
    }
    return oldDom;
}
