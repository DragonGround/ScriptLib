

declare module "UnityEngine" {
    import { IFormatProvider, IFormattable } from "System"

    export class Color32 implements IFormattable {
        static Lerp(a: Color32, b: Color32, t: number): Color32
        static LerpUnclamped(a: Color32, b: Color32, t: number): Color32
        Item: number
        r: number
        g: number
        b: number
        a: number
        constructor(r: number, g: number, b: number, a: number)
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
    }
}