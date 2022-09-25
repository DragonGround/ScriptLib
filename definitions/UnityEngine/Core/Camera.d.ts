

declare module "UnityEngine" {
    import { GraphicsFormat } from "UnityEngine/Experimental/Rendering"
    import { CameraEvent, CommandBuffer, ComputeQueueType, Cubemap, CubemapFace, OpaqueSortMode, RenderBufferLoadAction, RenderBufferStoreAction, ScriptableCullingParameters, ShadowSamplingMode, TextureDimension } from "UnityEngine/Rendering"
    import { MulticastDelegate, ICloneable, IntPtr, AsyncCallback, IAsyncResult, Single } from "System"
    import { List } from "System/Collections/Generic"
    import { ISerializable } from "System/Runtime/Serialization"
    import { Scene } from "UnityEngine/SceneManagement"

    export class CameraCallback extends MulticastDelegate implements ISerializable, ICloneable {
        constructor(object: any, method: IntPtr)
        Invoke(cam: Camera): void
        BeginInvoke(cam: Camera, callback: AsyncCallback, object: any): IAsyncResult
        EndInvoke(result: IAsyncResult): void
    }

    export enum GateFitMode {
        Vertical,
        Horizontal,
        Fill,
        Overscan,
        None,
    }

    export class GateFitParameters {
        mode: GateFitMode
        aspect: number
        constructor(mode: GateFitMode, aspect: number)
    }

    export enum RenderingPath {
        UsePlayerSettings,
        VertexLit,
        Forward,
        DeferredLighting,
        DeferredShading,
    }

    export enum TransparencySortMode {
        Default,
        Perspective,
        Orthographic,
        CustomAxis,
    }

    export enum CameraType {
        Game,
        SceneView,
        Preview,
        VR,
        Reflection,
    }

    export enum CameraClearFlags {
        Skybox,
        Color,
        SolidColor,
        Depth,
        Nothing,
    }

    export enum DepthTextureMode {
        None,
        Depth,
        DepthNormals,
        MotionVectors,
    }

    export enum StereoTargetEyeMask {
        None,
        Left,
        Right,
        Both,
    }

    export enum MonoOrStereoscopicEye {
        Left,
        Right,
        Mono,
    }

    export enum SceneViewFilterMode {
        Off,
        ShowFiltered,
    }

    export class RenderBuffer {
        GetNativeRenderBufferPtr(): IntPtr
    }

    export enum StereoscopicEye {
        Left,
        Right,
    }

    export enum RenderRequestMode {
        None,
        ObjectId,
        Depth,
        VertexNormal,
        WorldPosition,
        EntityId,
        BaseColor,
        SpecularColor,
        Metallic,
        Emission,
        Normal,
        Smoothness,
        Occlusion,
        DiffuseColor,
    }

    export enum RenderRequestOutputSpace {
        ScreenSpace,
        UV0,
        UV1,
        UV2,
        UV3,
        UV4,
        UV5,
        UV6,
        UV7,
        UV8,
    }

    export class RenderRequest {
        isValid: boolean
        mode: RenderRequestMode
        result: RenderTexture
        outputSpace: RenderRequestOutputSpace
        constructor(mode: RenderRequestMode, rt: RenderTexture)
        constructor(mode: RenderRequestMode, space: RenderRequestOutputSpace, rt: RenderTexture)
    }

    export enum VRTextureUsage {
        None,
        OneEye,
        TwoEyes,
        DeviceSpecific,
    }

    export enum RenderTextureReadWrite {
        Default,
        Linear,
        sRGB,
    }

    export enum RenderTextureFormat {
        ARGB32,
        Depth,
        ARGBHalf,
        Shadowmap,
        RGB565,
        ARGB4444,
        ARGB1555,
        Default,
        ARGB2101010,
        DefaultHDR,
        ARGB64,
        ARGBFloat,
        RGFloat,
        RGHalf,
        RFloat,
        RHalf,
        R8,
        ARGBInt,
        RGInt,
        RInt,
        BGRA32,
        RGB111110Float,
        RG32,
        RGBAUShort,
        RG16,
        BGRA10101010_XR,
        BGR101010_XR,
        R16,
    }

    export enum RenderTextureCreationFlags {
        MipMap,
        AutoGenerateMips,
        SRGB,
        EyeTexture,
        EnableRandomWrite,
        CreatedFromScript,
        AllowVerticalFlip,
        NoResolvedColorSurface,
        DynamicallyScalable,
        BindMS,
    }

    export enum RenderTextureMemoryless {
        None,
        Color,
        Depth,
        MSAA,
    }

