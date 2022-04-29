

declare module "UnityEngine" {
    import { IDisposable, IEquatable } from "System"

    export enum Target {
        Vertex,
        Index,
        CopySource,
        CopyDestination,
        Structured,
        Raw,
        Append,
        Counter,
        IndirectArguments,
        Constant,
    }

    export enum UsageFlags {
        None,
        LockBufferForWrite,
    }

    export class GraphicsBufferHandle implements IEquatable<GraphicsBufferHandle> {
        value: number
        GetHashCode(): number
        Equals(obj: any): boolean
        Equals(other: GraphicsBufferHandle): boolean
        CompareTo(other: GraphicsBufferHandle): number
    }

    export class GraphicsBuffer implements IDisposable {
        static CopyCount(src: ComputeBuffer, dst: ComputeBuffer, dstOffsetBytes: number): void
        static CopyCount(src: GraphicsBuffer, dst: ComputeBuffer, dstOffsetBytes: number): void
        static CopyCount(src: ComputeBuffer, dst: GraphicsBuffer, dstOffsetBytes: number): void
        static CopyCount(src: GraphicsBuffer, dst: GraphicsBuffer, dstOffsetBytes: number): void
        count: number
        stride: number
        target: Target
        usageFlags: UsageFlags
        bufferHandle: GraphicsBufferHandle
        name: string
        constructor(target: Target, count: number, stride: number)
        constructor(target: Target, usageFlags: UsageFlags, count: number, stride: number)
        Dispose(): void
        Release(): void
        IsValid(): boolean
        SetData(data: any[]): void
        SetData(data: any[], managedBufferStartIndex: number, graphicsBufferStartIndex: number, count: number): void
        GetData(data: any[]): void
        GetData(data: any[], managedBufferStartIndex: number, computeBufferStartIndex: number, count: number): void
        GetNativeBufferPtr(): any
        SetCounterValue(counterValue: number): void
    }
}