declare module "System" {
    export class Guid implements IFormattable, ISpanFormattable, IComparableAny, IComparable<Guid>, IEquatable<Guid> {
        static Empty: Guid
        static NewGuid(): Guid
        static Parse(input: string): Guid
        static Parse(input: ReadOnlySpan<Char>): Guid
        static TryParse(input: string, result: Guid): boolean
        static TryParse(input: ReadOnlySpan<Char>, result: Guid): boolean
        static ParseExact(input: string, format: string): Guid
        static ParseExact(input: ReadOnlySpan<Char>, format: ReadOnlySpan<Char>): Guid
        static TryParseExact(input: string, format: string, result: Guid): boolean
        static TryParseExact(input: ReadOnlySpan<Char>, format: ReadOnlySpan<Char>, result: Guid): boolean
        constructor(b: Byte[])
        constructor(b: ReadOnlySpan<Byte>)
        constructor(a: number, b: number, c: number, d: Byte, e: Byte, f: Byte, g: Byte, h: Byte, i: Byte, j: Byte, k: Byte)
        constructor(a: number, b: number, c: number, d: Byte[])
        constructor(a: number, b: number, c: number, d: Byte, e: Byte, f: Byte, g: Byte, h: Byte, i: Byte, j: Byte, k: Byte)
        constructor(g: string)
        ToByteArray(): Byte[]
        TryWriteBytes(destination: Span<Byte>): boolean
        ToString(): string
        GetHashCode(): number
        Equals(o: any): boolean
        Equals(g: Guid): boolean
        CompareTo(value: any): number
        CompareTo(value: Guid): number
        ToString(format: string): string
        ToString(format: string, provider: IFormatProvider): string
        TryFormat(destination: Span<Char>, charsWritten: number, format: ReadOnlySpan<Char>): boolean
    }
}