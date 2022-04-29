Object.defineProperty(exports, "__esModule", { value: true });
exports.hydrate = exports.render = void 0;
const constants_1 = require("./constants");
const index_1 = require("./diff/index");
const create_element_1 = require("./create-element");
const options_1 = require("./options");
const util_1 = require("./util");
function render(vnode, parentDom, replaceNode) {
    if (options_1.default._root)
        options_1.default._root(vnode, parentDom);
    let isHydrating = typeof replaceNode === 'function';
    let oldVNode = isHydrating
        ? null
        : (replaceNode && replaceNode._children) || parentDom._children;
    vnode = ((!isHydrating && replaceNode) ||
        parentDom)._children = (0, create_element_1.createElement)(create_element_1.Fragment, null, [vnode]);
    let commitQueue = [];
    (0, index_1.diff)(parentDom, vnode, oldVNode || constants_1.EMPTY_OBJ, constants_1.EMPTY_OBJ, parentDom.ownerSVGElement !== undefined, !isHydrating && replaceNode
        ? [replaceNode]
        : oldVNode
            ? null
            : parentDom.firstChild
                ? util_1.slice.call(parentDom.childNodes)
                : null, commitQueue, !isHydrating && replaceNode
        ? replaceNode
        : oldVNode
            ? oldVNode._dom
            : parentDom.firstChild, isHydrating);
    (0, index_1.commitRoot)(commitQueue, vnode);
}
exports.render = render;
function hydrate(vnode, parentDom) {
    render(vnode, parentDom, hydrate);
}
exports.hydrate = hydrate;
