"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Children = void 0;
var preact_1 = require("preact");
var mapFn = function (children, fn) {
    if (children == null)
        return null;
    return (0, preact_1.toChildArray)((0, preact_1.toChildArray)(children).map(fn));
};
exports.Children = {
    map: mapFn,
    forEach: mapFn,
    count: function (children) {
        return children ? (0, preact_1.toChildArray)(children).length : 0;
    },
    only: function (children) {
        var normalized = (0, preact_1.toChildArray)(children);
        if (normalized.length !== 1)
            throw 'Children.only';
        return normalized[0];
    },
    toArray: preact_1.toChildArray
};
