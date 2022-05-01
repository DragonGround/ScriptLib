



declare module "UnityEngine" {
    import { RayTracingMode } from "UnityEngine/Experimental/Rendering"
    import { ReflectionProbeBlendInfo, ReflectionProbeClearFlags, ReflectionProbeMode, ReflectionProbeRefreshMode, ReflectionProbeTimeSlicingMode, ReflectionProbeType, SphericalHarmonicsL2 } from "UnityEngine/Rendering"
    import { List } from "System/Collections/Generic"
    import { LightProbeUsage, ReflectionProbeUsage, ShadowCastingMode } from "UnityEngine/Rendering"

    export enum MotionVectorGenerationMode {
        Camera,
        Object,
        ForceNoMotion,
    }

    export class MaterialPropertyBlock {
        isEmpty: boolean
        constructor()
        AddFloat(name: string, value: number): void
        AddFloat(nameID: number, value: number): void
        AddVector(name: string, value: Vector4): void
        AddVector(nameID: number, value: Vector4): void
        AddColor(name: string, value: Color): void
        AddColor(nameID: number, value: Color): void
        AddMatrix(name: string, value: Matrix4x4): void
        AddMatrix(nameID: number, value: Matrix4x4): void
        AddTexture(name: string, value: Texture): void
        AddTexture(nameID: number, value: Texture): void
        Clear(): void
        SetInt(name: string, value: number): void
        SetInt(nameID: number, value: number): void
        SetFloat(name: string, value: number): void
        SetFloat(nameID: number, value: number): void
        SetInteger(name: string, value: number): void
        SetInteger(nameID: number, value: number): void
        SetVector(name: string, value: Vector4): void
        SetVector(nameID: number, value: Vector4): void
        SetColor(name: string, value: Color): void
        SetColor(nameID: number, value: Color): void
        SetMatrix(name: string, value: Matrix4x4): void
        SetMatrix(nameID: number, value: Matrix4x4): void
        SetBuffer(name: string, value: ComputeBuffer): void
        SetBuffer(nameID: number, value: ComputeBuffer): void
        SetBuffer(name: string, value: GraphicsBuffer): void
        SetBuffer(nameID: number, value: GraphicsBuffer): void
        SetTexture(name: string, value: Texture): void
        SetTexture(nameID: number, value: Texture): void
        SetTexture(name: string, value: RenderTexture, element: RenderTextureSubElement): void
        SetTexture(nameID: number, value: RenderTexture, element: RenderTextureSubElement): void
        SetConstantBuffer(name: string, value: ComputeBuffer, offset: number, size: number): void
        SetConstantBuffer(nameID: number, value: ComputeBuffer, offset: number, size: number): void
        SetConstantBuffer(name: string, value: GraphicsBuffer, offset: number, size: number): void
        SetConstantBuffer(nameID: number, value: GraphicsBuffer, offset: number, size: number): void
        SetFloatArray(name: string, values: List<number>): void
        SetFloatArray(nameID: number, values: List<number>): void
        SetFloatArray(name: string, values: number[]): void
        SetFloatArray(nameID: number, values: number[]): void
        SetVectorArray(name: string, values: List<Vector4>): void
        SetVectorArray(nameID: number, values: List<Vector4>): void
        SetVectorArray(name: string, values: Vector4[]): void
        SetVectorArray(nameID: number, values: Vector4[]): void
        SetMatrixArray(name: string, values: List<Matrix4x4>): void
        SetMatrixArray(nameID: number, values: List<Matrix4x4>): void
        SetMatrixArray(name: string, values: Matrix4x4[]): void
        SetMatrixArray(nameID: number, values: Matrix4x4[]): void
        HasProperty(name: string): boolean
        HasProperty(nameID: number): boolean
        HasInt(name: string): boolean
        HasInt(nameID: number): boolean
        HasFloat(name: string): boolean
        HasFloat(nameID: number): boolean
        HasInteger(name: string): boolean
        HasInteger(nameID: number): boolean
        HasTexture(name: string): boolean
        HasTexture(nameID: number): boolean
        HasMatrix(name: string): boolean
        HasMatrix(nameID: number): boolean
        HasVector(name: string): boolean
        HasVector(nameID: number): boolean
        HasColor(name: string): boolean
        HasColor(nameID: number): boolean
        HasBuffer(name: string): boolean
        HasBuffer(nameID: number): boolean
        HasConstantBuffer(name: string): boolean
        HasConstantBuffer(nameID: number): boolean
        GetFloat(name: string): number
        GetFloat(nameID: number): number
        GetInt(name: string): number
        GetInt(nameID: number): number
        GetInteger(name: string): number
        GetInteger(nameID: number): number
        GetVector(name: string): Vector4
        GetVector(nameID: number): Vector4
        GetColor(name: string): Color
        GetColor(nameID: number): Color
        GetMatrix(name: string): Matrix4x4
        GetMatrix(nameID: number): Matrix4x4
        GetTexture(name: string): Texture
        GetTexture(nameID: number): Texture
        GetFloatArray(name: string): number[]
        GetFloatArray(nameID: number): number[]
        GetVectorArray(name: string): Vector4[]
        GetVectorArray(nameID: number): Vector4[]
        GetMatrixArray(name: string): Matrix4x4[]
        GetMatrixArray(nameID: number): Matrix4x4[]
        GetFloatArray(name: string, values: List<number>): void
        GetFloatArray(nameID: number, values: List<number>): void
        GetVectorArray(name: string, values: List<Vector4>): void
        GetVectorArray(nameID: number, values: List<Vector4>): void
        GetMatrixArray(name: string, values: List<Matrix4x4>): void
        GetMatrixArray(nameID: number, values: List<Matrix4x4>): void
        CopySHCoefficientArraysFrom(lightProbes: List<SphericalHarmonicsL2>): void
        CopySHCoefficientArraysFrom(lightProbes: SphericalHarmonicsL2[]): void
        CopySHCoefficientArraysFrom(lightProbes: List<SphericalHarmonicsL2>, sourceStart: number, destStart: number, count: number): void
        CopySHCoefficientArraysFrom(lightProbes: SphericalHarmonicsL2[], sourceStart: number, destStart: number, count: number): void
        CopyProbeOcclusionArrayFrom(occlusionProbes: List<Vector4>): void
        CopyProbeOcclusionArrayFrom(occlusionProbes: Vector4[]): void
        CopyProbeOcclusionArrayFrom(occlusionProbes: List<Vector4>, sourceStart: number, destStart: number, count: number): void
        CopyProbeOcclusionArrayFrom(occlusionProbes: Vector4[], sourceStart: number, destStart: number, count: number): void
    }

