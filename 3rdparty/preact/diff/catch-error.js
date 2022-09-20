Object.defineProperty(exports, "__esModule", { value: true });
exports._catchError = void 0;
function _catchError(error, vnode, oldVNode, errorInfo) {
    let component, ctor, handled;
    for (; (vnode = vnode._parent);) {
        if ((component = vnode._component) && !component._processingException) {
            try {
                ctor = component.constructor;
                if (ctor && ctor.getDerivedStateFromError != null) {
                    component.setState(ctor.getDerivedStateFromError(error));
                    handled = component._dirty;
                }
                if (component.componentDidCatch != null) {
                    component.componentDidCatch(error, errorInfo || {});
                    handled = component._dirty;
                }
                if (handled) {
                    return (component._pendingError = component);
                }
            }
            catch (e) {
                error = e;
            }
        }
    }
    throw error;
}
exports._catchError = _catchError;