    export class RenderTextureDescriptor {
        width: number
        height: number
        msaaSamples: number
        volumeDepth: number
        mipCount: number
        graphicsFormat: GraphicsFormat
        stencilFormat: GraphicsFormat
        depthStencilFormat: GraphicsFormat
        colorFormat: RenderTextureFormat
        sRGB: boolean
        depthBufferBits: number
        dimension: TextureDimension
        shadowSamplingMode: ShadowSamplingMode
        vrUsage: VRTextureUsage
        flags: RenderTextureCreationFlags
        memoryless: RenderTextureMemoryless
        useMipMap: boolean
        autoGenerateMips: boolean
        enableRandomWrite: boolean
        bindMS: boolean
        useDynamicScale: boolean
        constructor(width: number, height: number)
        constructor(width: number, height: number, colorFormat: RenderTextureFormat)
        constructor(width: number, height: number, colorFormat: RenderTextureFormat, depthBufferBits: number)
        constructor(width: number, height: number, colorFormat: GraphicsFormat, depthBufferBits: number)
        constructor(width: number, height: number, colorFormat: RenderTextureFormat, depthBufferBits: number, mipCount: number)
        constructor(width: number, height: number, colorFormat: GraphicsFormat, depthBufferBits: number, mipCount: number)
        constructor(width: number, height: number, colorFormat: GraphicsFormat, depthStencilFormat: GraphicsFormat)
        constructor(width: number, height: number, colorFormat: GraphicsFormat, depthStencilFormat: GraphicsFormat, mipCount: number)
    }

    export class RenderTargetSetup {
        color: RenderBuffer[]
        depth: RenderBuffer
        mipLevel: number
        cubemapFace: CubemapFace
        depthSlice: number
        colorLoad: RenderBufferLoadAction[]
        colorStore: RenderBufferStoreAction[]
        depthLoad: RenderBufferLoadAction
        depthStore: RenderBufferStoreAction
        constructor(color: RenderBuffer[], depth: RenderBuffer, mip: number, face: CubemapFace, colorLoad: RenderBufferLoadAction[], colorStore: RenderBufferStoreAction[], depthLoad: RenderBufferLoadAction, depthStore: RenderBufferStoreAction)
        constructor(color: RenderBuffer, depth: RenderBuffer)
        constructor(color: RenderBuffer, depth: RenderBuffer, mipLevel: number)
        constructor(color: RenderBuffer, depth: RenderBuffer, mipLevel: number, face: CubemapFace)
        constructor(color: RenderBuffer, depth: RenderBuffer, mipLevel: number, face: CubemapFace, depthSlice: number)
        constructor(color: RenderBuffer[], depth: RenderBuffer)
        constructor(color: RenderBuffer[], depth: RenderBuffer, mipLevel: number)
        constructor(color: RenderBuffer[], depth: RenderBuffer, mip: number, face: CubemapFace)
    }

    export enum MeshTopology {
        Triangles,
        Quads,
        Lines,
        LineStrip,
        Points,
    }

