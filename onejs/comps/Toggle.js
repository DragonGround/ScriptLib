"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondToggle = exports.Toggle = exports.Switch = void 0;
var preact_1 = require("preact");
var Switch = function (_a) {
    var classProp = _a.class, children = _a.children, checked = _a.checked, onChange = _a.onChange, style = _a.style;
    function onClick() {
        onChange && onChange(!checked);
    }
    return (0, preact_1.h)("div", { class: "".concat(classProp), onClick: onClick, style: style }, typeof children === "function" ? children({ checked: checked }) : children);
};
exports.Switch = Switch;
var Toggle = function (_a) {
    var classProp = _a.class, children = _a.children, checked = _a.checked, onChange = _a.onChange, style = _a.style;
    return (0, preact_1.h)(exports.Switch, { class: "w-16 h-8 rounded-[16px] p-[2px] ".concat(checked ? 'bg-[rgba(0_0_0_0.8)]' : 'bg-[rgba(0_0_0_0.5)]', " transition-[background-color] duration-200 ").concat(classProp), checked: checked, onChange: onChange, style: style }, function (_a) {
        var checked = _a.checked;
        return ((0, preact_1.h)("div", { class: "w-[28px] h-[28px] bg-white rounded-full ".concat(checked ? 'translate-x-[32px]' : 'translate-x-0', " transition-[translate] duration-200"), onClick: function () { return onChange && onChange(!checked); } }));
    });
};
exports.Toggle = Toggle;
var DiamondToggle = function (_a) {
    var classProp = _a.class, children = _a.children, checked = _a.checked, onChange = _a.onChange, style = _a.style;
    return (0, preact_1.h)(exports.Switch, { class: "w-8 h-8 p-[6px] border-[1px] ".concat(checked ? 'border-[rgba(255_255_255_0.8)] bg-[rgba(0_0_0_0.5)] rotate-[45deg]' : 'border-[rgba(255_255_255_0.5)] bg-[rgba(0_0_0_0.8)] rotate-0', " transition-[background-color,translate] duration-200 ").concat(classProp), checked: checked, onChange: onChange, style: style }, function (_a) {
        var checked = _a.checked;
        return ((0, preact_1.h)("div", { class: "w-[18px] h-[18px] bg-white ".concat(checked ? 'flex' : 'hidden'), onClick: function () { return onChange && onChange(!checked); } }));
    });
};
exports.DiamondToggle = DiamondToggle;
