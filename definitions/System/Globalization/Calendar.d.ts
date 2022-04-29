

declare module "System/Globalization" {
    import { DateTime, DayOfWeek, ICloneable } from "System"

    export enum CalendarAlgorithmType {
        Unknown,
        SolarCalendar,
        LunarCalendar,
        LunisolarCalendar,
    }

    export enum CalendarWeekRule {
        FirstDay,
        FirstFullWeek,
        FirstFourDayWeek,
    }

    export class Calendar implements ICloneable {
        static CurrentEra: number
        static ReadOnly(calendar: Calendar): Calendar
        MinSupportedDateTime: DateTime
        MaxSupportedDateTime: DateTime
        AlgorithmType: CalendarAlgorithmType
        IsReadOnly: boolean
        Eras: number[]
        TwoDigitYearMax: number
        Clone(): any
        AddMilliseconds(time: DateTime, milliseconds: number): DateTime
        AddDays(time: DateTime, days: number): DateTime
        AddHours(time: DateTime, hours: number): DateTime
        AddMinutes(time: DateTime, minutes: number): DateTime
        AddMonths(time: DateTime, months: number): DateTime
        AddSeconds(time: DateTime, seconds: number): DateTime
        AddWeeks(time: DateTime, weeks: number): DateTime
        AddYears(time: DateTime, years: number): DateTime
        GetDayOfMonth(time: DateTime): number
        GetDayOfWeek(time: DateTime): DayOfWeek
        GetDayOfYear(time: DateTime): number
        GetDaysInMonth(year: number, month: number): number
        GetDaysInMonth(year: number, month: number, era: number): number
        GetDaysInYear(year: number): number
        GetDaysInYear(year: number, era: number): number
        GetEra(time: DateTime): number
        GetHour(time: DateTime): number
        GetMilliseconds(time: DateTime): number
        GetMinute(time: DateTime): number
        GetMonth(time: DateTime): number
        GetMonthsInYear(year: number): number
        GetMonthsInYear(year: number, era: number): number
        GetSecond(time: DateTime): number
        GetWeekOfYear(time: DateTime, rule: CalendarWeekRule, firstDayOfWeek: DayOfWeek): number
        GetYear(time: DateTime): number
        IsLeapDay(year: number, month: number, day: number): boolean
        IsLeapDay(year: number, month: number, day: number, era: number): boolean
        IsLeapMonth(year: number, month: number): boolean
        IsLeapMonth(year: number, month: number, era: number): boolean
        GetLeapMonth(year: number): number
        GetLeapMonth(year: number, era: number): number
        IsLeapYear(year: number): boolean
        IsLeapYear(year: number, era: number): boolean
        ToDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number): DateTime
        ToDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, era: number): DateTime
        ToFourDigitYear(year: number): number
    }
}