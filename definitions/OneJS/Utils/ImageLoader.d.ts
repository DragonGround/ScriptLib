

declare module "OneJS/Utils" {
    import { Texture2D } from "UnityEngine"

    export class ImageLoader {
        static Load(path: string): Texture2D
    }
}