Object.defineProperty(exports, "__esModule", { value: true });
exports.useSignalEffect = exports.useComputed = exports.useSignal = exports.Signal = exports.effect = exports.batch = exports.computed = exports.signal = void 0;
var preact_1 = require("preact");
var hooks_1 = require("preact/hooks");
var signals_core_1 = require("preact/signals-core");
Object.defineProperty(exports, "signal", { enumerable: true, get: function () { return signals_core_1.signal; } });
Object.defineProperty(exports, "computed", { enumerable: true, get: function () { return signals_core_1.computed; } });
Object.defineProperty(exports, "batch", { enumerable: true, get: function () { return signals_core_1.batch; } });
Object.defineProperty(exports, "effect", { enumerable: true, get: function () { return signals_core_1.effect; } });
Object.defineProperty(exports, "Signal", { enumerable: true, get: function () { return signals_core_1.Signal; } });
var HAS_PENDING_UPDATE = 1 << 0;
var HAS_HOOK_STATE = 1 << 1;
var HAS_COMPUTEDS = 1 << 2;
function hook(hookName, hookFn) {
    preact_1.options[hookName] = hookFn.bind(null, preact_1.options[hookName] || (function () { }));
}
var currentComponent;
var finishUpdate;
function setCurrentUpdater(updater) {
    if (finishUpdate)
        finishUpdate();
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
                v._component._updateFlags |= HAS_COMPUTEDS;
                break;
            }
        }
        _this._updater._callback = function () {
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
    setCurrentUpdater();
    var updater;
    var component = vnode._component;
    if (component) {
        component._updateFlags &= ~HAS_PENDING_UPDATE;
        updater = component._updater;
        if (updater === undefined) {
            component._updater = updater = createUpdater(function () {
                component._updateFlags |= HAS_PENDING_UPDATE;
                component.setState({});
            });
        }
    }
    currentComponent = component;
    setCurrentUpdater(updater);
    old(vnode);
});
hook("_catchError", function (old, error, vnode, oldVNode) {
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
        var renderedProps = vnode.props;
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
                    updater = createPropUpdater(dom, prop, signal_1, renderedProps);
                    updaters[prop] = updater;
                }
                else {
                    updater._update(signal_1, renderedProps);
                }
            }
        }
    }
    old(vnode);
});
function createPropUpdater(dom, prop, propSignal, props) {
    var setAsProperty = prop in dom &&
        dom.ownerSVGElement === undefined;
    var changeSignal = (0, signals_core_1.signal)(propSignal);
    return {
        _update: function (newSignal, newProps) {
            changeSignal.value = newSignal;
            props = newProps;
        },
        _dispose: (0, signals_core_1.effect)(function () {
            var value = changeSignal.value.value;
            if (props[prop] === value)
                return;
            props[prop] = value;
            if (setAsProperty) {
                dom[prop] = value;
            }
            else if (value) {
                dom.setAttribute(prop, value);
            }
            else {
                dom.removeAttribute(prop);
            }
        }),
    };
}
hook("unmount", function (old, vnode) {
    if (typeof vnode.type === "string") {
        var dom = vnode._dom;
        if (dom) {
            var updaters = dom._updaters;
            if (updaters) {
                dom._updaters = undefined;
                for (var prop in updaters) {
                    var updater = updaters[prop];
                    if (updater)
                        updater._dispose();
                }
            }
        }
    }
    else {
        var component = vnode._component;
        if (component) {
            var updater = component._updater;
            if (updater) {
                component._updater = undefined;
                updater._dispose();
            }
        }
    }
    old(vnode);
});
hook("_hook", function (old, component, index, type) {
    if (type < 3)
        component._updateFlags |= HAS_HOOK_STATE;
    old(component, index, type);
});
preact_1.Component.prototype.shouldComponentUpdate = function (props, state) {
    var updater = this._updater;
    var hasSignals = updater && updater._sources !== undefined;
    if (!hasSignals && !(this._updateFlags & HAS_COMPUTEDS))
        return true;
    if (this._updateFlags & (HAS_PENDING_UPDATE | HAS_HOOK_STATE))
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
    currentComponent._updateFlags |= HAS_COMPUTEDS;
    return (0, hooks_1.useMemo)(function () { return (0, signals_core_1.computed)(function () { return $compute.current(); }); }, []);
}
exports.useComputed = useComputed;
function useSignalEffect(cb) {
    var callback = (0, hooks_1.useRef)(cb);
    callback.current = cb;
    (0, hooks_1.useEffect)(function () {
        return (0, signals_core_1.effect)(function () {
            callback.current();
        });
    }, []);
}
exports.useSignalEffect = useSignalEffect;
