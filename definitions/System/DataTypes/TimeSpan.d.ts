
declare module "System" {
    export enum TimeSpanStyles {
        None,
        AssumeNegative,
    }
    
    export class TimeSpan implements IFormattable, ISpanFormattable, IComparableAny, IComparable<TimeSpan>, IEquatable<TimeSpan> {
        static TicksPerMillisecond: number
        static TicksPerSecond: number
        static TicksPerMinute: number
        static TicksPerHour: number
        static TicksPerDay: number
        static Zero: TimeSpan
        static MaxValue: TimeSpan
        static MinValue: TimeSpan
        static Compare(t1: TimeSpan, t2: TimeSpan): number
        static FromDays(value: number): TimeSpan
        static Equals(t1: TimeSpan, t2: TimeSpan): boolean
        static FromHours(value: number): TimeSpan
        static FromMilliseconds(value: number): TimeSpan
        static FromMinutes(value: number): TimeSpan
        static FromSeconds(value: number): TimeSpan
        static FromTicks(value: number): TimeSpan
        static Parse(s: string): TimeSpan
        static Parse(input: string, formatProvider: IFormatProvider): TimeSpan
        static Parse(input: ReadOnlySpan<Char>, formatProvider: IFormatProvider): TimeSpan
        static ParseExact(input: string, format: string, formatProvider: IFormatProvider): TimeSpan
        static ParseExact(input: string, formats: String[], formatProvider: IFormatProvider): TimeSpan
        static ParseExact(input: string, format: string, formatProvider: IFormatProvider, styles: TimeSpanStyles): TimeSpan
        static ParseExact(input: ReadOnlySpan<Char>, format: ReadOnlySpan<Char>, formatProvider: IFormatProvider, styles: TimeSpanStyles): TimeSpan
        static ParseExact(input: string, formats: String[], formatProvider: IFormatProvider, styles: TimeSpanStyles): TimeSpan
        static ParseExact(input: ReadOnlySpan<Char>, formats: String[], formatProvider: IFormatProvider, styles: TimeSpanStyles): TimeSpan
        static TryParse(s: string, result: TimeSpan): boolean
        static TryParse(s: ReadOnlySpan<Char>, result: TimeSpan): boolean
        static TryParse(input: string, formatProvider: IFormatProvider, result: TimeSpan): boolean
        static TryParse(input: ReadOnlySpan<Char>, formatProvider: IFormatProvider, result: TimeSpan): boolean
        static TryParseExact(input: string, format: string, formatProvider: IFormatProvider, result: TimeSpan): boolean
        static TryParseExact(input: ReadOnlySpan<Char>, format: ReadOnlySpan<Char>, formatProvider: IFormatProvider, result: TimeSpan): boolean
        static TryParseExact(input: string, formats: String[], formatProvider: IFormatProvider, result: TimeSpan): boolean
        static TryParseExact(input: ReadOnlySpan<Char>, formats: String[], formatProvider: IFormatProvider, result: TimeSpan): boolean
        static TryParseExact(input: string, format: string, formatProvider: IFormatProvider, styles: TimeSpanStyles, result: TimeSpan): boolean
        static TryParseExact(input: ReadOnlySpan<Char>, format: ReadOnlySpan<Char>, formatProvider: IFormatProvider, styles: TimeSpanStyles, result: TimeSpan): boolean
        static TryParseExact(input: string, formats: String[], formatProvider: IFormatProvider, styles: TimeSpanStyles, result: TimeSpan): boolean
        static TryParseExact(input: ReadOnlySpan<Char>, formats: String[], formatProvider: IFormatProvider, styles: TimeSpanStyles, result: TimeSpan): boolean
        Ticks: number
        Days: number
        Hours: number
        Milliseconds: number
        Minutes: number
        Seconds: number
        TotalDays: number
        TotalHours: number
        TotalMilliseconds: number
        TotalMinutes: number
        TotalSeconds: number
        constructor(ticks: number)
        constructor(hours: number, minutes: number, seconds: number)
        constructor(days: number, hours: number, minutes: number, seconds: number)
        constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds: number)
        Add(ts: TimeSpan): TimeSpan
        CompareTo(value: any): number
        CompareTo(value: TimeSpan): number
        Duration(): TimeSpan
        Equals(value: any): boolean
        Equals(obj: TimeSpan): boolean
        GetHashCode(): number
        Negate(): TimeSpan
        Subtract(ts: TimeSpan): TimeSpan
        Multiply(factor: number): TimeSpan
        Divide(divisor: number): TimeSpan
        Divide(ts: TimeSpan): number
        ToString(): string
        ToString(format: string): string
        ToString(format: string, formatProvider: IFormatProvider): string
        TryFormat(destination: Span<Char>, charsWritten: number, format: ReadOnlySpan<Char>, formatProvider: IFormatProvider): boolean
    }
}