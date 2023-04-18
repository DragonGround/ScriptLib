"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forwardRef = exports.REACT_FORWARD_SYMBOL = void 0;
var preact_1 = require("preact");
var util_1 = require("./util");
var oldDiffHook = preact_1.options._diff;
preact_1.options._diff = function (vnode) {
    if (vnode.type && vnode.type._forwarded && vnode.ref) {
        vnode.props.ref = vnode.ref;
        vnode.ref = null;
    }
    if (oldDiffHook)
        oldDiffHook(vnode);
};
exports.REACT_FORWARD_SYMBOL = (typeof Symbol != 'undefined' &&
    Symbol.for &&
    Symbol.for('react.forward_ref')) ||
    0xf47;
function forwardRef(fn) {
    function Forwarded(props) {
        var clone = (0, util_1.assign)({}, props);
        delete clone.ref;
        return fn(clone, props.ref || null);
    }
    Forwarded.$$typeof = exports.REACT_FORWARD_SYMBOL;
    Forwarded.render = Forwarded;
    Forwarded.prototype.isReactComponent = Forwarded._forwarded = true;
    Forwarded.displayName = 'ForwardRef(' + (fn.displayName || fn.name) + ')';
    return Forwarded;
}
exports.forwardRef = forwardRef;
