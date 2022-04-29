

declare module "UnityEngine/Rendering" {
    import { IEquatable } from "System"
    import { ComputeShader, Shader } from "UnityEngine"

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
}