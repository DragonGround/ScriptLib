Object.defineProperty(exports, "__esModule", { value: true });
var stringifyNode = function (node) {
    return "".concat(node.selector, "{").concat(node.body).concat(stringifyChildren(node.children), "}");
};
var stringifyChildren = function (children) {
    var css = '';
    for (var i = 0, l = children.length; i < l; i++) {
        css += stringifyNode(children[i]);
    }
    return css;
};
var stringify = function (ast) {
    return stringifyChildren(ast.children);
};
exports.default = stringify;
