"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse_1 = require("./parse");
var stringify_1 = require("./stringify");
var traverse_1 = require("./traverse");
var Parser = { parse: parse_1.default, stringify: stringify_1.default, traverse: traverse_1.default };
exports.default = Parser;
