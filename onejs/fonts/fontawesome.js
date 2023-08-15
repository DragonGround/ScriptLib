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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAIcon = void 0;
var preact_1 = require("preact");
var fontawesome_json_1 = __importDefault(require("./fontawesome.json"));
var fontDef = resource.loadFontDefinition(__dirname + "/fontawesome.ttf");
var FAIcon = function (_a) {
    var classProp = _a.class, name = _a.name, style = _a.style;
    var id = fontawesome_json_1.default[name];
    classProp = classProp || "";
    return (0, preact_1.h)("div", { class: "".concat(classProp), style: __assign(__assign({}, style), { unityFontDefinition: fontDef }) }, String.fromCodePoint(id));
};
exports.FAIcon = FAIcon;
