declare function require(path: string): any
declare function importNamespace(path: string): any
declare function log(obj: any): void
declare function getType(obj: any): any
declare function onEngineReload(callback: Function): void

declare var __dirname: string
declare type float = number
declare type int = number

declare type EnumKeysLower<A> = keyof LowercaseKeys<A>

declare type LowercaseKeys<A> = {
    [Property in keyof A as `${Lowercase<string & Property>}`]: A[Property]
};

declare type LowercaseMapping<A, B> = {
    [Property in keyof A as `${Lowercase<string & Property>}`]: B
};

declare interface HTMLElement {
    clearChildren()
}

declare interface CSSStyleDeclaration {
    setProperty(property: string, value: any): void;
}