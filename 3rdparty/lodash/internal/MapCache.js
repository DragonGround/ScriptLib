Object.defineProperty(exports, "__esModule", { value: true });
var Hash_js_1 = require("./Hash.js");
function getMapData(_a, key) {
    var __data__ = _a.__data__;
    var data = __data__;
    return isKeyable(key)
        ? data[typeof key === 'string' ? 'string' : 'hash']
        : data.map;
}
function isKeyable(value) {
    var type = typeof value;
    return (type === 'string' || type === 'number' || type === 'symbol' || type === 'boolean')
        ? (value !== '__proto__')
        : (value === null);
}
var MapCache = (function () {
    function MapCache(entries) {
        var index = -1;
        var length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    MapCache.prototype.clear = function () {
        this.size = 0;
        this.__data__ = {
            'hash': new Hash_js_1.default,
            'map': new Map,
            'string': new Hash_js_1.default
        };
    };
    MapCache.prototype.delete = function (key) {
        var result = getMapData(this, key)['delete'](key);
        this.size -= result ? 1 : 0;
        return result;
    };
    MapCache.prototype.get = function (key) {
        return getMapData(this, key).get(key);
    };
    MapCache.prototype.has = function (key) {
        return getMapData(this, key).has(key);
    };
    MapCache.prototype.set = function (key, value) {
        var data = getMapData(this, key);
        var size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
    };
    return MapCache;
}());
exports.default = MapCache;
