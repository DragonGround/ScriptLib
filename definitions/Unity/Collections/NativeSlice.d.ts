



declare module "Unity/Collections" {
    import { IDisposable, IEquatable } from "System"
    import { IEnumerableAny, IEnumeratorAny } from "System/Collections"
    import { IEnumerator, IEnumerable } from "System/Collections/Generic"
    import { NativeArray } from "Unity/Collections"

    export class NativeSliceEnumerator<T> implements IEnumerator<T>, IEnumeratorAny, IDisposable {
        Current: T
        constructor(array: NativeSlice<T>)
        Dispose(): void
        MoveNext(): boolean
        Reset(): void
    }

    export class NativeSlice<T> implements IEnumerable<T>, IEnumerableAny, IEquatable<NativeSlice<T>> {
        Item: T
        Stride: number
        Length: number
        constructor(slice: NativeSlice<T>, start: number)
        constructor(slice: NativeSlice<T>, start: number, length: number)
        constructor(array: NativeArray<T>)
        constructor(array: NativeArray<T>, start: number)
        constructor(array: NativeArray<T>, start: number, length: number)
        CopyFrom(slice: NativeSlice<T>): void
        CopyFrom(array: T[]): void
        CopyTo(array: NativeArray<T>): void
        CopyTo(array: T[]): void
        ToArray(): T[]
        GetEnumerator(): NativeSliceEnumerator<T>
        Equals(other: NativeSlice<T>): boolean
        Equals(obj: any): boolean
        GetHashCode(): number
    }
}