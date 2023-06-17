import { FunctionComponent, createElement } from 'preact';
import { shallowDiffers } from './util';

/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 */
export function memo<P = {}>(
  c: FunctionComponent<P>,
  comparer?: (prev: P, next: P) => boolean
): FunctionComponent<P> {
    function shouldUpdate(nextProps) {
        let ref = this.props.ref;
        let updateRef = ref == nextProps.ref;
        if (!updateRef && ref) {
            ref.call ? ref(null) : (ref.current = null);
        }

        if (!comparer) {
            return shallowDiffers(this.props, nextProps);
        }

        return !comparer(this.props, nextProps) || !updateRef;
    }

    function Memoed(props) {
        this.shouldComponentUpdate = shouldUpdate;
        return createElement(c, props);
    }
    Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
    Memoed.prototype.isReactComponent = true;
    Memoed._forwarded = true;
    return Memoed;
}
