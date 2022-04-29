declare module "System" {
    import { CultureInfo, UnicodeCategory } from "System/Globalization"

    export enum TypeCode {
        Empty,
        Object,
        DBNull,
        Boolean,
        Char,
        SByte,
        Byte,
        Int16,
        UInt16,
        Int32,
        UInt32,
        Int64,
        UInt64,
        Single,
        Double,
        Decimal,
        DateTime,
        String,
    }

    export class Char implements IComparableAny, IComparable<Char>, IEquatable<Char> {
        static MaxValue: Char
        static MinValue: Char
        static ToString(c: Char): string
        static Parse(s: string): Char
        static TryParse(s: string, result: Char): boolean
        static IsDigit(c: Char): boolean
        static IsLetter(c: Char): boolean
        static IsWhiteSpace(c: Char): boolean
        static IsUpper(c: Char): boolean
        static IsLower(c: Char): boolean
        static IsPunctuation(c: Char): boolean
        static IsLetterOrDigit(c: Char): boolean
        static ToUpper(c: Char, culture: CultureInfo): Char
        static ToUpper(c: Char): Char
        static ToUpperInvariant(c: Char): Char
        static ToLower(c: Char, culture: CultureInfo): Char
        static ToLower(c: Char): Char
        static ToLowerInvariant(c: Char): Char
        static IsControl(c: Char): boolean
        static IsControl(s: string, index: number): boolean
        static IsDigit(s: string, index: number): boolean
        static IsLetter(s: string, index: number): boolean
        static IsLetterOrDigit(s: string, index: number): boolean
        static IsLower(s: string, index: number): boolean
        static IsNumber(c: Char): boolean
        static IsNumber(s: string, index: number): boolean
        static IsPunctuation(s: string, index: number): boolean
        static IsSeparator(c: Char): boolean
        static IsSeparator(s: string, index: number): boolean
        static IsSurrogate(c: Char): boolean
        static IsSurrogate(s: string, index: number): boolean
        static IsSymbol(c: Char): boolean
        static IsSymbol(s: string, index: number): boolean
        static IsUpper(s: string, index: number): boolean
        static IsWhiteSpace(s: string, index: number): boolean
        static GetUnicodeCategory(c: Char): UnicodeCategory
        static GetUnicodeCategory(s: string, index: number): UnicodeCategory
        static GetNumericValue(c: Char): number
        static GetNumericValue(s: string, index: number): number
        static IsHighSurrogate(c: Char): boolean
        static IsHighSurrogate(s: string, index: number): boolean
        static IsLowSurrogate(c: Char): boolean
        static IsLowSurrogate(s: string, index: number): boolean
        static IsSurrogatePair(s: string, index: number): boolean
        static IsSurrogatePair(highSurrogate: Char, lowSurrogate: Char): boolean
        static ConvertFromUtf32(utf32: number): string
        static ConvertToUtf32(highSurrogate: Char, lowSurrogate: Char): number
        static ConvertToUtf32(s: string, index: number): number
        GetHashCode(): number
        Equals(obj: any): boolean
        Equals(obj: Char): boolean
        CompareTo(value: any): number
        CompareTo(value: Char): number
        ToString(): string
        ToString(provider: IFormatProvider): string
        GetTypeCode(): TypeCode
    }
}