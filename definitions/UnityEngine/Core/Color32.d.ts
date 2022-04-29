

declare module "UnityEngine" {
    import { Byte, IFormatProvider, IFormattable } from "System"

    export class Color32 implements IFormattable {
        static Lerp(a: Color32, b: Color32, t: number): Color32
        static LerpUnclamped(a: Color32, b: Color32, t: number): Color32
        Item: Byte
        r: Byte
        g: Byte
        b: Byte
        a: Byte
        constructor(r: Byte, g: Byte, b: Byte, a: Byte)
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
    }
}