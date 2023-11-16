

declare module "OneJS/Dom" {
    import { Vector2 } from "UnityEngine"
    import { EventBase, IStyle, VisualElement } from "UnityEngine/UIElements"

    export class BaseDom {
        id: string
        ve: VisualElement
        childNodes: Dom[]
        firstChild: Dom
        parentNode: Dom
        nextSibling: Dom
        style: DomStyle
        value: any
        checked: boolean
        data: any
        innerHTML: string
        layoutSize: Vector2
        _children: any
        _listeners: Record<string, Function>
        constructor(tagName: string)
        constructor(ve: VisualElement, document: Document)
        clearChildren(): void
        addEventListener(name: string, handler: Function, useCapture?: boolean): void
        removeEventListener(name: string, handler: Function, useCapture?: boolean): void
        appendChild(node: Dom): void
        removeChild(child: Dom): void
        insertBefore(a: Dom, b: Dom): void
        setAttribute(name: string, val: any): void
        removeAttribute(name: string): void
        focus(): void
        ToString(): string
    }

    // export class Dom extends BaseDom {

    // }

    export interface Dom<T extends VisualElement = VisualElement> extends BaseDom {
        ve: T
    }
}