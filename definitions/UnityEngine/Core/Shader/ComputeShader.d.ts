


declare module "UnityEngine" {
    import { IDisposable, IntPtr } from "System"
    import { LocalKeyword, LocalKeywordSpace } from "UnityEngine/Rendering"

    export enum ComputeBufferType {
        Default,
        Raw,
        Append,
        Counter,
        Constant,
        Structured,
        DrawIndirect,
        IndirectArguments,
        GPUMemory,
    }

    export enum ComputeBufferMode {
        Immutable,
        Dynamic,
        Circular,
        StreamOut,
        SubUpdates,
    }

    export class ComputeBuffer implements IDisposable {
        static CopyCount(src: ComputeBuffer, dst: ComputeBuffer, dstOffsetBytes: number): void
        count: number
        stride: number
        name: string
        constructor(count: number, stride: number)
        constructor(count: number, stride: number, type: ComputeBufferType)
        constructor(count: number, stride: number, type: ComputeBufferType, usage: ComputeBufferMode)
        Dispose(): void
        Release(): void
        IsValid(): boolean
        SetData(data: any[]): void
        SetData(data: any[], managedBufferStartIndex: number, computeBufferStartIndex: number, count: number): void
        GetData(data: any[]): void
        GetData(data: any[], managedBufferStartIndex: number, computeBufferStartIndex: number, count: number): void
        SetCounterValue(counterValue: number): void
        GetNativeBufferPtr(): IntPtr
    }

    export enum RenderTextureSubElement {
        Color,
        Depth,
        Stencil,
        Default,
    }

    export class ComputeShader extends Object {
        keywordSpace: LocalKeywordSpace
        shaderKeywords: String[]
        enabledKeywords: LocalKeyword[]
        FindKernel(name: string): number
        HasKernel(name: string): boolean
        SetFloat(nameID: number, val: number): void
        SetInt(nameID: number, val: number): void
        SetVector(nameID: number, val: Vector4): void
        SetMatrix(nameID: number, val: Matrix4x4): void
        SetVectorArray(nameID: number, values: Vector4[]): void
        SetMatrixArray(nameID: number, values: Matrix4x4[]): void
        SetTexture(kernelIndex: number, nameID: number, texture: Texture, mipLevel: number): void
        SetTextureFromGlobal(kernelIndex: number, nameID: number, globalTextureNameID: number): void
        SetBuffer(kernelIndex: number, nameID: number, buffer: ComputeBuffer): void
        SetBuffer(kernelIndex: number, nameID: number, buffer: GraphicsBuffer): void
        GetKernelThreadGroupSizes(kernelIndex: number, x: number, y: number, z: number): void
        Dispatch(kernelIndex: number, threadGroupsX: number, threadGroupsY: number, threadGroupsZ: number): void
        EnableKeyword(keyword: string): void
        DisableKeyword(keyword: string): void
        IsKeywordEnabled(keyword: string): boolean
        EnableKeyword(keyword: LocalKeyword): void
        DisableKeyword(keyword: LocalKeyword): void
        SetKeyword(keyword: LocalKeyword, value: boolean): void
        IsKeywordEnabled(keyword: LocalKeyword): boolean
        IsSupported(kernelIndex: number): boolean
        SetFloat(name: string, val: number): void
        SetInt(name: string, val: number): void
        SetVector(name: string, val: Vector4): void
        SetMatrix(name: string, val: Matrix4x4): void
        SetVectorArray(name: string, values: Vector4[]): void
        SetMatrixArray(name: string, values: Matrix4x4[]): void
        SetFloats(name: string, values: number[]): void
        SetFloats(nameID: number, values: number[]): void
        SetInts(name: string, values: number[]): void
        SetInts(nameID: number, values: number[]): void
        SetBool(name: string, val: boolean): void
        SetBool(nameID: number, val: boolean): void
        SetTexture(kernelIndex: number, nameID: number, texture: Texture): void
        SetTexture(kernelIndex: number, name: string, texture: Texture): void
        SetTexture(kernelIndex: number, name: string, texture: Texture, mipLevel: number): void
        SetTexture(kernelIndex: number, nameID: number, texture: RenderTexture, mipLevel: number, element: RenderTextureSubElement): void
        SetTexture(kernelIndex: number, name: string, texture: RenderTexture, mipLevel: number, element: RenderTextureSubElement): void
        SetTextureFromGlobal(kernelIndex: number, name: string, globalTextureName: string): void
        SetBuffer(kernelIndex: number, name: string, buffer: ComputeBuffer): void
        SetBuffer(kernelIndex: number, name: string, buffer: GraphicsBuffer): void
        SetConstantBuffer(nameID: number, buffer: ComputeBuffer, offset: number, size: number): void
        SetConstantBuffer(name: string, buffer: ComputeBuffer, offset: number, size: number): void
        SetConstantBuffer(nameID: number, buffer: GraphicsBuffer, offset: number, size: number): void
        SetConstantBuffer(name: string, buffer: GraphicsBuffer, offset: number, size: number): void
        DispatchIndirect(kernelIndex: number, argsBuffer: ComputeBuffer, argsOffset: number): void
        DispatchIndirect(kernelIndex: number, argsBuffer: ComputeBuffer): void
        DispatchIndirect(kernelIndex: number, argsBuffer: GraphicsBuffer, argsOffset: number): void
        DispatchIndirect(kernelIndex: number, argsBuffer: GraphicsBuffer): void
    }
}