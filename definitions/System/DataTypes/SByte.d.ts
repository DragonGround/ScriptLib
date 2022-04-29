

declare module "System" {
    import { NumberStyles } from "System/Globalization"

    export class SByte implements IFormattable, ISpanFormattable, IComparableAny, IComparable<SByte>, IEquatable<SByte> {
        static MaxValue: SByte
        static MinValue: SByte
        static Parse(s: string): SByte
        static Parse(s: string, style: NumberStyles): SByte
        static Parse(s: string, provider: IFormatProvider): SByte
        static Parse(s: string, style: NumberStyles, provider: IFormatProvider): SByte
        static Parse(s: ReadOnlySpan<Char>, style: NumberStyles, provider: IFormatProvider): SByte
        static TryParse(s: string, result: SByte): boolean
        static TryParse(s: ReadOnlySpan<Char>, result: SByte): boolean
        static TryParse(s: string, style: NumberStyles, provider: IFormatProvider, result: SByte): boolean
        static TryParse(s: ReadOnlySpan<Char>, style: NumberStyles, provider: IFormatProvider, result: SByte): boolean
        CompareTo(obj: any): number
        CompareTo(value: SByte): number
        Equals(obj: any): boolean
        Equals(obj: SByte): boolean
        GetHashCode(): number
        ToString(): string
        ToString(provider: IFormatProvider): string
        ToString(format: string): string
        ToString(format: string, provider: IFormatProvider): string
        TryFormat(destination: Span<Char>, charsWritten: number, format: ReadOnlySpan<Char>, provider: IFormatProvider): boolean
        GetTypeCode(): TypeCode
    }
}