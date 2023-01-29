declare function require(path: string): any
declare function importNamespace(path: string): any
declare function getType(obj: any): any
declare function onEngineReload(callback: Function): void
declare function log(obj: any): void
declare function error(obj: any): void
declare function warn(obj: any): void
declare function logTime(obj: any): void
declare function logTimeEnd(obj: any): void

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

interface ElementCreationOptions {
    is: string
}

declare interface CSSStyleDeclaration {
    setProperty(property: string, value: any): void
}

interface Resource {
    loadFont(path: string): Font
    loadFontDefinition(path: string): FontDefinition
    loadImage(path: string): Texture2D
}

declare var resource: Resource