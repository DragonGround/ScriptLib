declare module "System" {
    export interface SpanEnumerator<T> {
        Current: T
        MoveNext(): boolean
    }

    export class Span<T> {
        static Empty: Span<any>
        Item: T
        Length: number
        IsEmpty: boolean
        constructor(array: T[])
        constructor(array: T[], start: number, length: number)
        constructor(pointer: any, length: number)
        GetPinnableReference(): T
        Clear(): void
        Fill(value: T): void
        CopyTo(destination: Span<T>): void
        TryCopyTo(destination: Span<T>): boolean
        ToString(): string
        Slice(start: number): Span<T>
        Slice(start: number, length: number): Span<T>
        ToArray(): T[]
        Equals(obj: any): boolean
        GetHashCode(): number
        GetEnumerator(): SpanEnumerator<T>
    }
}