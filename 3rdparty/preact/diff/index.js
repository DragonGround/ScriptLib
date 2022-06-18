Object.defineProperty(exports, "__esModule", { value: true });
exports.unmount = exports.applyRef = exports.commitRoot = exports.diff = void 0;
const constants_1 = require("../constants");
const component_1 = require("../component");
const create_element_1 = require("../create-element");
const children_1 = require("./children");
const props_1 = require("./props");
const util_1 = require("../util");
const preact_1 = require("preact/");
function diff(parentDom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating) {
    let tmp, newType = newVNode.type;
    if (newVNode.constructor !== undefined)
        return null;
    if (oldVNode._hydrating != null) {
        isHydrating = oldVNode._hydrating;
        oldDom = newVNode._dom = oldVNode._dom;
        newVNode._hydrating = null;
        excessDomChildren = [oldDom];
    }
    if ((tmp = preact_1.options._diff))
        tmp(newVNode);
    try {
        outer: if (typeof newType == 'function') {
            let c, isNew, oldProps, oldState, snapshot, clearProcessingException;
            let newProps = newVNode.props;
            tmp = newType.contextType;
            let provider = tmp && globalContext[tmp._id];
            let componentContext = tmp
                ? provider
                    ? provider.props.value
                    : tmp._defaultValue
                : globalContext;
            if (oldVNode._component) {
                c = newVNode._component = oldVNode._component;
                clearProcessingException = c._processingException = c._pendingError;
            }
            else {
                if ('prototype' in newType && newType.prototype.render) {
                    newVNode._component = c = new newType(newProps, componentContext);
                }
                else {
                    newVNode._component = c = new component_1.Component(newProps, componentContext);
                    c.constructor = newType;
                    c.render = doRender;
                }
                if (provider)
                    provider.sub(c);
                c.props = newProps;
                if (!c.state)
                    c.state = {};
                c.context = componentContext;
                c._globalContext = globalContext;
                isNew = c._dirty = true;
                c._renderCallbacks = [];
            }
            if (c._nextState == null) {
                c._nextState = c.state;
            }
            if (newType.getDerivedStateFromProps != null) {
                if (c._nextState == c.state) {
                    c._nextState = (0, util_1.assign)({}, c._nextState);
                }
                (0, util_1.assign)(c._nextState, newType.getDerivedStateFromProps(newProps, c._nextState));
            }
            oldProps = c.props;
            oldState = c.state;
            if (isNew) {
                if (newType.getDerivedStateFromProps == null &&
                    c.componentWillMount != null) {
                    c.componentWillMount();
                }
                if (c.componentDidMount != null) {
                    c._renderCallbacks.push(c.componentDidMount);
                }
            }
            else {
                if (newType.getDerivedStateFromProps == null &&
                    newProps !== oldProps &&
                    c.componentWillReceiveProps != null) {
                    c.componentWillReceiveProps(newProps, componentContext);
                }
                if ((!c._force &&
                    c.shouldComponentUpdate != null &&
                    c.shouldComponentUpdate(newProps, c._nextState, componentContext) === false) ||
                    newVNode._original === oldVNode._original) {
                    c.props = newProps;
                    c.state = c._nextState;
                    if (newVNode._original !== oldVNode._original)
                        c._dirty = false;
                    c._vnode = newVNode;
                    newVNode._dom = oldVNode._dom;
                    newVNode._children = oldVNode._children;
                    newVNode._children.forEach(vnode => {
                        if (vnode)
                            vnode._parent = newVNode;
                    });
                    if (c._renderCallbacks.length) {
                        commitQueue.push(c);
                    }
                    break outer;
                }
                if (c.componentWillUpdate != null) {
                    c.componentWillUpdate(newProps, c._nextState, componentContext);
                }
                if (c.componentDidUpdate != null) {
                    c._renderCallbacks.push(() => {
                        c.componentDidUpdate(oldProps, oldState, snapshot);
                    });
                }
            }
            c.context = componentContext;
            c.props = newProps;
            c.state = c._nextState;
            if ((tmp = preact_1.options._render))
                tmp(newVNode);
            c._dirty = false;
            c._vnode = newVNode;
            c._parentDom = parentDom;
            tmp = c.render(c.props, c.state, c.context);
            c.state = c._nextState;
            if (c.getChildContext != null) {
                globalContext = (0, util_1.assign)((0, util_1.assign)({}, globalContext), c.getChildContext());
            }
            if (!isNew && c.getSnapshotBeforeUpdate != null) {
                snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
            }
            let isTopLevelFragment = tmp !== null && tmp.type === create_element_1.Fragment && tmp.key == null;
            let renderResult = isTopLevelFragment ? tmp.props.children : tmp;
            (0, children_1.diffChildren)(parentDom, Array.isArray(renderResult) ? renderResult : [renderResult], newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating);
            c.base = newVNode._dom;
            newVNode._hydrating = null;
            if (c._renderCallbacks.length) {
                commitQueue.push(c);
            }
            if (clearProcessingException) {
                c._pendingError = c._processingException = null;
            }
            c._force = false;
        }
        else if (excessDomChildren == null && newVNode._original === oldVNode._original) {
            newVNode._children = oldVNode._children;
            newVNode._dom = oldVNode._dom;
        }
        else {
            newVNode._dom = diffElementNodes(oldVNode._dom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, isHydrating);
        }
        if ((tmp = preact_1.options.diffed))
            tmp(newVNode);
    }
    catch (e) {
        log(e.stack);
        newVNode._original = null;
        if (isHydrating || excessDomChildren != null) {
            newVNode._dom = oldDom;
            newVNode._hydrating = !!isHydrating;
            excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
        }
        preact_1.options._catchError(e, newVNode, oldVNode);
    }
}
exports.diff = diff;
function commitRoot(commitQueue, root) {
    if (preact_1.options._commit)
        preact_1.options._commit(root, commitQueue);
    commitQueue.some(c => {
        try {
            commitQueue = c._renderCallbacks;
            c._renderCallbacks = [];
            commitQueue.some(cb => {
                cb.call(c);
            });
        }
        catch (e) {
            preact_1.options._catchError(e, c._vnode);
        }
    });
}
exports.commitRoot = commitRoot;
function diffElementNodes(dom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, isHydrating) {
    let oldProps = oldVNode.props;
    let newProps = newVNode.props;
    let nodeType = newVNode.type;
    let i = 0;
    if (nodeType === 'svg')
        isSvg = true;
    if (excessDomChildren != null) {
        for (; i < excessDomChildren.length; i++) {
            const child = excessDomChildren[i];
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
        let oldHtml = oldProps.dangerouslySetInnerHTML;
        let newHtml = newProps.dangerouslySetInnerHTML;
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
            (0, children_1.diffChildren)(dom, Array.isArray(i) ? i : [i], newVNode, oldVNode, globalContext, isSvg && nodeType !== 'foreignObject', excessDomChildren, commitQueue, excessDomChildren
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
                (i !== oldProps.value ||
                    i !== dom.value ||
                    (nodeType === 'progress' && !i))) {
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
        preact_1.options._catchError(e, vnode);
    }
}
exports.applyRef = applyRef;
function unmount(vnode, parentVNode, skipRemove = false) {
    let r;
    if (preact_1.options.unmount)
        preact_1.options.unmount(vnode);
    if ((r = vnode.ref)) {
        if (!r.current || r.current === vnode._dom)
            applyRef(r, null, parentVNode);
    }
    if ((r = vnode._component) !== null) {
        if (r.componentWillUnmount) {
            try {
                r.componentWillUnmount();
            }
            catch (e) {
                preact_1.options._catchError(e, parentVNode);
            }
        }
        r.base = r._parentDom = null;
    }
    if ((r = vnode._children)) {
        for (let i = 0; i < r.length; i++) {
            if (r[i]) {
                unmount(r[i], parentVNode, typeof vnode.type != 'function');
            }
        }
    }
    if (!skipRemove && vnode._dom != null)
        (0, util_1.removeNode)(vnode._dom);
    vnode._dom = vnode._nextDom = undefined;
}
exports.unmount = unmount;
function doRender(props, state, context) {
    return this.constructor(props, context);
}
