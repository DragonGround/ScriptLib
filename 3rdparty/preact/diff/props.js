Object.defineProperty(exports, "__esModule", { value: true });
exports.setProperty = exports.diffProps = void 0;
const options_1 = require("../options");
function diffProps(dom, newProps, oldProps, isSvg, hydrate) {
    let i;
    for (i in oldProps) {
        if (i !== 'children' && i !== 'key' && !(i in newProps)) {
            setProperty(dom, i, null, oldProps[i], isSvg);
        }
    }
    for (i in newProps) {
        if ((!hydrate || typeof newProps[i] == 'function') &&
            i !== 'children' &&
            i !== 'key' &&
            i !== 'value' &&
            i !== 'checked' &&
            oldProps[i] !== newProps[i]) {
            setProperty(dom, i, newProps[i], oldProps[i], isSvg);
        }
    }
}
exports.diffProps = diffProps;
function setStyle(style, key, value) {
    globalThis.__setStyleProperty(style.GetVEStyle(), key, value);
}
function setProperty(dom, name, value, oldValue, isSvg) {
    let useCapture;
    o: if (name === 'style') {
        if (oldValue) {
            for (name in oldValue) {
                if (!(value && name in value)) {
                    setStyle(dom.style, name, null);
                }
            }
        }
        if (value) {
            for (name in value) {
                if (!oldValue || value[name] !== oldValue[name]) {
                    setStyle(dom.style, name, value[name]);
                }
            }
        }
    }
    else if (name[0] === 'o' && name[1] === 'n') {
        useCapture = name !== (name = name.replace(/Capture$/, ''));
        if (name.toLowerCase() in dom)
            name = name.toLowerCase().slice(2);
        else
            name = name.slice(2);
        if (!dom._listeners)
            dom._listeners = {};
        dom._listeners[name + useCapture] = value;
        if (value) {
            if (!oldValue) {
                const handler = useCapture ? eventProxyCapture : eventProxy;
                dom.addEventListener(name, handler, useCapture);
            }
        }
        else {
            const handler = useCapture ? eventProxyCapture : eventProxy;
            dom.removeEventListener(name, handler, useCapture);
        }
    }
    else if (name !== 'dangerouslySetInnerHTML') {
        if (isSvg) {
            name = name.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
        }
        else if (name !== 'href' &&
            name !== 'list' &&
            name !== 'form' &&
            name !== 'tabIndex' &&
            name !== 'download' &&
            name in dom) {
            try {
                dom.setAttribute(name, value == null ? null : value);
                break o;
            }
            catch (e) { }
        }
        if (typeof value === 'function') {
        }
        else if (value != null &&
            (value !== false || (name[0] === 'a' && name[1] === 'r'))) {
            dom.setAttribute(name, value);
        }
        else {
            dom.removeAttribute(name);
        }
    }
}
exports.setProperty = setProperty;
function eventProxy(e) {
    this._listeners[getType(e).Name.replace("Event", "") + false](options_1.default.event ? options_1.default.event(e) : e);
}
function eventProxyCapture(e) {
    this._listeners[getType(e).Name.replace("Event", "") + true](options_1.default.event ? options_1.default.event(e) : e);
}
