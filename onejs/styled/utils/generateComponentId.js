"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateAlphabeticName_1 = require("./generateAlphabeticName");
var hash_1 = require("./hash");
function generateComponentId(str) {
    return (0, generateAlphabeticName_1.default)((0, hash_1.hash)(str) >>> 0);
}
exports.default = generateComponentId;
