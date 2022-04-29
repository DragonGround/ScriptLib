Object.defineProperty(exports, "__esModule", { value: true });
const memoizeCapped_js_1 = require("./memoizeCapped.js");
const charCodeOfDot = '.'.charCodeAt(0);
const reEscapeChar = /\\(\\)?/g;
const rePropName = RegExp('[^.[\\]]+' + '|' +
    '\\[(?:' +
    '([^"\'][^[]*)' + '|' +
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' + '|' +
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', 'g');
const stringToPath = (0, memoizeCapped_js_1.default)((string) => {
    const result = [];
    if (string.charCodeAt(0) === charCodeOfDot) {
        result.push('');
    }
    string.replace(rePropName, (match, expression, quote, subString) => {
        let key = match;
        if (quote) {
            key = subString.replace(reEscapeChar, '$1');
        }
        else if (expression) {
            key = expression.trim();
        }
        result.push(key);
    });
    return result;
});
exports.default = stringToPath;
