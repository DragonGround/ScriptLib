

declare module "UnityEngine" {
    import { Int32, Single } from "System"
    import { List } from "System/Collections/Generic"
    import { float2 } from "Unity/Mathematics"
    import { LocalKeyword } from "UnityEngine/Rendering"

    export enum MaterialGlobalIlluminationFlags {
        None,
        RealtimeEmissive,
        BakedEmissive,
        EmissiveIsBlack,
        AnyEmissive,
    }

    export class Material extends Object {
        static Create(scriptContents: string): Material
        shader: Shader
        color: Color
        mainTexture: Texture
        mainTextureOffset: Vector2
        mainTextureScale: Vector2
        renderQueue: number
        enabledKeywords: LocalKeyword[]
        globalIlluminationFlags: MaterialGlobalIlluminationFlags
        doubleSidedGI: boolean
        enableInstancing: boolean
        passCount: number
        shaderKeywords: String[]
        parent: Material
        isVariant: boolean
        constructor(shader: Shader)
        constructor(source: Material)
        constructor(contents: string)
        HasProperty(nameID: number): boolean
        HasProperty(name: string): boolean
        HasFloat(name: string): boolean
        HasFloat(nameID: number): boolean
        HasInt(name: string): boolean
        HasInt(nameID: number): boolean
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
        EnableKeyword(keyword: string): void
        DisableKeyword(keyword: string): void
        IsKeywordEnabled(keyword: string): boolean
        EnableKeyword(keyword: LocalKeyword): void
        DisableKeyword(keyword: LocalKeyword): void
        SetKeyword(keyword: LocalKeyword, value: boolean): void
        IsKeywordEnabled(keyword: LocalKeyword): boolean
        SetShaderPassEnabled(passName: string, enabled: boolean): void
        GetShaderPassEnabled(passName: string): boolean
        GetPassName(pass: number): string
        FindPass(passName: string): number
        SetOverrideTag(tag: string, val: string): void
        GetTag(tag: string, searchFallbacks: boolean, defaultValue: string): string
        GetTag(tag: string, searchFallbacks: boolean): string
        Lerp(start: Material, end: Material, t: number): void
        SetPass(pass: number): boolean
        CopyPropertiesFromMaterial(mat: Material): void
        ComputeCRC(): number
        GetTexturePropertyNames(): string[]
        GetTexturePropertyNameIDs(): number[]
        GetTexturePropertyNames(outNames: List<string>): void
        GetTexturePropertyNameIDs(outNames: List<number>): void
        IsChildOf(ancestor: Material): boolean
        RevertAllPropertyOverrides(): void
        IsPropertyOverriden(nameID: number): boolean
        IsPropertyLocked(nameID: number): boolean
        IsPropertyLockedByAncestor(nameID: number): boolean
        IsPropertyOverriden(name: string): boolean
        IsPropertyLocked(name: string): boolean
        IsPropertyLockedByAncestor(name: string): boolean
        SetPropertyLock(nameID: number, value: boolean): void
        ApplyPropertyOverride(destination: Material, nameID: number, recordUndo: boolean): void
        RevertPropertyOverride(nameID: number): void
        SetPropertyLock(name: string, value: boolean): void
        ApplyPropertyOverride(destination: Material, name: string, recordUndo: boolean): void
        RevertPropertyOverride(name: string): void
        SetInt(name: string, value: number): void
        SetInt(nameID: number, value: number): void
        SetFloat(name: string, value: number): void
        SetFloat(nameID: number, value: number): void
        SetInteger(name: string, value: number): void
        SetInteger(nameID: number, value: number): void
        SetColor(name: string, value: Color): void
        SetColor(nameID: number, value: Color): void
        SetVector(name: string, value: Vector4): void
        SetVector(nameID: number, value: Vector4): void
        SetMatrix(name: string, value: Matrix4x4): void
        SetMatrix(nameID: number, value: Matrix4x4): void
        SetTexture(name: string, value: Texture): void
        SetTexture(nameID: number, value: Texture): void
        SetTexture(name: string, value: RenderTexture, element: RenderTextureSubElement): void
        SetTexture(nameID: number, value: RenderTexture, element: RenderTextureSubElement): void
        SetBuffer(name: string, value: ComputeBuffer): void
        SetBuffer(nameID: number, value: ComputeBuffer): void
        SetBuffer(name: string, value: GraphicsBuffer): void
        SetBuffer(nameID: number, value: GraphicsBuffer): void
        SetConstantBuffer(name: string, value: ComputeBuffer, offset: number, size: number): void
        SetConstantBuffer(nameID: number, value: ComputeBuffer, offset: number, size: number): void
        SetConstantBuffer(name: string, value: GraphicsBuffer, offset: number, size: number): void
        SetConstantBuffer(nameID: number, value: GraphicsBuffer, offset: number, size: number): void
        SetFloatArray(name: string, values: List<number>): void
        SetFloatArray(nameID: number, values: List<number>): void
        SetFloatArray(name: string, values: Single[]): void
        SetFloatArray(nameID: number, values: Single[]): void
        SetColorArray(name: string, values: List<Color>): void
        SetColorArray(nameID: number, values: List<Color>): void
        SetColorArray(name: string, values: Color[]): void
        SetColorArray(nameID: number, values: Color[]): void
        SetVectorArray(name: string, values: List<Vector4>): void
        SetVectorArray(nameID: number, values: List<Vector4>): void
        SetVectorArray(name: string, values: Vector4[]): void
        SetVectorArray(nameID: number, values: Vector4[]): void
        SetMatrixArray(name: string, values: List<Matrix4x4>): void
        SetMatrixArray(nameID: number, values: List<Matrix4x4>): void
        SetMatrixArray(name: string, values: Matrix4x4[]): void
        SetMatrixArray(nameID: number, values: Matrix4x4[]): void
        GetInt(name: string): number
        GetInt(nameID: number): number
        GetFloat(name: string): number
        GetFloat(nameID: number): number
        GetInteger(name: string): number
        GetInteger(nameID: number): number
        GetColor(name: string): Color
        GetColor(nameID: number): Color
        GetVector(name: string): Vector4
        GetVector(nameID: number): Vector4
        GetMatrix(name: string): Matrix4x4
        GetMatrix(nameID: number): Matrix4x4
        GetTexture(name: string): Texture
        GetTexture(nameID: number): Texture
        GetFloatArray(name: string): Single[]
        GetFloatArray(nameID: number): Single[]
        GetColorArray(name: string): Color[]
        GetColorArray(nameID: number): Color[]
        GetVectorArray(name: string): Vector4[]
        GetVectorArray(nameID: number): Vector4[]
        GetMatrixArray(name: string): Matrix4x4[]
        GetMatrixArray(nameID: number): Matrix4x4[]
        GetFloatArray(name: string, values: List<number>): void
        GetFloatArray(nameID: number, values: List<number>): void
        GetColorArray(name: string, values: List<Color>): void
        GetColorArray(nameID: number, values: List<Color>): void
        GetVectorArray(name: string, values: List<Vector4>): void
        GetVectorArray(nameID: number, values: List<Vector4>): void
        GetMatrixArray(name: string, values: List<Matrix4x4>): void
        GetMatrixArray(nameID: number, values: List<Matrix4x4>): void
        SetTextureOffset(name: string, value: Vector2): void
        SetTextureOffset(nameID: number, value: Vector2): void
        SetTextureScale(name: string, value: Vector2): void
        SetTextureScale(nameID: number, value: Vector2): void
        GetTextureOffset(name: string): Vector2
        GetTextureOffset(nameID: number): Vector2
        GetTextureScale(name: string): Vector2
        GetTextureScale(nameID: number): Vector2
    }
}