


declare module "UnityEngine/Rendering" {
    import { MeshTopology } from "UnityEngine"
    import { RendererList } from "UnityEngine/Rendering/RendererUtils"
    import { IDisposable, Single, Int32, IntPtr, IEquatable } from "System"
    import { List } from "System/Collections/Generic"
    import { NativeArray, NativeSlice } from "Unity/Collections"
    import { ComputeBuffer, GraphicsBuffer, Texture, TextureFormat, ComputeShader, Vector4, Matrix4x4, Rect, FilterMode, Color, Material, RenderTextureSubElement, Vector3, Camera, RenderTexture, Mesh, MaterialPropertyBlock, Renderer, RectInt, Vector2, RenderBuffer, RenderTextureDescriptor, RenderTextureFormat, RenderTextureMemoryless, RenderTextureReadWrite, RenderTargetSetup } from "UnityEngine"
    import { GraphicsFormat } from "UnityEngine/Experimental/Rendering"

    export enum BuiltinRenderTextureType {
        PropertyName,
        BufferPtr,
        RenderTexture,
        BindableTexture,
        None,
        CurrentActive,
        CameraTarget,
        Depth,
        DepthNormals,
        ResolvedDepth,
        PrepassNormalsSpec,
        PrepassLight,
        PrepassLightSpec,
        GBuffer0,
        GBuffer1,
        GBuffer2,
        GBuffer3,
        Reflections,
        MotionVectors,
        GBuffer4,
        GBuffer5,
        GBuffer6,
        GBuffer7,
    }

    export class RenderTargetIdentifier implements IEquatable<RenderTargetIdentifier> {
        static AllDepthSlices: number
        constructor(type: BuiltinRenderTextureType)
        constructor(type: BuiltinRenderTextureType, mipLevel: number, cubeFace: CubemapFace, depthSlice: number)
        constructor(name: string)
        constructor(name: string, mipLevel: number, cubeFace: CubemapFace, depthSlice: number)
        constructor(nameID: number)
        constructor(nameID: number, mipLevel: number, cubeFace: CubemapFace, depthSlice: number)
        constructor(renderTargetIdentifier: RenderTargetIdentifier, mipLevel: number, cubeFace: CubemapFace, depthSlice: number)
        constructor(tex: Texture)
        constructor(tex: Texture, mipLevel: number, cubeFace: CubemapFace, depthSlice: number)
        constructor(buf: RenderBuffer, mipLevel: number, cubeFace: CubemapFace, depthSlice: number)
        ToString(): string
        GetHashCode(): number
        Equals(rhs: RenderTargetIdentifier): boolean
        Equals(obj: any): boolean
    }

    export class AsyncGPUReadbackRequest {
        done: boolean
        hasError: boolean
        layerCount: number
        layerDataSize: number
        width: number
        height: number
        depth: number
        Update(): void
        WaitForCompletion(): void
        GetData<T>(layer: number): NativeArray<T>
    }

    export enum RTClearFlags {
        None,
        Color,
        Depth,
        Stencil,
        All,
        DepthStencil,
        ColorDepth,
        ColorStencil,
    }

    export class GlobalKeyword {
        static Create(name: string): GlobalKeyword
        name: string
        constructor(name: string)
        ToString(): string
    }

    export enum CommandBufferExecutionFlags {
        None,
        AsyncCompute,
    }

    export enum CameraLateLatchMatrixType {
        View,
        InverseView,
        ViewProjection,
        InverseViewProjection,
    }

    export enum RenderBufferLoadAction {
        Load,
        Clear,
        DontCare,
    }

    export enum RenderBufferStoreAction {
        Store,
        Resolve,
        StoreAndResolve,
        DontCare,
    }

    export enum RenderTargetFlags {
        None,
        ReadOnlyDepth,
        ReadOnlyStencil,
        ReadOnlyDepthStencil,
    }

    export class RenderTargetBinding {
        colorRenderTargets: RenderTargetIdentifier[]
        depthRenderTarget: RenderTargetIdentifier
        colorLoadActions: RenderBufferLoadAction[]
        colorStoreActions: RenderBufferStoreAction[]
        depthLoadAction: RenderBufferLoadAction
        depthStoreAction: RenderBufferStoreAction
        flags: RenderTargetFlags
        constructor(colorRenderTargets: RenderTargetIdentifier[], colorLoadActions: RenderBufferLoadAction[], colorStoreActions: RenderBufferStoreAction[], depthRenderTarget: RenderTargetIdentifier, depthLoadAction: RenderBufferLoadAction, depthStoreAction: RenderBufferStoreAction)
        constructor(colorRenderTarget: RenderTargetIdentifier, colorLoadAction: RenderBufferLoadAction, colorStoreAction: RenderBufferStoreAction, depthRenderTarget: RenderTargetIdentifier, depthLoadAction: RenderBufferLoadAction, depthStoreAction: RenderBufferStoreAction)
        constructor(setup: RenderTargetSetup)
    }

