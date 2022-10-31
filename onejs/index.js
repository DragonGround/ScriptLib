Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventfulState = void 0;
var hooks_1 = require("preact/hooks");
function useEventfulState(obj, key) {
    var _a = (0, hooks_1.useState)(obj[key]), val = _a[0], setVal = _a[1];
    var addEventFunc = obj["add_On".concat(String(key), "Changed")];
    var removeEventFunc = obj["remove_On".concat(String(key), "Changed")];
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
    return [val, setVal];
}
exports.useEventfulState = useEventfulState;
