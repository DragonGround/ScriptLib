"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRefEvent = exports.useEvent = exports.useEventfulState = void 0;
var hooks_1 = require("preact/hooks");
function useEventfulState(obj, propertyName, eventName) {
    var _a = (0, hooks_1.useState)(obj[propertyName]), val = _a[0], setVal = _a[1];
    var _b = (0, hooks_1.useState)({}), updateState = _b[1];
    var forceUpdate = (0, hooks_1.useCallback)(function () { return updateState({}); }, []);
    eventName || (eventName = "On".concat(propertyName, "Changed"));
    var addEventFunc = obj["add_".concat(eventName)];
    var removeEventFunc = obj["remove_".concat(eventName)];
    if (!addEventFunc || !removeEventFunc)
        throw new Error("[useEventfulState] The object does not have an event named ".concat(eventName));
    function onValueChangedCallback(v) {
        setVal(v);
        forceUpdate();
    }
    function removeHandler() {
        removeEventFunc.call(obj, onValueChangedCallback);
    }
    (0, hooks_1.useEffect)(function () {
        addEventFunc.call(obj, onValueChangedCallback);
        onEngineReload(removeHandler);
        return function () {
            removeHandler();
            unregisterOnEngineReload(removeHandler);
        };
    }, []);
    function setValWrapper(v) {
        obj[propertyName] = v;
    }
    return [val, setValWrapper];
}
exports.useEventfulState = useEventfulState;
function useEvent(obj, eventName, callback, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    function removeHandler() {
        obj["remove_".concat(eventName)](callback);
    }
    (0, hooks_1.useEffect)(function () {
        obj["add_".concat(eventName)](callback);
        onEngineReload(removeHandler);
        return function () {
            removeHandler();
            unregisterOnEngineReload(removeHandler);
        };
    }, dependencies);
}
exports.useEvent = useEvent;
function useRefEvent(ref, eventName, callback, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    function removeHandler() {
        var obj = ref.current.ve;
        obj["remove_".concat(eventName)](callback);
    }
    (0, hooks_1.useEffect)(function () {
        var obj = ref.current.ve;
        obj["add_".concat(eventName)](callback);
        onEngineReload(removeHandler);
        return function () {
            removeHandler();
            unregisterOnEngineReload(removeHandler);
        };
    }, dependencies);
}
exports.useRefEvent = useRefEvent;
