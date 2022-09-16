Object.defineProperty(exports, "__esModule", { value: true });
exports.batch = exports.effect = exports.computed = exports.signal = exports.Signal = void 0;
let currentSignal;
let commitError = null;
let batchPending = null;
let oldDeps = new Set();
class Signal {
    constructor(value) {
        this._subs = new Set();
        this._deps = new Set();
        this._pending = 0;
        this._readonly = false;
        this._requiresUpdate = false;
        this._active = false;
        this._isComputing = false;
        this._value = value;
    }
    toString() {
        return "" + this.value;
    }
    peek() {
        if (!this._active || this._pending > 0) {
            activate(this);
        }
        return this._value;
    }
    get value() {
        if (!this._active || this._pending > 0) {
            activate(this);
        }
        if (!currentSignal) {
            return this._value;
        }
        this._subs.add(currentSignal);
        currentSignal._deps.add(this);
        oldDeps.delete(this);
        return this._value;
    }
    set value(value) {
        if (this._readonly) {
            throw Error("Computed signals are readonly");
        }
        if (this._value !== value) {
            this._value = value;
            batch(() => {
                batchPending.add(this);
                if (this._pending === 0) {
                    mark(this);
                }
            });
        }
    }
    _setCurrent() {
        let prevSignal = currentSignal;
        let prevOldDeps = oldDeps;
        currentSignal = this;
        oldDeps = this._deps;
        this._deps = new Set();
        return (shouldUnmark, shouldCleanup) => {
            if (shouldUnmark)
                this._subs.forEach(unmark);
            if (shouldCleanup) {
                oldDeps.forEach(dep => unsubscribe(this, dep));
            }
            else {
                oldDeps.forEach(dep => subscribe(this, dep));
            }
            oldDeps.clear();
            oldDeps = prevOldDeps;
            currentSignal = prevSignal;
        };
    }
    subscribe(fn) {
        return effect(() => fn(this.value));
    }
    _updater() {
    }
}
exports.Signal = Signal;
function mark(signal) {
    if (signal._pending++ === 0) {
        signal._subs.forEach(mark);
    }
}
function unmark(signal) {
    if (!signal._requiresUpdate &&
        signal._pending > 0 &&
        --signal._pending === 0) {
        signal._subs.forEach(unmark);
    }
}
function sweep(subs) {
    subs.forEach(signal => {
        if (signal._pending > 1)
            return --signal._pending;
        let ready = true;
        signal._deps.forEach(dep => {
            if (dep._pending > 0)
                ready = false;
        });
        if (ready && signal._pending > 0 && --signal._pending === 0) {
            if (signal._isComputing) {
                throw Error("Cycle detected");
            }
            signal._requiresUpdate = false;
            signal._isComputing = true;
            signal._updater();
            signal._isComputing = false;
            sweep(signal._subs);
        }
    });
}
function subscribe(signal, to) {
    signal._active = true;
    signal._deps.add(to);
    to._subs.add(signal);
}
function unsubscribe(signal, from) {
    signal._deps.delete(from);
    from._subs.delete(signal);
    if (from._subs.size === 0) {
        from._active = false;
        from._deps.forEach(dep => unsubscribe(from, dep));
    }
}
const tmpPending = [];
function refreshStale(signal) {
    if (batchPending) {
        batchPending.delete(signal);
    }
    signal._pending = 0;
    signal._updater();
    if (commitError) {
        const err = commitError;
        commitError = null;
        throw err;
    }
    signal._subs.forEach(sub => {
        if (sub._pending > 0) {
            if (sub._pending > 1)
                sub._pending--;
            tmpPending.push(sub);
        }
    });
}
function activate(signal) {
    signal._active = true;
    refreshStale(signal);
}
function signal(value) {
    return new Signal(value);
}
exports.signal = signal;
function computed(compute) {
    const signal = new Signal(undefined);
    signal._readonly = true;
    function updater() {
        let finish = signal._setCurrent();
        try {
            let ret = compute();
            const stale = signal._value === ret;
            if (!stale)
                signal._subs.forEach(sub => (sub._requiresUpdate = true));
            finish(stale, true);
            signal._value = ret;
        }
        catch (err) {
            if (!commitError)
                commitError = err;
            finish(true, false);
        }
    }
    signal._updater = updater;
    return signal;
}
exports.computed = computed;
function effect(callback) {
    const s = computed(() => batch(callback));
    activate(s);
    return () => s._setCurrent()(true, true);
}
exports.effect = effect;
function batch(cb) {
    if (batchPending !== null) {
        return cb();
    }
    else {
        const pending = new Set();
        batchPending = pending;
        try {
            return cb();
        }
        finally {
            let item;
            while ((item = tmpPending.pop()) !== undefined) {
                pending.add(item);
            }
            batchPending = null;
            sweep(pending);
            if (commitError) {
                const err = commitError;
                commitError = null;
                throw err;
            }
        }
    }
}
exports.batch = batch;
