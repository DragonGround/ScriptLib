

declare module "System" {
    import { ISerializable, SerializationInfo, StreamingContext } from "System/Runtime/Serialization"
    
    export class RuntimeFieldHandle implements ISerializable {
        Value: IntPtr
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
        Equals(obj: any): boolean
        Equals(handle: RuntimeFieldHandle): boolean
        GetHashCode(): number
    }

    export class RuntimeTypeHandle implements ISerializable {
        Value: IntPtr
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
        Equals(obj: any): boolean
        Equals(handle: RuntimeTypeHandle): boolean
        GetHashCode(): number
        GetModuleHandle(): ModuleHandle
    }

    export class ModuleHandle {
        static EmptyHandle: ModuleHandle
        MDStreamVersion: number
        ResolveFieldHandle(fieldToken: number): RuntimeFieldHandle
        ResolveMethodHandle(methodToken: number): RuntimeMethodHandle
        ResolveTypeHandle(typeToken: number): RuntimeTypeHandle
        ResolveTypeHandle(typeToken: number, typeInstantiationContext: RuntimeTypeHandle[], methodInstantiationContext: RuntimeTypeHandle[]): RuntimeTypeHandle
        ResolveMethodHandle(methodToken: number, typeInstantiationContext: RuntimeTypeHandle[], methodInstantiationContext: RuntimeTypeHandle[]): RuntimeMethodHandle
        ResolveFieldHandle(fieldToken: number, typeInstantiationContext: RuntimeTypeHandle[], methodInstantiationContext: RuntimeTypeHandle[]): RuntimeFieldHandle
        GetRuntimeFieldHandleFromMetadataToken(fieldToken: number): RuntimeFieldHandle
        GetRuntimeMethodHandleFromMetadataToken(methodToken: number): RuntimeMethodHandle
        GetRuntimeTypeHandleFromMetadataToken(typeToken: number): RuntimeTypeHandle
        Equals(obj: any): boolean
        Equals(handle: ModuleHandle): boolean
        GetHashCode(): number
    }

    export class RuntimeMethodHandle implements ISerializable {
        Value: IntPtr
        GetObjectData(info: SerializationInfo, context: StreamingContext): void
        GetFunctionPointer(): IntPtr
        Equals(obj: any): boolean
        Equals(handle: RuntimeMethodHandle): boolean
        GetHashCode(): number
    }
}