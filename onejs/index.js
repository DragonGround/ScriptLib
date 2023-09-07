"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRefEvent = exports.useEvent = exports.useEventfulState = void 0;
var hooks_1 = require("preact/hooks");
function useEventfulState(obj, propertyName, eventName) {
    var _a = (0, hooks_1.useState)({ value: obj === null || obj === void 0 ? void 0 : obj[propertyName] }), state = _a[0], setState = _a[1];
    var setValue = (0, hooks_1.useCallback)(function (value) { return setState({ value: value }); }, []);
    (0, hooks_1.useEffect)(function () {
        if (obj == null)
            return;
        eventName || (eventName = "On".concat(propertyName, "Changed"));
        var addEventFunc = obj["add_".concat(eventName)];
        var removeEventFunc = obj["remove_".concat(eventName)];
        if (!addEventFunc || !removeEventFunc)
            throw new Error("[useEventfulState] The object does not have an event named ".concat(eventName));
        setValue(obj[propertyName]);
        addEventFunc.call(obj, setValue);
        onEngineReload(removeHandler);
        return function () {
            removeHandler();
            unregisterOnEngineReload(removeHandler);
        };
        function removeHandler() {
            removeEventFunc.call(obj, setValue);
        }
    }, [obj]);
    var setValWrapper = (0, hooks_1.useCallback)(function (v) {
        if (obj == null)
            return;
        obj[propertyName] = v;
    }, [obj]);
    return [state.value, setValWrapper];
}
exports.useEventfulState = useEventfulState;
function useEvent(obj, eventName, callback, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    (0, hooks_1.useEffect)(function () {
        if (obj == null)
            return;
        obj["add_".concat(eventName)](callback);
        onEngineReload(removeHandler);
        return function () {
            removeHandler();
            unregisterOnEngineReload(removeHandler);
        };
        function removeHandler() {
            obj["remove_".concat(eventName)](callback);
        }
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
