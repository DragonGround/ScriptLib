"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getTag_js_1 = require("./internal/getTag.js");
var nodeTypes_js_1 = require("./internal/nodeTypes.js");
var isObjectLike_js_1 = require("./isObjectLike.js");
var reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;
var nodeIsTypedArray = nodeTypes_js_1.default && nodeTypes_js_1.default.isTypedArray;
var isTypedArray = nodeIsTypedArray
    ? function (value) { return nodeIsTypedArray(value); }
    : function (value) { return (0, isObjectLike_js_1.default)(value) && reTypedTag.test((0, getTag_js_1.default)(value)); };
exports.default = isTypedArray;