    export class ReflectionProbe extends Behaviour {
        static minBakedCubemapResolution: number
        static maxBakedCubemapResolution: number
        static defaultTextureHDRDecodeValues: Vector4
        static defaultTexture: Texture
        static BlendCubemap(src: Texture, dst: Texture, blend: number, target: RenderTexture): boolean
        static UpdateCachedState(): void
        type: ReflectionProbeType
        size: Vector3
        center: Vector3
        nearClipPlane: number
        farClipPlane: number
        intensity: number
        bounds: Bounds
        hdr: boolean
        renderDynamicObjects: boolean
        shadowDistance: number
        resolution: number
        cullingMask: number
        clearFlags: ReflectionProbeClearFlags
        backgroundColor: Color
        blendDistance: number
        boxProjection: boolean
        mode: ReflectionProbeMode
        importance: number
        refreshMode: ReflectionProbeRefreshMode
        timeSlicingMode: ReflectionProbeTimeSlicingMode
        bakedTexture: Texture
        customBakedTexture: Texture
        realtimeTexture: RenderTexture
        texture: Texture
        textureHDRDecodeValues: Vector4
        constructor()
        Reset(): void
        RenderProbe(): number
        RenderProbe(targetTexture: RenderTexture): number
        IsFinishedRendering(renderId: number): boolean
    }

    export class Renderer extends Component {
        lightmapTilingOffset: Vector4
        lightProbeAnchor: Transform
        castShadows: boolean
        motionVectors: boolean
        useLightProbes: boolean
        bounds: Bounds
        localBounds: Bounds
        enabled: boolean
        isVisible: boolean
        shadowCastingMode: ShadowCastingMode
        receiveShadows: boolean
        forceRenderingOff: boolean
        staticShadowCaster: boolean
        motionVectorGenerationMode: MotionVectorGenerationMode
        lightProbeUsage: LightProbeUsage
        reflectionProbeUsage: ReflectionProbeUsage
        renderingLayerMask: number
        rendererPriority: number
        rayTracingMode: RayTracingMode
        sortingLayerName: string
        sortingLayerID: number
        sortingOrder: number
        allowOcclusionWhenDynamic: boolean
        isPartOfStaticBatch: boolean
        worldToLocalMatrix: Matrix4x4
        localToWorldMatrix: Matrix4x4
        lightProbeProxyVolumeOverride: GameObject
        probeAnchor: Transform
        lightmapIndex: number
        realtimeLightmapIndex: number
        lightmapScaleOffset: Vector4
        realtimeLightmapScaleOffset: Vector4
        materials: Material[]
        material: Material
        sharedMaterial: Material
        sharedMaterials: Material[]
        constructor()
        ResetBounds(): void
        ResetLocalBounds(): void
        HasPropertyBlock(): boolean
        SetPropertyBlock(properties: MaterialPropertyBlock): void
        SetPropertyBlock(properties: MaterialPropertyBlock, materialIndex: number): void
        GetPropertyBlock(properties: MaterialPropertyBlock): void
        GetPropertyBlock(properties: MaterialPropertyBlock, materialIndex: number): void
        GetMaterials(m: List<Material>): void
        GetSharedMaterials(m: List<Material>): void
        GetClosestReflectionProbes(result: List<ReflectionProbeBlendInfo>): void
    }

    export enum ReceiveGI {
        Lightmaps,
        LightProbes,
    }

    export class MeshRenderer extends Renderer {
        additionalVertexStreams: Mesh
        enlightenVertexStream: Mesh
        subMeshStartIndex: number
        scaleInLightmap: number
        receiveGI: ReceiveGI
        stitchLightmapSeams: boolean
        constructor()
    }
}