"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = exports.i = void 0;
var component_1 = require("./component");
exports.i = 0;
function createContext(defaultValue, contextId) {
    contextId = '__cC' + exports.i++;
    var context = {
        _id: contextId,
        _defaultValue: defaultValue,
        Consumer: function (props, contextValue) {
            return props.children(contextValue);
        },
        Provider: function (props) {
            if (!this.getChildContext) {
                var subs_1 = [];
                var ctx_1 = {};
                ctx_1[contextId] = this;
                this.getChildContext = function () { return ctx_1; };
                this.shouldComponentUpdate = function (_props) {
                    if (this.props.value !== _props.value) {
                        subs_1.some(function (c) {
                            c._force = true;
                            (0, component_1.enqueueRender)(c);
                        });
                    }
                };
                this.sub = function (c) {
                    subs_1.push(c);
                    var old = c.componentWillUnmount;
                    c.componentWillUnmount = function () {
                        subs_1.splice(subs_1.indexOf(c), 1);
                        if (old)
                            old.call(c);
                    };
                };
            }
            return props.children;
        }
    };
    return (context.Provider._contextRef = context.Consumer.contextType =
        context);
}
exports.createContext = createContext;
