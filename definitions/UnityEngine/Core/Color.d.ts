

declare module "UnityEngine" {
    import { IEquatable, IFormatProvider, IFormattable } from "System"

    export class Color implements IFormattable, IEquatable<Color> {
        static red: Color
        static green: Color
        static blue: Color
        static white: Color
        static black: Color
        static yellow: Color
        static cyan: Color
        static magenta: Color
        static gray: Color
        static grey: Color
        static clear: Color
        static Lerp(a: Color, b: Color, t: number): Color
        static LerpUnclamped(a: Color, b: Color, t: number): Color
        static RGBToHSV(rgbColor: Color, H: number, S: number, V: number): void
        static HSVToRGB(H: number, S: number, V: number): Color
        static HSVToRGB(H: number, S: number, V: number, hdr: boolean): Color
        grayscale: number
        linear: Color
        gamma: Color
        maxColorComponent: number
        Item: number
        r: number
        g: number
        b: number
        a: number
        constructor(r: number, g: number, b: number, a: number)
        constructor(r: number, g: number, b: number)
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: Color): boolean
    }
}