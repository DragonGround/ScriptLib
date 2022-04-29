

declare module "OneJS/Utils" {
    import { Font, Texture2D } from "UnityEngine"

    export class FontLoader {
        static Load(path: string): Font
    }
}