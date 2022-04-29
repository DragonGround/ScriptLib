

declare module "UnityEngine/UIElements" {
    import { Color, Font, RenderTexture, Sprite, Texture2D } from "UnityEngine"

    export class Background {
        static FromTexture2D(t: Texture2D): Background
        static FromRenderTexture(rt: RenderTexture): Background
        static FromSprite(s: Sprite): Background
        static FromVectorImage(vi: VectorImage): Background

        texture: Texture2D
        sprite: Sprite
        renderTexture: RenderTexture
        vectorImage: VectorImage
    }

    export class StyleBackground implements IStyleValue<Background> {
        value: Background
        keyword: StyleKeyword

        constructor(v: Background)
        constructor(k: StyleKeyword)
    }
}