"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AD_REPLACER_R = /(a)(d)/gi;
var charsLength = 52;
var getAlphabeticChar = function (code) { return String.fromCharCode(code + (code > 25 ? 39 : 97)); };
function generateAlphabeticName(code) {
    var name = '';
    var x;
    for (x = Math.abs(code); x > charsLength; x = (x / charsLength) | 0) {
        name = getAlphabeticChar(x % charsLength) + name;
    }
    return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}
exports.default = generateAlphabeticName;
