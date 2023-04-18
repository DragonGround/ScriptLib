"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memo = void 0;
var preact_1 = require("preact");
var util_1 = require("./util");
function memo(c, comparer) {
    function shouldUpdate(nextProps) {
        var ref = this.props.ref;
        var updateRef = ref == nextProps.ref;
        if (!updateRef && ref) {
            ref.call ? ref(null) : (ref.current = null);
        }
        if (!comparer) {
            return (0, util_1.shallowDiffers)(this.props, nextProps);
        }
        return !comparer(this.props, nextProps) || !updateRef;
    }
    function Memoed(props) {
        this.shouldComponentUpdate = shouldUpdate;
        return (0, preact_1.createElement)(c, props);
    }
    Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
    Memoed.prototype.isReactComponent = true;
    Memoed._forwarded = true;
    return Memoed;
}
exports.memo = memo;
