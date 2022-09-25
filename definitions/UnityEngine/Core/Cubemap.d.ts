

declare module "UnityEngine/Rendering" {
    import { IntPtr } from "System"
    import { NativeArray } from "Unity/Collections"
    import { Texture, TextureFormat, Color } from "UnityEngine"
    import { DefaultFormat, TextureCreationFlags, GraphicsFormat } from "UnityEngine/Experimental/Rendering"

    export enum CubemapFace {
        Unknown,
        PositiveX,
        NegativeX,
        PositiveY,
        NegativeY,
        PositiveZ,
        NegativeZ,
    }

    export class Cubemap extends Texture {
        static CreateExternalTexture(width: number, format: TextureFormat, mipmap: boolean, nativeTex: IntPtr): Cubemap
        format: TextureFormat
        isReadable: boolean
        streamingMipmaps: boolean
        streamingMipmapsPriority: number
        requestedMipmapLevel: number
        desiredMipmapLevel: number
        loadingMipmapLevel: number
        loadedMipmapLevel: number
        constructor(width: number, format: DefaultFormat, flags: TextureCreationFlags)
        constructor(width: number, format: DefaultFormat, flags: TextureCreationFlags, mipCount: number)
        constructor(width: number, format: GraphicsFormat, flags: TextureCreationFlags)
        constructor(width: number, format: GraphicsFormat, flags: TextureCreationFlags, mipCount: number)
        constructor(width: number, textureFormat: TextureFormat, mipChain: boolean)
        constructor(width: number, textureFormat: TextureFormat, mipChain: boolean, createUninitialized: boolean)
        constructor(width: number, format: TextureFormat, mipCount: number)
        constructor(width: number, format: TextureFormat, mipCount: number, createUninitialized: boolean)
        UpdateExternalTexture(nativeTexture: IntPtr): void
        SmoothEdges(smoothRegionWidthInPixels: number): void
        SmoothEdges(): void
        GetPixels(face: CubemapFace, miplevel: number): Color[]
        GetPixels(face: CubemapFace): Color[]
        SetPixels(colors: Color[], face: CubemapFace, miplevel: number): void
        SetPixels(colors: Color[], face: CubemapFace): void
        ClearRequestedMipmapLevel(): void
        IsRequestedMipmapLevelLoaded(): boolean
        SetPixelData<T>(data: T[], mipLevel: number, face: CubemapFace, sourceDataStartIndex: number): void
        SetPixelData<T>(data: NativeArray<T>, mipLevel: number, face: CubemapFace, sourceDataStartIndex: number): void
        GetPixelData<T>(mipLevel: number, face: CubemapFace): NativeArray<T>
        SetPixel(face: CubemapFace, x: number, y: number, color: Color): void
        SetPixel(face: CubemapFace, x: number, y: number, color: Color, mip: number): void
        GetPixel(face: CubemapFace, x: number, y: number): Color
        GetPixel(face: CubemapFace, x: number, y: number, mip: number): Color
        Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void
        Apply(updateMipmaps: boolean): void
        Apply(): void
    }
}