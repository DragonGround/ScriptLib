


declare module "System" {
    import { ISerializable, SerializationInfo, StreamingContext } from "System/Runtime/Serialization"
    import { Calendar, DateTimeStyles } from "System/Globalization"

    export enum DateTimeKind {
        Unspecified,
        Utc,
        Local,
    }

    export enum DayOfWeek {
        Sunday,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
    }

    export class DateTime implements IFormattable, ISerializable, ISpanFormattable, IComparableAny, IComparable<DateTime>, IEquatable<DateTime> {
        static Now: DateTime
        static Today: DateTime
        static UtcNow: DateTime
        static MinValue: DateTime
        static MaxValue: DateTime
        static UnixEpoch: DateTime
        static Compare(t1: DateTime, t2: DateTime): number
        static DaysInMonth(year: number, month: number): number
        static Equals(t1: DateTime, t2: DateTime): boolean
        static FromBinary(dateData: number): DateTime
        static FromFileTime(fileTime: number): DateTime
        static FromFileTimeUtc(fileTime: number): DateTime
        static FromOADate(d: number): DateTime
        static SpecifyKind(value: DateTime, kind: DateTimeKind): DateTime
        static IsLeapYear(year: number): boolean
        static Parse(s: string): DateTime
        static Parse(s: string, provider: IFormatProvider): DateTime
        static Parse(s: string, provider: IFormatProvider, styles: DateTimeStyles): DateTime
        static Parse(s: ReadOnlySpan<Char>, provider: IFormatProvider, styles: DateTimeStyles): DateTime
        static ParseExact(s: string, format: string, provider: IFormatProvider): DateTime
        static ParseExact(s: string, format: string, provider: IFormatProvider, style: DateTimeStyles): DateTime
        static ParseExact(s: ReadOnlySpan<Char>, format: ReadOnlySpan<Char>, provider: IFormatProvider, style: DateTimeStyles): DateTime
        static ParseExact(s: string, formats: String[], provider: IFormatProvider, style: DateTimeStyles): DateTime
        static ParseExact(s: ReadOnlySpan<Char>, formats: String[], provider: IFormatProvider, style: DateTimeStyles): DateTime
        static TryParse(s: string, result: DateTime): boolean
        static TryParse(s: ReadOnlySpan<Char>, result: DateTime): boolean
        static TryParse(s: string, provider: IFormatProvider, styles: DateTimeStyles, result: DateTime): boolean
        static TryParse(s: ReadOnlySpan<Char>, provider: IFormatProvider, styles: DateTimeStyles, result: DateTime): boolean
        static TryParseExact(s: string, format: string, provider: IFormatProvider, style: DateTimeStyles, result: DateTime): boolean
        static TryParseExact(s: ReadOnlySpan<Char>, format: ReadOnlySpan<Char>, provider: IFormatProvider, style: DateTimeStyles, result: DateTime): boolean
        static TryParseExact(s: string, formats: String[], provider: IFormatProvider, style: DateTimeStyles, result: DateTime): boolean
        static TryParseExact(s: ReadOnlySpan<Char>, formats: String[], provider: IFormatProvider, style: DateTimeStyles, result: DateTime): boolean
        Date: DateTime
        Day: number
        DayOfWeek: DayOfWeek
        DayOfYear: number
        Hour: number
        Kind: DateTimeKind
        Millisecond: number
        Minute: number
        Month: number
        Second: number
        Ticks: number
        TimeOfDay: TimeSpan
        Year: number
        constructor(ticks: number)
        constructor(ticks: number, kind: DateTimeKind)
        constructor(year: number, month: number, day: number)
        constructor(year: number, month: number, day: number, calendar: Calendar)
        constructor(year: number, month: number, day: number, hour: number, minute: number, second: number)
        constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, kind: DateTimeKind)
        constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, calendar: Calendar)
        constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number)
        constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, kind: DateTimeKind)
        constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, calendar: Calendar)
        constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, calendar: Calendar, kind: DateTimeKind)
        Add(value: TimeSpan): DateTime
        AddDays(value: number): DateTime
        AddHours(value: number): DateTime
        AddMilliseconds(value: number): DateTime
        AddMinutes(value: number): DateTime
        AddMonths(months: number): DateTime
        AddSeconds(value: number): DateTime
        AddTicks(value: number): DateTime
        AddYears(value: number): DateTime
        CompareTo(value: any): number
        CompareTo(value: DateTime): number
        Equals(value: any): boolean
        Equals(value: DateTime): boolean
        IsDaylightSavingTime(): boolean
        ToBinary(): number
        GetHashCode(): number
        Subtract(value: DateTime): TimeSpan
        Subtract(value: TimeSpan): DateTime
        ToOADate(): number
        ToFileTime(): number
        ToFileTimeUtc(): number
        ToLocalTime(): DateTime
        ToLongDateString(): string
        ToLongTimeString(): string
        ToShortDateString(): string
        ToShortTimeString(): string
        ToString(): string
        ToString(format: string): string
        ToString(provider: IFormatProvider): string
        ToString(format: string, provider: IFormatProvider): string
        TryFormat(destination: Span<Char>, charsWritten: number, format: ReadOnlySpan<Char>, provider: IFormatProvider): boolean
        ToUniversalTime(): DateTime
        GetDateTimeFormats(): String[]
        GetDateTimeFormats(provider: IFormatProvider): String[]
        GetDateTimeFormats(format: Char): String[]
        GetDateTimeFormats(format: Char, provider: IFormatProvider): String[]
        GetTypeCode(): TypeCode
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
    }
}