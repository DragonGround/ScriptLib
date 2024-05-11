"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProperty = void 0;
var options_1 = __importDefault(require("../options"));
function setStyle(style, key, value) {
    globalThis.__setStyleProperty(style.GetVEStyle(), key, value);
}
var eventClock = 0;
function setProperty(dom, name, value, oldValue, namespace) {
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
        useCapture =
            name !== (name = name.replace(/(PointerCapture)$|Capture$/i, '$1'));
        if (name.toLowerCase() in dom ||
            name === 'onFocusOut' ||
            name === 'onFocusIn')
            name = name.toLowerCase().slice(2);
        else
            name = name.slice(2);
        if (!dom._listeners)
            dom._listeners = {};
        dom._listeners[name + useCapture] = value;
        if (value) {
            if (!oldValue) {
                value._attached = eventClock;
                dom.addEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
            }
            else {
                value._attached = oldValue._attached;
            }
        }
        else {
            dom.removeEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
        }
    }
    else {
        if (namespace == 'http://www.w3.org/2000/svg') {
            name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        }
        else if (name != 'width' &&
            name != 'height' &&
            name != 'href' &&
            name != 'list' &&
            name != 'form' &&
            name != 'tabIndex' &&
            name != 'download' &&
            name != 'rowSpan' &&
            name != 'colSpan' &&
            name != 'role' &&
            name in dom) {
            try {
                dom[name] = value == null ? '' : value;
                break o;
            }
            catch (e) { }
        }
        if (typeof value == 'function') {
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
