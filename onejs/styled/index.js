"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emo = exports.uss = exports.default = void 0;
var css_flatten_1 = require("css-flatten");
var preact_1 = require("preact");
var generateComponentId_1 = require("./utils/generateComponentId");
var compat_1 = require("preact/compat");
function _hashAndAddRuntimeUSS(style) {
    var compId = (0, generateComponentId_1.default)(style);
    style = ".".concat(compId, " {").concat(style, "}");
    style = (0, css_flatten_1.default)(style);
    document.addRuntimeUSS(style);
    return compId;
}
function _processTemplate(props, strings, values) {
    var style = values.reduce(function (result, expr, index) {
        var value = typeof expr === "function" ? expr(props) : expr;
        if (typeof value === "function")
            value = value(props);
        return result + (value ? value : "") + strings[index + 1];
    }, strings[0]);
    return style;
}
function styled(Tag) {
    var AnyTag = Tag;
    var tag = function (strings) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return (0, compat_1.forwardRef)(function (props, ref) {
            var style = _processTemplate(props, strings, values);
            var compId = _hashAndAddRuntimeUSS(style);
            return (0, preact_1.h)(AnyTag, __assign({ ref: ref, class: compId }, props));
        });
    };
    tag.attrs = function (func) {
        return function (strings) {
            var values = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                values[_i - 1] = arguments[_i];
            }
            return function (props) {
                var defaultProps = func(props);
                var condensedProps = Object.assign({}, defaultProps, props);
                var style = _processTemplate(condensedProps, strings, values);
                var compId = _hashAndAddRuntimeUSS(style);
                return (0, preact_1.h)(AnyTag, __assign({ class: compId }, condensedProps));
            };
        };
    };
    return tag;
}
exports.default = styled;
styled.div = styled("div");
styled.button = styled("button");
styled.textfield = styled("textfield");
var uss = function (strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return function (props) {
        return _processTemplate(props, strings, values);
    };
};
exports.uss = uss;
var emo = function (strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var style = values.reduce(function (result, expr, index) {
        var value = expr;
        return result + (value ? value : "") + strings[index + 1];
    }, strings[0]);
    return _hashAndAddRuntimeUSS(style);
};
exports.emo = emo;
