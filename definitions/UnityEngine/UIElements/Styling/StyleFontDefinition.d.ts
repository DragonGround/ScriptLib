

declare module "UnityEngine/UIElements" {
    import { Color, Font, Texture2D } from "UnityEngine"
    import { FontAsset } from "UnityEngine/TextCore/Text"

    export class FontDefinition {
        static FromFont(f: Font): FontDefinition
        static FromSDFFont(f: FontAsset): FontDefinition

        font: Font
        
        constructor()
    }

    export class StyleFontDefinition implements IStyleValue<FontDefinition> {
        value: FontDefinition
        keyword: StyleKeyword

        constructor(v: FontDefinition)
        constructor(k: StyleKeyword)
    }
}