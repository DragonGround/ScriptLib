Object.defineProperty(exports, "__esModule", { value: true });
exports.useId = exports.useErrorBoundary = exports.useDebugValue = exports.useContext = exports.useCallback = exports.useMemo = exports.useImperativeHandle = exports.useRef = exports.useLayoutEffect = exports.useEffect = exports.useReducer = exports.useState = void 0;
var preact_1 = require("preact/");
var currentIndex;
var currentComponent;
var previousComponent;
var currentHook = 0;
var afterPaintEffects = [];
var EMPTY = [];
var oldBeforeDiff = preact_1.options._diff;
var oldBeforeRender = preact_1.options._render;
var oldAfterDiff = preact_1.options.diffed;
var oldCommit = preact_1.options._commit;
var oldBeforeUnmount = preact_1.options.unmount;
var RAF_TIMEOUT = 100;
var prevRaf;
preact_1.options._diff = function (vnode) {
    if (typeof vnode.type === 'function' &&
        !vnode._mask &&
        vnode.type !== preact_1.Fragment) {
        vnode._mask =
            (vnode._parent && vnode._parent._mask ? vnode._parent._mask : '') +
                (vnode._parent && vnode._parent._children
                    ? vnode._parent._children.indexOf(vnode)
                    : 0);
    }
    else if (!vnode._mask) {
        vnode._mask =
            vnode._parent && vnode._parent._mask ? vnode._parent._mask : '';
    }
    currentComponent = null;
    if (oldBeforeDiff)
        oldBeforeDiff(vnode);
};
preact_1.options._render = function (vnode) {
    if (oldBeforeRender)
        oldBeforeRender(vnode);
    currentComponent = vnode._component;
    currentIndex = 0;
    var hooks = currentComponent.__hooks;
    if (hooks) {
        if (previousComponent === currentComponent) {
            hooks._pendingEffects = [];
            currentComponent._renderCallbacks = [];
            hooks._list.forEach(function (hookItem) {
                if (hookItem._nextValue) {
                    hookItem._value = hookItem._nextValue;
                }
                hookItem._pendingValue = EMPTY;
                hookItem._nextValue = hookItem._pendingArgs = undefined;
            });
        }
        else {
            hooks._pendingEffects.forEach(invokeCleanup);
            hooks._pendingEffects.forEach(invokeEffect);
            hooks._pendingEffects = [];
        }
    }
    previousComponent = currentComponent;
};
preact_1.options.diffed = function (vnode) {
    if (oldAfterDiff)
        oldAfterDiff(vnode);
    var c = vnode._component;
    if (c && c.__hooks) {
        if (c.__hooks._pendingEffects.length)
            afterPaint(afterPaintEffects.push(c));
        c.__hooks._list.forEach(function (hookItem) {
            if (hookItem._pendingArgs) {
                hookItem._args = hookItem._pendingArgs;
            }
            if (hookItem._pendingValue !== EMPTY) {
                hookItem._value = hookItem._pendingValue;
            }
            hookItem._pendingArgs = undefined;
            hookItem._pendingValue = EMPTY;
        });
    }
    previousComponent = currentComponent = null;
};
preact_1.options._commit = function (vnode, commitQueue) {
    commitQueue.some(function (component) {
        try {
            component._renderCallbacks.forEach(invokeCleanup);
            component._renderCallbacks = component._renderCallbacks.filter(function (cb) {
                return cb._value ? invokeEffect(cb) : true;
            });
        }
        catch (e) {
            commitQueue.some(function (c) {
                if (c._renderCallbacks)
                    c._renderCallbacks = [];
            });
            commitQueue = [];
            preact_1.options._catchError(e, component._vnode);
        }
    });
    if (oldCommit)
        oldCommit(vnode, commitQueue);
};
preact_1.options.unmount = function (vnode) {
    if (oldBeforeUnmount)
        oldBeforeUnmount(vnode);
    var c = vnode._component;
    if (c && c.__hooks) {
        var hasErrored_1;
        c.__hooks._list.forEach(function (s) {
            try {
                invokeCleanup(s);
            }
            catch (e) {
                hasErrored_1 = e;
            }
        });
        c.__hooks = undefined;
        if (hasErrored_1)
            preact_1.options._catchError(hasErrored_1, c._vnode);
    }
};
function getHookState(index, type) {
    if (preact_1.options._hook) {
        preact_1.options._hook(currentComponent, index, currentHook || type);
    }
    currentHook = 0;
    var hooks = currentComponent.__hooks ||
        (currentComponent.__hooks = {
            _list: [],
            _pendingEffects: []
        });
    if (index >= hooks._list.length) {
        hooks._list.push({ _pendingValue: EMPTY });
    }
    return hooks._list[index];
}
function useState(initialState) {
    currentHook = 1;
    return useReducer(invokeOrReturn, initialState);
}
exports.useState = useState;
function useReducer(reducer, initialState, init) {
    var hookState = getHookState(currentIndex++, 2);
    hookState._reducer = reducer;
    if (typeof hookState._component === "undefined" || hookState._component === null) {
        hookState._value = [
            !init ? invokeOrReturn(undefined, initialState) : init(initialState),
            function (action) {
                var currentValue = hookState._nextValue
                    ? hookState._nextValue[0]
                    : hookState._value[0];
                var nextValue = hookState._reducer(currentValue, action);
                if (currentValue !== nextValue) {
                    hookState._nextValue = [nextValue, hookState._value[1]];
                    hookState._component.setState({});
                }
            }
        ];
        hookState._component = currentComponent;
        if (!currentComponent._hasScuFromHooks) {
            currentComponent._hasScuFromHooks = true;
            var prevScu_1 = currentComponent.shouldComponentUpdate;
            currentComponent.shouldComponentUpdate = function (p, s, c) {
                if (typeof hookState._component.__hooks == "undefined" || hookState._component.__hooks === null)
                    return true;
                var stateHooks = hookState._component.__hooks._list.filter(function (x) { return x._component; });
                var allHooksEmpty = stateHooks.every(function (x) { return typeof x._nextValue === "undefined" || x._nextValue === null; });
                if (allHooksEmpty) {
                    return prevScu_1 ? prevScu_1.call(this, p, s, c) : true;
                }
                var shouldUpdate = false;
                stateHooks.forEach(function (hookItem) {
                    if (hookItem._nextValue) {
                        var currentValue = hookItem._value[0];
                        hookItem._value = hookItem._nextValue;
                        hookItem._nextValue = undefined;
                        if (currentValue !== hookItem._value[0])
                            shouldUpdate = true;
                    }
                });
                return shouldUpdate
                    ? prevScu_1
                        ? prevScu_1.call(this, p, s, c)
                        : true
                    : false;
            };
        }
    }
    return hookState._nextValue || hookState._value;
}
exports.useReducer = useReducer;
function useEffect(callback, args) {
    var state = getHookState(currentIndex++, 3);
    if (!preact_1.options._skipEffects && argsChanged(state._args, args)) {
        state._value = callback;
        state._pendingArgs = args;
        currentComponent.__hooks._pendingEffects.push(state);
    }
}
exports.useEffect = useEffect;
function useLayoutEffect(callback, args) {
    var state = getHookState(currentIndex++, 4);
    if (!preact_1.options._skipEffects && argsChanged(state._args, args)) {
        state._value = callback;
        state._pendingArgs = args;
        currentComponent._renderCallbacks.push(state);
    }
}
exports.useLayoutEffect = useLayoutEffect;
function useRef(initialValue) {
    currentHook = 5;
    return useMemo(function () { return ({ current: initialValue }); }, []);
}
exports.useRef = useRef;
function useImperativeHandle(ref, createHandle, args) {
    currentHook = 6;
    useLayoutEffect(function () {
        if (typeof ref == 'function') {
            ref(createHandle());
            return function () { return ref(null); };
        }
        else if (ref) {
            ref.current = createHandle();
            return function () { return (ref.current = null); };
        }
    }, args == null ? args : args.concat(ref));
}
exports.useImperativeHandle = useImperativeHandle;
function useMemo(factory, args) {
    var state = getHookState(currentIndex++, 7);
    if (argsChanged(state._args, args)) {
        state._pendingValue = factory();
        state._pendingArgs = args;
        state._factory = factory;
        return state._pendingValue;
    }
    return state._value;
}
exports.useMemo = useMemo;
function useCallback(callback, args) {
    currentHook = 8;
    return useMemo(function () { return callback; }, args);
}
exports.useCallback = useCallback;
function useContext(context) {
    var provider = currentComponent.context[context._id];
    var state = getHookState(currentIndex++, 9);
    state._context = context;
    if (typeof provider == "undefined" || provider === null)
        return context._defaultValue;
    if (state._value == null) {
        state._value = true;
        provider.sub(currentComponent);
    }
    return provider.props.value;
}
exports.useContext = useContext;
function useDebugValue(value, formatter) {
    if (preact_1.options.useDebugValue) {
        preact_1.options.useDebugValue(formatter ? formatter(value) : value);
    }
}
exports.useDebugValue = useDebugValue;
function useErrorBoundary(cb) {
    var state = getHookState(currentIndex++, 10);
    var errState = useState();
    state._value = cb;
    if (!currentComponent.componentDidCatch) {
        currentComponent.componentDidCatch = function (err, errorInfo) {
            if (state._value)
                state._value(err, errorInfo);
            errState[1](err);
        };
    }
    return [
        errState[0],
        function () {
            errState[1](undefined);
        }
    ];
}
exports.useErrorBoundary = useErrorBoundary;
function hash(s) {
    var h = 0, i = s.length;
    while (i > 0) {
        h = ((h << 5) - h + s.charCodeAt(--i)) | 0;
    }
    return h;
}
function useId() {
    var state = getHookState(currentIndex++, 11);
    if (!state._value) {
        state._value = 'P' + hash(currentComponent._vnode._mask) + currentIndex;
    }
    return state._value;
}
exports.useId = useId;
function flushAfterPaintEffects() {
    var component;
    while ((component = afterPaintEffects.shift())) {
        if (!component._parentDom || typeof component.__hooks == "undefined" || component.__hooks === null)
            continue;
        try {
            component.__hooks._pendingEffects.forEach(invokeCleanup);
            component.__hooks._pendingEffects.forEach(invokeEffect);
            component.__hooks._pendingEffects = [];
        }
        catch (e) {
            component.__hooks._pendingEffects = [];
            preact_1.options._catchError(e, component._vnode);
        }
    }
}
var HAS_RAF = typeof requestAnimationFrame == 'function';
function afterNextFrame(callback) {
    var done = function () {
        clearTimeout(timeout);
        if (HAS_RAF)
            cancelAnimationFrame(raf);
        setTimeout(callback);
    };
    var timeout = setTimeout(done, RAF_TIMEOUT);
    var raf;
    if (HAS_RAF) {
        raf = requestAnimationFrame(done);
    }
}
function afterPaint(newQueueLength) {
    if (newQueueLength === 1 || prevRaf !== preact_1.options.requestAnimationFrame) {
        prevRaf = preact_1.options.requestAnimationFrame;
        (prevRaf || afterNextFrame)(flushAfterPaintEffects);
    }
}
preact_1.options.debounceRendering = requestAnimationFrame;
preact_1.options.requestAnimationFrame = requestAnimationFrame;
function invokeCleanup(hook) {
    var comp = currentComponent;
    var cleanup = hook._cleanup;
    if (typeof cleanup == 'function') {
        hook._cleanup = undefined;
        cleanup();
    }
    currentComponent = comp;
}
function invokeEffect(hook) {
    var comp = currentComponent;
    hook._cleanup = hook._value();
    currentComponent = comp;
}
function argsChanged(oldArgs, newArgs) {
    return (!oldArgs ||
        oldArgs.length !== newArgs.length ||
        newArgs.some(function (arg, index) { return arg !== oldArgs[index]; }));
}
function invokeOrReturn(arg, f) {
    return typeof f == 'function' ? f(arg) : f;
}
