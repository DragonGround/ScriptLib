"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parse_1 = __importDefault(require("./parse"));
var stringify_1 = __importDefault(require("./stringify"));
var traverse_1 = __importDefault(require("./traverse"));
var Parser = { parse: parse_1.default, stringify: stringify_1.default, traverse: traverse_1.default };
exports.default = Parser;
