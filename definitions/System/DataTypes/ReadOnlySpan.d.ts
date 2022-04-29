declare module "System" {
    export class ReadOnlySpan<T> {
        static Empty: ReadOnlySpan<any>
        Item: T
        Length: number
        IsEmpty: boolean
        constructor(array: T[])
        constructor(array: T[], start: number, length: number)
        constructor(pointer: any, length: number)
        GetPinnableReference(): T
        CopyTo(destination: Span<T>): void
        TryCopyTo(destination: Span<T>): boolean
        ToString(): string
        Slice(start: number): ReadOnlySpan<T>
        Slice(start: number, length: number): ReadOnlySpan<T>
        ToArray(): T[]
        Equals(obj: any): boolean
        GetHashCode(): number
        GetEnumerator(): SpanEnumerator<T>
    }
}