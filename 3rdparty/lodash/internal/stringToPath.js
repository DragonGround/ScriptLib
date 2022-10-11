Object.defineProperty(exports, "__esModule", { value: true });
var memoizeCapped_js_1 = require("./memoizeCapped.js");
var charCodeOfDot = '.'.charCodeAt(0);
var reEscapeChar = /\\(\\)?/g;
var rePropName = RegExp('[^.[\\]]+' + '|' +
    '\\[(?:' +
    '([^"\'][^[]*)' + '|' +
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' + '|' +
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', 'g');
var stringToPath = (0, memoizeCapped_js_1.default)(function (string) {
    var result = [];
    if (string.charCodeAt(0) === charCodeOfDot) {
        result.push('');
    }
    string.replace(rePropName, function (match, expression, quote, subString) {
        var key = match;
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