    export class Camera extends Behaviour {
        static main: Camera
        static current: Camera
        static allCamerasCount: number
        static allCameras: Camera[]
        static onPreCull: CameraCallback
        static onPreRender: CameraCallback
        static onPostRender: CameraCallback
        static CalculateProjectionMatrixFromPhysicalProperties(output: Matrix4x4, focalLength: number, sensorSize: Vector2, lensShift: Vector2, nearClip: number, farClip: number, gateFitParameters: GateFitParameters): void
        static FocalLengthToFieldOfView(focalLength: number, sensorSize: number): number
        static FieldOfViewToFocalLength(fieldOfView: number, sensorSize: number): number
        static HorizontalToVerticalFieldOfView(horizontalFieldOfView: number, aspectRatio: number): number
        static VerticalToHorizontalFieldOfView(verticalFieldOfView: number, aspectRatio: number): number
        static GetAllCameras(cameras: Camera[]): number
        static SetupCurrent(cur: Camera): void
        nearClipPlane: number
        farClipPlane: number
        fieldOfView: number
        renderingPath: RenderingPath
        actualRenderingPath: RenderingPath
        allowHDR: boolean
        allowMSAA: boolean
        allowDynamicResolution: boolean
        forceIntoRenderTexture: boolean
        orthographicSize: number
        orthographic: boolean
        opaqueSortMode: OpaqueSortMode
        transparencySortMode: TransparencySortMode
        transparencySortAxis: Vector3
        depth: number
        aspect: number
        velocity: Vector3
        cullingMask: number
        eventMask: number
        layerCullSpherical: boolean
        cameraType: CameraType
        overrideSceneCullingMask: number
        layerCullDistances: Single[]
        useOcclusionCulling: boolean
        cullingMatrix: Matrix4x4
        backgroundColor: Color
        clearFlags: CameraClearFlags
        depthTextureMode: DepthTextureMode
        clearStencilAfterLightingPass: boolean
        usePhysicalProperties: boolean
        sensorSize: Vector2
        lensShift: Vector2
        focalLength: number
        gateFit: GateFitMode
        rect: Rect
        pixelRect: Rect
        pixelWidth: number
        pixelHeight: number
        scaledPixelWidth: number
        scaledPixelHeight: number
        targetTexture: RenderTexture
        activeTexture: RenderTexture
        targetDisplay: number
        cameraToWorldMatrix: Matrix4x4
        worldToCameraMatrix: Matrix4x4
        projectionMatrix: Matrix4x4
        nonJitteredProjectionMatrix: Matrix4x4
        useJitteredProjectionMatrixForTransparentRendering: boolean
        previousViewProjectionMatrix: Matrix4x4
        scene: Scene
        stereoEnabled: boolean
        stereoSeparation: number
        stereoConvergence: number
        areVRStereoViewMatricesWithinSingleCullTolerance: boolean
        stereoTargetEye: StereoTargetEyeMask
        stereoActiveEye: MonoOrStereoscopicEye
        sceneViewFilterMode: SceneViewFilterMode
        commandBufferCount: number
        constructor()
        Reset(): void
        ResetTransparencySortSettings(): void
        ResetAspect(): void
        ResetCullingMatrix(): void
        SetReplacementShader(shader: Shader, replacementTag: string): void
        ResetReplacementShader(): void
        GetGateFittedFieldOfView(): number
        GetGateFittedLensShift(): Vector2
        SetTargetBuffers(colorBuffer: RenderBuffer, depthBuffer: RenderBuffer): void
        SetTargetBuffers(colorBuffer: RenderBuffer[], depthBuffer: RenderBuffer): void
        ResetWorldToCameraMatrix(): void
        ResetProjectionMatrix(): void
        CalculateObliqueMatrix(clipPlane: Vector4): Matrix4x4
        WorldToScreenPoint(position: Vector3, eye: MonoOrStereoscopicEye): Vector3
        WorldToViewportPoint(position: Vector3, eye: MonoOrStereoscopicEye): Vector3
        ViewportToWorldPoint(position: Vector3, eye: MonoOrStereoscopicEye): Vector3
        ScreenToWorldPoint(position: Vector3, eye: MonoOrStereoscopicEye): Vector3
        WorldToScreenPoint(position: Vector3): Vector3
        WorldToViewportPoint(position: Vector3): Vector3
        ViewportToWorldPoint(position: Vector3): Vector3
        ScreenToWorldPoint(position: Vector3): Vector3
        ScreenToViewportPoint(position: Vector3): Vector3
        ViewportToScreenPoint(position: Vector3): Vector3
        ViewportPointToRay(pos: Vector3, eye: MonoOrStereoscopicEye): Ray
        ViewportPointToRay(pos: Vector3): Ray
        ScreenPointToRay(pos: Vector3, eye: MonoOrStereoscopicEye): Ray
        ScreenPointToRay(pos: Vector3): Ray
        CalculateFrustumCorners(viewport: Rect, z: number, eye: MonoOrStereoscopicEye, outCorners: Vector3[]): void
        GetStereoNonJitteredProjectionMatrix(eye: StereoscopicEye): Matrix4x4
        GetStereoViewMatrix(eye: StereoscopicEye): Matrix4x4
        CopyStereoDeviceProjectionMatrixToNonJittered(eye: StereoscopicEye): void
        GetStereoProjectionMatrix(eye: StereoscopicEye): Matrix4x4
        SetStereoProjectionMatrix(eye: StereoscopicEye, matrix: Matrix4x4): void
        ResetStereoProjectionMatrices(): void
        SetStereoViewMatrix(eye: StereoscopicEye, matrix: Matrix4x4): void
        ResetStereoViewMatrices(): void
        RenderToCubemap(cubemap: Cubemap, faceMask: number): boolean
        RenderToCubemap(cubemap: Cubemap): boolean
        RenderToCubemap(cubemap: RenderTexture, faceMask: number): boolean
        RenderToCubemap(cubemap: RenderTexture): boolean
        RenderToCubemap(cubemap: RenderTexture, faceMask: number, stereoEye: MonoOrStereoscopicEye): boolean
        Render(): void
        RenderWithShader(shader: Shader, replacementTag: string): void
        RenderDontRestore(): void
        SubmitRenderRequests(renderRequests: List<RenderRequest>): void
        CopyFrom(other: Camera): void
        RemoveCommandBuffers(evt: CameraEvent): void
        RemoveAllCommandBuffers(): void
        AddCommandBuffer(evt: CameraEvent, buffer: CommandBuffer): void
        AddCommandBufferAsync(evt: CameraEvent, buffer: CommandBuffer, queueType: ComputeQueueType): void
        RemoveCommandBuffer(evt: CameraEvent, buffer: CommandBuffer): void
        GetCommandBuffers(evt: CameraEvent): CommandBuffer[]
        TryGetCullingParameters(cullingParameters: ScriptableCullingParameters): boolean
        TryGetCullingParameters(stereoAware: boolean, cullingParameters: ScriptableCullingParameters): boolean
    }
}