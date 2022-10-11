Object.defineProperty(exports, "__esModule", { value: true });
exports.useComputed = exports.useSignal = exports.Signal = exports.effect = exports.batch = exports.computed = exports.signal = void 0;
var preact_1 = require("preact");
var hooks_1 = require("preact/hooks");
var signals_core_1 = require("preact/signals-core");
Object.defineProperty(exports, "signal", { enumerable: true, get: function () { return signals_core_1.signal; } });
Object.defineProperty(exports, "computed", { enumerable: true, get: function () { return signals_core_1.computed; } });
Object.defineProperty(exports, "batch", { enumerable: true, get: function () { return signals_core_1.batch; } });
Object.defineProperty(exports, "effect", { enumerable: true, get: function () { return signals_core_1.effect; } });
Object.defineProperty(exports, "Signal", { enumerable: true, get: function () { return signals_core_1.Signal; } });
var hasPendingUpdate = new WeakSet();
var hasHookState = new WeakSet();
var hasComputeds = new WeakSet();
function hook(hookName, hookFn) {
    preact_1.options[hookName] = hookFn.bind(null, preact_1.options[hookName] || (function () { }));
}
var currentComponent;
var currentUpdater;
var finishUpdate;
var updaterForComponent = new WeakMap();
function setCurrentUpdater(updater) {
    if (finishUpdate)
        finishUpdate();
    currentUpdater = updater;
    finishUpdate = updater && updater._start();
}
function createUpdater(update) {
    var updater;
    (0, signals_core_1.effect)(function () {
        updater = this;
    });
    updater._callback = update;
    return updater;
}
function Text(_a) {
    var _this = this;
    var data = _a.data;
    var currentSignal = useSignal(data);
    currentSignal.value = data;
    var s = (0, hooks_1.useMemo)(function () {
        var v = _this._vnode;
        while ((v = v._parent)) {
            if (v._component) {
                hasComputeds.add(v._component);
                break;
            }
        }
        currentUpdater._callback = function () {
            _this.base.data = s.peek();
        };
        return (0, signals_core_1.computed)(function () {
            var data = currentSignal.value;
            var s = data.value;
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
        get: function () {
            return { data: this };
        },
    },
    __b: { configurable: true, value: 1 },
});
hook("_diff", function (old, vnode) {
    if (typeof vnode.type === "string") {
        var signalProps = void 0;
        var props = vnode.props;
        for (var i in props) {
            if (i === "children")
                continue;
            var value = props[i];
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
hook("_render", function (old, vnode) {
    var updater;
    var component = vnode._component;
    if (component) {
        hasPendingUpdate.delete(component);
        updater = updaterForComponent.get(component);
        if (updater === undefined) {
            updater = createUpdater(function () {
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
hook("__e", function (old, error, vnode, oldVNode) {
    setCurrentUpdater();
    currentComponent = undefined;
    old(error, vnode, oldVNode);
});
hook("diffed", function (old, vnode) {
    setCurrentUpdater();
    currentComponent = undefined;
    var dom;
    if (typeof vnode.type === "string" && (dom = vnode._dom)) {
        var props = vnode.__np;
        if (props) {
            var updaters = dom._updaters;
            if (updaters) {
                for (var prop in updaters) {
                    var updater = updaters[prop];
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
            for (var prop in props) {
                var updater = updaters[prop];
                var signal_1 = props[prop];
                if (updater === undefined) {
                    updater = createPropUpdater(dom, prop, signal_1);
                    updaters[prop] = updater;
                }
                setCurrentUpdater(updater);
                updater._callback(signal_1);
            }
        }
    }
    old(vnode);
});
function createPropUpdater(dom, prop, signal) {
    var setAsProperty = prop in dom;
    return createUpdater(function (newSignal) {
        if (newSignal)
            signal = newSignal;
        var value = signal.value;
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
hook("unmount", function (old, vnode) {
    var component = vnode._component;
    var updater = component && updaterForComponent.get(component);
    if (updater) {
        updaterForComponent.delete(component);
        updater._dispose();
    }
    if (typeof vnode.type === "string") {
        var dom = vnode._dom;
        var updaters = dom._updaters;
        if (updaters) {
            dom._updaters = null;
            for (var prop in updaters) {
                var updater_1 = updaters[prop];
                if (updater_1)
                    updater_1._dispose();
            }
        }
    }
    old(vnode);
});
hook("_hook", function (old, component, index, type) {
    if (type < 3)
        hasHookState.add(component);
    old(component, index, type);
});
preact_1.Component.prototype.shouldComponentUpdate = function (props, state) {
    var updater = updaterForComponent.get(this);
    var hasSignals = updater && updater._sources !== undefined;
    if (!hasSignals && !hasComputeds.has(this))
        return true;
    if (hasPendingUpdate.has(this))
        return true;
    if (hasHookState.has(this))
        return true;
    for (var i in state)
        return true;
    for (var i in props) {
        if (i !== "__source" && props[i] !== this.props[i])
            return true;
    }
    for (var i in this.props)
        if (!(i in props))
            return true;
    return false;
};
function useSignal(value) {
    return (0, hooks_1.useMemo)(function () { return (0, signals_core_1.signal)(value); }, []);
}
exports.useSignal = useSignal;
function useComputed(compute) {
    var $compute = (0, hooks_1.useRef)(compute);
    $compute.current = compute;
    hasComputeds.add(currentComponent);
    return (0, hooks_1.useMemo)(function () { return (0, signals_core_1.computed)(function () { return $compute.current(); }); }, []);
}
exports.useComputed = useComputed;