    export class GraphicsFence {
        passed: boolean
    }

    export enum SynchronisationStage {
        VertexProcessing,
        PixelProcessing,
    }

    export enum SynchronisationStageFlags {
        VertexProcessing,
        PixelProcessing,
        ComputeProcessing,
        AllGPUOperations,
    }

    export enum GraphicsFenceType {
        AsyncQueueSynchronisation,
        CPUSynchronisation,
    }

    export enum SinglePassStereoMode {
        None,
        SideBySide,
        Instancing,
        Multiview,
    }

    export class CommandBuffer implements IDisposable {
        name: string
        sizeInBytes: number
        constructor()
        ConvertTexture(src: RenderTargetIdentifier, dst: RenderTargetIdentifier): void
        ConvertTexture(src: RenderTargetIdentifier, srcElement: number, dst: RenderTargetIdentifier, dstElement: number): void
        WaitAllAsyncReadbackRequests(): void
        RequestAsyncReadback(src: ComputeBuffer, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: GraphicsBuffer, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: ComputeBuffer, size: number, offset: number, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: GraphicsBuffer, size: number, offset: number, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: Texture, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: Texture, mipIndex: number, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: Texture, mipIndex: number, dstFormat: TextureFormat, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: Texture, mipIndex: number, dstFormat: GraphicsFormat, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, dstFormat: TextureFormat, callback: (a: AsyncGPUReadbackRequest) => void): void
        RequestAsyncReadback(src: Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, dstFormat: GraphicsFormat, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: ComputeBuffer, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: ComputeBuffer, size: number, offset: number, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: GraphicsBuffer, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: GraphicsBuffer, size: number, offset: number, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: Texture, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: Texture, mipIndex: number, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: Texture, mipIndex: number, dstFormat: TextureFormat, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: Texture, mipIndex: number, dstFormat: GraphicsFormat, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, dstFormat: TextureFormat, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeArray<T>(output: NativeArray`1, src: Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, dstFormat: GraphicsFormat, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: ComputeBuffer, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: ComputeBuffer, size: number, offset: number, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: GraphicsBuffer, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: GraphicsBuffer, size: number, offset: number, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: Texture, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: Texture, mipIndex: number, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: Texture, mipIndex: number, dstFormat: TextureFormat, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: Texture, mipIndex: number, dstFormat: GraphicsFormat, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, callback: (a: AsyncGPUReadbackRequest) => void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, dstFormat: TextureFormat, callback: (a: AsyncGPUReadbackRequest)=>void): void
        // RequestAsyncReadbackIntoNativeSlice<T>(output: NativeSlice`1, src: Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, dstFormat: GraphicsFormat, callback: (a: AsyncGPUReadbackRequest) => void): void
        SetInvertCulling(invertCulling: boolean): void
        SetComputeFloatParam(computeShader: ComputeShader, nameID: number, val: number): void
        SetComputeIntParam(computeShader: ComputeShader, nameID: number, val: number): void
        SetComputeVectorParam(computeShader: ComputeShader, nameID: number, val: Vector4): void
        SetComputeVectorArrayParam(computeShader: ComputeShader, nameID: number, values: Vector4[]): void
        SetComputeMatrixParam(computeShader: ComputeShader, nameID: number, val: Matrix4x4): void
        SetComputeMatrixArrayParam(computeShader: ComputeShader, nameID: number, values: Matrix4x4[]): void
        // SetRayTracingShaderPass(rayTracingShader: RayTracingShader, passName: string): void
        Clear(): void
        ClearRandomWriteTargets(): void
        SetViewport(pixelRect: Rect): void
        EnableScissorRect(scissor: Rect): void
        DisableScissorRect(): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean, memorylessMode: RenderTextureMemoryless, useDynamicScale: boolean): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean, memorylessMode: RenderTextureMemoryless): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: GraphicsFormat, antiAliasing: number): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: GraphicsFormat): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat, readWrite: RenderTextureReadWrite, antiAliasing: number, enableRandomWrite: boolean, memorylessMode: RenderTextureMemoryless, useDynamicScale: boolean): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat, readWrite: RenderTextureReadWrite, antiAliasing: number, enableRandomWrite: boolean, memorylessMode: RenderTextureMemoryless): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat, readWrite: RenderTextureReadWrite, antiAliasing: number, enableRandomWrite: boolean): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat, readWrite: RenderTextureReadWrite, antiAliasing: number): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat, readWrite: RenderTextureReadWrite): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: FilterMode): void
        GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number): void
        GetTemporaryRT(nameID: number, width: number, height: number): void
        GetTemporaryRT(nameID: number, desc: RenderTextureDescriptor, filter: FilterMode): void
        GetTemporaryRT(nameID: number, desc: RenderTextureDescriptor): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: FilterMode, format: GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean, useDynamicScale: boolean): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: FilterMode, format: GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: FilterMode, format: GraphicsFormat, antiAliasing: number): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: FilterMode, format: GraphicsFormat): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat, readWrite: RenderTextureReadWrite, antiAliasing: number, enableRandomWrite: boolean): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat, readWrite: RenderTextureReadWrite, antiAliasing: number): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat, readWrite: RenderTextureReadWrite): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: FilterMode, format: RenderTextureFormat): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: FilterMode): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number, depthBuffer: number): void
        GetTemporaryRTArray(nameID: number, width: number, height: number, slices: number): void
        ReleaseTemporaryRT(nameID: number): void
        ClearRenderTarget(clearFlags: RTClearFlags, backgroundColor: Color, depth: number, stencil: number): void
        ClearRenderTarget(clearDepth: boolean, clearColor: boolean, backgroundColor: Color): void
        ClearRenderTarget(clearDepth: boolean, clearColor: boolean, backgroundColor: Color, depth: number): void
        SetGlobalFloat(nameID: number, value: number): void
        SetGlobalInt(nameID: number, value: number): void
        SetGlobalInteger(nameID: number, value: number): void
        SetGlobalVector(nameID: number, value: Vector4): void
        SetGlobalColor(nameID: number, value: Color): void
        SetGlobalMatrix(nameID: number, value: Matrix4x4): void
        EnableShaderKeyword(keyword: string): void
        EnableKeyword(keyword: GlobalKeyword): void
        EnableKeyword(material: Material, keyword: LocalKeyword): void
        EnableKeyword(computeShader: ComputeShader, keyword: LocalKeyword): void
        DisableShaderKeyword(keyword: string): void
        DisableKeyword(keyword: GlobalKeyword): void
        DisableKeyword(material: Material, keyword: LocalKeyword): void
        DisableKeyword(computeShader: ComputeShader, keyword: LocalKeyword): void
        SetKeyword(keyword: GlobalKeyword, value: boolean): void
        SetKeyword(material: Material, keyword: LocalKeyword, value: boolean): void
        SetKeyword(computeShader: ComputeShader, keyword: LocalKeyword, value: boolean): void
        SetViewMatrix(view: Matrix4x4): void
        SetProjectionMatrix(proj: Matrix4x4): void
        SetViewProjectionMatrices(view: Matrix4x4, proj: Matrix4x4): void
        SetGlobalDepthBias(bias: number, slopeBias: number): void
        SetExecutionFlags(flags: CommandBufferExecutionFlags): void
        SetGlobalFloatArray(nameID: number, values: Single[]): void
        SetGlobalVectorArray(nameID: number, values: Vector4[]): void
        SetGlobalMatrixArray(nameID: number, values: Matrix4x4[]): void
        SetLateLatchProjectionMatrices(projectionMat: Matrix4x4[]): void
        MarkLateLatchMatrixShaderPropertyID(matrixPropertyType: CameraLateLatchMatrixType, shaderPropertyID: number): void
        UnmarkLateLatchMatrix(matrixPropertyType: CameraLateLatchMatrixType): void
        BeginSample(name: string): void
        EndSample(name: string): void
        // BeginSample(sampler: CustomSampler): void
        // EndSample(sampler: CustomSampler): void
        IncrementUpdateCount(dest: RenderTargetIdentifier): void
        SetInstanceMultiplier(multiplier: number): void
        SetRenderTarget(rt: RenderTargetIdentifier): void
        SetRenderTarget(rt: RenderTargetIdentifier, loadAction: RenderBufferLoadAction, storeAction: RenderBufferStoreAction): void
        SetRenderTarget(rt: RenderTargetIdentifier, colorLoadAction: RenderBufferLoadAction, colorStoreAction: RenderBufferStoreAction, depthLoadAction: RenderBufferLoadAction, depthStoreAction: RenderBufferStoreAction): void
        SetRenderTarget(rt: RenderTargetIdentifier, mipLevel: number): void
        SetRenderTarget(rt: RenderTargetIdentifier, mipLevel: number, cubemapFace: CubemapFace): void
        SetRenderTarget(rt: RenderTargetIdentifier, mipLevel: number, cubemapFace: CubemapFace, depthSlice: number): void
        SetRenderTarget(color: RenderTargetIdentifier, depth: RenderTargetIdentifier): void
        SetRenderTarget(color: RenderTargetIdentifier, depth: RenderTargetIdentifier, mipLevel: number): void
        SetRenderTarget(color: RenderTargetIdentifier, depth: RenderTargetIdentifier, mipLevel: number, cubemapFace: CubemapFace): void
        SetRenderTarget(color: RenderTargetIdentifier, depth: RenderTargetIdentifier, mipLevel: number, cubemapFace: CubemapFace, depthSlice: number): void
        SetRenderTarget(color: RenderTargetIdentifier, colorLoadAction: RenderBufferLoadAction, colorStoreAction: RenderBufferStoreAction, depth: RenderTargetIdentifier, depthLoadAction: RenderBufferLoadAction, depthStoreAction: RenderBufferStoreAction): void
        SetRenderTarget(colors: RenderTargetIdentifier[], depth: RenderTargetIdentifier): void
        SetRenderTarget(colors: RenderTargetIdentifier[], depth: RenderTargetIdentifier, mipLevel: number, cubemapFace: CubemapFace, depthSlice: number): void
        SetRenderTarget(binding: RenderTargetBinding, mipLevel: number, cubemapFace: CubemapFace, depthSlice: number): void
        SetRenderTarget(binding: RenderTargetBinding): void
        SetBufferData(buffer: ComputeBuffer, data: []): void
        SetBufferData<T>(buffer: ComputeBuffer, data: List<T>): void
        SetBufferData<T>(buffer: ComputeBuffer, data: NativeArray<T>): void
        SetBufferData(buffer: ComputeBuffer, data: [], managedBufferStartIndex: number, graphicsBufferStartIndex: number, count: number): void
        SetBufferData<T>(buffer: ComputeBuffer, data: List<T>, managedBufferStartIndex: number, graphicsBufferStartIndex: number, count: number): void
        SetBufferData<T>(buffer: ComputeBuffer, data: NativeArray<T>, nativeBufferStartIndex: number, graphicsBufferStartIndex: number, count: number): void
        SetBufferCounterValue(buffer: ComputeBuffer, counterValue: number): void
        SetBufferData(buffer: GraphicsBuffer, data: []): void
        SetBufferData<T>(buffer: GraphicsBuffer, data: List<T>): void
        SetBufferData<T>(buffer: GraphicsBuffer, data: NativeArray<T>): void
        SetBufferData(buffer: GraphicsBuffer, data: [], managedBufferStartIndex: number, graphicsBufferStartIndex: number, count: number): void
        SetBufferData<T>(buffer: GraphicsBuffer, data: List<T>, managedBufferStartIndex: number, graphicsBufferStartIndex: number, count: number): void
        SetBufferData<T>(buffer: GraphicsBuffer, data: NativeArray<T>, nativeBufferStartIndex: number, graphicsBufferStartIndex: number, count: number): void
        SetBufferCounterValue(buffer: GraphicsBuffer, counterValue: number): void
        Dispose(): void
        Release(): void
        CreateAsyncGraphicsFence(): GraphicsFence
        CreateAsyncGraphicsFence(stage: SynchronisationStage): GraphicsFence
        CreateGraphicsFence(fenceType: GraphicsFenceType, stage: SynchronisationStageFlags): GraphicsFence
        WaitOnAsyncGraphicsFence(fence: GraphicsFence): void
        WaitOnAsyncGraphicsFence(fence: GraphicsFence, stage: SynchronisationStage): void
        WaitOnAsyncGraphicsFence(fence: GraphicsFence, stage: SynchronisationStageFlags): void
        SetComputeFloatParam(computeShader: ComputeShader, name: string, val: number): void
        SetComputeIntParam(computeShader: ComputeShader, name: string, val: number): void
        SetComputeVectorParam(computeShader: ComputeShader, name: string, val: Vector4): void
        SetComputeVectorArrayParam(computeShader: ComputeShader, name: string, values: Vector4[]): void
        SetComputeMatrixParam(computeShader: ComputeShader, name: string, val: Matrix4x4): void
        SetComputeMatrixArrayParam(computeShader: ComputeShader, name: string, values: Matrix4x4[]): void
        SetComputeFloatParams(computeShader: ComputeShader, name: string, values: Single[]): void
        SetComputeFloatParams(computeShader: ComputeShader, nameID: number, values: Single[]): void
        SetComputeIntParams(computeShader: ComputeShader, name: string, values: Int32[]): void
        SetComputeIntParams(computeShader: ComputeShader, nameID: number, values: Int32[]): void
        SetComputeTextureParam(computeShader: ComputeShader, kernelIndex: number, name: string, rt: RenderTargetIdentifier): void
        SetComputeTextureParam(computeShader: ComputeShader, kernelIndex: number, nameID: number, rt: RenderTargetIdentifier): void
        SetComputeTextureParam(computeShader: ComputeShader, kernelIndex: number, name: string, rt: RenderTargetIdentifier, mipLevel: number): void
        SetComputeTextureParam(computeShader: ComputeShader, kernelIndex: number, nameID: number, rt: RenderTargetIdentifier, mipLevel: number): void
        SetComputeTextureParam(computeShader: ComputeShader, kernelIndex: number, name: string, rt: RenderTargetIdentifier, mipLevel: number, element: RenderTextureSubElement): void
        SetComputeTextureParam(computeShader: ComputeShader, kernelIndex: number, nameID: number, rt: RenderTargetIdentifier, mipLevel: number, element: RenderTextureSubElement): void
        SetComputeBufferParam(computeShader: ComputeShader, kernelIndex: number, nameID: number, buffer: ComputeBuffer): void
        SetComputeBufferParam(computeShader: ComputeShader, kernelIndex: number, name: string, buffer: ComputeBuffer): void
        SetComputeBufferParam(computeShader: ComputeShader, kernelIndex: number, nameID: number, buffer: GraphicsBuffer): void
        SetComputeBufferParam(computeShader: ComputeShader, kernelIndex: number, name: string, buffer: GraphicsBuffer): void
        SetComputeConstantBufferParam(computeShader: ComputeShader, nameID: number, buffer: ComputeBuffer, offset: number, size: number): void
        SetComputeConstantBufferParam(computeShader: ComputeShader, name: string, buffer: ComputeBuffer, offset: number, size: number): void
        SetComputeConstantBufferParam(computeShader: ComputeShader, nameID: number, buffer: GraphicsBuffer, offset: number, size: number): void
        SetComputeConstantBufferParam(computeShader: ComputeShader, name: string, buffer: GraphicsBuffer, offset: number, size: number): void
        DispatchCompute(computeShader: ComputeShader, kernelIndex: number, threadGroupsX: number, threadGroupsY: number, threadGroupsZ: number): void
        DispatchCompute(computeShader: ComputeShader, kernelIndex: number, indirectBuffer: ComputeBuffer, argsOffset: number): void
        DispatchCompute(computeShader: ComputeShader, kernelIndex: number, indirectBuffer: GraphicsBuffer, argsOffset: number): void
        // BuildRayTracingAccelerationStructure(accelerationStructure: RayTracingAccelerationStructure): void
        // BuildRayTracingAccelerationStructure(accelerationStructure: RayTracingAccelerationStructure, relativeOrigin: Vector3): void
        // SetRayTracingAccelerationStructure(rayTracingShader: RayTracingShader, name: string, rayTracingAccelerationStructure: RayTracingAccelerationStructure): void
        // SetRayTracingAccelerationStructure(rayTracingShader: RayTracingShader, nameID: number, rayTracingAccelerationStructure: RayTracingAccelerationStructure): void
        // SetRayTracingBufferParam(rayTracingShader: RayTracingShader, name: string, buffer: ComputeBuffer): void
        // SetRayTracingBufferParam(rayTracingShader: RayTracingShader, nameID: number, buffer: ComputeBuffer): void
        // SetRayTracingConstantBufferParam(rayTracingShader: RayTracingShader, nameID: number, buffer: ComputeBuffer, offset: number, size: number): void
        // SetRayTracingConstantBufferParam(rayTracingShader: RayTracingShader, name: string, buffer: ComputeBuffer, offset: number, size: number): void
        // SetRayTracingConstantBufferParam(rayTracingShader: RayTracingShader, nameID: number, buffer: GraphicsBuffer, offset: number, size: number): void
        // SetRayTracingConstantBufferParam(rayTracingShader: RayTracingShader, name: string, buffer: GraphicsBuffer, offset: number, size: number): void
        // SetRayTracingTextureParam(rayTracingShader: RayTracingShader, name: string, rt: RenderTargetIdentifier): void
        // SetRayTracingTextureParam(rayTracingShader: RayTracingShader, nameID: number, rt: RenderTargetIdentifier): void
        // SetRayTracingFloatParam(rayTracingShader: RayTracingShader, name: string, val: number): void
        // SetRayTracingFloatParam(rayTracingShader: RayTracingShader, nameID: number, val: number): void
        // SetRayTracingFloatParams(rayTracingShader: RayTracingShader, name: string, values: Single[]): void
        // SetRayTracingFloatParams(rayTracingShader: RayTracingShader, nameID: number, values: Single[]): void
        // SetRayTracingIntParam(rayTracingShader: RayTracingShader, name: string, val: number): void
        // SetRayTracingIntParam(rayTracingShader: RayTracingShader, nameID: number, val: number): void
        // SetRayTracingIntParams(rayTracingShader: RayTracingShader, name: string, values: Int32[]): void
        // SetRayTracingIntParams(rayTracingShader: RayTracingShader, nameID: number, values: Int32[]): void
        // SetRayTracingVectorParam(rayTracingShader: RayTracingShader, name: string, val: Vector4): void
        // SetRayTracingVectorParam(rayTracingShader: RayTracingShader, nameID: number, val: Vector4): void
        // SetRayTracingVectorArrayParam(rayTracingShader: RayTracingShader, name: string, values: Vector4[]): void
        // SetRayTracingVectorArrayParam(rayTracingShader: RayTracingShader, nameID: number, values: Vector4[]): void
        // SetRayTracingMatrixParam(rayTracingShader: RayTracingShader, name: string, val: Matrix4x4): void
        // SetRayTracingMatrixParam(rayTracingShader: RayTracingShader, nameID: number, val: Matrix4x4): void
        // SetRayTracingMatrixArrayParam(rayTracingShader: RayTracingShader, name: string, values: Matrix4x4[]): void
        // SetRayTracingMatrixArrayParam(rayTracingShader: RayTracingShader, nameID: number, values: Matrix4x4[]): void
        // DispatchRays(rayTracingShader: RayTracingShader, rayGenName: string, width: number, height: number, depth: number, camera: Camera): void
        GenerateMips(rt: RenderTargetIdentifier): void
        GenerateMips(rt: RenderTexture): void
        ResolveAntiAliasedSurface(rt: RenderTexture, target: RenderTexture): void
        DrawMesh(mesh: Mesh, matrix: Matrix4x4, material: Material, submeshIndex: number, shaderPass: number, properties: MaterialPropertyBlock): void
        DrawMesh(mesh: Mesh, matrix: Matrix4x4, material: Material, submeshIndex: number, shaderPass: number): void
        DrawMesh(mesh: Mesh, matrix: Matrix4x4, material: Material, submeshIndex: number): void
        DrawMesh(mesh: Mesh, matrix: Matrix4x4, material: Material): void
        DrawRenderer(renderer: Renderer, material: Material, submeshIndex: number, shaderPass: number): void
        DrawRenderer(renderer: Renderer, material: Material, submeshIndex: number): void
        DrawRenderer(renderer: Renderer, material: Material): void
        DrawRendererList(rendererList: RendererList): void
        DrawProcedural(matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, vertexCount: number, instanceCount: number, properties: MaterialPropertyBlock): void
        DrawProcedural(matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, vertexCount: number, instanceCount: number): void
        DrawProcedural(matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, vertexCount: number): void
        DrawProcedural(indexBuffer: GraphicsBuffer, matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, indexCount: number, instanceCount: number, properties: MaterialPropertyBlock): void
        DrawProcedural(indexBuffer: GraphicsBuffer, matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, indexCount: number, instanceCount: number): void
        DrawProcedural(indexBuffer: GraphicsBuffer, matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, indexCount: number): void
        DrawProceduralIndirect(matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: ComputeBuffer, argsOffset: number, properties: MaterialPropertyBlock): void
        DrawProceduralIndirect(matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: ComputeBuffer, argsOffset: number): void
        DrawProceduralIndirect(matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: ComputeBuffer): void
        DrawProceduralIndirect(indexBuffer: GraphicsBuffer, matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: ComputeBuffer, argsOffset: number, properties: MaterialPropertyBlock): void
        DrawProceduralIndirect(indexBuffer: GraphicsBuffer, matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: ComputeBuffer, argsOffset: number): void
        DrawProceduralIndirect(indexBuffer: GraphicsBuffer, matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: ComputeBuffer): void
        DrawProceduralIndirect(matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: GraphicsBuffer, argsOffset: number, properties: MaterialPropertyBlock): void
        DrawProceduralIndirect(matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: GraphicsBuffer, argsOffset: number): void
        DrawProceduralIndirect(matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: GraphicsBuffer): void
        DrawProceduralIndirect(indexBuffer: GraphicsBuffer, matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: GraphicsBuffer, argsOffset: number, properties: MaterialPropertyBlock): void
        DrawProceduralIndirect(indexBuffer: GraphicsBuffer, matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: GraphicsBuffer, argsOffset: number): void
        DrawProceduralIndirect(indexBuffer: GraphicsBuffer, matrix: Matrix4x4, material: Material, shaderPass: number, topology: MeshTopology, bufferWithArgs: GraphicsBuffer): void
        DrawMeshInstanced(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, matrices: Matrix4x4[], count: number, properties: MaterialPropertyBlock): void
        DrawMeshInstanced(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, matrices: Matrix4x4[], count: number): void
        DrawMeshInstanced(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, matrices: Matrix4x4[]): void
        DrawMeshInstancedProcedural(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, count: number, properties: MaterialPropertyBlock): void
        DrawMeshInstancedIndirect(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, bufferWithArgs: ComputeBuffer, argsOffset: number, properties: MaterialPropertyBlock): void
        DrawMeshInstancedIndirect(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, bufferWithArgs: ComputeBuffer, argsOffset: number): void
        DrawMeshInstancedIndirect(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, bufferWithArgs: ComputeBuffer): void
        DrawMeshInstancedIndirect(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, bufferWithArgs: GraphicsBuffer, argsOffset: number, properties: MaterialPropertyBlock): void
        DrawMeshInstancedIndirect(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, bufferWithArgs: GraphicsBuffer, argsOffset: number): void
        DrawMeshInstancedIndirect(mesh: Mesh, submeshIndex: number, material: Material, shaderPass: number, bufferWithArgs: GraphicsBuffer): void
        DrawOcclusionMesh(normalizedCamViewport: RectInt): void
        SetRandomWriteTarget(index: number, rt: RenderTargetIdentifier): void
        SetRandomWriteTarget(index: number, buffer: ComputeBuffer, preserveCounterValue: boolean): void
        SetRandomWriteTarget(index: number, buffer: ComputeBuffer): void
        SetRandomWriteTarget(index: number, buffer: GraphicsBuffer, preserveCounterValue: boolean): void
        SetRandomWriteTarget(index: number, buffer: GraphicsBuffer): void
        CopyCounterValue(src: ComputeBuffer, dst: ComputeBuffer, dstOffsetBytes: number): void
        CopyCounterValue(src: GraphicsBuffer, dst: ComputeBuffer, dstOffsetBytes: number): void
        CopyCounterValue(src: ComputeBuffer, dst: GraphicsBuffer, dstOffsetBytes: number): void
        CopyCounterValue(src: GraphicsBuffer, dst: GraphicsBuffer, dstOffsetBytes: number): void
        CopyTexture(src: RenderTargetIdentifier, dst: RenderTargetIdentifier): void
        CopyTexture(src: RenderTargetIdentifier, srcElement: number, dst: RenderTargetIdentifier, dstElement: number): void
        CopyTexture(src: RenderTargetIdentifier, srcElement: number, srcMip: number, dst: RenderTargetIdentifier, dstElement: number, dstMip: number): void
        CopyTexture(src: RenderTargetIdentifier, srcElement: number, srcMip: number, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dst: RenderTargetIdentifier, dstElement: number, dstMip: number, dstX: number, dstY: number): void
        Blit(source: Texture, dest: RenderTargetIdentifier): void
        Blit(source: Texture, dest: RenderTargetIdentifier, scale: Vector2, offset: Vector2): void
        Blit(source: Texture, dest: RenderTargetIdentifier, mat: Material): void
        Blit(source: Texture, dest: RenderTargetIdentifier, mat: Material, pass: number): void
        Blit(source: RenderTargetIdentifier, dest: RenderTargetIdentifier): void
        Blit(source: RenderTargetIdentifier, dest: RenderTargetIdentifier, scale: Vector2, offset: Vector2): void
        Blit(source: RenderTargetIdentifier, dest: RenderTargetIdentifier, mat: Material): void
        Blit(source: RenderTargetIdentifier, dest: RenderTargetIdentifier, mat: Material, pass: number): void
        Blit(source: RenderTargetIdentifier, dest: RenderTargetIdentifier, sourceDepthSlice: number, destDepthSlice: number): void
        Blit(source: RenderTargetIdentifier, dest: RenderTargetIdentifier, scale: Vector2, offset: Vector2, sourceDepthSlice: number, destDepthSlice: number): void
        Blit(source: RenderTargetIdentifier, dest: RenderTargetIdentifier, mat: Material, pass: number, destDepthSlice: number): void
        SetGlobalFloat(name: string, value: number): void
        SetGlobalInt(name: string, value: number): void
        SetGlobalInteger(name: string, value: number): void
        SetGlobalVector(name: string, value: Vector4): void
        SetGlobalColor(name: string, value: Color): void
        SetGlobalMatrix(name: string, value: Matrix4x4): void
        SetGlobalFloatArray(propertyName: string, values: List<number>): void
        SetGlobalFloatArray(nameID: number, values: List<number>): void
        SetGlobalFloatArray(propertyName: string, values: Single[]): void
        SetGlobalVectorArray(propertyName: string, values: List<Vector4>): void
        SetGlobalVectorArray(nameID: number, values: List<Vector4>): void
        SetGlobalVectorArray(propertyName: string, values: Vector4[]): void
        SetGlobalMatrixArray(propertyName: string, values: List<Matrix4x4>): void
        SetGlobalMatrixArray(nameID: number, values: List<Matrix4x4>): void
        SetGlobalMatrixArray(propertyName: string, values: Matrix4x4[]): void
        SetGlobalTexture(name: string, value: RenderTargetIdentifier): void
        SetGlobalTexture(nameID: number, value: RenderTargetIdentifier): void
        SetGlobalTexture(name: string, value: RenderTargetIdentifier, element: RenderTextureSubElement): void
        SetGlobalTexture(nameID: number, value: RenderTargetIdentifier, element: RenderTextureSubElement): void
        SetGlobalBuffer(name: string, value: ComputeBuffer): void
        SetGlobalBuffer(nameID: number, value: ComputeBuffer): void
        SetGlobalBuffer(name: string, value: GraphicsBuffer): void
        SetGlobalBuffer(nameID: number, value: GraphicsBuffer): void
        SetGlobalConstantBuffer(buffer: ComputeBuffer, nameID: number, offset: number, size: number): void
        SetGlobalConstantBuffer(buffer: ComputeBuffer, name: string, offset: number, size: number): void
        SetGlobalConstantBuffer(buffer: GraphicsBuffer, nameID: number, offset: number, size: number): void
        SetGlobalConstantBuffer(buffer: GraphicsBuffer, name: string, offset: number, size: number): void
        SetShadowSamplingMode(shadowmap: RenderTargetIdentifier, mode: ShadowSamplingMode): void
        SetSinglePassStereo(mode: SinglePassStereoMode): void
        IssuePluginEvent(callback: IntPtr, eventID: number): void
        IssuePluginEventAndData(callback: IntPtr, eventID: number, data: IntPtr): void
        IssuePluginCustomBlit(callback: IntPtr, command: number, source: RenderTargetIdentifier, dest: RenderTargetIdentifier, commandParam: number, commandFlags: number): void
        IssuePluginCustomTextureUpdateV2(callback: IntPtr, targetTexture: Texture, userData: number): void
        ProcessVTFeedback(rt: RenderTargetIdentifier, resolver: IntPtr, slice: number, x: number, width: number, y: number, height: number, mip: number): void
        CopyBuffer(source: GraphicsBuffer, dest: GraphicsBuffer): void
    }
}