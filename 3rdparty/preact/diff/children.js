"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toChildArray = exports.diffChildren = void 0;
var index_1 = require("./index");
var create_element_1 = require("../create-element");
var constants_1 = require("../constants");
var util_1 = require("../util");
var component_1 = require("../component");
function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    var i, oldVNode, childVNode, newDom, firstChildDom;
    var oldChildren = (oldParentVNode && oldParentVNode._children) || constants_1.EMPTY_ARR;
    var newChildrenLength = renderResult.length;
    newParentVNode._nextDom = oldDom;
    constructNewChildrenArray(newParentVNode, renderResult, oldChildren);
    oldDom = newParentVNode._nextDom;
    for (i = 0; i < newChildrenLength; i++) {
        childVNode = newParentVNode._children[i];
        if (childVNode === null || typeof childVNode === "undefined" ||
            typeof childVNode == 'boolean' ||
            typeof childVNode == 'function') {
            continue;
        }
        if (childVNode._index === -1) {
            oldVNode = constants_1.EMPTY_OBJ;
        }
        else {
            oldVNode = oldChildren[childVNode._index] || constants_1.EMPTY_OBJ;
        }
        childVNode._index = i;
        (0, index_1.diff)(parentDom, childVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        newDom = childVNode._dom;
        if (childVNode.ref && oldVNode.ref != childVNode.ref) {
            if (oldVNode.ref) {
                (0, index_1.applyRef)(oldVNode.ref, null, childVNode);
            }
            refQueue.push(childVNode.ref, childVNode._component || newDom, childVNode);
        }
        if (firstChildDom == null && newDom != null) {
            firstChildDom = newDom;
        }
        if (childVNode._flags & constants_1.INSERT_VNODE ||
            oldVNode._children === childVNode._children) {
            oldDom = insert(childVNode, oldDom, parentDom);
        }
        else if (typeof childVNode.type == 'function' &&
            childVNode._nextDom !== undefined) {
            oldDom = childVNode._nextDom;
        }
        else if (newDom) {
            oldDom = newDom.nextSibling;
        }
        childVNode._nextDom = undefined;
        childVNode._flags &= ~(constants_1.INSERT_VNODE | constants_1.MATCHED);
    }
    newParentVNode._nextDom = oldDom;
    newParentVNode._dom = firstChildDom;
}
exports.diffChildren = diffChildren;
function constructNewChildrenArray(newParentVNode, renderResult, oldChildren) {
    var i;
    var childVNode;
    var oldVNode;
    var newChildrenLength = renderResult.length;
    var oldChildrenLength = oldChildren.length, remainingOldChildren = oldChildrenLength;
    var skew = 0;
    newParentVNode._children = [];
    for (i = 0; i < newChildrenLength; i++) {
        childVNode = renderResult[i];
        if (childVNode === null || typeof childVNode === "undefined" || typeof childVNode === 'boolean' || typeof childVNode === 'function') {
            childVNode = newParentVNode._children[i] = null;
        }
        else if (typeof childVNode == 'string' ||
            typeof childVNode == 'number' ||
            typeof childVNode == 'bigint' ||
            childVNode.constructor == String) {
            childVNode = newParentVNode._children[i] = (0, create_element_1.createVNode)(null, childVNode, null, null, null);
        }
        else if ((0, util_1.isArray)(childVNode)) {
            childVNode = newParentVNode._children[i] = (0, create_element_1.createVNode)(create_element_1.Fragment, { children: childVNode }, null, null, null);
        }
        else if (childVNode.constructor === undefined && childVNode._depth > 0) {
            childVNode = newParentVNode._children[i] = (0, create_element_1.createVNode)(childVNode.type, childVNode.props, childVNode.key, childVNode.ref ? childVNode.ref : null, childVNode._original);
        }
        else {
            childVNode = newParentVNode._children[i] = childVNode;
        }
        var skewedIndex = i + skew;
        if (childVNode === null || typeof childVNode === "undefined") {
            oldVNode = oldChildren[skewedIndex];
            if (oldVNode !== null && typeof oldVNode !== "undefined" &&
                oldVNode.key == null &&
                oldVNode._dom &&
                (oldVNode._flags & constants_1.MATCHED) === 0) {
                if (oldVNode._dom == newParentVNode._nextDom) {
                    newParentVNode._nextDom = (0, component_1.getDomSibling)(oldVNode);
                }
                (0, index_1.unmount)(oldVNode, oldVNode, false);
                oldChildren[skewedIndex] = null;
                remainingOldChildren--;
            }
            continue;
        }
        childVNode._parent = newParentVNode;
        childVNode._depth = newParentVNode._depth + 1;
        var matchingIndex = findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren);
        childVNode._index = matchingIndex;
        oldVNode = null;
        if (matchingIndex !== -1) {
            oldVNode = oldChildren[matchingIndex];
            remainingOldChildren--;
            if (oldVNode !== null && typeof oldVNode !== "undefined") {
                oldVNode._flags |= constants_1.MATCHED;
            }
        }
        var isMounting = oldVNode === null || typeof oldVNode === "undefined" || oldVNode._original === null;
        if (isMounting) {
            if (matchingIndex == -1) {
                skew--;
            }
            if (typeof childVNode.type != 'function') {
                childVNode._flags |= constants_1.INSERT_VNODE;
            }
        }
        else if (matchingIndex !== skewedIndex) {
            if (matchingIndex === skewedIndex + 1) {
                skew++;
            }
            else if (matchingIndex > skewedIndex) {
                if (remainingOldChildren > newChildrenLength - skewedIndex) {
                    skew += matchingIndex - skewedIndex;
                }
                else {
                    skew--;
                }
            }
            else if (matchingIndex < skewedIndex) {
                if (matchingIndex == skewedIndex - 1) {
                    skew = matchingIndex - skewedIndex;
                }
            }
            else {
                skew = 0;
            }
            if (matchingIndex !== i + skew) {
                childVNode._flags |= constants_1.INSERT_VNODE;
            }
        }
    }
    if (remainingOldChildren) {
        for (i = 0; i < oldChildrenLength; i++) {
            oldVNode = oldChildren[i];
            if (oldVNode !== null && typeof oldVNode !== "undefined" && (oldVNode._flags & constants_1.MATCHED) === 0) {
                if (oldVNode._dom == newParentVNode._nextDom) {
                    newParentVNode._nextDom = (0, component_1.getDomSibling)(oldVNode);
                }
                (0, index_1.unmount)(oldVNode, oldVNode);
            }
        }
    }
}
function insert(parentVNode, oldDom, parentDom) {
    if (typeof parentVNode.type == 'function') {
        var children = parentVNode._children;
        for (var i = 0; children && i < children.length; i++) {
            if (children[i]) {
                children[i]._parent = parentVNode;
                oldDom = insert(children[i], oldDom, parentDom);
            }
        }
        return oldDom;
    }
    else if (parentVNode._dom != oldDom) {
        parentDom.insertBefore(parentVNode._dom, oldDom || null);
        oldDom = parentVNode._dom;
    }
    do {
        oldDom = oldDom && oldDom.nextSibling;
    } while (oldDom !== null && oldDom.nodeType === 8);
    return oldDom;
}
function toChildArray(children, out) {
    out = out || [];
    if (children === null || typeof children === "undefined" || typeof children == 'boolean') {
    }
    else if ((0, util_1.isArray)(children)) {
        children.some(function (child) {
            toChildArray(child, out);
        });
    }
    else {
        out.push(children);
    }
    return out;
}
exports.toChildArray = toChildArray;
function findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren) {
    var key = childVNode.key;
    var type = childVNode.type;
    var x = skewedIndex - 1;
    var y = skewedIndex + 1;
    var oldVNode = oldChildren[skewedIndex];
    var shouldSearch = remainingOldChildren >
        (oldVNode !== null && typeof oldVNode !== "undefined" && (oldVNode._flags & constants_1.MATCHED) === 0 ? 1 : 0);
    if (oldVNode === null ||
        (oldVNode !== null && typeof oldVNode !== "undefined" &&
            key == oldVNode.key &&
            type === oldVNode.type &&
            (oldVNode._flags & constants_1.MATCHED) === 0)) {
        return skewedIndex;
    }
    else if (shouldSearch) {
        while (x >= 0 || y < oldChildren.length) {
            if (x >= 0) {
                oldVNode = oldChildren[x];
                if (oldVNode !== null && typeof oldVNode !== "undefined" &&
                    (oldVNode._flags & constants_1.MATCHED) === 0 &&
                    key == oldVNode.key &&
                    type === oldVNode.type) {
                    return x;
                }
                x--;
            }
            if (y < oldChildren.length) {
                oldVNode = oldChildren[y];
                if (oldVNode !== null && typeof oldVNode !== "undefined" &&
                    (oldVNode._flags & constants_1.MATCHED) === 0 &&
                    key == oldVNode.key &&
                    type === oldVNode.type) {
                    return y;
                }
                y++;
            }
        }
    }
    return -1;
}
