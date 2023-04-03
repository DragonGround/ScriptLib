"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var traverse = function (ast, fn) {
    var children = ast.children;
    for (var i = 0, l = children.length; i < l; i++) {
        var node = children[i];
        fn(node);
        traverse(node, fn);
    }
};
exports.default = traverse;
