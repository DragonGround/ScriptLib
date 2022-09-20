Object.defineProperty(exports, "__esModule", { value: true });
exports.useComputed = exports.useSignal = exports.Signal = exports.effect = exports.batch = exports.computed = exports.signal = void 0;
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const signals_core_1 = require("preact/signals-core");
Object.defineProperty(exports, "signal", { enumerable: true, get: function () { return signals_core_1.signal; } });
Object.defineProperty(exports, "computed", { enumerable: true, get: function () { return signals_core_1.computed; } });
Object.defineProperty(exports, "batch", { enumerable: true, get: function () { return signals_core_1.batch; } });
Object.defineProperty(exports, "effect", { enumerable: true, get: function () { return signals_core_1.effect; } });
Object.defineProperty(exports, "Signal", { enumerable: true, get: function () { return signals_core_1.Signal; } });
const hasPendingUpdate = new WeakSet();
const hasHookState = new WeakSet();
const hasComputeds = new WeakSet();
function hook(hookName, hookFn) {
    preact_1.options[hookName] = hookFn.bind(null, preact_1.options[hookName] || (() => { }));
}
let currentComponent;
let currentUpdater;
let finishUpdate;
const updaterForComponent = new WeakMap();
function setCurrentUpdater(updater) {
    if (finishUpdate)
        finishUpdate();
    currentUpdater = updater;
    finishUpdate = updater && updater._start();
}
function createUpdater(update) {
    let updater;
    (0, signals_core_1.effect)(function () {
        updater = this;
    });
    updater._callback = update;
    return updater;
}
function Text({ data }) {
    const currentSignal = useSignal(data);
    currentSignal.value = data;
    const s = (0, hooks_1.useMemo)(() => {
        let v = this._vnode;
        while ((v = v._parent)) {
            if (v._component) {
                hasComputeds.add(v._component);
                break;
            }
        }
        currentUpdater._callback = () => {
            this.base.data = s.peek();
        };
        return (0, signals_core_1.computed)(() => {
            let data = currentSignal.value;
            let s = data.value;
            return s === 0 ? 0 : s === true ? "" : s || "";
        });
    }, []);
    return s.value;
}
Text.displayName = "_st";
Object.defineProperties(signals_core_1.Signal.prototype, {
    constructor: { configurable: true },
    type: { configurable: true, value: Text },
    props: {
        configurable: true,
        get() {
            return { data: this };
        },
    },
    __b: { configurable: true, value: 1 },
});
hook("_diff", (old, vnode) => {
    if (typeof vnode.type === "string") {
        let signalProps;
        let props = vnode.props;
        for (let i in props) {
            if (i === "children")
                continue;
            let value = props[i];
            if (value instanceof signals_core_1.Signal) {
                if (!signalProps)
                    vnode.__np = signalProps = {};
                signalProps[i] = value;
                props[i] = value.peek();
            }
        }
    }
    old(vnode);
});
hook("_render", (old, vnode) => {
    let updater;
    let component = vnode._component;
    if (component) {
        hasPendingUpdate.delete(component);
        updater = updaterForComponent.get(component);
        if (updater === undefined) {
            updater = createUpdater(() => {
                hasPendingUpdate.add(component);
                component.setState({});
            });
            updaterForComponent.set(component, updater);
        }
    }
    currentComponent = component;
    setCurrentUpdater(updater);
    old(vnode);
});
hook("__e", (old, error, vnode, oldVNode) => {
    setCurrentUpdater();
    currentComponent = undefined;
    old(error, vnode, oldVNode);
});
hook("diffed", (old, vnode) => {
    setCurrentUpdater();
    currentComponent = undefined;
    let dom;
    if (typeof vnode.type === "string" && (dom = vnode._dom)) {
        let props = vnode.__np;
        if (props) {
            let updaters = dom._updaters;
            if (updaters) {
                for (let prop in updaters) {
                    let updater = updaters[prop];
                    if (updater !== undefined && !(prop in props)) {
                        updater._dispose();
                        updaters[prop] = undefined;
                    }
                }
            }
            else {
                updaters = {};
                dom._updaters = updaters;
            }
            for (let prop in props) {
                let updater = updaters[prop];
                let signal = props[prop];
                if (updater === undefined) {
                    updater = createPropUpdater(dom, prop, signal);
                    updaters[prop] = updater;
                }
                setCurrentUpdater(updater);
                updater._callback(signal);
            }
        }
    }
    old(vnode);
});
function createPropUpdater(dom, prop, signal) {
    const setAsProperty = prop in dom;
    return createUpdater((newSignal) => {
        if (newSignal)
            signal = newSignal;
        let value = signal.value;
        if (newSignal) {
        }
        else if (setAsProperty) {
            dom[prop] = value;
        }
        else if (value) {
            dom.setAttribute(prop, value);
        }
        else {
            dom.removeAttribute(prop);
        }
    });
}
hook("unmount", (old, vnode) => {
    let component = vnode._component;
    const updater = component && updaterForComponent.get(component);
    if (updater) {
        updaterForComponent.delete(component);
        updater._dispose();
    }
    if (typeof vnode.type === "string") {
        const dom = vnode._dom;
        const updaters = dom._updaters;
        if (updaters) {
            dom._updaters = null;
            for (let prop in updaters) {
                let updater = updaters[prop];
                if (updater)
                    updater._dispose();
            }
        }
    }
    old(vnode);
});
hook("_hook", (old, component, index, type) => {
    if (type < 3)
        hasHookState.add(component);
    old(component, index, type);
});
preact_1.Component.prototype.shouldComponentUpdate = function (props, state) {
    const updater = updaterForComponent.get(this);
    const hasSignals = updater && updater._sources !== undefined;
    if (!hasSignals && !hasComputeds.has(this))
        return true;
    if (hasPendingUpdate.has(this))
        return true;
    if (hasHookState.has(this))
        return true;
    for (let i in state)
        return true;
    for (let i in props) {
        if (i !== "__source" && props[i] !== this.props[i])
            return true;
    }
    for (let i in this.props)
        if (!(i in props))
            return true;
    return false;
};
function useSignal(value) {
    return (0, hooks_1.useMemo)(() => (0, signals_core_1.signal)(value), []);
}
exports.useSignal = useSignal;
function useComputed(compute) {
    const $compute = (0, hooks_1.useRef)(compute);
    $compute.current = compute;
    hasComputeds.add(currentComponent);
    return (0, hooks_1.useMemo)(() => (0, signals_core_1.computed)(() => $compute.current()), []);
}
exports.useComputed = useComputed;
