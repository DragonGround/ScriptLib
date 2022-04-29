

declare module "System/Globalization" {
    import { ICloneable, IFormatProvider, Type } from "System"
    
    export enum DigitShapes {
        Context,
        None,
        NativeNational,
    }

    export class NumberFormatInfo implements ICloneable, IFormatProvider {
        static InvariantInfo: NumberFormatInfo
        static CurrentInfo: NumberFormatInfo
        static GetInstance(formatProvider: IFormatProvider): NumberFormatInfo
        static ReadOnly(nfi: NumberFormatInfo): NumberFormatInfo
        CurrencyDecimalDigits: number
        CurrencyDecimalSeparator: string
        IsReadOnly: boolean
        CurrencyGroupSizes: number[]
        NumberGroupSizes: number[]
        PercentGroupSizes: number[]
        CurrencyGroupSeparator: string
        CurrencySymbol: string
        NaNSymbol: string
        CurrencyNegativePattern: number
        NumberNegativePattern: number
        PercentPositivePattern: number
        PercentNegativePattern: number
        NegativeInfinitySymbol: string
        NegativeSign: string
        NumberDecimalDigits: number
        NumberDecimalSeparator: string
        NumberGroupSeparator: string
        CurrencyPositivePattern: number
        PositiveInfinitySymbol: string
        PositiveSign: string
        PercentDecimalDigits: number
        PercentDecimalSeparator: string
        PercentGroupSeparator: string
        PercentSymbol: string
        PerMilleSymbol: string
        NativeDigits: String[]
        DigitSubstitution: DigitShapes
        constructor()
        Clone(): any
        GetFormat(formatType: Type): any
    }
}