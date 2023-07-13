"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var preact_1 = require("preact");
var hooks_1 = require("preact/hooks");
var Slider = function (_a) {
    var classProp = _a.class, style = _a.style, value = _a.value, onChange = _a.onChange, _min = _a.min, _max = _a.max;
    var ref = (0, hooks_1.useRef)();
    var progressRef = (0, hooks_1.useRef)();
    var thumbRef = (0, hooks_1.useRef)();
    var _b = (0, hooks_1.useState)(false), mouseDown = _b[0], setMouseDown = _b[1];
    var min = _min || 0;
    var max = _max || 1;
    var currentValue = value === null || typeof value === "undefined" ? min : value;
    var currentFraction = (currentValue - min) / (max - min);
    (0, hooks_1.useEffect)(function () {
        document.body.addEventListener("MouseMove", handleMouseMove);
        document.body.addEventListener("MouseUp", handleMouseUp);
        return function () {
            document.body.removeEventListener("MouseMove", handleMouseMove);
            document.body.removeEventListener("MouseUp", handleMouseUp);
        };
    }, [mouseDown]);
    function calculateFromMouseX(clientX) {
        var rect = ref.current.ve.worldBound;
        var fraction = (clientX - rect.left) / rect.width;
        var newValue = (min + fraction * (max - min));
        return Math.min(Math.max(newValue, min), max);
    }
    function processValueChange(newValue) {
        if (newValue != currentValue) {
            onChange && onChange(newValue);
            currentValue = newValue;
            currentFraction = (currentValue - min) / (max - min);
            var rect = ref.current.ve.worldBound;
            progressRef.current.style.width = "".concat(currentFraction * 100, "%");
            thumbRef.current.style.left = currentFraction * rect.width;
        }
    }
    function handleMouseDown(e) {
        setMouseDown(true);
        var newValue = calculateFromMouseX(e.mousePosition.x);
        processValueChange(newValue);
    }
    function handleMouseMove(e) {
        if (!mouseDown)
            return;
        var newValue = calculateFromMouseX(e.mousePosition.x);
        processValueChange(newValue);
    }
    function handleMouseUp() {
        setMouseDown(false);
    }
    return (0, preact_1.h)("div", { class: "h-[30px] justify-center ".concat(classProp), ref: ref, onMouseDown: handleMouseDown, style: style },
        (0, preact_1.h)("div", { class: "w-full h-[8px] bg-gray-400", style: { borderRadius: 4 } },
            (0, preact_1.h)("div", { ref: progressRef, class: "accented-bg-color h-[8px] justify-center", style: { width: "".concat(Math.round(currentFraction * 100), "%"), borderRadius: 4 } })),
        (0, preact_1.h)("div", { ref: thumbRef, class: "w-[24px] h-[24px] default-bg-color absolute rounded-full translate-x-[-10px]" }));
};
exports.Slider = Slider;
