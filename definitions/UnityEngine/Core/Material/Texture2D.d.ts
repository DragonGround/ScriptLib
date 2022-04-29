

declare module "UnityEngine" {
    import { IntPtr, Byte } from "System"
    import { List } from "System/Collections/Generic"
    import { DefaultFormat, GraphicsFormat, TextureCreationFlags } from "UnityEngine/Experimental/Rendering"

    export enum TextureFormat {
        Alpha8,
        ARGB4444,
        RGB24,
        RGBA32,
        ARGB32,
        RGB565,
        R16,
        DXT1,
        DXT5,
        RGBA4444,
        BGRA32,
        RHalf,
        RGHalf,
        RGBAHalf,
        RFloat,
        RGFloat,
        RGBAFloat,
        YUY2,
        RGB9e5Float,
        BC4,
        BC5,
        BC6H,
        BC7,
        DXT1Crunched,
        DXT5Crunched,
        PVRTC_RGB2,
        PVRTC_RGBA2,
        PVRTC_RGB4,
        PVRTC_RGBA4,
        ETC_RGB4,
        ATC_RGB4,
        ATC_RGBA8,
        EAC_R,
        EAC_R_SIGNED,
        EAC_RG,
        EAC_RG_SIGNED,
        ETC2_RGB,
        ETC2_RGBA1,
        ETC2_RGBA8,
        ASTC_4x4,
        ASTC_5x5,
        ASTC_6x6,
        ASTC_8x8,
        ASTC_10x10,
        ASTC_12x12,
        ETC_RGB4_3DS,
        ETC_RGBA8_3DS,
        RG16,
        R8,
        ETC_RGB4Crunched,
        ETC2_RGBA8Crunched,
        ASTC_HDR_4x4,
        ASTC_HDR_5x5,
        ASTC_HDR_6x6,
        ASTC_HDR_8x8,
        ASTC_HDR_10x10,
        ASTC_HDR_12x12,
        RG32,
        RGB48,
        RGBA64,
        ASTC_RGB_4x4,
        ASTC_RGB_5x5,
        ASTC_RGB_6x6,
        ASTC_RGB_8x8,
        ASTC_RGB_10x10,
        ASTC_RGB_12x12,
        ASTC_RGBA_4x4,
        ASTC_RGBA_5x5,
        ASTC_RGBA_6x6,
        ASTC_RGBA_8x8,
        ASTC_RGBA_10x10,
        ASTC_RGBA_12x12,
        PVRTC_2BPP_RGB,
        PVRTC_2BPP_RGBA,
        PVRTC_4BPP_RGB,
        PVRTC_4BPP_RGBA,
    }

    export class Texture2D extends Texture {
        static whiteTexture: Texture2D
        static blackTexture: Texture2D
        static redTexture: Texture2D
        static grayTexture: Texture2D
        static linearGrayTexture: Texture2D
        static normalTexture: Texture2D
        static CreateExternalTexture(width: number, height: number, format: TextureFormat, mipChain: boolean, linear: boolean, nativeTex: any): Texture2D
        static GenerateAtlas(sizes: Vector2[], padding: number, atlasSize: number, results: List<Rect>): boolean
        format: TextureFormat
        isReadable: boolean
        vtOnly: boolean
        streamingMipmaps: boolean
        streamingMipmapsPriority: number
        requestedMipmapLevel: number
        minimumMipmapLevel: number
        calculatedMipmapLevel: number
        desiredMipmapLevel: number
        loadingMipmapLevel: number
        loadedMipmapLevel: number
        alphaIsTransparency: boolean
        constructor(width: number, height: number, format: DefaultFormat, flags: TextureCreationFlags)
        constructor(width: number, height: number, format: DefaultFormat, mipCount: number, flags: TextureCreationFlags)
        constructor(width: number, height: number, format: GraphicsFormat, flags: TextureCreationFlags)
        constructor(width: number, height: number, format: GraphicsFormat, mipCount: number, flags: TextureCreationFlags)
        constructor(width: number, height: number, textureFormat: TextureFormat, mipCount: number, linear: boolean)
        constructor(width: number, height: number, textureFormat: TextureFormat, mipCount: number, linear: boolean, createUninitialized: boolean)
        constructor(width: number, height: number, textureFormat: TextureFormat, mipChain: boolean, linear: boolean)
        constructor(width: number, height: number, textureFormat: TextureFormat, mipChain: boolean, linear: boolean, createUninitialized: boolean)
        constructor(width: number, height: number, textureFormat: TextureFormat, mipChain: boolean)
        constructor(width: number, height: number)
        Compress(highQuality: boolean): void
        ClearRequestedMipmapLevel(): void
        IsRequestedMipmapLevelLoaded(): boolean
        ClearMinimumMipmapLevel(): void
        UpdateExternalTexture(nativeTex: IntPtr): void
        GetRawTextureData(): Byte[]
        GetPixels(x: number, y: number, blockWidth: number, blockHeight: number, miplevel: number): Color[]
        GetPixels(x: number, y: number, blockWidth: number, blockHeight: number): Color[]
        GetPixels32(miplevel: number): Color32[]
        GetPixels32(): Color32[]
        PackTextures(textures: Texture2D[], padding: number, maximumAtlasSize: number, makeNoLongerReadable: boolean): Rect[]
        PackTextures(textures: Texture2D[], padding: number, maximumAtlasSize: number): Rect[]
        PackTextures(textures: Texture2D[], padding: number): Rect[]
        SetPixel(x: number, y: number, color: Color): void
        SetPixel(x: number, y: number, color: Color, mipLevel: number): void
        SetPixels(x: number, y: number, blockWidth: number, blockHeight: number, colors: Color[], miplevel: number): void
        SetPixels(x: number, y: number, blockWidth: number, blockHeight: number, colors: Color[]): void
        SetPixels(colors: Color[], miplevel: number): void
        SetPixels(colors: Color[]): void
        GetPixel(x: number, y: number): Color
        GetPixel(x: number, y: number, mipLevel: number): Color
        GetPixelBilinear(u: number, v: number): Color
        GetPixelBilinear(u: number, v: number, mipLevel: number): Color
        LoadRawTextureData(data: IntPtr, size: number): void
        LoadRawTextureData(data: Byte[]): void
        Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void
        Apply(updateMipmaps: boolean): void
        Apply(): void
        Reinitialize(width: number, height: number): boolean
        Reinitialize(width: number, height: number, format: TextureFormat, hasMipMap: boolean): boolean
        Reinitialize(width: number, height: number, format: GraphicsFormat, hasMipMap: boolean): boolean
        Resize(width: number, height: number): boolean
        Resize(width: number, height: number, format: TextureFormat, hasMipMap: boolean): boolean
        Resize(width: number, height: number, format: GraphicsFormat, hasMipMap: boolean): boolean
        ReadPixels(source: Rect, destX: number, destY: number, recalculateMipMaps: boolean): void
        ReadPixels(source: Rect, destX: number, destY: number): void
        SetPixels32(colors: Color32[], miplevel: number): void
        SetPixels32(colors: Color32[]): void
        SetPixels32(x: number, y: number, blockWidth: number, blockHeight: number, colors: Color32[], miplevel: number): void
        SetPixels32(x: number, y: number, blockWidth: number, blockHeight: number, colors: Color32[]): void
        GetPixels(miplevel: number): Color[]
        GetPixels(): Color[]
    }
}