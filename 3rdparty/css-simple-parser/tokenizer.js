"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var string_indexes_1 = __importDefault(require("string-indexes"));
var constants_1 = require("./constants");
var SELECTOR = constants_1.TOKEN_TYPE.SELECTOR, BODY_START = constants_1.TOKEN_TYPE.BODY_START, BODY_END = constants_1.TOKEN_TYPE.BODY_END;
var mergeTokensSorted = function (t1, t2) {
    var length = t1.length + t2.length;
    var i = t1.length - 1;
    var j = t2.length - 1;
    var merged = new Array(length);
    while (length > 0) {
        merged[--length] = (j < 0 || (i >= 0 && t1[i].index > t2[j].index)) ? t1[i--] : t2[j--];
    }
    return merged;
};
var mergeTokensSortedEvenOdd = function (t1, t2) {
    var length = t1.length;
    var merged = new Array(length * 2);
    for (var i = 0, j = 0; i < length; i++, j += 2) {
        merged[j] = t1[i];
        merged[j + 1] = t2[i];
    }
    return merged;
};
var findSelectorStartIndex = function (tokens, tokenIndexStart, limit) {
    if (tokenIndexStart === void 0) { tokenIndexStart = 0; }
    var lastIndex = 0;
    var lastTokenIndex = tokenIndexStart;
    for (var i = tokenIndexStart, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        var index = token.index;
        if (index >= limit)
            break;
        lastIndex = (token.type === BODY_START) ? index : index + 1;
        lastTokenIndex = i + 1;
    }
    return [lastIndex, lastTokenIndex];
};
var tokenizer = function (css) {
    var startIndexes = (0, string_indexes_1.default)(css, '{');
    var endIndexes = (0, string_indexes_1.default)(css, '}');
    var selectorTokens = new Array(startIndexes.length);
    var startTokens = new Array(startIndexes.length);
    var endTokens = new Array(endIndexes.length);
    var selectorIndex = 0;
    var startIndex = 0;
    var endIndex = 0;
    for (var i = 0, l = startIndexes.length; i < l; i++) {
        startTokens[startIndex++] = {
            type: BODY_START,
            index: startIndexes[i] + 1
        };
    }
    for (var i = 0, l = endIndexes.length; i < l; i++) {
        endTokens[endIndex++] = {
            type: BODY_END,
            index: endIndexes[i]
        };
    }
    var prevStartTokenIndex = 0;
    var prevEndTokenIndex = 0;
    for (var i = 0, l = startIndexes.length; i < l; i++) {
        var indexEnd = startIndexes[i];
        var findStartData = findSelectorStartIndex(startTokens, prevStartTokenIndex, indexEnd);
        var findEndData = findSelectorStartIndex(endTokens, prevEndTokenIndex, indexEnd);
        prevStartTokenIndex = findStartData[1];
        prevEndTokenIndex = findEndData[1];
        var index = (findStartData[0] >= findEndData[0]) ? findStartData[0] : findEndData[0];
        var selector = css.slice(index, indexEnd);
        var semicolonIndex = index + selector.lastIndexOf(';', indexEnd) + 1;
        if (semicolonIndex > index) {
            index = semicolonIndex;
            selector = css.slice(index, indexEnd);
        }
        selectorTokens[selectorIndex++] = {
            type: SELECTOR,
            index: index,
            indexEnd: indexEnd,
            selector: selector
        };
    }
    return mergeTokensSorted(mergeTokensSortedEvenOdd(selectorTokens, startTokens), endTokens);
};
exports.default = tokenizer;
