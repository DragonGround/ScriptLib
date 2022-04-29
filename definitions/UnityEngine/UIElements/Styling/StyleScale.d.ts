

declare module "UnityEngine/UIElements" {
    import { Color, Texture2D } from "UnityEngine"
    import { float2, float3 } from "Unity/Mathematics"

    export class Scale {
        static None(): Scale
        
        value: float3

        constructor(scale: float2)
        constructor(scale: float3)
    }

    export class StyleScale implements IStyleValue<Scale> {
        value: Scale
        keyword: StyleKeyword

        constructor(v: Scale)
        constructor(k: StyleKeyword)
    }
}