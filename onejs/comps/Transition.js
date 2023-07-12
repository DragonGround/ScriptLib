"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transition = void 0;
var preact_1 = require("preact");
var hooks_1 = require("preact/hooks");
var TransitionContext = (0, preact_1.createContext)({});
var TransitionBase = function (_a) {
    var classProp = _a.class, children = _a.children, enter = _a.enter, enterFrom = _a.enterFrom, enterTo = _a.enterTo, leave = _a.leave, leaveFrom = _a.leaveFrom, leaveTo = _a.leaveTo, style = _a.style;
    var ref = (0, hooks_1.useRef)();
    var firstRender = (0, hooks_1.useRef)(true);
    var transCount = (0, hooks_1.useRef)(0);
    var _b = (0, hooks_1.useContext)(TransitionContext), showing = _b.showing, appear = _b.appear;
    var _c = (0, hooks_1.useState)(showing), reallyShowing = _c[0], setReallyShowing = _c[1];
    (0, hooks_1.useEffect)(function () {
        if (firstRender.current) {
            ref.current.setAttribute("class", "".concat(classProp, " ").concat(!showing ? enter : leave, " ").concat(!showing ? enterFrom : leaveFrom));
            if (showing && appear) {
                ref.current.setAttribute("class", "".concat(classProp, " ").concat(enter, " ").concat(enterTo));
            }
            firstRender.current = false;
        }
        else {
            transCount.current = 0;
            ref.current.setAttribute("class", "".concat(classProp, " ").concat(showing ? enter : leave, " ").concat(showing ? enterTo : leaveTo));
            if (!reallyShowing && showing) {
                setReallyShowing(showing);
            }
        }
    }, [showing]);
    function onTransitionRun() {
        transCount.current++;
    }
    function onTransitionEnd(e) {
        transCount.current--;
        if (firstRender.current || transCount.current > 0)
            return;
        ref.current.setAttribute("class", "".concat(classProp, " ").concat(showing ? leave : enter, " ").concat(showing ? leaveFrom : enterFrom));
        if (!showing) {
            setReallyShowing(showing);
        }
    }
    var classStr = showing && appear && firstRender.current ? "".concat(classProp, " ").concat(enter, " ").concat(enterFrom) : classProp;
    return (0, preact_1.h)("div", { ref: ref, class: "".concat(classStr), style: style, onTransitionRun: onTransitionRun, onTransitionEnd: onTransitionEnd }, reallyShowing ? children : null);
};
var Transition = function (_a) {
    var classProp = _a.class, children = _a.children, show = _a.show, appear = _a.appear, enter = _a.enter, enterFrom = _a.enterFrom, enterTo = _a.enterTo, leave = _a.leave, leaveFrom = _a.leaveFrom, leaveTo = _a.leaveTo, style = _a.style;
    var hasTransitionChild = (0, hooks_1.useRef)(false);
    var firstRun = (0, hooks_1.useRef)(false);
    var _b = (0, hooks_1.useState)(show), showing = _b[0], setShowing = _b[1];
    (0, hooks_1.useEffect)(function () {
        setShowing(show);
    }, [show]);
    firstRun.current = true;
    hasTransitionChild.current = isComponentInTree(children, exports.Transition.Child);
    return (0, preact_1.h)(TransitionContext.Provider, { value: { showing: showing, appear: appear } }, hasTransitionChild.current ? (0, preact_1.h)("div", { class: classProp, style: style }, children) : (0, preact_1.h)(TransitionBase, { class: classProp, style: style, enter: enter, enterFrom: enterFrom, enterTo: enterTo, leave: leave, leaveFrom: leaveFrom, leaveTo: leaveTo }, children));
};
exports.Transition = Transition;
exports.Transition.Child = TransitionBase;
var isComponentInTree = function (children, ComponentToFind) {
    if (!Array.isArray(children)) {
        children = [children];
    }
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child && (child.type === ComponentToFind || child.nodeName === ComponentToFind)) {
            return true;
        }
        if (child && child.props && child.props.children) {
            if (isComponentInTree(child.props.children, ComponentToFind)) {
                return true;
            }
        }
    }
    return false;
};
