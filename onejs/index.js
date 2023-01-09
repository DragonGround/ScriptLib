Object.defineProperty(exports, "__esModule", { value: true });
exports.eventfulSignal = exports.useEventfulState = void 0;
var hooks_1 = require("preact/hooks");
var signals_1 = require("preact/signals");
function useEventfulState(obj, propertyName, eventName) {
    var _a = (0, hooks_1.useState)(obj[propertyName]), val = _a[0], setVal = _a[1];
    eventName = eventName || "On" + String(propertyName) + "Changed";
    var addEventFunc = obj["add_".concat(eventName)];
    var removeEventFunc = obj["remove_".concat(eventName)];
    if (!addEventFunc || !removeEventFunc)
        throw new Error("The object does not have an event named ".concat(eventName));
    var onValueChangedCallback = function (v) {
        setVal(v);
    };
    (0, hooks_1.useEffect)(function () {
        addEventFunc.call(obj, onValueChangedCallback);
        onEngineReload(function () {
            removeEventFunc.call(obj, onValueChangedCallback);
        });
        return function () {
            removeEventFunc.call(obj, onValueChangedCallback);
        };
    }, []);
    var setValWrapper = function (v) {
        obj[propertyName] = v;
    };
    return [val, setValWrapper];
}
exports.useEventfulState = useEventfulState;
function eventfulSignal(obj, propertyName, eventName) {
    var sig = (0, signals_1.signal)(obj[propertyName]);
    eventName = eventName || "On" + String(propertyName) + "Changed";
    var addEventFunc = obj["add_".concat(eventName)];
    var removeEventFunc = obj["remove_".concat(eventName)];
    if (!addEventFunc || !removeEventFunc)
        throw new Error("[eventfulSignal] The object does not have an event named ".concat(eventName));
    var onValueChangedCallback = function (v) {
        sig.value = v;
    };
    addEventFunc.call(obj, onValueChangedCallback);
    onEngineReload(function () {
        removeEventFunc.call(obj, onValueChangedCallback);
    });
    return sig;
}
exports.eventfulSignal = eventfulSignal;
