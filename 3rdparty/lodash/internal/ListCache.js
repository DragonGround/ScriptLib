"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assocIndexOf_js_1 = __importDefault(require("./assocIndexOf.js"));
var ListCache = (function () {
    function ListCache(entries) {
        var index = -1;
        var length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    ListCache.prototype.clear = function () {
        this.__data__ = [];
        this.size = 0;
    };
    ListCache.prototype.delete = function (key) {
        var data = this.__data__;
        var index = (0, assocIndexOf_js_1.default)(data, key);
        if (index < 0) {
            return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
            data.pop();
        }
        else {
            data.splice(index, 1);
        }
        --this.size;
        return true;
    };
    ListCache.prototype.get = function (key) {
        var data = this.__data__;
        var index = (0, assocIndexOf_js_1.default)(data, key);
        return index < 0 ? undefined : data[index][1];
    };
    ListCache.prototype.has = function (key) {
        return (0, assocIndexOf_js_1.default)(this.__data__, key) > -1;
    };
    ListCache.prototype.set = function (key, value) {
        var data = this.__data__;
        var index = (0, assocIndexOf_js_1.default)(data, key);
        if (index < 0) {
            ++this.size;
            data.push([key, value]);
        }
        else {
            data[index][1] = value;
        }
        return this;
    };
    return ListCache;
}());
exports.default = ListCache;
