import { Dom } from "OneJS/Dom"

export { }

declare global {

    interface Performance {
        now(): number
    }

    var performance: Performance

    type TimerHandler = string | Function

    function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
    function clearTimeout(id: number | undefined): void
    function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
    function clearInterval(id: number | undefined): void

    function requestAnimationFrame(callback: FrameRequestCallback): number
    function cancelAnimationFrame(handle: number): void;

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

    var Text: {
        prototype: Text
        new(data?: string): Text
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

    interface HTMLElement extends Dom {

    }

    var document: Document

    var self = globalThis
}