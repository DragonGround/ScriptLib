

declare module "UnityEngine" {
    import { NativeArray } from "Unity/Collections"

    interface Texture2D extends Texture {
        GetRawDataColor32(): NativeArray<Color32>
    }
}