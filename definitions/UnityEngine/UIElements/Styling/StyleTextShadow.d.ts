

declare module "UnityEngine/UIElements" {
    import { Color, Texture2D } from "UnityEngine"
    import { float2, float3 } from "Unity/Mathematics"

    export class TextShadow {        
        offset: float2
        blurRadius: number
        color: Color
    }

    export class StyleTextShadow implements IStyleValue<TextShadow> {
        value: TextShadow
        keyword: StyleKeyword

        constructor(v: TextShadow)
        constructor(k: StyleKeyword)
    }
}