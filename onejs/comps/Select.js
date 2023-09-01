"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = exports.Listbox = void 0;
var preact_1 = require("preact");
var hooks_1 = require("preact/hooks");
var fontawesome_1 = require("onejs/fonts/fontawesome");
var ListboxContext = (0, preact_1.createContext)({});
var Listbox = function (_a) {
    var classProp = _a.class, children = _a.children, items = _a.items, onChange = _a.onChange, index = _a.index, style = _a.style;
    var _b = (0, hooks_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = (0, hooks_1.useState)(index || 0), selectedIndex = _c[0], setSelectedIndex = _c[1];
    var ref = (0, hooks_1.useRef)();
    (0, hooks_1.useEffect)(function () {
        onChange && onChange(items[selectedIndex]);
    }, [selectedIndex]);
    function calculatePopupStyle() {
        var bound = ref.current.ve.worldBound;
        return {
            top: bound.y + bound.height,
            left: bound.x,
            width: bound.width,
        };
    }
    return (0, preact_1.h)(ListboxContext.Provider, { value: { isOpen: isOpen, setIsOpen: setIsOpen, selectedIndex: selectedIndex, setSelectedIndex: setSelectedIndex, items: items, calculatePopupStyle: calculatePopupStyle } },
        (0, preact_1.h)("div", { ref: ref, class: "".concat(classProp), style: style }, children));
};
exports.Listbox = Listbox;
exports.Listbox.Button = function (_a) {
    var classProp = _a.class, children = _a.children;
    var _b = (0, hooks_1.useContext)(ListboxContext), isOpen = _b.isOpen, setIsOpen = _b.setIsOpen;
    function onClick() {
        setIsOpen(!isOpen);
    }
    return (0, preact_1.h)("div", { class: "".concat(classProp), onClick: onClick }, children);
};
exports.Listbox.Options = function (_a) {
    var classProp = _a.class, children = _a.children;
    var _b = (0, hooks_1.useContext)(ListboxContext), isOpen = _b.isOpen, setIsOpen = _b.setIsOpen, calculatePopupStyle = _b.calculatePopupStyle;
    var ref = (0, hooks_1.useRef)();
    var innerRef = (0, hooks_1.useRef)();
    (0, hooks_1.useEffect)(function () {
        if (!isOpen)
            return;
        document.body.appendChild(ref.current);
        setTimeout(function () {
            innerRef.current.style.opacity = 1;
        });
    }, [isOpen]);
    function onClick() {
        setIsOpen(false);
    }
    return isOpen ? (0, preact_1.h)("div", { ref: ref, class: "absolute w-full h-full", onClick: onClick },
        (0, preact_1.h)("div", { ref: innerRef, class: "opacity-0 transition-[opacity] duration-200 ".concat(classProp), style: calculatePopupStyle() }, children)) : null;
};
exports.Listbox.Option = function (_a) {
    var classProp = _a.class, index = _a.index, children = _a.children, item = _a.item, style = _a.style;
    var _b = (0, hooks_1.useContext)(ListboxContext), setIsOpen = _b.setIsOpen, selectedIndex = _b.selectedIndex, setSelectedIndex = _b.setSelectedIndex, items = _b.items;
    function onClick() {
        setSelectedIndex(index);
        setIsOpen(false);
    }
    return (0, preact_1.h)("div", { key: "".concat(item.id), class: "".concat(classProp), onClick: onClick, style: style }, typeof children === "function" ? children({ selected: selectedIndex == index }) : children);
};
var Select = function (_a) {
    var classProp = _a.class, items = _a.items, index = _a.index, onChange = _a.onChange, style = _a.style;
    index = index || 0;
    var _b = (0, hooks_1.useState)(items[index]), selectedItem = _b[0], setSelectedItem = _b[1];
    (0, hooks_1.useEffect)(function () {
        onChange && onChange(selectedItem);
    }, [selectedItem]);
    return (0, preact_1.h)(exports.Listbox, { class: "relative ".concat(classProp), items: items, index: index, onChange: setSelectedItem },
        (0, preact_1.h)(exports.Listbox.Button, { class: "default-bg-color active-text-color bold rounded-sm px-[12px] py-[10px] flex-row justify-between" },
            (0, preact_1.h)("div", { class: "" }, selectedItem.name),
            (0, preact_1.h)(fontawesome_1.FAIcon, { name: "down-dir", class: "active-text-color translate-y-1" })),
        (0, preact_1.h)(exports.Listbox.Options, { class: "default-bg-color default-text-color rounded-sm py-2 mt-2" }, items.map(function (item, i) { return ((0, preact_1.h)(exports.Listbox.Option, { index: i, class: "hover:hover-bg-color hover:active-text-color px-[12px] py-[10px] flex-row justify-between", item: item }, function (_a) {
            var selected = _a.selected;
            return (0, preact_1.h)(preact_1.Fragment, null,
                (0, preact_1.h)("div", { class: "bold ".concat(selected ? 'active-text-color' : '') }, item.name),
                selected ? (0, preact_1.h)(fontawesome_1.FAIcon, { name: "ok", class: "active-text-color translate-y-1" }) : null);
        })); })));
};
exports.Select = Select;
