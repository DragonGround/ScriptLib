declare function require(path: string): any
declare function importNamespace(path: string): any
declare function log(obj: any): void
declare function getType(obj: any): any
declare function onEngineReload(callback: Function): void

declare function struct<T>(type: { new(): T }, obj: any): T

declare var __dirname: string
declare var System: any
declare type float = number
declare type int = number

type CamelToSlug<T extends string, P extends string = ""> = string extends T ? string :
    T extends `${infer C0}${infer R}` ?
    CamelToSlug<R, `${P}${C0 extends Lowercase<C0> ? "" : "-"}${Lowercase<C0>}`> : P

declare type EnumKeysLower<A> = keyof LowercaseKeys<A>

declare type LowercaseKeys<A> = {
    [Property in keyof A as `${Lowercase<string & Property>}`]: A[Property]
};

declare type LowercaseMapping<A, B> = {
    [Property in keyof A as `${Lowercase<string & Property>}`]: B
};

declare interface Document {
    Root: any
    addRuntimeUSS(uss: string): any // returns the created Unity StyleSheet ScriptableObject
    removeRuntimeStyleSheet(sheet: any): void
    clearRuntimeStyleSheets(): void
}

declare interface HTMLElement {
    clearChildren()
}

declare interface CSSStyleDeclaration {
    setProperty(property: string, value: any): void
}