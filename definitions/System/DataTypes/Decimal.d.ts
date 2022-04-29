


declare module "System" {
    import { IDeserializationCallback } from "System/Runtime/Serialization"
    import { NumberStyles } from "System/Globalization"

    export enum MidpointRounding {
        ToEven,
        AwayFromZero,
    }

    export class Decimal implements IDeserializationCallback, IFormattable, ISpanFormattable, IComparableAny, IComparable<Decimal>, IEquatable<Decimal> {
        static Zero: Decimal
        static One: Decimal
        static MinusOne: Decimal
        static MaxValue: Decimal
        static MinValue: Decimal
        static FromOACurrency(cy: number): Decimal
        static ToOACurrency(value: Decimal): number
        static Add(d1: Decimal, d2: Decimal): Decimal
        static Ceiling(d: Decimal): Decimal
        static Compare(d1: Decimal, d2: Decimal): number
        static Divide(d1: Decimal, d2: Decimal): Decimal
        static Equals(d1: Decimal, d2: Decimal): boolean
        static Floor(d: Decimal): Decimal
        static Parse(s: string): Decimal
        static Parse(s: string, style: NumberStyles): Decimal
        static Parse(s: string, provider: IFormatProvider): Decimal
        static Parse(s: string, style: NumberStyles, provider: IFormatProvider): Decimal
        static Parse(s: ReadOnlySpan<Char>, style: NumberStyles, provider: IFormatProvider): Decimal
        static TryParse(s: string, result: Decimal): boolean
        static TryParse(s: ReadOnlySpan<Char>, result: Decimal): boolean
        static TryParse(s: string, style: NumberStyles, provider: IFormatProvider, result: Decimal): boolean
        static TryParse(s: ReadOnlySpan<Char>, style: NumberStyles, provider: IFormatProvider, result: Decimal): boolean
        static GetBits(d: Decimal): Int32[]
        static Remainder(d1: Decimal, d2: Decimal): Decimal
        static Multiply(d1: Decimal, d2: Decimal): Decimal
        static Negate(d: Decimal): Decimal
        static Round(d: Decimal): Decimal
        static Round(d: Decimal, decimals: number): Decimal
        static Round(d: Decimal, mode: MidpointRounding): Decimal
        static Round(d: Decimal, decimals: number, mode: MidpointRounding): Decimal
        static Subtract(d1: Decimal, d2: Decimal): Decimal
        static ToByte(value: Decimal): Byte
        static ToSByte(value: Decimal): SByte
        static ToInt16(value: Decimal): number
        static ToDouble(d: Decimal): number
        static ToInt32(d: Decimal): number
        static ToInt64(d: Decimal): number
        static ToUInt16(value: Decimal): number
        static ToUInt32(d: Decimal): number
        static ToUInt64(d: Decimal): number
        static ToSingle(d: Decimal): number
        static Truncate(d: Decimal): Decimal
        constructor(value: number)
        constructor(value: number)
        constructor(value: number)
        constructor(value: number)
        constructor(value: number)
        constructor(value: number)
        constructor(bits: Int32[])
        constructor(lo: number, mid: number, hi: number, isNegative: boolean, scale: Byte)
        CompareTo(value: any): number
        CompareTo(value: Decimal): number
        Equals(value: any): boolean
        Equals(value: Decimal): boolean
        GetHashCode(): number
        ToString(): string
        ToString(format: string): string
        ToString(provider: IFormatProvider): string
        ToString(format: string, provider: IFormatProvider): string
        TryFormat(destination: Span<Char>, charsWritten: number, format: ReadOnlySpan<Char>, provider: IFormatProvider): boolean
        GetTypeCode(): TypeCode
        OnDeserialization(sender: any): void
    }
}