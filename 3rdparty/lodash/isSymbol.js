"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getTag_1 = __importDefault(require("./internal/getTag"));
function isSymbol(value) {
    var type = typeof value;
    return type == 'symbol' || (type === 'object' && value != null && (0, getTag_1.default)(value) == '[object Symbol]');
}
exports.default = isSymbol;
