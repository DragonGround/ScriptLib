

declare module "UnityEngine/Rendering" {
    import { IEquatable } from "System"
    import { Color, ComputeShader, ReflectionProbe, Shader, Vector3 } from "UnityEngine"

    export enum ShaderKeywordType {
        None,
        BuiltinDefault,
        BuiltinExtra,
        BuiltinAutoStripped,
        UserDefined,
        Plugin,
    }

    export class LocalKeyword implements IEquatable<LocalKeyword> {
        name: string
        isDynamic: boolean
        isOverridable: boolean
        isValid: boolean
        type: ShaderKeywordType
        constructor(shader: Shader, name: string)
        constructor(shader: ComputeShader, name: string)
        ToString(): string
        Equals(o: any): boolean
        Equals(rhs: LocalKeyword): boolean
        GetHashCode(): number
    }

    export class LocalKeywordSpace implements IEquatable<LocalKeywordSpace> {
        keywords: LocalKeyword[]
        keywordNames: String[]
        keywordCount: number
        FindKeyword(name: string): LocalKeyword
        Equals(o: any): boolean
        Equals(rhs: LocalKeywordSpace): boolean
        GetHashCode(): number
    }

    export enum TextureDimension {
        Unknown,
        None,
        Any,
        Tex2D,
        Tex3D,
        Cube,
        Tex2DArray,
        CubeArray,
    }

    export enum ShadowCastingMode {
        Off,
        On,
        TwoSided,
        ShadowsOnly,
    }

    export enum LightProbeUsage {
        Off,
        BlendProbes,
        UseProxyVolume,
        CustomProvided,
    }

    export enum ReflectionProbeUsage {
        Off,
        BlendProbes,
        BlendProbesAndSkybox,
        Simple,
    }

    export class SphericalHarmonicsL2 implements IEquatable<SphericalHarmonicsL2> {
        Item: number
        Clear(): void
        AddAmbientLight(color: Color): void
        AddDirectionalLight(direction: Vector3, color: Color, intensity: number): void
        Evaluate(directions: Vector3[], results: Color[]): void
        GetHashCode(): number
        Equals(other: any): boolean
        Equals(other: SphericalHarmonicsL2): boolean
    }

    export class ReflectionProbeBlendInfo {
        probe: ReflectionProbe
        weight: number
    }

    export enum ReflectionProbeType {
        Cube,
        Card,
    }

    export enum ReflectionProbeClearFlags {
        Skybox,
        SolidColor,
    }

    export enum ReflectionProbeMode {
        Baked,
        Realtime,
        Custom,
    }

    export enum ReflectionProbeRefreshMode {
        OnAwake,
        EveryFrame,
        ViaScripting,
    }

    export enum ReflectionProbeTimeSlicingMode {
        AllFacesAtOnce,
        IndividualFaces,
        NoTimeSlicing,
    }

    
}