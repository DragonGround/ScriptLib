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
function diff(parentDom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    var tmp, newType = newVNode.type;
    if (newVNode.constructor !== undefined)
        return null;
    if (oldVNode._flags & constants_1.MODE_SUSPENDED) {
        isHydrating = !!(oldVNode._flags & constants_1.MODE_HYDRATE);
        oldDom = newVNode._dom = oldVNode._dom;
        excessDomChildren = [oldDom];
    }
    if ((tmp = options_1.default._diff))
        tmp(newVNode);
    outer: if (typeof newType == 'function') {
        try {
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
                    newVNode._component = c_1 = new component_1.BaseComponent(newProps, componentContext);
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
                if (!c_1._force &&
                    ((c_1.shouldComponentUpdate != null &&
                        c_1.shouldComponentUpdate(newProps, c_1._nextState, componentContext) === false) ||
                        newVNode._original === oldVNode._original)) {
                    if (newVNode._original !== oldVNode._original) {
                        c_1.props = newProps;
                        c_1.state = c_1._nextState;
                        c_1._dirty = false;
                    }
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
            c_1._force = false;
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
            var isTopLevelFragment = tmp !== null && typeof tmp != "undefined" && tmp.type === create_element_1.Fragment && tmp.key == null;
            var renderResult = isTopLevelFragment ? tmp.props.children : tmp;
            (0, children_1.diffChildren)(parentDom, (0, util_1.isArray)(renderResult) ? renderResult : [renderResult], newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
            c_1.base = newVNode._dom;
            newVNode._flags &= constants_1.RESET_MODE;
            if (c_1._renderCallbacks.length) {
                commitQueue.push(c_1);
            }
            if (clearProcessingException) {
                c_1._pendingError = c_1._processingException = null;
            }
        }
        catch (e) {
            newVNode._original = null;
            if (isHydrating || excessDomChildren != null) {
                newVNode._dom = oldDom;
                newVNode._flags |= isHydrating
                    ? constants_1.MODE_HYDRATE | constants_1.MODE_SUSPENDED
                    : constants_1.MODE_HYDRATE;
                excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
            }
            else {
                newVNode._dom = oldVNode._dom;
                newVNode._children = oldVNode._children;
            }
            options_1.default._catchError(e, newVNode, oldVNode);
        }
    }
    else if (excessDomChildren == null &&
        newVNode._original === oldVNode._original) {
        newVNode._children = oldVNode._children;
        newVNode._dom = oldVNode._dom;
    }
    else {
        newVNode._dom = diffElementNodes(oldVNode._dom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue);
    }
    if ((tmp = options_1.default.diffed))
        tmp(newVNode);
}
exports.diff = diff;
function commitRoot(commitQueue, root, refQueue) {
    root._nextDom = undefined;
    for (var i = 0; i < refQueue.length; i++) {
        applyRef(refQueue[i], refQueue[++i], refQueue[++i]);
    }
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
function diffElementNodes(dom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue) {
    var oldProps = oldVNode.props;
    var newProps = newVNode.props;
    var nodeType = (newVNode.type);
    var i;
    var newHtml;
    var oldHtml;
    var newChildren;
    var value;
    var inputValue;
    var checked;
    if (nodeType === 'svg')
        namespace = 'http://www.w3.org/2000/svg';
    else if (nodeType === 'math')
        namespace = 'http://www.w3.org/1998/Math/MathML';
    else if (!namespace)
        namespace = 'http://www.w3.org/1999/xhtml';
    if (excessDomChildren != null) {
        for (i = 0; i < excessDomChildren.length; i++) {
            value = excessDomChildren[i];
            if (value &&
                'setAttribute' in value === !!nodeType &&
                (nodeType ? value.localName === nodeType : value.nodeType === 3)) {
                dom = value;
                excessDomChildren[i] = null;
                break;
            }
        }
    }
    if (dom == null) {
        if (nodeType === null) {
            return document.createTextNode(newProps);
        }
        dom = document.createElementNS(namespace, nodeType, newProps.is && newProps);
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
        if (!isHydrating && excessDomChildren != null) {
            oldProps = {};
            for (i = 0; i < dom.attributes.length; i++) {
                value = dom.attributes[i];
                oldProps[value.name] = value.value;
            }
        }
        for (i in oldProps) {
            value = oldProps[i];
            if (i == 'children') {
            }
            else if (i == 'dangerouslySetInnerHTML') {
                oldHtml = value;
            }
            else if (i !== 'key' && !(i in newProps)) {
                if ((i == 'value' && 'defaultValue' in newProps) ||
                    (i == 'checked' && 'defaultChecked' in newProps)) {
                    continue;
                }
                (0, props_1.setProperty)(dom, i, null, value, namespace);
            }
        }
        for (i in newProps) {
            value = newProps[i];
            if (i == 'children') {
                newChildren = value;
            }
            else if (i == 'dangerouslySetInnerHTML') {
                newHtml = value;
            }
            else if (i == 'value') {
                inputValue = value;
            }
            else if (i == 'checked') {
                checked = value;
            }
            else if (i !== 'key' &&
                (!isHydrating || typeof value == 'function') &&
                oldProps[i] !== value) {
                (0, props_1.setProperty)(dom, i, value, oldProps[i], namespace);
            }
        }
        if (newHtml) {
            if (!isHydrating &&
                (!oldHtml ||
                    (newHtml.__html !== oldHtml.__html &&
                        newHtml.__html !== dom.innerHTML))) {
                dom.innerHTML = newHtml.__html;
            }
            newVNode._children = [];
        }
        else {
            if (oldHtml)
                dom.innerHTML = '';
            (0, children_1.diffChildren)(dom, (0, util_1.isArray)(newChildren) ? newChildren : [newChildren], newVNode, oldVNode, globalContext, nodeType === 'foreignObject'
                ? 'http://www.w3.org/1999/xhtml'
                : namespace, excessDomChildren, commitQueue, excessDomChildren
                ? excessDomChildren[0]
                : oldVNode._children && (0, component_1.getDomSibling)(oldVNode, 0), isHydrating, refQueue);
            if (excessDomChildren != null) {
                for (i = excessDomChildren.length; i--;) {
                    if (excessDomChildren[i] != null)
                        (0, util_1.removeNode)(excessDomChildren[i]);
                }
            }
        }
        if (!isHydrating) {
            i = 'value';
            if (inputValue !== undefined &&
                (inputValue !== dom[i] ||
                    (nodeType === 'progress' && !inputValue) ||
                    (nodeType === 'option' && inputValue !== oldProps[i]))) {
                (0, props_1.setProperty)(dom, i, inputValue, oldProps[i], namespace);
            }
            i = 'checked';
            if (checked !== undefined && checked !== dom[i]) {
                (0, props_1.setProperty)(dom, i, checked, oldProps[i], namespace);
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
        if (r.current !== null || r.current === vnode._dom) {
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
    vnode._component = vnode._parent = vnode._dom = vnode._nextDom = undefined;
}
exports.unmount = unmount;
function doRender(props, state, context) {
    return this.constructor(props, context);
}
