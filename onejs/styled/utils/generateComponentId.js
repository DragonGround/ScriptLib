"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generateAlphabeticName_1 = __importDefault(require("./generateAlphabeticName"));
var hash_1 = require("./hash");
function generateComponentId(str) {
    return (0, generateAlphabeticName_1.default)((0, hash_1.hash)(str) >>> 0);
}
exports.default = generateComponentId;
