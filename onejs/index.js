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
        eventName !== null && eventName !== void 0 ? eventName : (eventName = "On".concat(propertyName, "Changed"));
        setValue(obj[propertyName]);
        return onejs.subscribe(obj, eventName, setValue);
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
        return onejs.subscribe(obj, eventName, callback);
    }, dependencies);
}
exports.useEvent = useEvent;
function useRefEvent(ref, eventName, callback, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    (0, hooks_1.useEffect)(function () {
        if (callback == null)
            return;
        var obj = ref.current.ve;
        return onejs.subscribe(obj, eventName, callback);
    }, dependencies);
}
exports.useRefEvent = useRefEvent;
