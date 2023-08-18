

declare module "UnityEngine/TextCore/Text" {
    import { FaceInfo } from "UnityEngine/TextCore"
    import { GlyphRenderMode } from "UnityEngine/TextCore/LowLevel"
    import { List } from "System/Collections/Generic"
    import { Texture2D } from "UnityEngine"

    export class FontFeatureTable {
        SortGlyphPairAdjustmentRecords(): void
        SortMarkToBaseAdjustmentRecords(): void
        SortMarkToMarkAdjustmentRecords(): void
    }

    export enum AtlasPopulationMode {
        Static,
        Dynamic,
        DynamicOS,
    }

    export class FontAssetCreationEditorSettings {
        sourceFontFileGUID: string
        faceIndex: number
        pointSizeSamplingMode: number
        pointSize: number
        padding: number
        paddingMode: number
        packingMode: number
        atlasWidth: number
        atlasHeight: number
        characterSetSelectionMode: number
        characterSequence: string
        referencedFontAssetGUID: string
        referencedTextAssetGUID: string
        fontStyle: number
        fontStyleModifier: number
        renderMode: number
        includeFontFeatures: boolean
    }

    export class FontWeightPair {
        regularTypeface: FontAsset
        italicTypeface: FontAsset
    }

    export class FontAsset extends TextAsset {
        static CreateFontAsset(familyName: string, styleName: string, pointSize: number): FontAsset
        static CreateFontAsset(fontFilePath: string, faceIndex: number, samplingPointSize: number, atlasPadding: number, renderMode: GlyphRenderMode, atlasWidth: number, atlasHeight: number): FontAsset
        static CreateFontAsset(font: Font): FontAsset
        static CreateFontAsset(font: Font, samplingPointSize: number, atlasPadding: number, renderMode: GlyphRenderMode, atlasWidth: number, atlasHeight: number, atlasPopulationMode: AtlasPopulationMode, enableMultiAtlasSupport: boolean): FontAsset
        static GetCharacters(fontAsset: FontAsset): string
        static GetCharactersArray(fontAsset: FontAsset): number[]
        sourceFontFile: Font
        atlasPopulationMode: AtlasPopulationMode
        faceInfo: FaceInfo
        glyphTable: List<Glyph>
        glyphLookupTable: Dictionary<number, Glyph>
        characterTable: List<Character>
        characterLookupTable: Dictionary<number, Character>
        atlasTexture: Texture2D
        atlasTextures: Texture2D[]
        atlasTextureCount: number
        isMultiAtlasTexturesEnabled: boolean
        atlasWidth: number
        atlasHeight: number
        atlasPadding: number
        atlasRenderMode: GlyphRenderMode
        fontFeatureTable: FontFeatureTable
        fallbackFontAssetTable: List<FontAsset>
        fontAssetCreationEditorSettings: FontAssetCreationEditorSettings
        fontWeightTable: FontWeightPair[]
        regularStyleWeight: number
        regularStyleSpacing: number
        boldStyleWeight: number
        boldStyleSpacing: number
        italicStyleSlant: Byte
        tabMultiple: Byte
        constructor()
        ReadFontAssetDefinition(): void
        HasCharacter(character: number): boolean
        HasCharacter(character: Char, searchFallbacks: boolean, tryAddCharacter: boolean): boolean
        HasCharacter(character: number, searchFallbacks: boolean, tryAddCharacter: boolean): boolean
        HasCharacters(text: string, missingCharacters: List): boolean
        HasCharacters(text: string, missingCharacters: number[], searchFallbacks: boolean, tryAddCharacter: boolean): boolean
        HasCharacters(text: string): boolean
        TryAddCharacters(unicodes: number[], includeFontFeatures: boolean): boolean
        TryAddCharacters(unicodes: number[], missingUnicodes: number[], includeFontFeatures: boolean): boolean
        TryAddCharacters(characters: string, includeFontFeatures: boolean): boolean
        TryAddCharacters(characters: string, missingCharacters: string, includeFontFeatures: boolean): boolean
        ClearFontAssetData(setAtlasSizeToZero: boolean): void
    }
}