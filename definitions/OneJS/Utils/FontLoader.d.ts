


declare module "OneJS/Utils" {
    import { Font, Texture2D } from "UnityEngine"
    import { FontDefinition } from "UnityEngine/UIElements"

    export class FontLoader {
        static Load(path: string): Font
        static LoadDefinition(path: string): FontDefinition
    }
}