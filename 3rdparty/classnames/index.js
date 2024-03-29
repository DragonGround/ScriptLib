"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = void 0;
var hasOwn = {}.hasOwnProperty;
function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
            continue;
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg)) {
            if (arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                    classes.push(inner);
                }
            }
        }
        else if (argType === 'object') {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                classes.push(arg.toString());
                continue;
            }
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(' ');
}
exports.classNames = classNames;
