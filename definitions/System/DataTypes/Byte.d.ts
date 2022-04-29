

declare module "System" {
    import { NumberStyles } from "System/Globalization"
    
    export class Byte implements IFormattable, ISpanFormattable, IComparableAny, IComparable<Byte>, IEquatable<Byte> {
        static MaxValue: Byte
        static MinValue: Byte
        static Parse(s: string): Byte
        static Parse(s: string, style: NumberStyles): Byte
        static Parse(s: string, provider: IFormatProvider): Byte
        static Parse(s: string, style: NumberStyles, provider: IFormatProvider): Byte
        static Parse(s: ReadOnlySpan<Char>, style: NumberStyles, provider: IFormatProvider): Byte
        static TryParse(s: string, result: Byte): boolean
        static TryParse(s: ReadOnlySpan<Char>, result: Byte): boolean
        static TryParse(s: string, style: NumberStyles, provider: IFormatProvider, result: Byte): boolean
        static TryParse(s: ReadOnlySpan<Char>, style: NumberStyles, provider: IFormatProvider, result: Byte): boolean
        CompareTo(value: any): number
        CompareTo(value: Byte): number
        Equals(obj: any): boolean
        Equals(obj: Byte): boolean
        GetHashCode(): number
        ToString(): string
        ToString(format: string): string
        ToString(provider: IFormatProvider): string
        ToString(format: string, provider: IFormatProvider): string
        TryFormat(destination: Span<Char>, charsWritten: number, format: ReadOnlySpan<Char>, provider: IFormatProvider): boolean
        GetTypeCode(): TypeCode
    }
}