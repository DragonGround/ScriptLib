Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrorBoundary = exports.useDebugValue = exports.useContext = exports.useCallback = exports.useMemo = exports.useImperativeHandle = exports.useRef = exports.useLayoutEffect = exports.useEffect = exports.useReducer = exports.useState = void 0;
const preact_1 = require("preact/");
let currentIndex;
let currentComponent;
let currentHook = 0;
let afterPaintEffects = [];
let oldBeforeDiff = preact_1.options._diff;
let oldBeforeRender = preact_1.options._render;
let oldAfterDiff = preact_1.options.diffed;
let oldCommit = preact_1.options._commit;
let oldBeforeUnmount = preact_1.options.unmount;
const RAF_TIMEOUT = 100;
let prevRaf;
preact_1.options._diff = vnode => {
    currentComponent = null;
    if (oldBeforeDiff)
        oldBeforeDiff(vnode);
};
preact_1.options._render = vnode => {
    if (oldBeforeRender)
        oldBeforeRender(vnode);
    currentComponent = vnode._component;
    currentIndex = 0;
    const hooks = currentComponent.__hooks;
    if (hooks) {
        hooks._pendingEffects.forEach(invokeCleanup);
        hooks._pendingEffects.forEach(invokeEffect);
        hooks._pendingEffects = [];
    }
};
preact_1.options.diffed = vnode => {
    if (oldAfterDiff)
        oldAfterDiff(vnode);
    const c = vnode._component;
    if (c && c.__hooks && c.__hooks._pendingEffects.length) {
        afterPaint(afterPaintEffects.push(c));
    }
    currentComponent = null;
};
preact_1.options._commit = (vnode, commitQueue) => {
    commitQueue.some(component => {
        try {
            component._renderCallbacks.forEach(invokeCleanup);
            component._renderCallbacks = component._renderCallbacks.filter(cb => cb._value ? invokeEffect(cb) : true);
        }
        catch (e) {
            commitQueue.some(c => {
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
preact_1.options.unmount = vnode => {
    if (oldBeforeUnmount)
        oldBeforeUnmount(vnode);
    const c = vnode._component;
    if (c && c.__hooks) {
        let hasErrored;
        c.__hooks._list.forEach(s => {
            try {
                invokeCleanup(s);
            }
            catch (e) {
                hasErrored = e;
            }
        });
        if (hasErrored)
            preact_1.options._catchError(hasErrored, c._vnode);
    }
};
function getHookState(index, type) {
    if (preact_1.options._hook) {
        preact_1.options._hook(currentComponent, index, currentHook || type);
    }
    currentHook = 0;
    const hooks = currentComponent.__hooks ||
        (currentComponent.__hooks = {
            _list: [],
            _pendingEffects: []
        });
    if (index >= hooks._list.length) {
        hooks._list.push({});
    }
    return hooks._list[index];
}
function useState(initialState) {
    currentHook = 1;
    return useReducer(invokeOrReturn, initialState);
}
exports.useState = useState;
function useReducer(reducer, initialState, init) {
    const hookState = getHookState(currentIndex++, 2);
    hookState._reducer = reducer;
    if (typeof hookState._component === "undefined" || hookState._component === null) {
        hookState._value = [
            !init ? invokeOrReturn(undefined, initialState) : init(initialState),
            action => {
                const nextValue = hookState._reducer(hookState._value[0], action);
                if (hookState._value[0] !== nextValue) {
                    hookState._value = [nextValue, hookState._value[1]];
                    hookState._component.setState({});
                }
            }
        ];
        hookState._component = currentComponent;
    }
    return hookState._value;
}
exports.useReducer = useReducer;
function useEffect(callback, args) {
    const state = getHookState(currentIndex++, 3);
    if (!preact_1.options._skipEffects && argsChanged(state._args, args)) {
        state._value = callback;
        state._args = args;
        currentComponent.__hooks._pendingEffects.push(state);
    }
}
exports.useEffect = useEffect;
function useLayoutEffect(callback, args) {
    const state = getHookState(currentIndex++, 4);
    if (!preact_1.options._skipEffects && argsChanged(state._args, args)) {
        state._value = callback;
        state._args = args;
        currentComponent._renderCallbacks.push(state);
    }
}
exports.useLayoutEffect = useLayoutEffect;
function useRef(initialValue) {
    currentHook = 5;
    return useMemo(() => ({ current: initialValue }), []);
}
exports.useRef = useRef;
function useImperativeHandle(ref, createHandle, args) {
    currentHook = 6;
    useLayoutEffect(() => {
        if (typeof ref == 'function')
            ref(createHandle());
        else if (ref)
            ref.current = createHandle();
    }, args == null ? args : args.concat(ref));
}
exports.useImperativeHandle = useImperativeHandle;
function useMemo(factory, args) {
    const state = getHookState(currentIndex++, 7);
    if (argsChanged(state._args, args)) {
        state._value = factory();
        state._args = args;
        state._factory = factory;
    }
    return state._value;
}
exports.useMemo = useMemo;
function useCallback(callback, args) {
    currentHook = 8;
    return useMemo(() => callback, args);
}
exports.useCallback = useCallback;
function useContext(context) {
    const provider = currentComponent.context[context._id];
    const state = getHookState(currentIndex++, 9);
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
    const state = getHookState(currentIndex++, 10);
    const errState = useState();
    state._value = cb;
    if (!currentComponent.componentDidCatch) {
        currentComponent.componentDidCatch = err => {
            if (state._value)
                state._value(err);
            errState[1](err);
        };
    }
    return [
        errState[0],
        () => {
            errState[1](undefined);
        }
    ];
}
exports.useErrorBoundary = useErrorBoundary;
function flushAfterPaintEffects() {
    let component;
    afterPaintEffects.sort((a, b) => a._vnode._depth - b._vnode._depth);
    while (component = afterPaintEffects.pop()) {
        if (!component._parentDom)
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
let HAS_RAF = typeof requestAnimationFrame == 'function';
function afterNextFrame(callback) {
    const done = () => {
        clearTimeout(timeout);
        if (HAS_RAF)
            cancelAnimationFrame(raf);
        setTimeout(callback);
    };
    const timeout = setTimeout(done, RAF_TIMEOUT);
    let raf;
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
function invokeCleanup(hook) {
    const comp = currentComponent;
    let cleanup = hook._cleanup;
    if (typeof cleanup == 'function') {
        hook._cleanup = undefined;
        cleanup();
    }
    currentComponent = comp;
}
function invokeEffect(hook) {
    const comp = currentComponent;
    hook._cleanup = hook._value();
    currentComponent = comp;
}
function argsChanged(oldArgs, newArgs) {
    return (!oldArgs ||
        oldArgs.length !== newArgs.length ||
        newArgs.some((arg, index) => arg !== oldArgs[index]));
}
function invokeOrReturn(arg, f) {
    return typeof f == 'function' ? f(arg) : f;
}
