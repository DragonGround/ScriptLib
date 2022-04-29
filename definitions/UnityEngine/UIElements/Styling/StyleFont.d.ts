

declare module "UnityEngine/UIElements" {
    import { Color, Font, Texture2D } from "UnityEngine"

    export class StyleFont implements IStyleValue<Font> {
        value: Font
        keyword: StyleKeyword

        constructor(v: Font)
        constructor(k: StyleKeyword)
    }
}