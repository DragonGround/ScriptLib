

declare module "System/Globalization" {
    import { ICloneable, IFormatProvider, DayOfWeek, Type, Char } from "System"


    export class DateTimeFormatInfo implements ICloneable, IFormatProvider {
        static InvariantInfo: DateTimeFormatInfo
        static CurrentInfo: DateTimeFormatInfo
        static GetInstance(provider: IFormatProvider): DateTimeFormatInfo
        static ReadOnly(dtfi: DateTimeFormatInfo): DateTimeFormatInfo
        AMDesignator: string
        Calendar: Calendar
        DateSeparator: string
        FirstDayOfWeek: DayOfWeek
        CalendarWeekRule: CalendarWeekRule
        FullDateTimePattern: string
        LongDatePattern: string
        LongTimePattern: string
        MonthDayPattern: string
        PMDesignator: string
        RFC1123Pattern: string
        ShortDatePattern: string
        ShortTimePattern: string
        SortableDateTimePattern: string
        TimeSeparator: string
        UniversalSortableDateTimePattern: string
        YearMonthPattern: string
        AbbreviatedDayNames: String[]
        ShortestDayNames: String[]
        DayNames: String[]
        AbbreviatedMonthNames: String[]
        MonthNames: String[]
        IsReadOnly: boolean
        NativeCalendarName: string
        AbbreviatedMonthGenitiveNames: String[]
        MonthGenitiveNames: String[]
        constructor()
        GetFormat(formatType: Type): any
        Clone(): any
        GetEra(eraName: string): number
        GetEraName(era: number): string
        GetAbbreviatedEraName(era: number): string
        GetAbbreviatedDayName(dayofweek: DayOfWeek): string
        GetShortestDayName(dayOfWeek: DayOfWeek): string
        GetAllDateTimePatterns(): String[]
        GetAllDateTimePatterns(format: Char): String[]
        GetDayName(dayofweek: DayOfWeek): string
        GetAbbreviatedMonthName(month: number): string
        GetMonthName(month: number): string
        SetAllDateTimePatterns(patterns: String[], format: Char): void
    }
}