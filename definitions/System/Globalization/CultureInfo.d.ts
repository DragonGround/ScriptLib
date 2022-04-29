

declare module "System/Globalization" {
    import { ICloneable, IFormatProvider, Type } from "System"

    export enum CultureTypes {
        NeutralCultures,
        SpecificCultures,
        InstalledWin32Cultures,
        AllCultures,
        UserCustomCulture,
        ReplacementCultures,
        WindowsOnlyCultures,
        FrameworkCultures,
    }
    
    export class CultureInfo implements ICloneable, IFormatProvider {
        static InvariantCulture: CultureInfo
        static CurrentCulture: CultureInfo
        static CurrentUICulture: CultureInfo
        static InstalledUICulture: CultureInfo
        static DefaultThreadCurrentCulture: CultureInfo
        static DefaultThreadCurrentUICulture: CultureInfo
        static GetCultures(types: CultureTypes): CultureInfo[]
        static ReadOnly(ci: CultureInfo): CultureInfo
        static GetCultureInfo(culture: number): CultureInfo
        static GetCultureInfo(name: string): CultureInfo
        static GetCultureInfo(name: string, altName: string): CultureInfo
        static GetCultureInfoByIetfLanguageTag(name: string): CultureInfo
        static CreateSpecificCulture(name: string): CultureInfo
        CultureTypes: CultureTypes
        IetfLanguageTag: string
        KeyboardLayoutId: number
        LCID: number
        Name: string
        NativeName: string
        Calendar: Calendar
        OptionalCalendars: Calendar[]
        Parent: CultureInfo
        TextInfo: TextInfo
        ThreeLetterISOLanguageName: string
        ThreeLetterWindowsLanguageName: string
        TwoLetterISOLanguageName: string
        UseUserOverride: boolean
        CompareInfo: CompareInfo
        IsNeutralCulture: boolean
        NumberFormat: NumberFormatInfo
        DateTimeFormat: DateTimeFormatInfo
        DisplayName: string
        EnglishName: string
        IsReadOnly: boolean
        constructor(culture: number)
        constructor(culture: number, useUserOverride: boolean)
        constructor(name: string)
        constructor(name: string, useUserOverride: boolean)
        GetConsoleFallbackUICulture(): CultureInfo
        ClearCachedData(): void
        Clone(): any
        Equals(value: any): boolean
        GetHashCode(): number
        ToString(): string
        GetFormat(formatType: Type): any
    }
}