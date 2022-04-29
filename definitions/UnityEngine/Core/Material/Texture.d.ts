

declare module "UnityEngine" {
    import { IComparable, IComparableAny, IEquatable } from "System"
    import { TextureDimension } from "UnityEngine/Rendering"
    import { GraphicsFormat } from "UnityEngine/Experimental/Rendering"

    export class Hash128 implements IComparableAny, IComparable<Hash128>, IEquatable<Hash128> {
        static Parse(hashString: string): Hash128
        static Compute(data: string): Hash128
        static Compute(val: number): Hash128
        static Compute(val: number): Hash128
        static Compute(data: any, size: number): Hash128
        isValid: boolean
        constructor(u32_0: number, u32_1: number, u32_2: number, u32_3: number)
        constructor(u64_0: number, u64_1: number)
        CompareTo(rhs: Hash128): number
        ToString(): string
        Append(data: string): void
        Append(val: number): void
        Append(val: number): void
        Append(data: any, size: number): void
        Equals(obj: any): boolean
        Equals(obj: Hash128): boolean
        GetHashCode(): number
        CompareTo(obj: any): number
    }

    export enum AnisotropicFiltering {
        Disable,
        Enable,
        ForceEnable,
    }

    export enum TextureWrapMode {
        Repeat,
        Clamp,
        Mirror,
        MirrorOnce,
    }

    export enum FilterMode {
        Point,
        Bilinear,
        Trilinear,
    }

    export class Texture extends Object {
        static masterTextureLimit: number
        static anisotropicFiltering: AnisotropicFiltering
        static totalTextureMemory: number
        static desiredTextureMemory: number
        static targetTextureMemory: number
        static currentTextureMemory: number
        static nonStreamingTextureMemory: number
        static streamingMipmapUploadCount: number
        static streamingRendererCount: number
        static streamingTextureCount: number
        static nonStreamingTextureCount: number
        static streamingTexturePendingLoadCount: number
        static streamingTextureLoadingCount: number
        static streamingTextureForceLoadAll: boolean
        static streamingTextureDiscardUnusedMips: boolean
        static allowThreadedTextureCreation: boolean
        static GenerateAllMips: number
        static SetGlobalAnisotropicFilteringLimits(forcedMin: number, globalMax: number): void
        static SetStreamingTextureMaterialDebugProperties(): void
        mipmapCount: number
        graphicsFormat: GraphicsFormat
        width: number
        height: number
        dimension: TextureDimension
        isReadable: boolean
        wrapMode: TextureWrapMode
        wrapModeU: TextureWrapMode
        wrapModeV: TextureWrapMode
        wrapModeW: TextureWrapMode
        filterMode: FilterMode
        anisoLevel: number
        mipMapBias: number
        texelSize: Vector2
        updateCount: number
        imageContentsHash: Hash128
        GetNativeTexturePtr(): any
        GetNativeTextureID(): number
        IncrementUpdateCount(): void
    }
}