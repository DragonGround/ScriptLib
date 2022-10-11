Object.defineProperty(exports, "__esModule", { value: true });
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var Hash = (function () {
    function Hash(entries) {
        var index = -1;
        var length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    Hash.prototype.clear = function () {
        this.__data__ = Object.create(null);
        this.size = 0;
    };
    Hash.prototype.delete = function (key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
    };
    Hash.prototype.get = function (key) {
        var data = this.__data__;
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    };
    Hash.prototype.has = function (key) {
        var data = this.__data__;
        return data[key] !== undefined;
    };
    Hash.prototype.set = function (key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = value === undefined ? HASH_UNDEFINED : value;
        return this;
    };
    return Hash;
}());
exports.default = Hash;
