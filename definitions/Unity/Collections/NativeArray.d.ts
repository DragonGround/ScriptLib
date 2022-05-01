


declare module "Unity/Collections" {
    import { IDisposable, IEquatable } from "System"
    import { IEnumerableAny, IEnumeratorAny } from "System/Collections"
    import { IEnumerable, IEnumerator } from "System/Collections/Generic"
    import { JobHandle } from "Unity/Jobs"

    export class NativeArrayEnumerator<T> implements IEnumerator<T>, IDisposable {
        Current: T
        constructor(array: NativeArray<T>)
        Dispose(): void
        MoveNext(): boolean
        Reset(): void
    }

    export class NativeArrayReadOnly<T> implements IEnumerable<T> {
        Length: number
        Item: T
        IsCreated: boolean
        CopyTo(array: T[]): void
        CopyTo(array: NativeArray<T>): void
        ToArray(): T[]
        GetEnumerator(): NativeArrayEnumerator<T>
    }

    export enum Allocator {
        Invalid,
        None,
        Temp,
        TempJob,
        Persistent,
        AudioKernel,
    }

    export enum NativeArrayOptions {
        UninitializedMemory,
        ClearMemory,
    }

    export class NativeArray<T> implements IEnumerable<T>, IEnumerableAny, IDisposable, IEquatable<NativeArray<T>> {
        static Copy<T>(src: NativeArray<T>, dst: NativeArray<T>): void
        static Copy<T>(src: NativeArrayReadOnly<T>, dst: NativeArray<T>): void
        static Copy<T>(src: T[], dst: NativeArray<T>): void
        static Copy<T>(src: NativeArray<T>, dst: T[]): void
        static Copy<T>(src: NativeArrayReadOnly<T>, dst: T[]): void
        static Copy<T>(src: NativeArray<T>, dst: NativeArray<T>, length: number): void
        static Copy<T>(src: NativeArrayReadOnly<T>, dst: NativeArray<T>, length: number): void
        static Copy<T>(src: T[], dst: NativeArray<T>, length: number): void
        static Copy<T>(src: NativeArray<T>, dst: T[], length: number): void
        static Copy<T>(src: NativeArrayReadOnly<T>, dst: T[], length: number): void
        static Copy<T>(src: NativeArray<T>, srcIndex: number, dst: NativeArray<T>, dstIndex: number, length: number): void
        static Copy<T>(src: NativeArrayReadOnly<T>, srcIndex: number, dst: NativeArray<T>, dstIndex: number, length: number): void
        static Copy<T>(src: T[], srcIndex: number, dst: NativeArray<T>, dstIndex: number, length: number): void
        static Copy<T>(src: NativeArray<T>, srcIndex: number, dst: T[], dstIndex: number, length: number): void
        static Copy<T>(src: NativeArrayReadOnly<T>, srcIndex: number, dst: T[], dstIndex: number, length: number): void
        Length: number
        Item: T
        IsCreated: boolean
        constructor(length: number, allocator: Allocator, options: NativeArrayOptions)
        constructor(array: T[], allocator: Allocator)
        constructor(array: NativeArray<T>, allocator: Allocator)
        Dispose(): void
        Dispose(inputDeps: JobHandle): JobHandle
        CopyFrom(array: T[]): void
        CopyFrom(array: NativeArray<T>): void
        CopyTo(array: T[]): void
        CopyTo(array: NativeArray<T>): void
        ToArray(): T[]
        GetEnumerator(): NativeArrayEnumerator<T>
        Equals(other: NativeArray<T>): boolean
        Equals(obj: any): boolean
        GetHashCode(): number
        GetSubArray(start: number, length: number): NativeArray<T>
        AsReadOnly(): NativeArrayReadOnly<T>
    }
}