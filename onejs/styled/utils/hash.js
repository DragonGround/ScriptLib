Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = exports.phash = exports.SEED = void 0;
exports.SEED = 5381;
var phash = function (h, x) {
    var i = x.length;
    while (i) {
        h = (h * 33) ^ x.charCodeAt(--i);
    }
    return h;
};
exports.phash = phash;
var hash = function (x) {
    return (0, exports.phash)(exports.SEED, x);
};
exports.hash = hash;
