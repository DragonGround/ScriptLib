Object.defineProperty(exports, "__esModule", { value: true });
var ListCache_js_1 = require("./ListCache.js");
var MapCache_js_1 = require("./MapCache.js");
var LARGE_ARRAY_SIZE = 200;
var Stack = (function () {
    function Stack(entries) {
        var data = this.__data__ = new ListCache_js_1.default(entries);
        this.size = data.size;
    }
    Stack.prototype.clear = function () {
        this.__data__ = new ListCache_js_1.default;
        this.size = 0;
    };
    Stack.prototype.delete = function (key) {
        var data = this.__data__;
        var result = data['delete'](key);
        this.size = data.size;
        return result;
    };
    Stack.prototype.get = function (key) {
        return this.__data__.get(key);
    };
    Stack.prototype.has = function (key) {
        return this.__data__.has(key);
    };
    Stack.prototype.set = function (key, value) {
        var data = this.__data__;
        if (data instanceof ListCache_js_1.default) {
            var pairs = data.__data__;
            if (pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
            }
            data = this.__data__ = new MapCache_js_1.default(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
    };
    return Stack;
}());
exports.default = Stack;
