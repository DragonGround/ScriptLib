Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = exports.i = void 0;
const component_1 = require("./component");
exports.i = 0;
function createContext(defaultValue, contextId) {
    contextId = '__cC' + exports.i++;
    const context = {
        _id: contextId,
        _defaultValue: defaultValue,
        Consumer(props, contextValue) {
            return props.children(contextValue);
        },
        Provider(props) {
            if (!this.getChildContext) {
                let subs = [];
                let ctx = {};
                ctx[contextId] = this;
                this.getChildContext = () => ctx;
                this.shouldComponentUpdate = function (_props) {
                    if (this.props.value !== _props.value) {
                        subs.some(component_1.enqueueRender);
                    }
                };
                this.sub = c => {
                    subs.push(c);
                    let old = c.componentWillUnmount;
                    c.componentWillUnmount = () => {
                        subs.splice(subs.indexOf(c), 1);
                        if (old)
                            old.call(c);
                    };
                };
            }
            return props.children;
        }
    };
    return (context.Provider._contextRef = context.Consumer.contextType = context);
}
exports.createContext = createContext;
