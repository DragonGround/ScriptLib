"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unmount = exports.applyRef = exports.commitRoot = exports.diff = void 0;
var constants_1 = require("../constants");
var component_1 = require("../component");
var create_element_1 = require("../create-element");
var children_1 = require("./children");
var props_1 = require("./props");
var util_1 = require("../util");
var options_1 = __importDefault(require("../options"));
function diff(parentDom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating) {
    var tmp, newType = newVNode.type;
    if (newVNode.constructor !== undefined)
        return null;
    if (oldVNode._hydrating != null) {
        isHydrating = oldVNode._hydrating;
        oldDom = newVNode._dom = oldVNode._dom;
        newVNode._hydrating = null;
        excessDomChildren = [oldDom];
    }
    if ((tmp = options_1.default._diff))
        tmp(newVNode);
    try {
        outer: if (typeof newType == 'function') {
            var c_1, isNew = void 0, oldProps_1, oldState_1, snapshot_1, clearProcessingException = void 0;
            var newProps = newVNode.props;
            tmp = newType.contextType;
            var provider = tmp && globalContext[tmp._id];
            var componentContext = tmp
                ? provider
                    ? provider.props.value
                    : tmp._defaultValue
                : globalContext;
            if (oldVNode._component) {
                c_1 = newVNode._component = oldVNode._component;
                clearProcessingException = c_1._processingException = c_1._pendingError;
            }
            else {
                if ('prototype' in newType && newType.prototype.render) {
                    newVNode._component = c_1 = new newType(newProps, componentContext);
                }
                else {
                    newVNode._component = c_1 = new component_1.Component(newProps, componentContext);
                    c_1.constructor = newType;
                    c_1.render = doRender;
                }
                if (provider)
                    provider.sub(c_1);
                c_1.props = newProps;
                if (!c_1.state)
                    c_1.state = {};
                c_1.context = componentContext;
                c_1._globalContext = globalContext;
                isNew = c_1._dirty = true;
                c_1._renderCallbacks = [];
                c_1._stateCallbacks = [];
            }
            if (c_1._nextState == null) {
                c_1._nextState = c_1.state;
            }
            if (newType.getDerivedStateFromProps != null) {
                if (c_1._nextState == c_1.state) {
                    c_1._nextState = (0, util_1.assign)({}, c_1._nextState);
                }
                (0, util_1.assign)(c_1._nextState, newType.getDerivedStateFromProps(newProps, c_1._nextState));
            }
            oldProps_1 = c_1.props;
            oldState_1 = c_1.state;
            c_1._vnode = newVNode;
            if (isNew) {
                if (newType.getDerivedStateFromProps == null &&
                    c_1.componentWillMount != null) {
                    c_1.componentWillMount();
                }
                if (c_1.componentDidMount != null) {
                    c_1._renderCallbacks.push(c_1.componentDidMount);
                }
            }
            else {
                if (newType.getDerivedStateFromProps == null &&
                    newProps !== oldProps_1 &&
                    c_1.componentWillReceiveProps != null) {
                    c_1.componentWillReceiveProps(newProps, componentContext);
                }
                if ((!c_1._force &&
                    c_1.shouldComponentUpdate != null &&
                    c_1.shouldComponentUpdate(newProps, c_1._nextState, componentContext) === false) ||
                    newVNode._original === oldVNode._original) {
                    if (newVNode._original !== oldVNode._original) {
                        c_1.props = newProps;
                        c_1.state = c_1._nextState;
                        c_1._dirty = false;
                    }
                    c_1._force = false;
                    newVNode._dom = oldVNode._dom;
                    newVNode._children = oldVNode._children;
                    newVNode._children.forEach(function (vnode) {
                        if (vnode)
                            vnode._parent = newVNode;
                    });
                    for (var i = 0; i < c_1._stateCallbacks.length; i++) {
                        c_1._renderCallbacks.push(c_1._stateCallbacks[i]);
                    }
                    c_1._stateCallbacks = [];
                    if (c_1._renderCallbacks.length) {
                        commitQueue.push(c_1);
                    }
                    break outer;
                }
                if (c_1.componentWillUpdate != null) {
                    c_1.componentWillUpdate(newProps, c_1._nextState, componentContext);
                }
                if (c_1.componentDidUpdate != null) {
                    c_1._renderCallbacks.push(function () {
                        c_1.componentDidUpdate(oldProps_1, oldState_1, snapshot_1);
                    });
                }
            }
            c_1.context = componentContext;
            c_1.props = newProps;
            c_1._parentDom = parentDom;
            var renderHook = options_1.default._render, count = 0;
            if ('prototype' in newType && newType.prototype.render) {
                c_1.state = c_1._nextState;
                c_1._dirty = false;
                if (renderHook)
                    renderHook(newVNode);
                tmp = c_1.render(c_1.props, c_1.state, c_1.context);
                for (var i = 0; i < c_1._stateCallbacks.length; i++) {
                    c_1._renderCallbacks.push(c_1._stateCallbacks[i]);
                }
                c_1._stateCallbacks = [];
            }
            else {
                do {
                    c_1._dirty = false;
                    if (renderHook)
                        renderHook(newVNode);
                    tmp = c_1.render(c_1.props, c_1.state, c_1.context);
                    c_1.state = c_1._nextState;
                } while (c_1._dirty && ++count < 25);
            }
            c_1.state = c_1._nextState;
            if (c_1.getChildContext != null) {
                globalContext = (0, util_1.assign)((0, util_1.assign)({}, globalContext), c_1.getChildContext());
            }
            if (!isNew && c_1.getSnapshotBeforeUpdate != null) {
                snapshot_1 = c_1.getSnapshotBeforeUpdate(oldProps_1, oldState_1);
            }
            var isTopLevelFragment = tmp !== null && tmp.type === create_element_1.Fragment && tmp.key == null;
            var renderResult = isTopLevelFragment ? tmp.props.children : tmp;
            (0, children_1.diffChildren)(parentDom, (0, util_1.isArray)(renderResult) ? renderResult : [renderResult], newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating);
            c_1.base = newVNode._dom;
            newVNode._hydrating = null;
            if (c_1._renderCallbacks.length) {
                commitQueue.push(c_1);
            }
            if (clearProcessingException) {
                c_1._pendingError = c_1._processingException = null;
            }
            c_1._force = false;
        }
        else if (excessDomChildren == null &&
            newVNode._original === oldVNode._original) {
            newVNode._children = oldVNode._children;
            newVNode._dom = oldVNode._dom;
        }
        else {
            newVNode._dom = diffElementNodes(oldVNode._dom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, isHydrating);
        }
        if ((tmp = options_1.default.diffed))
            tmp(newVNode);
    }
    catch (e) {
        newVNode._original = null;
        if (isHydrating || excessDomChildren != null) {
            newVNode._dom = oldDom;
            newVNode._hydrating = !!isHydrating;
            excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
        }
        options_1.default._catchError(e, newVNode, oldVNode);
    }
}
exports.diff = diff;
function commitRoot(commitQueue, root) {
    if (options_1.default._commit)
        options_1.default._commit(root, commitQueue);
    commitQueue.some(function (c) {
        try {
            commitQueue = c._renderCallbacks;
            c._renderCallbacks = [];
            commitQueue.some(function (cb) {
                cb.call(c);
            });
        }
        catch (e) {
            options_1.default._catchError(e, c._vnode);
        }
    });
}
exports.commitRoot = commitRoot;
function diffElementNodes(dom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, isHydrating) {
    var oldProps = oldVNode.props;
    var newProps = newVNode.props;
    var nodeType = newVNode.type;
    var i = 0;
    if (nodeType === 'svg')
        isSvg = true;
    if (excessDomChildren != null) {
        for (; i < excessDomChildren.length; i++) {
            var child = excessDomChildren[i];
            if (child &&
                'setAttribute' in child === !!nodeType &&
                (nodeType ? child.localName === nodeType : child.nodeType === 3)) {
                dom = child;
                excessDomChildren[i] = null;
                break;
            }
        }
    }
    if (dom == null) {
        if (nodeType === null) {
            return document.createTextNode(newProps);
        }
        if (isSvg) {
            dom = document.createElementNS('http://www.w3.org/2000/svg', nodeType);
        }
        else {
            dom = document.createElement(nodeType, newProps.is && newProps);
        }
        excessDomChildren = null;
        isHydrating = false;
    }
    if (nodeType === null) {
        if (oldProps !== newProps && (!isHydrating || dom.data !== newProps)) {
            dom.data = newProps;
        }
    }
    else {
        excessDomChildren = excessDomChildren && util_1.slice.call(dom.childNodes);
        oldProps = oldVNode.props || constants_1.EMPTY_OBJ;
        var oldHtml = oldProps.dangerouslySetInnerHTML;
        var newHtml = newProps.dangerouslySetInnerHTML;
        if (!isHydrating) {
            if (excessDomChildren != null) {
                oldProps = {};
                for (i = 0; i < dom.attributes.length; i++) {
                    oldProps[dom.attributes[i].name] = dom.attributes[i].value;
                }
            }
            if (newHtml || oldHtml) {
                if (!newHtml ||
                    ((!oldHtml || newHtml.__html != oldHtml.__html) &&
                        newHtml.__html !== dom.innerHTML)) {
                    dom.innerHTML = (newHtml && newHtml.__html) || '';
                }
            }
        }
        (0, props_1.diffProps)(dom, newProps, oldProps, isSvg, isHydrating);
        if (newHtml) {
            newVNode._children = [];
        }
        else {
            i = newVNode.props.children;
            (0, children_1.diffChildren)(dom, (0, util_1.isArray)(i) ? i : [i], newVNode, oldVNode, globalContext, isSvg && nodeType !== 'foreignObject', excessDomChildren, commitQueue, excessDomChildren
                ? excessDomChildren[0]
                : oldVNode._children && (0, component_1.getDomSibling)(oldVNode, 0), isHydrating);
            if (excessDomChildren != null) {
                for (i = excessDomChildren.length; i--;) {
                    if (excessDomChildren[i] != null)
                        (0, util_1.removeNode)(excessDomChildren[i]);
                }
            }
        }
        if (!isHydrating) {
            if ('value' in newProps &&
                (i = newProps.value) !== undefined &&
                (i !== dom.value ||
                    (nodeType === 'progress' && !i) ||
                    (nodeType === 'option' && i !== oldProps.value))) {
                (0, props_1.setProperty)(dom, 'value', i, oldProps.value, false);
            }
            if ('checked' in newProps &&
                (i = newProps.checked) !== undefined &&
                i !== dom.checked) {
                (0, props_1.setProperty)(dom, 'checked', i, oldProps.checked, false);
            }
        }
    }
    return dom;
}
function applyRef(ref, value, vnode) {
    try {
        if (typeof ref == 'function')
            ref(value);
        else
            ref.current = value;
    }
    catch (e) {
        options_1.default._catchError(e, vnode);
    }
}
exports.applyRef = applyRef;
function unmount(vnode, parentVNode, skipRemove) {
    if (skipRemove === void 0) { skipRemove = false; }
    var r;
    if (options_1.default.unmount)
        options_1.default.unmount(vnode);
    if ((r = vnode.ref)) {
        if (!r.current || r.current === vnode._dom) {
            applyRef(r, null, parentVNode);
        }
    }
    if ((r = vnode._component) !== null) {
        if (r.componentWillUnmount) {
            try {
                r.componentWillUnmount();
            }
            catch (e) {
                options_1.default._catchError(e, parentVNode);
            }
        }
        r.base = r._parentDom = null;
        vnode._component = undefined;
    }
    if ((r = vnode._children)) {
        for (var i = 0; i < r.length; i++) {
            if (r[i]) {
                unmount(r[i], parentVNode, skipRemove || typeof vnode.type !== 'function');
            }
        }
    }
    if (!skipRemove && vnode._dom != null) {
        (0, util_1.removeNode)(vnode._dom);
    }
    vnode._parent = vnode._dom = vnode._nextDom = undefined;
}
exports.unmount = unmount;
function doRender(props, state, context) {
    return this.constructor(props, context);
}
