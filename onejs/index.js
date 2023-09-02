"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRefEvent = exports.useEvent = exports.useEventfulState = void 0;
var hooks_1 = require("preact/hooks");
function useEventfulState(obj, propertyName, eventName) {
    var _a = (0, hooks_1.useState)(obj[propertyName]), val = _a[0], setVal = _a[1];
    eventName || (eventName = "On".concat(propertyName, "Changed"));
    var addEventFunc = obj["add_".concat(eventName)];
    var removeEventFunc = obj["remove_".concat(eventName)];
    if (!addEventFunc || !removeEventFunc)
        throw new Error("[useEventfulState] The object does not have an event named ".concat(eventName));
    function removeHandler() {
        removeEventFunc.call(obj, setVal);
    }
    (0, hooks_1.useEffect)(function () {
        setVal(obj[propertyName]);
        addEventFunc.call(obj, setVal);
        onEngineReload(removeHandler);
        return function () {
            removeHandler();
            unregisterOnEngineReload(removeHandler);
        };
    }, [obj]);
    var setValWrapper = (0, hooks_1.useCallback)(function (v) {
        obj[propertyName] = v;
    }, [obj]);
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
