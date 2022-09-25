import { IEquatable } from "System"
import { Matrix4x4, Vector3, Plane } from "UnityEngine"

declare module "UnityEngine/Rendering" {
    export enum OpaqueSortMode {
        Default,
        FrontToBack,
        NoDistanceSort,
    }

    export enum CameraEvent {
        BeforeDepthTexture,
        AfterDepthTexture,
        BeforeDepthNormalsTexture,
        AfterDepthNormalsTexture,
        BeforeGBuffer,
        AfterGBuffer,
        BeforeLighting,
        AfterLighting,
        BeforeFinalPass,
        AfterFinalPass,
        BeforeForwardOpaque,
        AfterForwardOpaque,
        BeforeImageEffectsOpaque,
        AfterImageEffectsOpaque,
        BeforeSkybox,
        AfterSkybox,
        BeforeForwardAlpha,
        AfterForwardAlpha,
        BeforeImageEffects,
        AfterImageEffects,
        AfterEverything,
        BeforeReflections,
        AfterReflections,
        BeforeHaloAndLensFlares,
        AfterHaloAndLensFlares,
    }

    export enum ShadowSamplingMode {
        CompareDepths,
        RawDepth,
        None,
    }

    export enum ComputeQueueType {
        Default,
        Background,
        Urgent,
    }

    export class LODParameters implements IEquatable<LODParameters> {
        isOrthographic: boolean
        cameraPosition: Vector3
        fieldOfView: number
        orthoSize: number
        cameraPixelHeight: number
        Equals(other: LODParameters): boolean
        Equals(obj: any): boolean
        GetHashCode(): number
    }

    export enum CullingOptions {
        None,
        ForceEvenIfCameraIsNotActive,
        OcclusionCull,
        NeedsLighting,
        NeedsReflectionProbes,
        Stereo,
        DisablePerObjectCulling,
        ShadowCasters,
    }

    export enum ReflectionProbeSortingCriteria {
        None,
        Importance,
        Size,
        ImportanceThenSize,
    }

    export class CameraProperties implements IEquatable<CameraProperties> {
        GetShadowCullingPlane(index: number): Plane
        SetShadowCullingPlane(index: number, plane: Plane): void
        GetCameraCullingPlane(index: number): Plane
        SetCameraCullingPlane(index: number, plane: Plane): void
        Equals(other: CameraProperties): boolean
        Equals(obj: any): boolean
        GetHashCode(): number
    }

    export class ScriptableCullingParameters implements IEquatable<ScriptableCullingParameters> {
        static cullingJobsLowerLimit: number
        static cullingJobsUpperLimit: number
        static maximumCullingPlaneCount: number
        static layerCount: number
        maximumVisibleLights: number
        conservativeEnclosingSphere: boolean
        numIterationsEnclosingSphere: number
        cullingPlaneCount: number
        isOrthographic: boolean
        lodParameters: LODParameters
        cullingMask: number
        cullingMatrix: Matrix4x4
        origin: Vector3
        shadowDistance: number
        shadowNearPlaneOffset: number
        cullingOptions: CullingOptions
        reflectionProbeSortingCriteria: ReflectionProbeSortingCriteria
        cameraProperties: CameraProperties
        stereoViewMatrix: Matrix4x4
        stereoProjectionMatrix: Matrix4x4
        stereoSeparationDistance: number
        accurateOcclusionThreshold: number
        maximumPortalCullingJobs: number
        GetLayerCullingDistance(layerIndex: number): number
        SetLayerCullingDistance(layerIndex: number, distance: number): void
        GetCullingPlane(index: number): Plane
        SetCullingPlane(index: number, plane: Plane): void
        Equals(other: ScriptableCullingParameters): boolean
        Equals(obj: any): boolean
        GetHashCode(): number
    }
}