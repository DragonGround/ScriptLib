import { MethodInfo } from "System/Reflection"
import { ISerializable, SerializationInfo, StreamingContext } from "System/Runtime/Serialization"

declare module "System" {
    export interface IFormattable {
        ToString(format: string, formatProvider: IFormatProvider): string
    }

    export interface IFormatProvider {
        GetFormat(formatType: Type): any
    }

    export interface IEquatable<T> {
        Equals(other: T): boolean
    }

    export interface ISpanFormattable {
        TryFormat(destination: Span<Char>, charsWritten: number, format: ReadOnlySpan<Char>, provider: IFormatProvider): boolean
    }

    export interface IComparableAny {
        CompareTo(obj: any): number
    }

    export interface IComparable<T> {
        CompareTo(other: T): number
    }

    export interface ICloneable {
        Clone(): any
    }

    export class Delegate implements ISerializable, ICloneable {
        static CreateDelegate(type: Type, firstArgument: any, method: MethodInfo, throwOnBindFailure: boolean): Delegate
        static CreateDelegate(type: Type, firstArgument: any, method: MethodInfo): Delegate
        static CreateDelegate(type: Type, method: MethodInfo, throwOnBindFailure: boolean): Delegate
        static CreateDelegate(type: Type, method: MethodInfo): Delegate
        static CreateDelegate(type: Type, target: any, method: string): Delegate
        static CreateDelegate(type: Type, target: Type, method: string, ignoreCase: boolean, throwOnBindFailure: boolean): Delegate
        static CreateDelegate(type: Type, target: Type, method: string): Delegate
        static CreateDelegate(type: Type, target: Type, method: string, ignoreCase: boolean): Delegate
        static CreateDelegate(type: Type, target: any, method: string, ignoreCase: boolean, throwOnBindFailure: boolean): Delegate
        static CreateDelegate(type: Type, target: any, method: string, ignoreCase: boolean): Delegate
        static Combine(a: Delegate, b: Delegate): Delegate
        static Combine(delegates: Delegate[]): Delegate
        static Remove(source: Delegate, value: Delegate): Delegate
        static RemoveAll(source: Delegate, value: Delegate): Delegate
        Method: MethodInfo
        Target: any
        DynamicInvoke(args: Object[]): any
        Clone(): any
        Equals(obj: any): boolean
        GetHashCode(): number
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
        GetInvocationList(): Delegate[]
    }

    export class MulticastDelegate extends Delegate implements ISerializable, ICloneable {
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
        Equals(obj: any): boolean
        GetHashCode(): number
        GetInvocationList(): Delegate[]
    }

    export interface IAsyncResult {
        IsCompleted: boolean
        AsyncWaitHandle: any // WaitHandle
        AsyncState: any
        CompletedSynchronously: boolean
    }

    export class AsyncCallback extends MulticastDelegate implements ISerializable, ICloneable {
        constructor(object: any, method: IntPtr)
        Invoke(ar: IAsyncResult): void
        BeginInvoke(ar: IAsyncResult, callback: AsyncCallback, object: any): IAsyncResult
        EndInvoke(result: IAsyncResult): void
    }

    export class Version implements ICloneable, ISpanFormattable, IComparableAny, IComparable<Version>, IEquatable<Version> {
        static Parse(input: string): Version
        static Parse(input: ReadOnlySpan<Char>): Version
        static TryParse(input: string, result: Version): boolean
        static TryParse(input: ReadOnlySpan<Char>, result: Version): boolean
        Major: number
        Minor: number
        Build: number
        Revision: number
        MajorRevision: number
        MinorRevision: number
        constructor(major: number, minor: number, build: number, revision: number)
        constructor(major: number, minor: number, build: number)
        constructor(major: number, minor: number)
        constructor(version: string)
        constructor()
        Clone(): any
        CompareTo(version: any): number
        CompareTo(value: Version): number
        Equals(obj: any): boolean
        Equals(obj: Version): boolean
        GetHashCode(): number
        ToString(): string
        ToString(fieldCount: number): string
        TryFormat(destination: Span<Char>, charsWritten: number): boolean
        TryFormat(destination: Span<Char>, fieldCount: number, charsWritten: number): boolean
    }

    export interface IDisposable {
        Dispose(): void
    }

    export class Comparison<T> extends MulticastDelegate implements ISerializable, ICloneable {
        constructor(object: any, method: IntPtr)
        Invoke(x: T, y: T): number
        BeginInvoke(x: T, y: T, callback: AsyncCallback, object: any): IAsyncResult
        EndInvoke(result: IAsyncResult): number
    }
}