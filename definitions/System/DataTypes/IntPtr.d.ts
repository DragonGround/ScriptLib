

declare module "System" {
    import { ISerializable, SerializationInfo, StreamingContext } from "System/Runtime/Serialization"

    export class IntPtr implements ISerializable, IEquatable<IntPtr> {
        static Size: number
        static Zero: IntPtr
        static Add(pointer: IntPtr, offset: number): IntPtr
        static Subtract(pointer: IntPtr, offset: number): IntPtr
        constructor(value: number)
        constructor(value: number)
        constructor(value: any)
        Equals(obj: any): boolean
        GetHashCode(): number
        ToInt32(): number
        ToInt64(): number
        ToPointer(): any
        ToString(): string
        ToString(format: string): string
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
    }
}