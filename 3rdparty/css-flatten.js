Object.defineProperty(exports, "__esModule", { value: true });
var css_simple_parser_1 = require("css-simple-parser");
var Resolve = {
    ampersand: function (resolved, selector, parents) {
        for (var pi = 0, pl = parents.length; pi < pl; pi++) {
            var temp = selector.replace('&', parents[pi]);
            if (temp.indexOf('&') >= 0) {
                Resolve.ampersand(resolved, temp, parents);
            }
            else {
                resolved.push(temp);
            }
        }
    },
    selectors: function (selectors, parents) {
        var resolved = [];
        for (var i = 0, l = selectors.length; i < l; i++) {
            var selector = selectors[i];
            if (selector.indexOf('&') >= 0) {
                Resolve.ampersand(resolved, selector, parents);
            }
            else {
                for (var pi = 0, pl = parents.length; pi < pl; pi++) {
                    resolved.push("".concat(parents[pi], " ").concat(selector));
                }
            }
        }
        return resolved;
    }
};
var flatten = function (css) {
    var AST = css_simple_parser_1.default.parse(css);
    var selectorsCache = new Map();
    css_simple_parser_1.default.traverse(AST, function (node) {
        var selector = node.selector, parent = node.parent;
        var selectors = selector.trim().split(/\s*,\s*/g);
        if ('selector' in parent) {
            selectors = Resolve.selectors(selectors, selectorsCache.get(parent) || []);
            node.selector = selectors.join(',');
        }
        else {
            if (selector.indexOf('&') >= 0)
                throw new Error('Top-level ampersand placeholders are invalid');
        }
        selectorsCache.set(node, selectors);
    });
    var nodes = [];
    css_simple_parser_1.default.traverse(AST, function (node) {
        if (!/\S/.test(node.body))
            return;
        nodes.push(node);
    });
    AST.children = nodes;
    var empty = [];
    for (var i = 0, l = nodes.length; i < l; i++) {
        nodes[i].children = empty;
    }
    return css_simple_parser_1.default.stringify(AST);
};
exports.default = flatten;
