"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleTabs = exports.Tab = void 0;
var classnames_1 = require("classnames");
var preact_1 = require("preact");
var hooks_1 = require("preact/hooks");
var TabGroupContext = (0, preact_1.createContext)({});
var Tab = function (_a) {
    var classProp = _a.class, name = _a.name, index = _a.index, children = _a.children, style = _a.style;
    var _b = (0, hooks_1.useContext)(TabGroupContext), selectedTabIndex = _b.selectedTabIndex, setSelectedTabIndex = _b.setSelectedTabIndex;
    function onClick() {
        setSelectedTabIndex(index);
    }
    return (0, preact_1.h)("div", { key: name, class: typeof classProp === "function" ? classProp({ selected: selectedTabIndex == index }) : classProp, onClick: onClick, style: style }, typeof children === "function" ? children({ selected: selectedTabIndex == index }) : children);
};
exports.Tab = Tab;
exports.Tab.Group = function (_a) {
    var classProp = _a.class, children = _a.children, index = _a.index, onChange = _a.onChange, style = _a.style;
    var _b = (0, hooks_1.useState)(index || 0), selectedTabIndex = _b[0], setSelectedTabIndex = _b[1];
    (0, hooks_1.useEffect)(function () {
        onChange && onChange(selectedTabIndex);
    }, [selectedTabIndex]);
    return (0, preact_1.h)(TabGroupContext.Provider, { value: { selectedTabIndex: selectedTabIndex, setSelectedTabIndex: setSelectedTabIndex } },
        (0, preact_1.h)("div", { class: "".concat(classProp), style: style }, children));
};
exports.Tab.List = function (_a) {
    var classProp = _a.class, children = _a.children, style = _a.style;
    return (0, preact_1.h)("div", { class: "".concat(classProp), style: style }, children);
};
exports.Tab.Panels = function (_a) {
    var classProp = _a.class, children = _a.children, style = _a.style;
    var _b = (0, hooks_1.useContext)(TabGroupContext), selectedTabIndex = _b.selectedTabIndex, setSelectedTabIndex = _b.setSelectedTabIndex;
    return (0, preact_1.h)("div", { class: "".concat(classProp), style: style }, children[selectedTabIndex]);
};
exports.Tab.Panel = function (_a) {
    var classProp = _a.class, children = _a.children, style = _a.style;
    return (0, preact_1.h)("div", { class: "".concat(classProp), style: style }, children);
};
var exampleTabs = [
    { label: "Tab 1", content: "Panel 1" },
    { label: "Tab 2", content: "Panel 2" },
    { label: "Tab 3", content: "Panel 3" },
];
var ExampleTabs = function (_a) {
    var classProp = _a.class, style = _a.style;
    function onChange(index) {
        log("Tabs index changed to ".concat(index));
    }
    return (0, preact_1.h)(exports.Tab.Group, { class: "flex-col w-[500px] ".concat(classProp), onChange: onChange, style: style },
        (0, preact_1.h)(exports.Tab.List, { class: "flex-row justify-between rounded-md bg-black/50 p-1 mb-2" }, exampleTabs.map(function (tab, index) {
            return (0, preact_1.h)(exports.Tab, { name: tab.label, index: index, class: function (_a) {
                    var selected = _a.selected;
                    return ((0, classnames_1.classNames)("flex-row rounded-md text-white/80 items-center bold justify-center p-3 transition-[background-color] duration-200", selected ? "bg-white active-text-color" : "hover:bg-white/10"));
                }, style: { width: "".concat(98 / exampleTabs.length, "%") } }, tab.label);
        })),
        (0, preact_1.h)(exports.Tab.Panels, null, exampleTabs.map(function (tab, index) {
            return (0, preact_1.h)(exports.Tab.Panel, { class: "bg-white rounded-md p-5" }, tab.content);
        })));
};
exports.ExampleTabs = ExampleTabs;
