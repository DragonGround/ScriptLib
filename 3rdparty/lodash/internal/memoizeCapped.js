Object.defineProperty(exports, "__esModule", { value: true });
const memoize_js_1 = require("../memoize.js");
const MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
    const result = (0, memoize_js_1.default)(func, (key) => {
        const { cache } = result;
        if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
        }
        return key;
    });
    return result;
}
exports.default = memoizeCapped;
