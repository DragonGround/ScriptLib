

declare module "System/Globalization" {
    import { Char, ICloneable } from "System"
    import { IDeserializationCallback } from "System/Runtime/Serialization"

    export class TextInfo implements IDeserializationCallback, ICloneable {
        static ReadOnly(textInfo: TextInfo): TextInfo
        ANSICodePage: number
        OEMCodePage: number
        MacCodePage: number
        EBCDICCodePage: number
        LCID: number
        CultureName: string
        IsReadOnly: boolean
        ListSeparator: string
        IsRightToLeft: boolean
        Clone(): any
        ToLower(c: Char): Char
        ToLower(str: string): string
        ToUpper(c: Char): Char
        ToUpper(str: string): string
        Equals(obj: any): boolean
        GetHashCode(): number
        ToString(): string
        ToTitleCase(str: string): string
        OnDeserialization(sender: any): void
    }
}