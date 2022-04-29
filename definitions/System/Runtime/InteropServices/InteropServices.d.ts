

declare module "System/Runtime/InteropServices" {
    import { Attribute } from "System"

    export enum LayoutKind {
        Sequential,
        Explicit,
        Auto,
    }

    export enum CharSet {
        None,
        Ansi,
        Unicode,
        Auto,
    }

    export class StructLayoutAttribute extends Attribute {
        Value: LayoutKind
        Pack: number
        Size: number
        CharSet: CharSet
        constructor(layoutKind: LayoutKind)
        constructor(layoutKind: number)
    }
}