interface Performance {
    now(): number
}

declare var performance: Performance

type TimerHandler = string | Function

declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
declare function clearTimeout(id: number | undefined): void
declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
declare function clearInterval(id: number | undefined): void

declare function requestAnimationFrame(callback: FrameRequestCallback): number
declare function cancelAnimationFrame(handle: number): void;

interface CharacterData {
    data: string
    readonly length: number
    readonly ownerDocument: Document
    appendData(data: string): void
    deleteData(offset: number, count: number): void
    insertData(offset: number, data: string): void
    replaceData(offset: number, count: number, data: string): void
    substringData(offset: number, count: number): string
}

interface Text extends CharacterData {
    /** Returns the combined data of all direct Text node siblings. */
    readonly wholeText: string
    /** Splits data at the given offset and returns the remainder as Text node. */
    splitText(offset: number): Text
}

declare var Text: {
    prototype: Text
    new(data?: string): Text
}

declare interface Dom {
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


interface Document {
    Root: any
    body: Dom
    getElementById(tagName: string): Dom
    createElement(tagName: string, opts?: ElementCreationOptions): Dom
    createElementNS(namespaceURI: string, qualifiedName: string, opts?: ElementCreationOptions): Dom
    addEventListener(name: string, handler: Function, useCapture?: boolean): void
    removeEventListener(name: string, handler: Function, useCapture?: boolean): void
    addRuntimeUSS(uss: string): any // returns the created Unity StyleSheet ScriptableObject
    removeRuntimeStyleSheet(sheet: any): void
    clearRuntimeStyleSheets(): void
}

declare interface HTMLElement extends Dom {

}

declare var document: Document

declare var self = globalThis