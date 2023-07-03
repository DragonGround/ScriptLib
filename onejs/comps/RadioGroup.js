"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioToggle = exports.RadioGroup = void 0;
var preact_1 = require("preact");
var hooks_1 = require("preact/hooks");
var RadioGroupContext = (0, preact_1.createContext)({});
var RadioGroup = function (_a) {
    var classProp = _a.class, children = _a.children, index = _a.index, onChange = _a.onChange, style = _a.style;
    var _b = (0, hooks_1.useState)(index || 0), selectedIndex = _b[0], setSelectedIndex = _b[1];
    (0, hooks_1.useEffect)(function () {
        onChange && onChange(selectedIndex);
    }, [selectedIndex]);
    return (0, preact_1.h)(RadioGroupContext.Provider, { value: { selectedIndex: selectedIndex, setSelectedIndex: setSelectedIndex } },
        (0, preact_1.h)("div", { class: "".concat(classProp), style: style }, children));
};
exports.RadioGroup = RadioGroup;
exports.RadioGroup.Option = function (_a) {
    var classProp = _a.class, index = _a.index, children = _a.children, style = _a.style;
    var _b = (0, hooks_1.useContext)(RadioGroupContext), selectedIndex = _b.selectedIndex, setSelectedIndex = _b.setSelectedIndex;
    function onClick() {
        setSelectedIndex(index);
    }
    return (0, preact_1.h)("div", { key: "".concat(index), class: typeof classProp === "function" ? classProp({ checked: selectedIndex == index }) : classProp, onClick: onClick, style: style }, typeof children === "function" ? children({ checked: selectedIndex == index }) : children);
};
var RadioToggle = function (_a) {
    var classProp = _a.class, items = _a.items, index = _a.index, onChange = _a.onChange, style = _a.style;
    index = index || 0;
    function onChangeIndex(index) {
        onChange && onChange(items[index].value);
    }
    return (0, preact_1.h)(exports.RadioGroup, { class: "flex flex-row rounded-sm overflow-hidden default-bg-color active-text-color bold ".concat(classProp), index: index, onChange: onChangeIndex }, items.map(function (item, i) { return ((0, preact_1.h)(exports.RadioGroup.Option, { class: function (_a) {
            var checked = _a.checked;
            return "".concat(checked ? "accented-bg-color highlighted-text-color" : "bg-white", " p-3 transition-[background-color] duration-200");
        }, index: i }, function (_a) {
        var checked = _a.checked;
        return (0, preact_1.h)(preact_1.Fragment, null, item.label);
    })); }));
};
exports.RadioToggle = RadioToggle;
