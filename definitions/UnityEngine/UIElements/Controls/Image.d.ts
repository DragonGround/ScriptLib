

declare module "UnityEngine/UIElements" {
    import { Texture, Sprite, Rect, Color } from "UnityEngine"

    export class Image extends VisualElement {
        static ussClassName: string
        image: Texture
        sprite: Sprite
        vectorImage: VectorImage
        sourceRect: Rect
        uv: Rect
        scaleMode: ScaleMode
        tintColor: Color
        constructor()
    }
}