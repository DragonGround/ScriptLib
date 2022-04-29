

declare module "System/Globalization" {
    import { Byte, Char, Guid, IEquatable } from "System"
    import { Assembly } from "System/Reflection"
    import { IDeserializationCallback } from "System/Runtime/Serialization"

    export class SortVersion implements IEquatable<SortVersion> {
        FullVersion: number
        SortId: Guid
        constructor(fullVersion: number, sortId: Guid)
        Equals(obj: any): boolean
        Equals(other: SortVersion): boolean
        GetHashCode(): number
    }

    export enum CompareOptions {
        None,
        IgnoreCase,
        IgnoreNonSpace,
        IgnoreSymbols,
        IgnoreKanaType,
        IgnoreWidth,
        OrdinalIgnoreCase,
        StringSort,
        Ordinal,
    }

    export class SortKey {
        static Compare(sortkey1: SortKey, sortkey2: SortKey): number
        OriginalString: string
        KeyData: Byte[]
        Equals(value: any): boolean
        GetHashCode(): number
        ToString(): string
    }

    export class CompareInfo implements IDeserializationCallback {
        static GetCompareInfo(culture: number, assembly: Assembly): CompareInfo
        static GetCompareInfo(name: string, assembly: Assembly): CompareInfo
        static GetCompareInfo(culture: number): CompareInfo
        static GetCompareInfo(name: string): CompareInfo
        static IsSortable(ch: Char): boolean
        static IsSortable(text: string): boolean
        Name: string
        Version: SortVersion
        LCID: number
        Compare(string1: string, string2: string): number
        Compare(string1: string, string2: string, options: CompareOptions): number
        Compare(string1: string, offset1: number, length1: number, string2: string, offset2: number, length2: number): number
        Compare(string1: string, offset1: number, string2: string, offset2: number, options: CompareOptions): number
        Compare(string1: string, offset1: number, string2: string, offset2: number): number
        Compare(string1: string, offset1: number, length1: number, string2: string, offset2: number, length2: number, options: CompareOptions): number
        IsPrefix(source: string, prefix: string, options: CompareOptions): boolean
        IsPrefix(source: string, prefix: string): boolean
        IsSuffix(source: string, suffix: string, options: CompareOptions): boolean
        IsSuffix(source: string, suffix: string): boolean
        IndexOf(source: string, value: Char): number
        IndexOf(source: string, value: string): number
        IndexOf(source: string, value: Char, options: CompareOptions): number
        IndexOf(source: string, value: string, options: CompareOptions): number
        IndexOf(source: string, value: Char, startIndex: number): number
        IndexOf(source: string, value: string, startIndex: number): number
        IndexOf(source: string, value: Char, startIndex: number, options: CompareOptions): number
        IndexOf(source: string, value: string, startIndex: number, options: CompareOptions): number
        IndexOf(source: string, value: Char, startIndex: number, count: number): number
        IndexOf(source: string, value: string, startIndex: number, count: number): number
        IndexOf(source: string, value: Char, startIndex: number, count: number, options: CompareOptions): number
        IndexOf(source: string, value: string, startIndex: number, count: number, options: CompareOptions): number
        LastIndexOf(source: string, value: Char): number
        LastIndexOf(source: string, value: string): number
        LastIndexOf(source: string, value: Char, options: CompareOptions): number
        LastIndexOf(source: string, value: string, options: CompareOptions): number
        LastIndexOf(source: string, value: Char, startIndex: number): number
        LastIndexOf(source: string, value: string, startIndex: number): number
        LastIndexOf(source: string, value: Char, startIndex: number, options: CompareOptions): number
        LastIndexOf(source: string, value: string, startIndex: number, options: CompareOptions): number
        LastIndexOf(source: string, value: Char, startIndex: number, count: number): number
        LastIndexOf(source: string, value: string, startIndex: number, count: number): number
        LastIndexOf(source: string, value: Char, startIndex: number, count: number, options: CompareOptions): number
        LastIndexOf(source: string, value: string, startIndex: number, count: number, options: CompareOptions): number
        GetSortKey(source: string, options: CompareOptions): SortKey
        GetSortKey(source: string): SortKey
        Equals(value: any): boolean
        GetHashCode(): number
        GetHashCode(source: string, options: CompareOptions): number
        ToString(): string
        OnDeserialization(sender: any): void
    }
}