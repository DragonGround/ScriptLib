"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProperty = exports.diffProps = void 0;
var options_1 = __importDefault(require("../options"));
function diffProps(dom, newProps, oldProps, isSvg, hydrate) {
    var i;
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
    var useCapture;
    o: if (name === 'style') {
        if (typeof value == 'string') {
            dom.style.cssText = value;
        }
        else {
            if (typeof oldValue == 'string') {
                dom.style.cssText = oldValue = '';
            }
            if (oldValue) {
                for (name in oldValue) {
                    if (!(value && name in value)) {
                        setStyle(dom.style, name, '');
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
    }
    else if (name[0] === 'o' && name[1] === 'n') {
        useCapture = name !== (name = name.replace(/Capture$/, ''));
        if (name.toLowerCase() in dom)
            name = name.toLowerCase().slice(2);
        else
            name = name.slice(2);
        dom.AddToListener(name + useCapture, value);
        if (value) {
            if (!oldValue) {
                var handler = useCapture ? eventProxyCapture : eventProxy;
                dom.addEventListener(name, handler, useCapture);
            }
        }
        else {
            var handler = useCapture ? eventProxyCapture : eventProxy;
            dom.removeEventListener(name, handler, useCapture);
        }
    }
    else if (name !== 'dangerouslySetInnerHTML') {
        if (isSvg) {
            name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        }
        else if (name !== 'width' &&
            name !== 'height' &&
            name !== 'href' &&
            name !== 'list' &&
            name !== 'form' &&
            name !== 'tabIndex' &&
            name !== 'download' &&
            name !== 'rowSpan' &&
            name !== 'colSpan' &&
            name in dom) {
            try {
                dom.setAttribute(name, value == null ? null : value);
                break o;
            }
            catch (e) { }
        }
        if (typeof value === 'function') {
        }
        else if (name == "disabled") {
            dom.setAttribute(name, value);
        }
        else if (value != null && (value !== false || name[4] === '-')) {
            dom.setAttribute(name, value);
        }
        else {
            dom.removeAttribute(name);
        }
    }
}
exports.setProperty = setProperty;
function eventProxy(e) {
    var eventName = getType(e).Name.replace("Event", "");
    eventName = eventName === "Change`1" ? "ValueChanged" : eventName;
    this.CallListener(eventName + false, options_1.default.event ? options_1.default.event(e) : e);
}
function eventProxyCapture(e) {
    var eventName = getType(e).Name.replace("Event", "");
    eventName = eventName === "Change`1" ? "ValueChanged" : eventName;
    this.CallListener(eventName + true, options_1.default.event ? options_1.default.event(e) : e);
}
