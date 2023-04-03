"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var tokenizer_1 = require("./tokenizer");
var SELECTOR = constants_1.TOKEN_TYPE.SELECTOR, BODY_START = constants_1.TOKEN_TYPE.BODY_START, BODY_END = constants_1.TOKEN_TYPE.BODY_END;
var getNodeBody = function (node, css) {
    var children = node.children;
    var body = '';
    var start = node.bodyIndex;
    for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        body += css.slice(start, child.index);
        start = child.indexEnd + 1;
    }
    body += css.slice(start, node.bodyIndexEnd);
    return body;
};
var parse = function (css) {
    var tokens = (0, tokenizer_1.default)(css);
    var AST = { parent: null, children: [] };
    var parent = AST;
    var index = 0;
    while (true) {
        if (typeof parent == "undefined" || parent === null)
            throw new Error('Parent node not found');
        var token = tokens[index];
        if (!token)
            break;
        if (token.type === SELECTOR) {
            var tokenBodyStart = tokens[index + 1];
            if (!tokenBodyStart || tokenBodyStart.type !== BODY_START)
                throw new Error('Found "selector" token without expected subsequent "body_start" token');
            var node = {
                parent: parent,
                index: token.index,
                indexEnd: -1,
                selector: token.selector,
                selectorIndex: token.index,
                selectorIndexEnd: token.indexEnd,
                body: '',
                bodyIndex: tokenBodyStart.index,
                bodyIndexEnd: -1,
                children: []
            };
            parent.children.push(node);
            parent = node;
            index += 2;
        }
        else if (token.type === BODY_END) {
            var node = parent;
            node.indexEnd = token.index + 1;
            node.bodyIndexEnd = token.index;
            node.body = getNodeBody(node, css);
            parent = node.parent;
            index += 1;
        }
        else {
            throw new Error("Unexpected token of type: \"".concat(token.type, "\""));
        }
    }
    return AST;
};
exports.default = parse;
