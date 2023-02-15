

declare module "UnityEngine/UIElements" {
    import { Color, Texture2D, Vector2, Vector3 } from "UnityEngine"

    export class Scale {
        static None(): Scale
        
        value: Vector3

        constructor(scale: Vector2)
        constructor(scale: Vector3)
    }

    export class StyleScale implements IStyleValue<Scale> {
        value: Scale
        keyword: StyleKeyword

        constructor(v: Scale)
        constructor(k: StyleKeyword)
    }
}